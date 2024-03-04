package com.example.application.data;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="usuarios")
public class Usuario {
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private String nombre;
    @NotNull
    private String apellido;
    @NotNull
    @Column(unique = true)
    private String username;
    @NotNull
    private String password;
    @NotNull
    private Long dni;
    @NotNull
    private String domicilio;
    @NotNull
    private String telefono;
    @Email
    @NotNull
    private String email;
    @Pattern(regexp = "INTERNO|EXTERNO")
    @NotNull
    private String tipo;


    @ManyToOne
    private Organismo organismo;

    @ManyToMany
    @JoinTable(name = "usuarios_apps",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "app_id"))
    private Set<App> apps = new HashSet<>();

    @Pattern(regexp = "ADMIN|EMPL")
    @NotNull
    private String rol;

    public Usuario() {
    }

    public Usuario(Long id, String nombre, Organismo organismo) {
        this.id = id;
        this.nombre = nombre;
        this.organismo = organismo;
    }

    public Usuario(Long id, String nombre, Organismo organismo, Set<App> apps) {
        this.id = id;
        this.nombre = nombre;
        this.organismo = organismo;
        this.apps = apps;
    }

    public Usuario(String nombre, Organismo organismo, Set<App> apps) {
        this.nombre = nombre;
        this.organismo = organismo;
        this.apps = apps;
    }

    public Usuario(Long id, String nombre, String apellido, String username, String password, Long dni, String domicilio, String telefono, String email, String tipo, Organismo organismo, Set<App> apps) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = username;
        this.password = password;
        this.dni = dni;
        this.domicilio = domicilio;
        this.telefono = telefono;
        this.email = email;
        this.tipo = tipo;
        this.organismo = organismo;
        this.apps = apps;
    }

    public Usuario(Long id, String nombre, String apellido, String username, String password, Long dni, String domicilio, String telefono, String email, String tipo, Organismo organismo, Set<App> apps, String rol) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = username;
        this.password = password;
        this.dni = dni;
        this.domicilio = domicilio;
        this.telefono = telefono;
        this.email = email;
        this.tipo = tipo;
        this.organismo = organismo;
        this.apps = apps;
        this.rol = rol;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getDni() {
        return dni;
    }

    public void setDni(Long dni) {
        this.dni = dni;
    }

    public String getDomicilio() {
        return domicilio;
    }

    public void setDomicilio(String domicilio) {
        this.domicilio = domicilio;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Organismo getOrganismo() {
        return organismo;
    }

    public void setOrganismo(Organismo organismo) {
        this.organismo = organismo;
    }

    public Set<App> getApps() {
        return apps;
    }

    public void setApps(Set<App> apps) {
        this.apps = apps;
    }


    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }
}
