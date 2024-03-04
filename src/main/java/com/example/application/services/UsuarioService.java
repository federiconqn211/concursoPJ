package com.example.application.services;

import com.example.application.data.*;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.crud.CrudRepositoryService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.constraints.NotNull;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;


import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@AnonymousAllowed
@BrowserCallable
public class UsuarioService extends CrudRepositoryService<Usuario, Long, UsuarioRepository> {

    private final UsuarioRepository usuarioRepository;
    private final OrganismoRepository organismoRepository;
    private final  AppRepository appRepository;



    public UsuarioService(UsuarioRepository usuarioRepository,OrganismoRepository organismoRepository,AppRepository appRepository) {
        this.usuarioRepository = usuarioRepository;
        this.organismoRepository = organismoRepository;
        this.appRepository = appRepository;

    }


    public record UsuarioRecord(
            @NotNull
            Long id,
            String nombre,
            String apellido,
            Long dni,
            String domicilio,
            String email,
            String password,
            String telefono,
            String tipo,
            String username,
            OrganismoService.OrganismoRecord organismo,
            Set<App> apps,
            String rol

           ) {
    }

    private UsuarioRecord toUsuarioRecord(Usuario c) {
        return new UsuarioRecord(
                c.getId(),
                c.getNombre(),
               c.getApellido(),
               c.getDni(),
               c.getDomicilio(),
               c.getEmail(),
               c.getPassword(),
               c.getTelefono(),
               c.getTipo(),
               c.getUsername(),

               new OrganismoService.OrganismoRecord(
                        c.getOrganismo().getId(),
                        c.getOrganismo().getNombre(),
                        c.getOrganismo().getDomicilio(),
                        c.getOrganismo().getTelefono(),
                        c.getOrganismo().getEmail()
                ),
c.getApps(),
                c.getRol()

        );
    }

    public List<UsuarioRecord> findAllUsuarios() {
        List<Usuario> all = usuarioRepository.findAllWithOrganismo();
        return all.stream()
                .map(this::toUsuarioRecord).toList();
    }
    public UsuarioRecord save(UsuarioRecord usuario) {
        var dbUsuario = usuarioRepository.findById(usuario.id).orElseThrow();
        var organismo = organismoRepository.findById(usuario.organismo.id()).orElseThrow();
        //var rol=rolRepository.findById(usuario.rol.id()).orElseThrow();

        dbUsuario.setNombre(usuario.nombre);
        dbUsuario.setApps(usuario.apps);
        dbUsuario.setOrganismo(organismo);
        dbUsuario.setApellido(usuario.apellido);
        dbUsuario.setDomicilio(usuario.domicilio);
        dbUsuario.setTelefono(usuario.telefono);
        dbUsuario.setEmail(usuario.email);
        dbUsuario.setRol(usuario.rol);
        dbUsuario.setTipo(usuario.tipo);
        dbUsuario.setPassword(usuario.password);
        dbUsuario.setDni(usuario.dni);
        //dbUsuario.setRol(rol);

        var saved = usuarioRepository.save(dbUsuario);

        return toUsuarioRecord(saved);
    }

    public void asignarAppAUsuario(Long usuarioId, Long ApplId) {
        Usuario usuario = usuarioRepository.findById(usuarioId).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        App app = appRepository.findById(ApplId).orElseThrow(() -> new RuntimeException("App no encontrada"));

        usuario.getApps().add(app);
        usuarioRepository.save(usuario);
    }

    public void quitarAppAUsuario(Long usuarioId, Long ApplId) {
        Usuario usuario = usuarioRepository.findById(usuarioId).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        App app = appRepository.findById(ApplId).orElseThrow(() -> new RuntimeException("App no encontrada"));

        usuario.getApps().remove(app);
        usuarioRepository.save(usuario);
    }


    public List<App> getUsuarioApps(Long usuarioId) {
        Usuario usuario = usuarioRepository.findById(usuarioId).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        return (List<App>) usuario.getApps();
    }

    public Usuario obtenerUsuarioYApps(Long usuarioId) {
        Optional<Usuario> optionalUsuario = usuarioRepository.findById(usuarioId);
        if (optionalUsuario.isPresent()) {
            return optionalUsuario.get();
        } else {
            return null;
        }
    }

    public Set<App> getUserApplications(Long userId) {
        Optional<Usuario> userOptional = usuarioRepository.findById(userId);
        if (userOptional.isPresent()) {
            Usuario user = userOptional.get();
            return user.getApps();
        } else {
            return null;
        }
    }

    public Usuario autenticar(String username, String password) {
        // Lógica para verificar las credenciales en la base de datos
        Optional<Usuario> userOptional =usuarioRepository.findByUsername(username);
        if (userOptional.isPresent()) {
            Usuario user = userOptional.get();
            if( user.getPassword().equals(password))
                return user;
            else
                return null;
        }
        return null;
    }

    public Set<App>getUserAplicacionesPortal(String username){
        Optional<Usuario> userOptional = usuarioRepository.findByUsername(username);
        if (userOptional.isPresent()) {
            Usuario user = userOptional.get();
            Set<App> appsPortal = user.getApps();
            return appsPortal;
        }else {
            return null;
        }
    }
    public Set<App> getUserNoApplications(Long userId) {
        Optional<Usuario> userOptional = usuarioRepository.findById(userId);
        if (userOptional.isPresent()) {
            Usuario user = userOptional.get();
            Set<App> aplicacionesQueTiene = user.getApps();
            List<App> todasLasAplicaciones = appRepository.findAll();

            // Filtrar las aplicaciones que el usuario no tiene vinculadas
            Set<App> unlinkedApplications = todasLasAplicaciones.stream()
                    .filter(application -> !aplicacionesQueTiene.contains(application))
                    .collect(Collectors.toSet());
            return unlinkedApplications;
        } else {
            return null;
        }
    }


    public List<Usuario> findAllUsuariossss() {
        List<Usuario> all = usuarioRepository.findAllWithOrganismo();
        return all.stream().toList();
    }

    public static void generatePDF(List<Usuario> users, HttpServletResponse response) throws IOException {
        PDDocument document = new PDDocument();
        PDPage page = new PDPage();
        document.addPage(page);

        PDPageContentStream contentStream = new PDPageContentStream(document, page);
        /**/

        /**/
        contentStream.beginText();
        contentStream.setFont(PDType1Font.HELVETICA_BOLD, 22);

        contentStream.newLineAtOffset(100, 700);

        contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);
        //contentStream.newLineAtOffset(100, 700);

        contentStream.showText("USUARIOS DEL SISTEMA Y PERMISOS A LAS APPS");
        contentStream.newLineAtOffset(0, -30);
        for (Usuario user : users) {
            contentStream.showText("Usuario: " + user.getApellido() + ' ' +user.getNombre());
            //contentStream.newLine();
            contentStream.newLineAtOffset(15, -20);

           // contentStream.showText("Aplicaciones Autorizadas:");
            contentStream.newLineAtOffset(0, -15);
            for (App app : user.getApps()) {
                contentStream.showText("- " + app.getNombre());
                //contentStream.newLine();
                contentStream.newLineAtOffset(0, -15);

            }
            contentStream.newLineAtOffset(-15, -35);
        }

        contentStream.endText();
        contentStream.close();

        response.setContentType("application/pdf");
        response.setHeader("Content-Disposition", "attachment; filename=users.pdf");

        document.save(response.getOutputStream());
        document.close();
    }


    public List<Usuario> getAllUsers() {
        return usuarioRepository.findAll();
    }

    public void borrarPorId(Long id) {
        usuarioRepository.deleteById(id);
    }

}
