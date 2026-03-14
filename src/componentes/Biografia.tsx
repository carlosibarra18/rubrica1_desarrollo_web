import React from 'react';

const Biografia: React.FC = () => {
  return (
    <div className="container mt-5">
      {/* 1. Nombre de la persona*/}
      <header id="inicio" className="text-center mb-5 p-4 bg-light rounded shadow-sm">
        <h1 className="display-4 fw-bold">Carlos mario ibarra rebolledo</h1>
        <p className="lead">Estudiante de Ingeniería de sistemas</p>
      </header>

      {/* 2. Sección Biografía y Línea de tiempo*/}
      <section id="bio" className="mb-5">
        <h2 className="border-bottom pb-2">Biografía</h2>
        <div className="row mt-4">
          <div className="col-md-6">
            <p>Tengo 19 años y me encuentro en septimo semestre de la carrera de ingenieria de sistemas. Estoy estudiando ingenieria de sistemas porque me apasiona el mundo del desarrollo web y la ciberseguridad.</p>
          </div>
          <div className="col-md-6">
            <h4 className="h5">Línea de Tiempo</h4>
            <ul className="list-group">
              <li className="list-group-item"><strong>2023:</strong> Ingreso a la facultad de ingeniería.</li>
              <li className="list-group-item"><strong>2024:</strong> Primer proyecto en React.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Logros*/}
      <section id="logros" className="mb-5 bg-dark text-white p-4 rounded">
        <h2>Logros</h2>
        <ul>
          <li>Diploma de bachiller</li>
          <li>Certificación en ingles B2</li>
          <li>tecnico en asistencia administrativa SENA</li>
        </ul>
      </section>

      {/* 4. Galería */}
      <section id="galeria" className="container my-5">
        <h2 className="text-center mb-4">Galería</h2>
        <div className="row g-4">
          
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top img-portada" 
                alt="Descripción" 
              />
              <div className="card-body">
                <p className="card-text text-center">Foto 1</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top img-portada" 
                alt="Descripción" 
              />
              <div className="card-body">
                <p className="card-text text-center">Foto 2</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top img-portada" 
                alt="Descripción" 
              />
              <div className="card-body">
                <p className="card-text text-center">Foto 3</p>
              </div>
            </div>
          </div>

          {/* Repite la misma estructura para la Foto 2 y Foto 3 */}
          
        </div>
      </section>

      {/* 5. Contacto*/}
      <section id="contacto" className="mb-5 py-4">
        <h2>Contacto</h2>
        <p>correo electronico personal: carlosibarr150@gmail.com</p>
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="nombre@ejemplo.com" />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Biografia;