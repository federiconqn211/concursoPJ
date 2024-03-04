package com.example.application.data;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="apps")
public class App {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String nombre;
    @ManyToMany(mappedBy = "apps")
    private Set<Usuario> usuarios = new HashSet<>();

    public App(String nombre) {

        this.nombre = nombre;
    }

    public App() {
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
