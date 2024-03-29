package com.example.application.data;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;

import java.util.LinkedList;
import java.util.List;

@Entity
@Table(name="organismos")
public class Organismo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String domicilio;
    private String telefono;
    private String email;
    @OneToMany(mappedBy = "organismo")
    @Nullable
    private List<Usuario> usuarios = new LinkedList<>();

    public Organismo() {
    }

    public Organismo(Long id, String nombre, String domicilio, String telefono, String email) {
        this.id = id;
        this.nombre = nombre;
        this.domicilio = domicilio;
        this.telefono = telefono;
        this.email = email;
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
}
