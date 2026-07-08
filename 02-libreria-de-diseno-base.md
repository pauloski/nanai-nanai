# 02 — Librería de Diseño Base: Nanai Nanai Design System

---

## 1. Principios de Diseño

El sistema visual de Nanai Nanai se rige por cuatro principios que deben estar presentes en cada decisión de diseño:

| Principio       | Definición operativa                                                                 |
|-----------------|--------------------------------------------------------------------------------------|
| **Respiración** | Abundante espacio en blanco. El silencio visual es intencional, nunca un vacío.      |
| **Calidez**     | Ningún elemento debe sentirse clínico o tecnológico. Siempre orgánico y humano.      |
| **Precisión**   | Cada píxel tiene justificación. Nada es decorativo sin función emocional.            |
| **Permanencia** | El diseño no sigue tendencias. Debe verse igual de relevante en 10 años.             |

---

## 2. Sistema Tipográfico

### Fuente Principal — Títulos y Display
**Familia:** `Cormorant Garamond`
**Clasificación:** Serif · Old-Style · Display
**Uso:** H1, H2, H3, citas, nombres de territorios, textos de tarjetas internas, packaging.
**Pesos disponibles:** 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold) + Itálicas.
**Fuente de referencia:** Google Fonts
**URL de carga:** `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap`

**Justificación:** Cormorant Garamond tiene una historia ligada a la tipografía humanista renacentista. Sus terminaciones de gracia refinadas y su contraste alto entre trazos gruesos y delgados transmiten temporalidad, elegancia serena y calidez artesanal — exactamente lo que Nanai Nanai necesita en sus momentos de mayor carga emocional.

---

### Fuente Secundaria — UI y Cuerpo
**Familia:** `Manrope`
**Clasificación:** Sans-Serif · Geométrica-Humanista · Variable
**Uso:** Párrafos, labels, navegación, metadatos, precios, nombres de producto en catálogo.
**Pesos disponibles:** 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold).
**Fuente de referencia:** Google Fonts
**URL de carga:** `https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap`

**Justificación:** Manrope es una fuente sans-serif de código abierto con proporciones geométricas y terminaciones humanistas. Su claridad en tamaños pequeños la hace ideal para UI y cuerpos de texto largos, mientras su carácter cálido evita la frialdad técnica de otras sans geométricas. Complementa Cormorant Garamond sin competir con su personalidad: la Serif emociona, Manrope organiza.

---

### Fuente Terciaria — Script de Apoyo
**Familia:** `Caveat`
**Clasificación:** Script · Escritura a mano · Display informal
**Uso:** Etiquetas de producto, mensajes internos de caja, tags de packaging, firmas editoriales, notas de territorio, textos de paquetería.
**Pesos disponibles:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold).
**Fuente de referencia:** Google Fonts
**URL de carga:** `https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap`

**Justificación:** Caveat es una fuente de escritura a mano diseñada específicamente para alta legibilidad en contextos de packaging y UI. Su trazo natural evoca el contacto humano y la intención artesanal sin caer en la artificialidad de fuentes caligráficas. Es el puente entre el rigor del sistema tipográfico y el punto de contacto físico con el producto — la letra de quien preparó la caja.

**Regla de uso:** Caveat representa la *voz íntima de la marca* — el momento en que un objeto pasa de ser un producto a ser un gesto. Solo debe usarse en contextos de contacto directo con quien recibe el regalo. **No usar en:** navegación, títulos de sección, párrafos de cuerpo, precios ni datos técnicos.

| Tamaño   | Peso | Contexto de uso                          |
|----------|------|------------------------------------------|
| 28px     | 400  | Etiqueta principal de caja               |
| 22px     | 400  | Tag de territorio, identificador de caja |
| 18px     | 500  | Firma editorial, nota de cierre          |
| 16px     | 400  | Mensaje interno, nota handwritten        |

---

### Escala Tipográfica (Type Scale)

| Token               | Familia            | Peso | Tamaño | Line-height | Uso                                      |
|---------------------|--------------------|------|--------|-------------|------------------------------------------|
| `--type-display`    | Cormorant Garamond | 300  | 72px   | 1.1         | Hero, portadas de territorio             |
| `--type-h1`         | Cormorant Garamond | 400  | 48px   | 1.15        | Títulos de sección principales           |
| `--type-h2`         | Cormorant Garamond | 400  | 36px   | 1.2         | Subtítulos de sección                    |
| `--type-h3`         | Cormorant Garamond | 600  | 24px   | 1.3         | Títulos de tarjeta / componente          |
| `--type-quote`      | Cormorant Garamond | 300i | 28px   | 1.4         | Citas evocadoras, taglines               |
| `--type-body-lg`    | Manrope            | 400  | 18px   | 1.65        | Párrafos principales                     |
| `--type-body`       | Manrope            | 400  | 16px   | 1.6         | Cuerpo estándar, descripciones           |
| `--type-body-sm`    | Manrope            | 400  | 14px   | 1.55        | Labels, metadatos, notas                 |
| `--type-ui`         | Manrope            | 500  | 13px   | 1.0         | Navegación, botones, chips               |
| `--type-caption`    | Manrope            | 300  | 11px   | 1.4         | Copyright, valores técnicos de color     |
| `--type-script-lg`  | Caveat             | 400  | 28px   | 1.2         | Etiqueta principal de caja               |
| `--type-script`     | Caveat             | 400  | 22px   | 1.25        | Tag de territorio, identificador         |
| `--type-script-sm`  | Caveat             | 500  | 18px   | 1.3         | Firma editorial, nota de cierre          |
| `--type-script-xs`  | Caveat             | 400  | 16px   | 1.35        | Mensaje interno, handwritten packaging   |

---

## 3. Sistema de Color

### 3.1 Paleta Base Global

---

#### COLOR 01 — Rosa Pálido (Bloom)
*El tono del consuelo, la suavidad y la presencia.*

| Formato    | Valor                                           |
|------------|-------------------------------------------------|
| **HEX**    | `#F2D9D9`                                       |
| **RGB**    | `R: 242 / G: 217 / B: 217`                      |
| **HSL**    | `0°, 47%, 90%`                                  |
| **CMYK**   | `C: 0% / M: 10% / Y: 10% / K: 5%`              |
| **PANTONE**| PMS `698 C` (aproximación de impresión offset)  |
| **Uso**    | Fondo principal de Contención, hover suave, tarjetas |

---

#### COLOR 02 — Lavanda Gris (Serenity)
*El tono de la calma profunda y el silencio respetuoso.*

| Formato    | Valor                                           |
|------------|-------------------------------------------------|
| **HEX**    | `#D8D3E8`                                       |
| **RGB**    | `R: 216 / G: 211 / B: 232`                      |
| **HSL**    | `257°, 27%, 87%`                                |
| **CMYK**   | `C: 7% / M: 9% / Y: 0% / K: 9%`               |
| **PANTONE**| PMS `2635 C` (aproximación de impresión offset) |
| **Uso**    | Acento en Contención, fondos alternativos, separadores |

---

#### COLOR 03 — Beige Crudo (Linen)
*El tono del tiempo, la textura y lo artesanal.*

| Formato    | Valor                                           |
|------------|-------------------------------------------------|
| **HEX**    | `#EDE6D6`                                       |
| **RGB**    | `R: 237 / G: 230 / B: 214`                      |
| **HSL**    | `42°, 33%, 88%`                                 |
| **CMYK**   | `C: 0% / M: 3% / Y: 10% / K: 7%`              |
| **PANTONE**| PMS `9183 C` (aproximación de impresión offset) |
| **Uso**    | Fondo neutro global, packaging, fondos de Memoria |

---

#### COLOR 04 — Celeste Claro (Dawn)
*El tono del inicio, la apertura y la posibilidad.*

| Formato    | Valor                                           |
|------------|-------------------------------------------------|
| **HEX**    | `#C9E4EE`                                       |
| **RGB**    | `R: 201 / G: 228 / B: 238`                      |
| **HSL**    | `199°, 46%, 86%`                                |
| **CMYK**   | `C: 16% / M: 4% / Y: 0% / K: 7%`              |
| **PANTONE**| PMS `290 C` (aproximación de impresión offset)  |
| **Uso**    | Fondo principal de Renacer, elementos de frescura |

---

#### COLOR 05 — Verde Salvia (Sage)
*El tono del crecimiento quieto y la renovación serena.*

| Formato    | Valor                                           |
|------------|-------------------------------------------------|
| **HEX**    | `#B5CDBB`                                       |
| **RGB**    | `R: 181 / G: 205 / B: 187`                      |
| **HSL**    | `134°, 17%, 76%`                                |
| **CMYK**   | `C: 12% / M: 0% / Y: 9% / K: 20%`             |
| **PANTONE**| PMS `557 C` (aproximación de impresión offset)  |
| **Uso**    | Acento en Renacer, estados activos, iconografía natural |

---

#### COLOR 06 — Dorado Suave (Amber)
*El tono de la eternidad, el valor y lo que permanece.*

| Formato    | Valor                                           |
|------------|-------------------------------------------------|
| **HEX**    | `#C9A96E`                                       |
| **RGB**    | `R: 201 / G: 169 / B: 110`                      |
| **HSL**    | `38°, 43%, 61%`                                 |
| **CMYK**   | `C: 0% / M: 16% / Y: 45% / K: 21%`            |
| **PANTONE**| PMS `7509 C` (aproximación de impresión offset) |
| **Uso**    | Acento premium en Memoria, bordes de tarjetas, detalles de packaging |

---

#### COLOR 07 — Blanco Roto (Alabaster)
*El tono del espacio, la pausa y la claridad.*

| Formato    | Valor                                           |
|------------|-------------------------------------------------|
| **HEX**    | `#FAF8F5`                                       |
| **RGB**    | `R: 250 / G: 248 / B: 245`                      |
| **HSL**    | `40°, 33%, 97%`                                 |
| **CMYK**   | `C: 0% / M: 1% / Y: 2% / K: 2%`               |
| **PANTONE**| PMS `9122 C` (aproximación de impresión offset) |
| **Uso**    | Fondo global del Brand Hub, espacio negativo, fondo de texto |

---

#### COLOR 08 — Grafito Cálido (Obsidian)
*El tono de la tipografía. Nunca negro puro — siempre con temperatura.*

| Formato    | Valor                                           |
|------------|-------------------------------------------------|
| **HEX**    | `#2C2A27`                                       |
| **RGB**    | `R: 44 / G: 42 / B: 39`                         |
| **HSL**    | `37°, 6%, 16%`                                  |
| **CMYK**   | `C: 0% / M: 5% / Y: 11% / K: 83%`             |
| **PANTONE**| PMS `Black 6 C` (aproximación de impresión offset) |
| **Uso**    | Cuerpo de texto, headings sobre fondos claros   |

---

### 3.2 Paletas por Territorio

| Token CSS                     | Territorio   | Color          | HEX       |
|-------------------------------|--------------|----------------|-----------|
| `--color-contencion-bg`       | Contención   | Rosa Pálido    | `#F2D9D9` |
| `--color-contencion-accent`   | Contención   | Lavanda Gris   | `#D8D3E8` |
| `--color-contencion-text`     | Contención   | Grafito Cálido | `#2C2A27` |
| `--color-memoria-bg`          | Memoria      | Beige Crudo    | `#EDE6D6` |
| `--color-memoria-accent`      | Memoria      | Dorado Suave   | `#C9A96E` |
| `--color-memoria-text`        | Memoria      | Grafito Cálido | `#2C2A27` |
| `--color-renacer-bg`          | Renacer      | Celeste Claro  | `#C9E4EE` |
| `--color-renacer-accent`      | Renacer      | Verde Salvia   | `#B5CDBB` |
| `--color-renacer-text`        | Renacer      | Grafito Cálido | `#2C2A27` |

---

## 4. Sistema de Espaciado

Escala de 8pt como unidad base, con variantes para microespaciado:

| Token                  | Valor  | Uso                                    |
|------------------------|--------|----------------------------------------|
| `--space-2xs`          | 4px    | Gap entre iconos y labels              |
| `--space-xs`           | 8px    | Padding interno de chips, badges       |
| `--space-sm`           | 16px   | Padding interno de botones             |
| `--space-md`           | 24px   | Gap estándar entre componentes         |
| `--space-lg`           | 40px   | Separación de secciones en mobile      |
| `--space-xl`           | 64px   | Separación de secciones en desktop     |
| `--space-2xl`          | 96px   | Márgenes de hero y displays            |
| `--space-3xl`          | 128px  | Espaciado monumental, secciones clave  |

---

## 5. Directrices de UI

### Bordes y Formas
- **Radio de borde estándar:** `6px` — nunca circular, nunca cuadrado puro.
- **Radio de tarjeta:** `12px`
- **Radio de imagen:** `4px` (sutil, preserva la rectilinearidad)
- **Sin bordes visibles por defecto.** Las divisiones se logran con espacio y color de fondo, no con líneas.

### Sombras (Elevaciones)
```css
/* Nivel 1 — Tarjeta en reposo */
--shadow-sm: 0 2px 8px rgba(44, 42, 39, 0.06);

/* Nivel 2 — Tarjeta hover / modal */
--shadow-md: 0 8px 24px rgba(44, 42, 39, 0.10);

/* Nivel 3 — Drawer / panel lateral */
--shadow-lg: 0 16px 48px rgba(44, 42, 39, 0.14);
```

### Transiciones
- **Duración estándar:** `300ms`
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (Material-style ease)
- Todas las transiciones son `opacity`, `transform` o `color`. Nunca animar `width/height` directamente.

---

## 6. Directrices del Logotipo

### Variantes
| Variante          | Uso                                          | Asset URL                                      |
|-------------------|----------------------------------------------|------------------------------------------------|
| Principal         | Fondo claro, uso digital general             | `/assets/logo/nanai-nanai-primary.svg`         |
| Negativo          | Fondo oscuro o de color intenso              | `/assets/logo/nanai-nanai-negative.svg`        |
| Isotipo           | Avatar, favicon, uso reducido (<48px)        | `/assets/logo/nanai-nanai-isotipo.svg`         |
| Horizontal        | Headers, navegación lateral                  | `/assets/logo/nanai-nanai-horizontal.svg`      |

### Clearspace (Zona de Protección)
La zona de protección mínima alrededor del logotipo equivale a **la altura de la letra "N" mayúscula** del wordmark en todas las direcciones.

```
┌──────────────────────────────┐
│                              │  ← clearspace = altura "N"
│   ┌──────────────────────┐   │
│   │                      │   │
│   │   NANAI NANAI LOGO   │   │
│   │                      │   │
│   └──────────────────────┘   │
│                              │
└──────────────────────────────┘
```

### Usos Prohibidos del Logotipo
- No rotar, inclinar ni deformar el logotipo.
- No colocar el logotipo principal sobre fotografías sin overlay de color.
- No cambiar la tipografía del wordmark.
- No usar el logotipo sobre fondos que no tengan suficiente contraste (mínimo 4.5:1 WCAG AA).
- No agregar efectos (sombra, bisel, degradé) al logotipo.

---

## 7. Iconografía

- **Estilo:** Outline · trazo de 1.5px · terminaciones redondeadas.
- **Grid de diseño:** 24x24px con padding interno de 2px.
- **Librería recomendada:** Phosphor Icons (MIT License) — `/assets/icons/`
- **Assets de iconos custom de la marca:** `/assets/icons/nanai-custom/`

---

## 8. Fotografía y Assets Visuales

### Estilo fotográfico
- Luz natural lateral, nunca flash frontal.
- Paleta desaturada, nunca saturación alta.
- Protagonismo de texturas: papel, tela, madera, tierra.
- Sin personas con rostros: manos, detalles, objetos.

### URLs de assets (dummy para desarrollo)
| Asset                          | URL                                                    |
|--------------------------------|--------------------------------------------------------|
| Hero — Territorio Contención   | `/assets/images/hero-contencion.jpg`                   |
| Hero — Territorio Memoria      | `/assets/images/hero-memoria.jpg`                      |
| Hero — Territorio Renacer      | `/assets/images/hero-renacer.jpg`                      |
| Patrón textural base           | `/assets/images/pattern-linen.png`                     |
| Mockup caja Contención         | `/assets/images/mockup-contencion-01.jpg`              |
| Mockup caja Memoria            | `/assets/images/mockup-memoria-01.jpg`                 |
| Mockup caja Renacer            | `/assets/images/mockup-renacer-01.jpg`                 |
| Logo SVG principal             | `/assets/logo/nanai-nanai-primary.svg`                 |
| Favicon                        | `/assets/logo/favicon.ico`                             |

---

## 9. Tokens de Diseño — Referencia Rápida

```
TIPOGRAFÍA
├── Display:   Cormorant Garamond 300 / 72px / lh 1.1
├── H1:        Cormorant Garamond 400 / 48px / lh 1.15
├── H2:        Cormorant Garamond 400 / 36px / lh 1.2
├── Body LG:   Manrope 400 / 18px / lh 1.65
└── UI:        Manrope 500 / 13px / lh 1.0

COLORES BASE
├── Bloom:     #F2D9D9  — PMS 698 C
├── Serenity:  #D8D3E8  — PMS 2635 C
├── Linen:     #EDE6D6  — PMS 9183 C
├── Dawn:      #C9E4EE  — PMS 290 C
├── Sage:      #B5CDBB  — PMS 557 C
├── Amber:     #C9A96E  — PMS 7509 C
├── Alabaster: #FAF8F5  — PMS 9122 C
└── Obsidian:  #2C2A27  — PMS Black 6 C

ESPACIADO (base 8pt)
└── 4 / 8 / 16 / 24 / 40 / 64 / 96 / 128 px
```
