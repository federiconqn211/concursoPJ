
INSERT INTO "ORGANISMOS"(DOMICILIO,EMAIL,NOMBRE,TELEFONO)
VALUES('Leloir 900 - 1er Piso','legales@jusneuquen.gov.ar','Direcc. de Legales','299-4005263'),
      ('Leloir 900 - 3er Piso','compras@jusneuquen.gov.ar','Direcc. de Compras y Contrat.','299-4005264'),
      ('Diag. 25 de Mayo 270 - 2do Piso','sistemas@jusneuquen.gov.ar','Direcc. de Informatica','299-4005266'),
      ('Irigoyen 300','secretaria_juri@jusneuquen.gov.ar','Secretaria Juridica','299-4005270'),
      ('Leloir 686','judicial.penal@jusneuquen.gov.ar','Oficina Judicial Penal','299-4005274'),
      ('Yrigoyen 175 ','circunscripcion.judicial@jusneuquen.gov.ar','Circunscripcion Judicial','299-4005274');

INSERT INTO "APPS"(NOMBRE) VALUES
                                       ('ADM RRHH'),
                                       ('Legajo Digital'),
                                       ('Mis Certificaciones'),
                                       ('Ausentismo'),
                                       ('Reporte de Casos'),
                                       ('Mis Datos Laborales');


INSERT INTO "USUARIOS"(DNI,ORGANISMO_ID,NOMBRE,APELLIDO,DOMICILIO,EMAIL,PASSWORD,TELEFONO,TIPO,USERNAME,ROL) VALUES
(27473616,1,'Federico','Troncoso','Distrito 7 - M18L18','federico.troncoso@jusneuquen.gov.ar','F3d33616','2994534519','INTERNO','ftroncoso','ADMIN'),
(34960734,1,'Daniela','Riffo','Distrito 7 - M18L18','dniela.riffo@jusneuquen.gov.ar','123456','2995781542','EXTERNO','driffo','ADMIN'),
(11115555,1,'Ciro','Ramos','Distrito 7 - M18L18','ciro.ramos@jusneuquen.gov.ar','123456','2995781542','EXTERNO','cramos','ADMIN'),
(66662221,1,'Tomas','Cano','Distrito 7 - M18L18','tomas.cano@jusneuquen.gov.ar','123456','2995781542','INTERNO','tcano','ADMIN'),
(66662229,1,'Administrador',' ','Distrito 7 - M18L18','admin@jusneuquen.gov.ar','admin','2995781542','INTERNO','admin','ADMIN');

INSERT INTO USUARIOS_APPS(APP_ID,USUARIO_ID)
values(1,1),
      (2,1),
      (3,1),
      (4,1),
      (5,1),
      (6,1),
      (2,2),
      (3,2),
      (4,2),

      (1,5),
      (2,5),
      (3,5),
      (4,5),
      (5,5),
      (6,5);