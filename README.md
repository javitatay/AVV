# AVV Lab — Animación Visual en Vivo

**Plataforma educativa interactiva** para el módulo de *Animación Visual en Vivo* (195h) del **Ciclo Formativo de Grado Medio en Video DJ** — Conselleria d'Educació, Cultura i Esport · Comunitat Valenciana.

🌐 **[javitatay.github.io/AVV](https://javitatay.github.io/AVV/)**

---

### Badges

![version](https://img.shields.io/badge/version-1.0.0-blue) ![platforms](https://img.shields.io/badge/platforms-Desktop%20%7C%20Tablet%20%7C%20Mobile-brightgreen) ![license](https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-orange)

---

## Descripción

AVV Lab es una suite de 6 herramientas educativas en HTML independientes, accesibles desde una landing page central. Cada suite cubre un software o área temática del módulo, con contenido teórico, calculadoras interactivas, diagramas, simuladores y quizzes de autoevaluación.

El proyecto no requiere servidor, base de datos ni dependencias externas — cada archivo es autocontenido y funciona directamente desde el navegador o desde GitHub Pages.

---

## Estructura del proyecto

```
AVV/
├── index.html              # Landing page — acceso a todas las suites
├── video.html              # Suite: Imagen & Vídeo
├── illustrator.html        # Suite: Diseño Vectorial (Adobe Illustrator)
├── resolume.html           # Suite: VJing & Projection Mapping (Resolume Arena)
├── after-effects.html      # Suite: Motion Graphics & Composición (After Effects)
├── iluminacion.html        # Suite: Iluminación de Espectáculos
└── magicq.html             # Suite: Control DMX & Consola de Luz (MagicQ)
```

---

## Suites disponibles

| Suite | Contenido principal | UDs |
|---|---|---|
| 🎬 **Imagen & Vídeo** | Resolución, PPI, óptica, DOF, codecs, contenedores, NDI, señal AV | UD 1·2·3 |
| ✏️ **Diseño Vectorial** | Illustrator: pluma, Bézier, color, formas, tipografía, exportación | CFGM·DG |
| 🟢 **VJing & Resolume** | Interfaz, clips, efectos, outputs, BPM sync, blend modes, constructor diagramas | UD 1·2·3 |
| 🔵 **Motion Graphics** | After Effects: keyframes, composición, efectos visuales, motion graphics | UD 2·3 |
| 💡 **Iluminación** | Magnitudes fotométricas, fuentes de luz, tipos de focos, rigging, DMX | UD 4·5 |
| 🟣 **MagicQ · DMX** | Patch, grupos, paletas, cues, playbacks, ejecutores, sintaxis | EDU·V4 |

---

## Características técnicas

- **Sin dependencias** — HTML, CSS y JavaScript vanilla. Sin frameworks, sin npm, sin build step.
- **Autocontenido** — cada suite funciona de forma independiente como archivo único.
- **Tipografía** — Inter (Google Fonts) con fallback a fuentes del sistema. JetBrains Mono para código y valores técnicos.
- **Diseño responsive** — adaptado a pantalla de ordenador, proyector y tablet.
- **Barra de navegación flotante** — acceso entre suites desde cualquier página, con botón de retorno a la última suite visitada (sessionStorage).
- **Glosario visual** — 54 términos técnicos con equivalencias EN/ES, buscador global y filtros por suite.
- **Diagramas interactivos** — 9 diagramas SVG/canvas clicables distribuidos entre las suites (flujo AV, comparativa resoluciones, simulador DOF, árbol de decisión de codec, Bézier interactiva, modelos de color RGB/CMYK/HSB, perfiles de haz, temperatura de color, flujo MagicQ).
- **Calculadoras** — bitrate, resolución, DOF, DMX, BPM sync, ley inversa del cuadrado, triángulo de exposición y más.
- **Constructor de diagramas** — módulo drag-and-drop en Resolume para crear diagramas de bloques AV con 25 dispositivos categorizados, cables SVG bezier y exportación JPG.

---

## Contenido por suite

### 🎬 Imagen & Vídeo (`video.html`)
Fundamentos técnicos de la imagen digital y la señal de vídeo.
- Resolución, PPI, MCD, DAR/SAR/PAR — con calculadora y comparativa visual SVG a escala
- Óptica: distancia focal, DOF, triángulo de exposición — con simulador interactivo canvas
- Señal de vídeo: conectores, HDCP, codecs, audio, codecs VJ/Live
- NDI: versiones, modos, herramientas, caso práctico
- Árbol de decisión interactivo para selección de codec
- Distribución & Routing: constructor de diagramas con 25 dispositivos y cables bezier
- Tabla de compatibilidad codec-contenedor con detalle clicable

### ✏️ Diseño Vectorial (`illustrator.html`)
Adobe Illustrator orientado a diseño para espectáculos y producciones audiovisuales.
- Entorno de trabajo, paneles, mesas de trabajo
- Vectores: trazados, operaciones booleanas, alineación
- Color: RGB/CMYK/HSB con canvas interactivo de mezcla de colores
- Selección, formas, transformaciones
- Pluma y curvas Bézier con canvas interactivo arrastrable
- Dibujo libre, pincel blob
- Tipografía, texto en trazado
- Degradados, transparencia, apariencias
- Exportación e impresión
- Ejercicios guiados, atajos de teclado, glosario

### 🟢 VJing & Resolume Arena (`resolume.html`)
Software de VJing y projection mapping en tiempo real.
- Interfaz, deck, capa, composición
- Setup: audio, MIDI, OSC, DMX
- Visualizador interno
- Clips: formatos, gestión, propiedades
- Grupos, paletas de color
- Posiciones y transformaciones
- BPM sync: sincronización música-imagen con simulador interactivo
- Cues & playbacks
- Blend modes
- Ejecutores y automatización
- Calculadora, referencia rápida, glosario

### 🔵 Motion Graphics & After Effects (`after-effects.html`)
Composición, animación y efectos visuales.
- Interfaz y flujo de trabajo
- Capas: tipos, propiedades, modos
- Keyframes y curvas de animación
- Efectos y presets
- Motion graphics: texto animado, shapes
- Composición y precomps
- Render y exportación
- Atajos, referencia, ejercicios

### 💡 Iluminación de Espectáculos (`iluminacion.html`)
Fundamentos de iluminación técnica para escenarios.
- Física de la luz: magnitudes, temperatura de color con simulador interactivo
- Fuentes de luz: incandescente, halógena, dicroica, fluorescente, HMI, LED
- Tipos de focos: PAR, Fresnel, PC, recortes, moving heads — con diagrama de perfiles de haz SVG
- Rigging: estructuras, sujeción, elevación, electricidad
- DMX: protocolo, canales, direccionamiento, cables, librerías, patch visual, calculadora
- Referencia y ejercicios

### 🟣 Control DMX & MagicQ (`magicq.html`)
Consola de iluminación MagicQ de ChamSys.
- Interfaz completa: zonas de pantalla y funciones
- Setup y configuración
- Visualizador interno
- DMX y patch
- Grupos, posiciones
- Cues & playbacks — con diagrama de flujo interactivo de programación
- Color, ejecutores
- Remote, ejercicios
- Calculadora DMX, referencia, sintaxis, tiempos
- Glosario de programación, catálogo de focos

---

## Uso

El proyecto está desplegado en GitHub Pages y no requiere ningún paso de instalación.

Para uso local, clona el repositorio y abre cualquier archivo `.html` directamente en el navegador:

```bash
git clone https://github.com/javitatay/AVV.git
cd AVV
open index.html   # macOS
# o simplemente arrastra el archivo al navegador
```

---

## Contexto curricular

| Campo | Detalle |
|---|---|
| **Módulo** | Animación Visual en Vivo (AVV) |
| **Código** | IMSE0111 |
| **Horas** | 195h |
| **Ciclo** | CFGM Video DJ — 2º curso |
| **Marco** | LOE / FP Grado Medio |
| **Comunidad** | Comunitat Valenciana |

---

## Contacto

**Javier Tatay Rubio** · Profesor del módulo  
📧 j.tatayrubio@edu.gva.es

---

*Material docente de uso educativo · 2026*
