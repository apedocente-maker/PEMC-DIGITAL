# PEMC DIGITAL

Sistema Digital para el Programa Escolar de Mejora Continua

## Descripción

PEMC DIGITAL es una aplicación web profesional diseñada para directores y colectivos docentes de escuelas de educación básica en México. Facilita la elaboración, implementación, seguimiento y evaluación del Programa Escolar de Mejora Continua.

## Características

- ✅ Interfaz moderna y responsive
- ✅ Diseño profesional y amigable para no técnicos
- ✅ Compatible con computadora, laptop, tablet y teléfono
- ✅ Arquitectura modular y escalable
- 🔜 Autenticación con Firebase
- 🔜 Base de datos Firestore
- 🔜 Almacenamiento de archivos con Firebase Storage

## Tecnologías

- **React 18** - Librería UI
- **Vite** - Build tool y dev server
- **JavaScript** - Lenguaje de programación
- **CSS3** - Estilos responsive
- **Firebase** (próxima etapa)
  - Authentication
  - Firestore
  - Storage
  - Hosting

## Requisitos Previos

- Node.js 16+ instalado
- npm o yarn

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/apedocente-maker/PEMC-DIGITAL.git
cd PEMC-DIGITAL
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación abrirá automáticamente en `http://localhost:5173`

### 4. Compilar para producción

```bash
npm run build
```

### 5. Vista previa de producción

```bash
npm run preview
```

## Estructura del Proyecto

```
PEMC-DIGITAL/
├── index.html              # Archivo HTML principal
├── package.json            # Dependencias y scripts
├── vite.config.js          # Configuración de Vite
├── .gitignore              # Archivos a ignorar en git
├── README.md               # Este archivo
└── src/
    ├── main.jsx            # Punto de entrada React
    ├── App.jsx             # Componente principal
    └── App.css             # Estilos globales
```

## Etapas de Desarrollo

### Etapa 1 ✅ (Actual)
- [x] Crear proyecto React + Vite
- [x] Configurar estructura de carpetas
- [x] Crear página inicial profesional
- [x] Implementar responsive design

### Etapa 2 (Próxima)
- [ ] Configurar Firebase
- [ ] Implementar autenticación
- [ ] Crear sistema de rutas con React Router
- [ ] Diseñar layout principal (Navbar, Sidebar)

### Etapa 3
- [ ] Configurar Firestore
- [ ] Crear modelos de datos
- [ ] Implementar CRUD básico

### Etapa 4+
- [ ] Desarrollar módulos PEMC
- [ ] Implementar seguimiento y evaluación
- [ ] Agregar más funcionalidades

## Scripts Disponibles

| Comando | Descripción |
|---------|------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm run preview` | Vista previa del build |

## Navegadores Soportados

- Chrome (últimas versiones)
- Firefox (últimas versiones)
- Safari (últimas versiones)
- Edge (últimas versiones)

## Contribuidores

- apedocente-maker

## Licencia

Este proyecto es de código abierto.

## Soporte

Para reportar problemas o sugerencias, abre un issue en GitHub.

---

**Versión**: 1.0.0  
**Estado**: Beta - Etapa Inicial  
**Última actualización**: 2024
