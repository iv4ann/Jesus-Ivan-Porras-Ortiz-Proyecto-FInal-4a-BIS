
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import './Dashboard.css';


const Dashboard = () => {
  const [vista, setVista] = useState('menu');
  const [infoMetodologia, setInfoMetodologia] = useState("Selecciona una metodología para ver su descripción.");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInfo = (tipo) => {
    const descripciones = {
      cascada: "<h3>🌊 Metodología Cascada</h3><p>Proceso secuencial donde cada fase debe completarse antes de seguir.</p>",
      modelov: "<h3>🔺 Modelo V</h3><p>Relaciona cada fase de desarrollo con una fase de pruebas.</p>",
      agil: "<h3>⚡ Metodologías Ágiles</h3><p>Ciclos cortos de desarrollo para adaptarse a cambios.</p>",
      scrum: "<h3>🏉 Scrum</h3><p>Desarrollo en sprints de 2 a 4 semanas.</p>",
      kanban: "<h3>📋 Kanban</h3><p>Tableros visuales para gestionar el flujo de trabajo.</p>",
      xp: "<h3>💻 Extreme Programming (XP)</h3><p>Programación en pareja y pruebas continuas.</p>",
      hibrida: "<h3>🧩 Metodologías Híbridas</h3><p>Combinan lo tradicional con lo ágil.</p>"
    };
    setInfoMetodologia(descripciones[tipo]);
  };


  return (
    <div className="dashboard-container">
      {/* Pantalla de bienvenida tras login de Google */}
      {isLoggedIn ? (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <img src="/WhatsApp Image 2026-04-27 at 7.34.04 PM.jpg" alt="avatar" style={{ width: '120px', marginBottom: '20px', borderRadius: '12px', objectFit: 'cover' }} />
          <h1 style={{ color: '#fff', fontSize: '3rem', marginBottom: '10px' }}>
            Bienvenido(a), Jesús Iván Porras Ortiz
          </h1>
          <h2 style={{ color: '#fff', fontWeight: 'bold', fontSize: '2.5rem', margin: '30px 0 30px 0' }}>
            EVALUACIÓN PARCIAL 3
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
            <a
              href="/WhatsApp Image 2026-04-27 at 7.34.04 PM.jpg"
              download
              style={{
                padding: '6px 18px',
                fontSize: '1rem',
                background: 'white',
                color: 'black',
                border: '1px solid #ccc',
                borderRadius: '4px',
                textDecoration: 'none',
                textAlign: 'center',
                marginBottom: '10px',
                display: 'inline-block'
              }}
            >
              DESCARGAR DOCUMENTO ERS DEL PROYECTO
            </a>
            <button style={{ padding: '6px 18px', fontSize: '1rem' }} onClick={() => window.open('https://iv4annp.atlassian.net/jira/software/projects/IVAN/boards/1', '_blank')}>TABLERO JIRA PROYECTO SIBA</button>
            <button style={{ padding: '6px 18px', fontSize: '1rem' }} onClick={() => setIsLoggedIn(false)}>CERRRAR SESIÓN PARCIAL 3</button>
          </div>
        </div>
      ) : (
        <>
          {/* MENÚ PRINCIPAL */}
          {vista === 'menu' && (
            <div id="menu">
              <h1>Proyecto Desarrollo de Software</h1>
              {/* Aquí está tu nombre */}
              <p style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '20px' }}>
                Bienvenido, Jesús Iván Porras Ortiz
              </p>
              <div className="menu">
                <button className="btn1" onClick={() => setVista('p1')}>📄 Parcial 1</button>
                <button className="btn2" onClick={() => setVista('p2')}>🧠 Parcial 2</button>
                <button className="btn3" onClick={() => window.open('https://linkedin.com', '_blank')}>💼 LinkedIn</button>
                {/* Imagen y BOTÓN DE GOOGLE */}
                <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="/WhatsApp Image 2026-04-27 at 7.34.04 PM.jpg" alt="avatar" style={{ width: '120px', marginBottom: '15px', borderRadius: '12px', objectFit: 'cover' }} />
                  <GoogleLogin
                    onSuccess={credentialResponse => {
                      console.log("Login exitoso:", credentialResponse);
                      setIsLoggedIn(true);
                    }}
                    onError={() => {
                      console.log('Login Fallido');
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* PARCIAL 1 */}
      {vista === 'p1' && (
        <div id="p1" className="seccion">
          <h1>Documentación Parcial 1</h1>
          <div className="doc"><a href="#">📄 Comandos Básicos de React</a></div>
          <div className="doc"><a href="#">📄 ISO / Estándar IEEE</a></div>
          <div className="doc"><a href="#">📄 Requerimientos Funcionales y No Funcionales</a></div>
          <div className="doc"><a href="#">📄 Algoritmo SHA-256 en Python</a></div>
          <button className="volver" onClick={() => setVista('menu')}>⬅ Regresar</button>
        </div>
      )}

      {/* PARCIAL 2 */}
      {vista === 'p2' && (
        <div id="p2" className="seccion">
          <h1>Metodologías de Desarrollo</h1>
          <div className="container">
            <button className="m1" onClick={() => handleInfo('cascada')}>🌊 Cascada</button>
            <button className="m2" onClick={() => handleInfo('modelov')}>🔺 Modelo V</button>
            <button className="m3" onClick={() => handleInfo('agil')}>⚡ Ágiles</button>
            <button className="m4" onClick={() => handleInfo('scrum')}>🏉 Scrum</button>
            <button className="m5" onClick={() => handleInfo('kanban')}>📋 Kanban</button>
            <button className="m6" onClick={() => handleInfo('xp')}>💻 XP</button>
            <button className="m7" onClick={() => handleInfo('hibrida')}>🧩 Híbridas</button>
          </div>
          <div className="infoBox" dangerouslySetInnerHTML={{ __html: infoMetodologia }} />
          <button className="volver" onClick={() => setVista('menu')}>⬅ Regresar</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;