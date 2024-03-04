package com.example.application.controller;

import com.example.application.data.App;
import com.example.application.data.Usuario;
import com.example.application.services.UsuarioService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @DeleteMapping("/usuarios/eliminar/{id}")
    public ResponseEntity<?> eliminarUsuario(@PathVariable Long id) {

            usuarioService.borrarPorId(id);
        return ResponseEntity.ok().build();

    }

    @PostMapping("/usuarios/{usuarioId}/apps/{appId}")
    public ResponseEntity<?> asignarAppAUsuario(@PathVariable Long usuarioId, @PathVariable Long appId) {
        usuarioService.asignarAppAUsuario(usuarioId, appId);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/usuarios/{usuarioId}/apps/{appId}/desvincular")
    public ResponseEntity<?> quitarAppAUsuario(@PathVariable Long usuarioId, @PathVariable Long appId) {
        usuarioService.quitarAppAUsuario(usuarioId, appId);
        return ResponseEntity.ok().build();
    }


    @GetMapping("/usuarios/{usuarioId}/apps")
    public List<App> obtenerAppsDeUsuario(@PathVariable Long usuarioId) {
        return usuarioService.getUsuarioApps(usuarioId);
    }

    @GetMapping("/usuarios/{userId}/aplicaciones")
    public Set<App> getUserApplications(@PathVariable Long userId) {
        return usuarioService.getUserApplications(userId);
    }

    @GetMapping("/usuarios/{userId}/noAplicaciones")
    public Set<App> getUserNoApplications(@PathVariable Long userId) {
        return usuarioService.getUserNoApplications(userId);
    }

    @GetMapping("/usuarios/{userName}/login/{userPass}/validar")
    public Usuario validarLogin(@PathVariable String userName,@PathVariable String userPass) {
        return usuarioService.autenticar(userName,userPass);
    }

    @GetMapping("/usuarios/{username}/aplicacionesPortal")
    public Set<App> getUserAplicacionesPortal(@PathVariable String username) {
        return usuarioService.getUserAplicacionesPortal(username);
    }

    @GetMapping("/usuarios/pdf")
    public void generateUsuariosPDF(HttpServletResponse response) throws IOException {
        List<Usuario> usuarios = usuarioService.findAllUsuariossss();
        usuarioService.generatePDF(usuarios, response);
    }

    @GetMapping("/usuarios/listadopdf")
    public List<Usuario> getUsers() {
        return usuarioService.getAllUsers();
    }





}
