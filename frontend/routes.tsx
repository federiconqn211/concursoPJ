import ContactsView from 'Frontend/views/contacts/ContactsView.js';
import MainLayout from 'Frontend/views/MainLayout.js';
import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import AppsView from "Frontend/views/apps/AppsView";
import OrganismoView from "Frontend/views/organismos/OrganismoView";
import UsuarioView from "Frontend/views/usuarios/UsuarioView";
import UsuarioAddApp from "Frontend/views/usuarios/UsuarioAddApp";
import IniciarSesionView from "Frontend/views/login/IniciarSesionView";
import MisAppsView from "Frontend/views/misApps/MisAppsView";
import InicioView from "Frontend/views/inicio/InicioView";


const AboutView = lazy(async () => import('Frontend/views/about/AboutView.js'));

export const routes = [
  {
    element: <MainLayout />,
    handle: { title: 'Hilla CRM' },
    children: [

      { path: '/', element: <InicioView />, handle: { title: 'Inicio' } },
      { path: '/apps', element: <AppsView />, handle: { title: 'Aplicaciones' } },
      { path: '/organismos', element: <OrganismoView />, handle: { title: 'Organismos' } },
      { path: '/usuarios', element: <UsuarioView />, handle: { title: 'Usuarios' } },
      { path: '/misApps', element: <MisAppsView />, handle: { title: 'Mis Apps' } },
      { path: '/about', element: <AboutView />, handle: { title: 'About' } },



    ],
  },
] as RouteObject[];

export default createBrowserRouter(routes);
