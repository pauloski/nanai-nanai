Rol y Objetivo: Actúa como un Arquitecto de Sistemas de Diseño, Estratega de Marca Senior y Desarrollador Frontend Nativo (Tech Lead). Tu objetivo es construir un ecosistema documental estructurado en archivos Markdown (.md) y el código base web para el "Brand Hub" de la marca "Nanai Nanai".
Contexto de la Marca: "Nanai Nanai" es una marca premium de acompañamiento emocional mediante cajas de regalo sensoriales. El nombre duplicado es una estrategia de categorización para sortear la saturación comercial del término "Nanai". Nuestros arquetipos son "El Cuidador" y "El Gobernante".
Requerimiento 1: Base de Diseño en Archivos Markdown (.md) Antes de generar el código web, redacta el contenido detallado de estos 3 archivos .md que controlarán todo el sistema:
Archivo 1: 01-arquitectura-de-marca.md
Propósito y Posicionamiento: Define el propósito (acompañar emocionalmente, no solo regalar) y el tono (empático, sereno, respetuoso).
Estructura de Submarcas (Territorios): Define las reglas conceptuales para los 3 territorios:
Contención (para dolor/vulnerabilidad).
Memoria (para honrar/recordar).
Renacer (para nuevas etapas).
Archivo 2: 02-libreria-de-diseno-base.md (Design System & Assets)
Tipografía: Define una fuente Serif elegante para títulos y una Sans Serif limpia para UI.
Sistema de Color (Crucial): Crea la paleta base (Rosa suave, Lavanda, Beige, Celeste claro, Verde salvia, toques de Dorado). Para cada color, entrega una tabla con: HEX, RGB, CMYK y equivalencia de impresión PANTONE (PMS).
Define directrices de UI (bordes, sombras sutiles) y el uso correcto del logotipo (Clearspace). Vincula los assets a URLs dummy.
Archivo 3: 03-arquitectura-de-skills.md (Skills & Stack Architecture)
Define el ecosistema tecnológico, enfatizando el uso de estándares web nativos para garantizar control total.
Define los roles necesarios (Diseñador UI/UX emocional, Copywriter empático, Frontend Dev purista).
Requerimiento 2: Desarrollo Web del Brand Hub (Estrictamente Vanilla) Basado en los lineamientos estipulados, genera el código web bajo las siguientes restricciones técnicas:
Tecnologías: Utiliza únicamente HTML5 semántico, Vanilla CSS y Vanilla JavaScript.
Prohibición de Frameworks: No utilices Tailwind CSS, Bootstrap, React, ni ninguna librería externa. El objetivo es tener control absoluto.
CSS Variables: Toda la paleta de colores, tipografías y espaciados de los 3 territorios deben estar estrictamente controlados mediante CSS Custom Properties (Variables CSS nativas) en el :root.
Estructura y Diseño: La interfaz debe inspirarse en los Brand Hubs de Webflow, TikTok y Vevo: minimalista, con navegación lateral ("Side navigation") y sumamente limpia.
Debe contener una sección visual de color donde se rendericen "Color Swatches" dinámicos que muestren claramente los valores HEX, RGB, CMYK y Pantone.
Entregables esperados:
El código de los 3 archivos .md completos.
El código web funcional (index.html, styles.css con la declaración exhaustiva de variables, y script.js para la navegación).
Una justificación de cómo las variables CSS elegidas permitirán controlar la estrategia visual de los 3 territorios conceptuales a futuro.