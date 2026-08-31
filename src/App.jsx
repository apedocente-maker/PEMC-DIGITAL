import './App.css'
import { useState } from 'react'
import { db } from './firebase'
function App() {
  const [showNotification, setShowNotification] = useState(false)

  const handleComenzarPEMC = () => {
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 4000)
  }

  const handleConocerProceso = () => {
    const procesSection = document.getElementById('etapas')
    if (procesSection) {
      procesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app-container">
      {/* Notification */}
      {showNotification && (
        <div className="notification-banner">
          <div className="notification-content">
            <span className="notification-icon">ℹ️</span>
            <div className="notification-text">
              <strong>Próxima etapa:</strong> El módulo de Datos de la Escuela se abrirá en la siguiente actualización.
            </div>
            <button 
              className="notification-close"
              onClick={() => setShowNotification(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">📚</span>
            <h1 className="logo-text">PEMC DIGITAL</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Sección Principal */}
        <section className="welcome-section">
          <div className="welcome-container">
            <div className="welcome-card">
              {/* Encabezado Principal */}
              <div className="welcome-header">
                <h1 className="main-title">PEMC DIGITAL</h1>
                <h2 className="main-subtitle">Programa Escolar de Mejora Continua</h2>
              </div>

              {/* Descripción Detallada */}
              <div className="welcome-description">
                <p className="description-main">
                  Una herramienta digital para construir, implementar, dar seguimiento y evaluar la mejora continua de la escuela.
                </p>
                <p className="description-detail">
                  Guía paso a paso para que las escuelas integren su diagnóstico, problemáticas prioritarias, objetivos, metas, acciones, seguimiento y evaluación.
                </p>
              </div>

              {/* Sección de Etapas */}
              <section id="etapas" className="etapas-section">
                <h3 className="etapas-title">Las Etapas del PEMC</h3>
                <div className="etapas-flow">
                  <div className="etapa">
                    <div className="etapa-number">1</div>
                    <p className="etapa-nombre">Diagnóstico</p>
                  </div>
                  <div className="etapa-arrow">↓</div>
                  
                  <div className="etapa">
                    <div className="etapa-number">2</div>
                    <p className="etapa-nombre">Problemática</p>
                  </div>
                  <div className="etapa-arrow">↓</div>
                  
                  <div className="etapa">
                    <div className="etapa-number">3</div>
                    <p className="etapa-nombre">Priorización</p>
                  </div>
                  <div className="etapa-arrow">↓</div>
                  
                  <div className="etapa">
                    <div className="etapa-number">4</div>
                    <p className="etapa-nombre">Objetivos</p>
                  </div>
                  <div className="etapa-arrow">↓</div>
                  
                  <div className="etapa">
                    <div className="etapa-number">5</div>
                    <p className="etapa-nombre">Metas</p>
                  </div>
                  <div className="etapa-arrow">↓</div>
                  
                  <div className="etapa">
                    <div className="etapa-number">6</div>
                    <p className="etapa-nombre">Acciones</p>
                  </div>
                  <div className="etapa-arrow">↓</div>
                  
                  <div className="etapa">
                    <div className="etapa-number">7</div>
                    <p className="etapa-nombre">Seguimiento</p>
                  </div>
                  <div className="etapa-arrow">↓</div>
                  
                  <div className="etapa">
                    <div className="etapa-number">8</div>
                    <p className="etapa-nombre">Evaluación</p>
                  </div>
                  <div className="etapa-arrow">↓</div>
                  
                  <div className="etapa etapa-final">
                    <div className="etapa-number">✓</div>
                    <p className="etapa-nombre">Reporte Final</p>
                  </div>
                </div>
              </section>

              {/* Botones de Acción */}
              <div className="welcome-actions">
                <button 
                  className="btn-primary"
                  onClick={handleComenzarPEMC}
                >
                  COMENZAR PEMC
                </button>
                <button 
                  className="btn-secondary"
                  onClick={handleConocerProceso}
                >
                  CONOCER EL PROCESO
                </button>
              </div>

              {/* Tarjeta Informativa */}
              <div className="info-card">
                <div className="info-header">
                  <h3 className="info-title">PEMC DIGITAL</h3>
                </div>
                <p className="info-content">
                  Construye el proceso de mejora de tu escuela de manera organizada, congruente y basada en evidencias.
                </p>
                <ul className="info-features">
                  <li>✓ Diagnóstico integral y contextualizado</li>
                  <li>✓ Planificación estratégica del mejoramiento</li>
                  <li>✓ Seguimiento sistemático del proceso</li>
                  <li>✓ Evaluación basada en evidencias</li>
                </ul>
              </div>

              {/* Footer de la Tarjeta */}
              <div className="welcome-footer">
                <p className="footer-text">
                  Versión Beta 1.0.0 | PEMC DIGITAL
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Global */}
      <footer className="footer">
        <p className="footer-main">PEMC DIGITAL | Programa Escolar de Mejora Continua</p>
        <p className="footer-subtext">Una herramienta para directores y colectivos docentes de educación básica en México</p>
      </footer>
    </div>
  )
}

export default App
