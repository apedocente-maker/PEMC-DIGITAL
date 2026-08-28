import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <h1 className="logo-text">PEMC DIGITAL</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="welcome-container">
          <div className="welcome-card">
            {/* Título Principal */}
            <div className="welcome-header">
              <h2 className="welcome-title">PEMC DIGITAL</h2>
              <p className="welcome-subtitle">Programa Escolar de Mejora Continua</p>
            </div>

            {/* Descripción */}
            <div className="welcome-description">
              <p className="description-text">
                Construye, da seguimiento y evalúa la mejora de tu escuela.
              </p>
              <p className="description-subtext">
                Una herramienta digital diseñada para directores y colectivos docentes
                de educación básica en México.
              </p>
            </div>

            {/* Características */}
            <div className="features">
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <p>Diagnóstico integral de tu escuela</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <p>Planificación estratégica del mejoramiento</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📈</span>
                <p>Seguimiento y evaluación del proceso</p>
              </div>
            </div>

            {/* Botón de Acción */}
            <div className="welcome-actions">
              <button className="btn-primary">Comenzar PEMC</button>
            </div>

            {/* Footer del Welcome */}
            <div className="welcome-footer">
              <p className="footer-text">
                Versión Beta 1.0.0
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 PEMC DIGITAL. Sistema para Educación Básica en México.</p>
      </footer>
    </div>
  )
}

export default App
