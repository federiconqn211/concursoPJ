package com.example.application.services;

import com.example.application.data.App;
import com.example.application.data.AppRepository;
import com.example.application.data.Company;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.crud.CrudRepositoryService;
import jakarta.validation.constraints.NotNull;
import org.springframework.stereotype.Service;

import java.util.List;

@AnonymousAllowed
@BrowserCallable
@Service
public class AppService extends CrudRepositoryService<App, Long, AppRepository> {
    private final AppRepository appRepository;

    public AppService(AppRepository appRepository) {
        this.appRepository = appRepository;
    }
    public record AppRecord(
            @NotNull
            Long id,
            String nombre
    ) {
    }



    private AppRecord toAppRecord(App c) {
        return new AppRecord(
                c.getId(),
                c.getNombre()
        );
    }

    public List<AppRecord> findAllApps() {
        return appRepository.findAll().stream()
                .map(this::toAppRecord).toList();
    }
    public AppRecord save(AppRecord app) {
        var dbApp = appRepository.findById(app.id).orElseThrow();


        dbApp.setNombre(app.nombre);


        var saved = appRepository.save(dbApp);

        return toAppRecord(saved);
    }
}
