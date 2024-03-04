package com.example.application.services;

import com.example.application.data.*;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.crud.CrudRepositoryService;
import jakarta.validation.constraints.NotNull;
import org.springframework.stereotype.Service;

import java.util.List;

@AnonymousAllowed
@BrowserCallable
@Service
public class OrganismoService extends CrudRepositoryService<Organismo, Long, OrganismoRepository> {
    private final OrganismoRepository organismoRepository;

    public OrganismoService(OrganismoRepository organismoRepository) {
        this.organismoRepository = organismoRepository;
    }

    public record OrganismoRecord(
            @NotNull
            Long id,
            String nombre,
            String domicilio,
            String telefono,
            String email
    ) {
    }

    private OrganismoRecord toOrganismoRecord(Organismo c) {
        return new OrganismoRecord(
                c.getId(),
                c.getNombre(),
                c.getDomicilio(),
                c.getTelefono(),
                c.getEmail()
        );
    }
    public List<OrganismoRecord> findAllOrganismos() {
        return organismoRepository.findAll().stream()
                .map(this::toOrganismoRecord).toList();
    }
}
