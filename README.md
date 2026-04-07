# AVV Lab — Animación Visual en Vivo

**Plataforma educativa interactiva** para el módulo de *Animación Visual en Vivo* (195h) del **Ciclo Formativo de Grado Medio en Video DJ** — Conselleria d'Educació, Cultura i Esport · Comunitat Valenciana.

🌐 **[javitatay.github.io/AVV](https://javitatay.github.io/AVV/)**

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
| 💡 **Iluminación** | Magnitudes fotométricas, fuentes de luz, tipos de focos, rigging, DMX, redes IP | UD 4·5 |
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
- **Calculadoras** — bitrate, resolución, DOF, DMX, BPM sync, ley inversa del cuadrado, iluminación escénica y más.
- **Simuladores interactivos** — triángulo de exposición (escena de concierto animada en canvas con motion blur, ruido ISO, histograma y exposímetro en tiempo real), DOF avanzado (vista fotográfica + vista de planta con bokeh y escala métrica), temperatura de color, perfil de haz, BPM sync.
- **Constructor de diagramas** — módulo drag-and-drop en Resolume para crear diagramas de bloques AV con 25 dispositivos categorizados, cables SVG bezier y exportación JPG.

---

## Contenido por suite

### 🎬 Imagen & Vídeo (`video.html`)
Fundamentos técnicos de la imagen digital y la señal de vídeo.
- Resolución, PPI, MCD, DAR/SAR/PAR — con calculadora y comparativa visual SVG a escala
- Óptica: distancia focal, DOF con simulador avanzado (7 sensores, f-stops reales, vistas fotográfica y de planta con bokeh, escala métrica, hiperfocal, 5 presets de producción)
- **Triángulo de exposición** — simulador interactivo con escena de concierto animada: motion blur por velocidad lenta, ruido digital por ISO alto, overlay de luminosidad, histograma animado, exposímetro EV, regla de 180° y presets de condición de luz (Noche · Interior · Nublado · Exterior · Brillante)
- Señal de vídeo: progresivo vs entrelazado, espacio de color, gamma, alpha
- Conectores, HDCP, codecs de vídeo y audio, codecs VJ/Live
- Árbol de decisión interactivo para selección de codec
- NDI: versiones, modos, herramientas, caso práctico
- Distribución & Routing: constructor de diagramas con 25 dispositivos y cables bezier
- Proyección: throw distance, luminancia, lentes
- Pantallas LED & Mapping: cálculo de píxeles, nits, mapping

### ✏️ Diseño Vectorial (`illustrator.html`)
Adobe Illustrator orientado a diseño para espectáculos y producciones audiovisuales.
- Entorno de trabajo, paneles, mesas de trabajo
- Vectores: trazados, operaciones booleanas, alineación
- Color: RGB/CMYK/HSB con canvas interactivo de mezcla de colores
- Pluma y curvas Bézier con canvas interactivo arrastrable
- Tipografía, texto en trazado, degradados, transparencias
- Exportación e impresión, atajos de teclado, glosario

### 🟢 VJing & Resolume Arena (`resolume.html`)
Software de VJing y projection mapping en tiempo real.
- Interfaz, deck, capa, composición
- Setup: audio, MIDI, OSC, DMX
- Clips: formatos, gestión, propiedades
- BPM sync: sincronización música-imagen con simulador interactivo
- Blend modes, efectos
- Calculadora de throw distance y lúmenes para proyección
- Constructor de diagramas drag-and-drop, glosario

### 🔵 Motion Graphics & After Effects (`after-effects.html`)
Composición, animación y efectos visuales.
- Interfaz y flujo de trabajo
- Capas: tipos, propiedades, modos de fusión
- Keyframes y curvas de animación
- Efectos, presets, motion graphics, shapes
- Composición, precomps, render y exportación
- Atajos, referencia, ejercicios

### 💡 Iluminación de Espectáculos (`iluminacion.html`)
Fundamentos de iluminación técnica para escenarios.
- Física de la luz: magnitudes, temperatura de color con simulador interactivo
- Fuentes de luz: incandescente, halógena, dicroica, fluorescente, HMI, LED
- Tipos de focos: PAR, Fresnel, PC, recortes, moving heads — con diagrama SVG de perfiles de haz
- Cabezas móviles: Wash, Spot, Beam — diferencias y simulador visual
- Atributos y canales de control: dimmer, pan/tilt, color, zoom, gobo, prisma
- Rigging: estructuras, sujeción, elevación, electricidad trifásica
- Protocolo DMX: canales, address, cables, librerías, splitters, nodos, patch visual, calculadora, ART-NET
- **Redes IP** *(módulo 9)*: fundamentos para no iniciados — qué es una red (analogía del barrio), dirección IP, subred y máscara, router vs switch, ART-NET vs sACN, configuración práctica con tabla de IPs y resolución de errores comunes
- Calculadora de iluminación escénica *(módulo 10)*: throw, cobertura del haz, lux, focos necesarios, carga eléctrica

### 🟣 Control DMX & MagicQ (`magicq.html`)
Consola de iluminación MagicQ de ChamSys.
- Interfaz completa: zonas de pantalla y funciones
- Setup y configuración inicial
- DMX y patch de fixtures
- Grupos, posiciones, paletas
- Cues & playbacks — con diagrama de flujo interactivo de programación
- Color, ejecutores, remote
- Calculadora DMX, referencia de sintaxis, tiempos de fade
- Glosario de programación, catálogo de focos

---

## Simuladores destacados

| Simulador | Suite · Tab | Descripción |
|---|---|---|
| **Triángulo de Exposición** | Vídeo · Óptica & DOF | Escena de concierto animada en canvas. Muestra motion blur (velocidad lenta), ruido digital (ISO alto) y cambios de luminosidad en tiempo real. Histograma, exposímetro EV ±3, regla de 180° y presets de luz. |
| **DOF avanzado** | Vídeo · Óptica & DOF | Vista fotográfica con bokeh simulado + vista de planta con escala métrica. 7 sensores con factor de recorte, f-stops clickables f/1.4–f/22, sujeto y fondo independientes, hiperfocal, 5 presets de producción. |
| **Temperatura de color** | Iluminación · Magnitudes | Slider continuo de Kelvin con visualización de tono de luz y ejemplos de fuentes reales. |
| **Perfil de haz** | Iluminación · Tipos de Focos | Comparativa SVG de perfiles Wash / Spot / Beam en función del ángulo y apertura. |
| **Bézier interactiva** | Illustrator · Pluma | Canvas con puntos de control arrastrables, visualización de tangentes y animación del parámetro t de Casteljau. |
| **Modelos de color** | Illustrator · Color | Canvas interactivo RGB / CMYK / HSB con mezcla en tiempo real. |
| **BPM sync** | Resolume | Calculadora de sincronización musical con detector de tempo y tabla de fracciones de beat. |
| **Flujo MagicQ** | MagicQ · Cues | Diagrama interactivo del flujo de programación: patch → grupos → posiciones → cues → playbacks → ejecutores. |

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
