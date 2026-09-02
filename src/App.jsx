import './App.css'
import { useState, useEffect } from 'react'
import { db, auth } from './firebase'
import { collection, getDocs } from 'firebase/firestore'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
function App() {
  const [showNotification, setShowNotification] = useState(false)
    const [escuelas, setEscuelas] = useState([])
  const [escuelaSeleccionada, setEscuelaSeleccionada] = useState(null)
  const [usuario, setUsuario] = useState(null)
  const [cargandoUsuario, setCargandoUsuario] = useState(true)
  const [cargandoEscuelas, setCargandoEscuelas] = useState(true) 
useEffect(() => {
  const cancelarEscucha = onAuthStateChanged(auth, async (usuarioActual) => {
    setUsuario(usuarioActual)
    setCargandoUsuario(false)

    if (!usuarioActual) {
      setEscuelas([])
      setCargandoEscuelas(false)
      return
    }

    try {
      const consulta = await getDocs(collection(db, 'escuelas'))

      const datos = consulta.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      setEscuelas(datos)
    } catch (error) {
      console.error('Error al cargar escuelas:', error)
    } finally {
      setCargandoEscuelas(false)
    }
  })

  return () => cancelarEscucha()
}, [])
  const [correo, setCorreo] = useState('')
const [contrasena, setContrasena] = useState('')
const [errorLogin, setErrorLogin] = useState('')
const [iniciandoSesion, setIniciandoSesion] = useState(false)
  const handleLogin = async (e) => {
  e.preventDefault()
  setErrorLogin('')
  setIniciandoSesion(true)

  try { 
      await signInWithEmailAndPassword(auth, correo, contrasena)
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
      setErrorLogin(`Error de Firebase: ${error.code}`)
    } finally {
      setIniciandoSesion(false)
    }     
}
  const handleComenzarPEMC = () => {
  const etapasSection = document.getElementById('etapas')

  if (etapasSection) {
    etapasSection.scrollIntoView({ behavior: 'smooth' })
  }
} 
  const handleSeleccionarEscuela = (escuela) => {
  setEscuelaSeleccionada(escuela)
}

  const handleConocerProceso = () => {
    const procesSection = document.getElementById('etapas')
    if (procesSection) {
      procesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (cargandoUsuario) {
  return <div className="app-container">Verificando acceso...</div>
}

if (!usuario) {
  return (
  <div className="app-container">
    <main className="main-content">
      <section className="welcome-section">
        <div className="welcome-container">
          <div className="welcome-card">
            <div className="welcome-header">
              <h1 className="main-title">PEMC DIGITAL</h1>
              <h2 className="main-subtitle">Inicio de sesión</h2>
            </div>

            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />

              {errorLogin && (
                <p>{errorLogin}</p>
              )}

              <button
                type="submit"
                className="btn-primary"
                disabled={iniciandoSesion}
              >
                {iniciandoSesion
                  ? 'INICIANDO SESIÓN...'
                  : 'INICIAR SESIÓN'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  </div>
)
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
                <h1 className="main-title">PEMC DIGITAL | Programa Escolar de Mejora Continua</h1>
                <h2 className="main-subtitle">Programa Escolar de Mejora Continua</h2>
              </div>

              {/* Descripción Detallada */}
              <div className="welcome-description">
                <p className="description-main">
                  Una herramienta digital para diseñar, implementar, dar seguimiento y evaluar el Programa Escolar de Mejora Continua (PEMC).
                </p>
                <p className="description-detail">
                  Guía paso a paso para integrar el diagnóstico escolar, identificar problemáticas prioritarias, establecer objetivos y metas, diseñar acciones, dar seguimiento y evaluar los resultados del PEMC.
                </p>
              </div>

              {/* Sección de Etapas */}
              <section id="etapas" className="etapas-section">
                <h3 className="etapas-title">Las Etapas del PEMC</h3>
                <div className="etapas-flow">
                  <div className="etapa">
                    <div className="etapa-number">1</div>
                    <p className="etapa-nombre">Diagnóstico integral</p>
                  </div>
                  <div className="etapa-arrow">↓</div>
                  
                  <div className="etapa">
                    <div className="etapa-number">2</div>
                    <p className="etapa-nombre">Identificación de problemáticas</p>
                  </div>
                  <div className="etapa-arrow">↓</div>
                  
                  <div className="etapa">
                    <div className="etapa-number">3</div>
                   <p className="etapa-nombre">Priorización de necesidades</p> 
                  </div>
                  <div className="etapa-arrow">↓</div>
                  
                  <div className="etapa">
                    <div className="etapa-number">4</div>
                    <p className="etapa-nombre">Objetivos y propósitos</p>
                  </div>
                  <div className="etapa-arrow">↓</div>
                  
                  <div className="etapa">
                    <div className="etapa-number">5</div>
                    <p className="etapa-nombre">Metas e indicadores</p>
                  </div>
                  <div className="etapa-arrow">↓</div>
                  
                  <div className="etapa">
                   <div className="etapa-number">6</div>
                    <p className="etapa-nombre">Acciones de mejora</p>
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

             {/* Selección de Escuela */}
<div className="escuela-selector">
  <h2>Datos de la Escuela</h2>

  {cargandoEscuelas ? (
    <p>Cargando escuelas...</p>
  ) : escuelas.length === 0 ? (
    <p>No hay escuelas registradas.</p>
  ) : (
    <div className="escuelas-lista">
      {escuelas.map((escuela) => (
        <button
          key={escuela.id}
          className="escuela-item"
          onClick={() => handleSeleccionarEscuela(escuela)}
        >
          <strong>{escuela.nombre}</strong>
          <span>CCT: {escuela.cct}</span>
          <span>Zona Escolar: {escuela.zona_escolar}</span>
        </button>
      ))}
    </div>
  )}

  {escuelaSeleccionada && (
    <div className="escuela-seleccionada">
      <strong>Escuela seleccionada:</strong>
      <p>{escuelaSeleccionada.nombre}</p>
      <span>CCT: {escuelaSeleccionada.cct}</span>
    </div>
  )}
</div> {/* Botones de Acción */}
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
