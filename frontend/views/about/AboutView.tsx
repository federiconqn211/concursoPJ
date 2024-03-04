export default function AboutView() {
  return (
      <div className="p-m">


          <>
              <h2>Ejercicio Modelo - Desarrollado por Federico Troncoso</h2>
              <h6>Dependencias Instaladas</h6>
              <ul>
                  <li>react-router-dom</li>
                  <li>Axios</li>
              </ul>

              <h6>Consideraciones</h6>
              <ul>
                  <li>Existe un usuario administrador(username: admin, password:admin)</li>
                  <li>Los usuarios administradores pueden cargar nuevos usuarios administradores(no hay datos harcodeados)</li>
              </ul>
          </>

      </div>
  );
}
