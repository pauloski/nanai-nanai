# 03 — Arquitectura de Skills & Stack: Nanai Nanai Brand Hub

---

## 1. Filosofía Tecnológica

> **"Control total sobre cada píxel. Dependencia cero de terceros."**

Nanai Nanai es una marca de intención y cuidado. Su plataforma digital debe reflejar esos mismos valores: sin capas de abstracción que escapen al control del equipo, sin frameworks que dicten opiniones de diseño externas, sin dependencias que puedan deprecarse e interrumpir la experiencia.

### Principio rector: Estándares Web Nativos
El Brand Hub se construye sobre los tres pilares del ecosistema web estándar:

| Pilar         | Tecnología      | Versión mínima recomendada |
|---------------|-----------------|----------------------------|
| **Estructura**| HTML5 semántico | Living Standard (WHATWG)   |
| **Presentación**| CSS3 + Variables Nativas | CSS Level 4 (Custom Properties) |
| **Comportamiento**| Vanilla JavaScript | ES2022+ (sin transpilers) |

**Por qué no frameworks:**
- Tailwind CSS: impone un vocabulario de clases que acopla el diseño al markup. Nanai Nanai necesita tokens puros, no utilidades.
- React/Vue/Angular: overhead de bundle, ciclo de vida complejo, dificulta auditorías de accesibilidad.
- Bootstrap: estética genérica incompatible con la identidad de marca. Su grid es una opinión que no es la nuestra.

---

## 2. Arquitectura del Stack

### 2.1 Frontend — Brand Hub Web

```
/nanai-nanai-brand-hub/
│
├── index.html              ← Punto de entrada único (SPA con navegación por hash)
├── styles.css              ← Sistema completo de design tokens + layout + componentes
├── script.js               ← Navegación lateral, interacciones, color swatches
│
├── assets/
│   ├── logo/               ← SVGs del logotipo en todas sus variantes
│   ├── images/             ← Fotografía editorial por territorio
│   ├── icons/              ← Iconografía outline (SVG inline o sprite)
│   └── fonts/              ← Fuentes auto-hospedadas (WOFF2) como backup offline
│
└── docs/
    ├── 01-arquitectura-de-marca.md
    ├── 02-libreria-de-diseno-base.md
    └── 03-arquitectura-de-skills.md
```

### 2.2 Decisiones de Arquitectura CSS

| Decisión                     | Elección                              | Razón                                              |
|------------------------------|---------------------------------------|----------------------------------------------------|
| Sistema de layout            | CSS Grid + Flexbox nativos            | Control preciso, sin abstracciones                 |
| Tokens de diseño             | CSS Custom Properties en `:root`      | Herencia en cascada, tematización por territorio   |
| Responsive                   | Media queries nativas + `clamp()`     | Sin breakpoints de framework, fluid typography     |
| Animaciones                  | CSS transitions + `@keyframes`        | GPU-aceleradas, sin librería de animación          |
| Temas por territorio         | Data attributes (`data-territory`)    | Switch de tema sin JS; CSS puro                    |

### 2.3 Decisiones de Arquitectura JavaScript

| Decisión                     | Elección                              | Razón                                              |
|------------------------------|---------------------------------------|----------------------------------------------------|
| Módulos                      | ES Modules nativos (`type="module"`)  | Sin bundler, import/export nativo                  |
| Routing                      | Hash-based (`#seccion`)               | Sin servidor, 100% estático                        |
| DOM API                      | `querySelector`, `classList`, `dataset`| APIs modernas, sin jQuery ni abstracciones         |
| Estado                       | Variables de módulo + Custom Events   | Sin Redux, sin estado global complejo              |
| Build process                | **Ninguno**                           | El archivo sirve tal cual desde cualquier servidor |

---

## 3. Roles del Equipo

### 3.1 Roles de Diseño

---

#### Diseñador UI/UX Emocional
**Responsabilidad central:** Traducir los tres territorios de marca en experiencias visuales e interactivas que generen respuesta emocional genuina.

**Skills requeridos:**
- Dominio de Figma a nivel componentes y variables.
- Comprensión de psicología del color aplicada a contextos de duelo, memoria y transición.
- Diseño de sistemas: construcción y mantenimiento de Design Systems en Figma.
- Motion design básico: micro-interacciones que refuercen el tono empático.
- Accesibilidad (WCAG 2.1 AA): conocimiento de contraste, roles ARIA, navegación por teclado.

**No necesita:**
- Ser desarrollador. El sistema de tokens está documentado para handoff limpio.
- Dominar branding estratégico (ese rol es del Brand Strategist).

**KPIs de éxito:**
- Coherencia visual entre los 3 territorios sin pérdida de identidad individual.
- Tiempo de onboarding de nuevos diseñadores < 2 días con el sistema.

---

#### Copywriter Empático
**Responsabilidad central:** Escribir los textos del Brand Hub, las descripciones de producto, los mensajes internos de las cajas y la comunicación de marca con el tono definido en `01-arquitectura-de-marca.md`.

**Skills requeridos:**
- Escritura en segunda persona singular sin paternalismo.
- Dominio del tono de cada territorio: contención ≠ memoria ≠ renacer.
- UX Writing: labels, microcopy, mensajes de error con calidez.
- Conocimiento básico de SEO emocional (no técnico): cómo rankear sin sonar comercial.
- Capacidad de escribir en Markdown y colaborar directamente en los archivos `.md` del sistema.

**No necesita:**
- Ser diseñador ni saber código.
- Experiencia en publicidad convencional (es preferible que no la tenga).

**KPIs de éxito:**
- Tono consistente en el 100% de los textos sin revisión de segunda vuelta.
- 0 instancias de lenguaje de venta directa en textos de producto.

---

### 3.2 Roles de Desarrollo

---

#### Frontend Developer Purista (Tech Lead)
**Responsabilidad central:** Construir y mantener el Brand Hub con estándares web nativos. Custodio de la no-dependencia de frameworks externos.

**Skills requeridos:**
- HTML5 semántico avanzado: microdata, roles ARIA, landmarks, estructura de documento.
- CSS nivel experto: Custom Properties, Grid, Flexbox, `@container` queries, `clamp()`, `:has()`.
- JavaScript ES2022+: módulos, async/await, Intersection Observer, Custom Events, Web Components (opcional).
- Performance web: Core Web Vitals, font loading strategies, lazy loading nativo.
- Accesibilidad técnica: validación con axe-core, screen reader testing.
- Git workflow: ramas de feature, PRs documentados, commits semánticos.

**Filosofía esperada:**
- "El mejor framework es el que no necesitas."
- Cada línea de JS tiene que justificarse. Si CSS puede hacerlo, CSS lo hace.
- El código es parte del sistema de diseño: limpio, comentado en español, predecible.

**No necesita:**
- React, Next.js, o cualquier runtime de framework.
- Configurar bundlers, webpack o Vite (el proyecto es zero-build por diseño).

---

#### DevOps / Deployment Specialist
**Responsabilidad central:** Garantizar que el Brand Hub esté disponible, sea rápido y seguro.

**Skills requeridos:**
- Deployment estático: Netlify, Vercel, GitHub Pages o servidor Nginx.
- CDN configuration para assets de imagen y fuentes.
- HTTPS, headers de seguridad (CSP, CORS para fuentes).
- CI/CD básico: despliegue automático desde rama `main`.

**Stack de deployment recomendado:**
```
GitHub (repositorio) → GitHub Actions (CI) → Netlify (hosting estático)
```

---

## 4. Ecosistema de Herramientas

### 4.1 Diseño
| Herramienta       | Propósito                                    | Acceso             |
|-------------------|----------------------------------------------|--------------------|
| Figma             | Diseño UI, Design System, prototipado         | Equipo de diseño   |
| Figma Variables   | Tokens de color y tipografía sincronizados    | Diseñador senior   |
| Phosphor Icons    | Iconografía MIT License                       | Todos              |
| Google Fonts      | Cormorant Garamond + Manrope (CDN o local)   | Todos              |

### 4.2 Desarrollo
| Herramienta         | Propósito                                    | Notas                                |
|---------------------|----------------------------------------------|--------------------------------------|
| VS Code             | Editor principal                             | Extensiones: CSS Var Intellisense    |
| Git + GitHub        | Control de versiones                         | Conventional Commits                 |
| axe DevTools        | Auditoría de accesibilidad                   | Extensión de Chrome                  |
| Lighthouse          | Performance y Core Web Vitals                | Integrado en Chrome DevTools         |
| SVGO                | Optimización de SVGs                         | CLI, sin dependencia en runtime      |
| Squoosh             | Optimización de imágenes                     | Web app de Google, sin instalación   |

### 4.3 Documentación y Colaboración
| Herramienta         | Propósito                                    | Notas                                |
|---------------------|----------------------------------------------|--------------------------------------|
| Markdown (`.md`)    | Fuente de verdad del sistema de marca        | Versionado en Git junto al código    |
| Notion (opcional)   | Wiki del equipo, briefings, feedback         | Solo si el equipo lo prefiere        |
| Loom                | Videos de handoff diseño-desarrollo          | Async-first                          |

---

## 5. Estándares de Calidad y Entrega

### Checklist de cada entregable web

**Accesibilidad:**
- [ ] Contraste de texto mínimo 4.5:1 (WCAG AA)
- [ ] Todos los elementos interactivos navegables por teclado
- [ ] `alt` descriptivo en todas las imágenes con contenido
- [ ] Roles ARIA en componentes custom (navegación, tabs, modales)
- [ ] `lang="es"` declarado en `<html>`

**Performance:**
- [ ] LCP < 2.5s en conexión 4G simulada
- [ ] No JS blocking en el `<head>`
- [ ] Fuentes cargadas con `font-display: swap`
- [ ] Imágenes con `loading="lazy"` excepto hero
- [ ] CSS no tiene más de 50KB minificado

**Código:**
- [ ] HTML válida (W3C Validator: 0 errores)
- [ ] CSS con 0 !important (excepto override documentado)
- [ ] JS sin `console.log` en producción
- [ ] Sin dependencias externas en runtime

### Convención de nombres CSS
```css
/* Estructura: --[categoría]-[elemento]-[estado] */
--color-contencion-bg          /* token de color */
--space-md                     /* token de espaciado */
--type-h1                      /* token tipográfico */
--shadow-card-hover            /* token de elevación */
--radius-card                  /* token de forma */
--transition-default           /* token de movimiento */
```

---

## 6. Roadmap del Brand Hub

| Fase   | Entregable                                    | Estado      |
|--------|-----------------------------------------------|-------------|
| **v1** | Brand Hub estático (HTML/CSS/JS vanilla)      | En progreso |
| **v1** | 3 archivos `.md` del sistema de marca         | En progreso |
| **v2** | Galería de producto por territorio            | Planificado |
| **v2** | Formulario de contacto (accesible, no framework) | Planificado |
| **v3** | Modo oscuro vía `prefers-color-scheme`        | Planificado |
| **v3** | Web Components para swatches y tarjetas       | Planificado |
| **v4** | CMS headless (Sanity o Directus) para contenido | Planificado |

---

## 7. Principios No Negociables del Stack

1. **Zero frameworks en runtime.** Todo lo que el usuario descarga es HTML, CSS y JS puro.
2. **CSS Custom Properties como sistema nervioso.** Cambiar un territorio es cambiar 3 variables, no 300 clases.
3. **Accesibilidad desde la base, no como add-on.** El markup semántico es el diseño.
4. **El código sirve a la marca, no al revés.** Si la marca dice "sereno", el código no puede ser ansioso o sobrecargado.
5. **Documentación en Markdown versionada en Git.** El sistema de marca vive donde vive el código.
