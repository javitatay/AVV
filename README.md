# AVV Lab — Animación Visual en Vivo

**Plataforma educativa interactiva** para el módulo de *Animación Visual en Vivo* (195h) del **Ciclo Formativo de Grado Medio en Video DJ** — Conselleria d'Educació, Cultura i Esport · Comunitat Valenciana.

🌐 **[javitatay.github.io/AVV](https://javitatay.github.io/AVV/)**

---

## Descripción

AVV Lab es una suite de 6 herramientas educativas en HTML independientes, accesibles desde una landing page central. Cada suite cubre un software o área temática del módulo, con contenido teórico, calculadoras interactivas, diagramas, simuladores, **mini-juegos de autoevaluación con feedback inmediato** y quizzes.

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
- **Mini-juegos didácticos** — 27 juegos de autoevaluación distribuidos entre las 6 suites, con feedback inmediato, sistema de puntos, barras de progreso y validación visual o numérica de las respuestas.
- **Constructor de diagramas** — módulo drag-and-drop en Resolume para crear diagramas de bloques AV con 25 dispositivos categorizados, cables SVG bezier y exportación JPG.

---

## Mini-juegos didácticos

Cada suite incluye varios mini-juegos integrados en sus secciones temáticas, con barra de progreso, sistema de aciertos y feedback explicativo. Diseñados para autoevaluación rápida tras estudiar cada bloque.

### 🎬 Imagen & Vídeo (4 juegos)
- **🎮 Quiz Resoluciones** — identifica resolución, aspecto y uso típico a partir del nº de píxeles
- **🎮 Progresivo o Entrelazado** — clip animado en canvas con efecto peine real (alteración pares/impares vía `getImageData`); identifica el tipo de señal
- **🎮 Conecta el Conector** — drag & drop con 8 conectores (HDMI, SDI/BNC, DisplayPort, USB-C, RCA, XLR, Jack, RJ45) hacia 8 equipos profesionales
- **🎮 Raster o Vectorial** — canvas con slider de zoom ×1–×10; raster pixela visiblemente, vectorial mantiene nitidez. Identifica el tipo
- **🎮 Pixel Pitch Correcto** — 6 escenarios reales (estudio TV, festival, retail…); elige P1.5/P2/P3/P5/P10 aplicando la regla "distancia (m) ≈ pitch (mm)"

### ✏️ Diseño Vectorial (4 juegos)
- **🎨 Rueda de Armonías Cromáticas** — SVG interactivo de 360 sectores; arrastra el selector y elige armonía (complementaria, análoga, triádica, tetrádica, split, monocromática). Genera colores con HEX/RGB/HSL
- **🎯 Tutorial Guiado de Pluma** — canvas con 4 niveles (línea, S, círculo, letra C); haz trazados con clic/clic+arrastrar viendo los mangos en tiempo real, con guía superpuesta opcional
- **🎮 Identifica la Operación Booleana** — 8 retos del Buscatrazos: ves dos formas y el resultado, eliges entre Unir/Menos frente/Intersección/Excluir
- **⏱ Pulsa el Atajo Correcto** — 15 retos cronometrados (5s/reto) con 24 atajos reales de Illustrator; sistema de puntos +10/−5

### 🟢 VJing & Resolume (5 juegos)
- **🎮 Blend Mode Match** — tres canvas (capa A, capa B, resultado) con fórmulas reales de fusión calculadas píxel a píxel (Add, Multiply, Screen, Overlay)
- **🎮 BPM Tap Trainer** — anillo visual pulsando al BPM objetivo (110/120/128/140/174); el alumno debe sincronizar 8 taps consecutivos dentro de ±5 BPM
- **🎮 Identifica el Efecto** — canvas con efectos reales aplicados: Blur (box blur), Mosaic/Pixelate, Kaleidoscope (4 espejos), Invert, Edge Detection (Sobel)
- **🎮 Pulsa el Atajo de Resolume** — 15 retos cronometrados con atajos reales (Bypass, Tap BPM, Trigger column, Solo monitor, Quick Access…)
- **🎮 Triggea el Clip Correcto** — rejilla 4×4 de clips con thumbnails únicos; te piden uno por nombre o coordenada (A1, B3…) con 4s de límite

### 🔵 Motion Graphics & After Effects (5 juegos)
- **🎮 Brazo Robótico** — 4 retos de cinemática inversa manual; brazo de 3 segmentos con jerarquía real (cada hijo hereda rotación del padre). Coloca la mano en el target con tolerancia ±15px
- **🎮 Identifica el Modo de Fusión** — variante AE del blend mode match con 6 retos
- **🎮 Match Properties** — capa objetivo vs tu capa; ajusta Position X/Y, Scale, Rotation y Opacity hasta alcanzar ≥90% de similitud (cálculo por error medio normalizado)
- **🎮 Ordena la Timeline** — 4 escenas con drag-and-drop nativo; lee la composición y ordena las capas según orden Z (capa 1 = arriba/delante)
- **🎮 Identifica el Text Animator** — animación canvas en vivo del texto "AFTER EFFECTS" letra a letra con efectos reales: Wiggle, Range, Opacity, Scale, Rotation

### 💡 Iluminación (4 juegos · más quiz Redes IP existente)
- **🎮 Identifica la Dirección de Luz** — 5 retos con escena SVG de personaje iluminado; sombras y haz cambian dinámicamente según frontal/contra/lateral/cenital/nadir
- **🎮 Adivina los Kelvin** — 6 escenas teñidas con presets reales (1800K vela, 3200K tungsteno, 4000K LED neutro, 5600K HMI, 7000K día nublado…) usando algoritmo Tanner Helland K→RGB
- **🎮 Identifica el Foco** — 6 retos con SVG vectorial mostrando silueta + perfil de haz; cada foco tiene su lente característica visible (anillos Fresnel, cuchillas Profile, LEDs Wash…)
- **🎮 Detecta el Peligro** — auditoría de seguridad sobre escena de truss con 6 fallos: foco sin safety, garra mal apretada, cable mal pasado, sin cadena 2ª, sobrecarga eléctrica, técnico sin EPIs

### 🟣 MagicQ · DMX (5 juegos · más constructor de Patch existente)
- **🎮 Calcula la Dirección DMX** — 6 retos con la fórmula `start + (n-1) × canales`; te dan fixture, canales y nº y calculas la dirección
- **🎮 Parchea las Luces** — 3 escenarios crecientes (4 → 5 → 7 fixtures); asignas direcciones DMX y la barra detecta solapamientos visualmente, con animación de conflicto
- **🎮 Mezclador CMY** — sliders Cyan/Magenta/Yellow con fórmula sustractiva real (`R = 255×(1−C/100)` etc.); reproduce el color objetivo con ≥90% de similitud (distancia euclídea RGB)
- **🎮 Construye el Comando** — 8 retos con sintaxis MagicQ real (`Group 1 @ 50 Enter`, `Record Cue 3 Time 4 Enter`…); arrastras tokens y se valida orden + contenido exacto
- **🎮 Elige el Foco Correcto** — 6 escenarios reales (concierto pop, teatro, danza, festival, plató TV, discoteca); el sistema distingue alternativa razonable de respuesta correcta

---

## Contenido por suite

### 🎬 Imagen & Vídeo (`video.html`)
Fundamentos técnicos de la imagen digital y la señal de vídeo.
- Resolución, PPI, MCD, DAR/SAR/PAR — con calculadora y comparativa visual SVG a escala
- Óptica: distancia focal, DOF con simulador avanzado (7 sensores, f-stops reales, vistas fotográfica y de planta con bokeh, escala métrica, hiperfocal, 5 presets de producción)
- **Triángulo de exposición** — simulador interactivo con escena de concierto animada: motion blur por velocidad lenta, ruido digital por ISO alto, overlay de luminosidad, histograma animado, exposímetro EV, regla de 180° y presets de condición de luz (Noche · Interior · Nublado · Exterior · Brillante)
- Señal de vídeo: progresivo vs entrelazado, espacio de color, gamma, alpha — con juego de identificación
- Conectores, HDCP, codecs de vídeo y audio, codecs VJ/Live — con drag & drop de conectores
- Árbol de decisión interactivo para selección de codec
- NDI: versiones, modos, herramientas, caso práctico
- Distribución & Routing: constructor de diagramas con 25 dispositivos y cables bezier
- Proyección: throw distance, luminancia, lentes
- Pantallas LED & Mapping: cálculo de píxeles, nits, mapping — con juego de pixel pitch

### ✏️ Diseño Vectorial (`illustrator.html`)
Adobe Illustrator orientado a diseño para espectáculos y producciones audiovisuales.
- Entorno de trabajo, paneles, mesas de trabajo
- Vectores: trazados, operaciones booleanas, alineación — con juego Pathfinder
- Color: RGB/CMYK/HSB con canvas interactivo + rueda de armonías cromáticas (complementaria, análoga, triádica, tetrádica, split, monocromática)
- Pluma y curvas Bézier con canvas interactivo arrastrable + tutorial guiado de 4 niveles
- Tipografía, texto en trazado, degradados, transparencias
- Exportación e impresión, atajos de teclado con juego cronometrado, glosario

### 🟢 VJing & Resolume Arena (`resolume.html`)
Software de VJing y projection mapping en tiempo real.
- Interfaz, deck, capa, composición
- Setup: audio, MIDI, OSC, DMX
- Clips: formatos, gestión, propiedades — con juego "Triggea el Clip"
- BPM sync: sincronización música-imagen con simulador interactivo + Tap Trainer cronometrado
- Blend modes — con juego de identificación visual
- Efectos — con juego "Identifica el Efecto" (renderizado real en canvas)
- Calculadora de throw distance y lúmenes para proyección
- Constructor de diagramas drag-and-drop, atajos con juego cronometrado, glosario

### 🔵 Motion Graphics & After Effects (`after-effects.html`)
Composición, animación y efectos visuales.
- Interfaz y flujo de trabajo
- Capas: tipos, propiedades — con juego "Match Properties"
- Modos de fusión — con juego de identificación visual
- Keyframes y curvas de animación
- Parenting jerárquico — con simulador "Brazo Robótico" de 3 segmentos
- Timeline y orden Z — con juego de drag & drop "Ordena la Timeline"
- Texto y animators — con juego de identificación animada en canvas
- Efectos, presets, motion graphics, shapes
- Composición, precomps, render y exportación
- Atajos, referencia, ejercicios

### 💡 Iluminación de Espectáculos (`iluminacion.html`)
Fundamentos de iluminación técnica para escenarios.
- Física de la luz: magnitudes, dirección de la luz con juego de identificación, temperatura de color con simulador interactivo + juego "Adivina los Kelvin"
- Fuentes de luz: incandescente, halógena, dicroica, fluorescente, HMI, LED
- Tipos de focos: PAR, Fresnel, PC, recortes, moving heads — con diagrama SVG de perfiles de haz + juego "Identifica el Foco"
- Cabezas móviles: Wash, Spot, Beam — diferencias y simulador visual
- Atributos y canales de control: dimmer, pan/tilt, color, zoom, gobo, prisma — con constructor de fixture
- Rigging: estructuras, sujeción, elevación, electricidad trifásica — con juego "Detecta el Peligro" (auditoría de seguridad)
- Protocolo DMX: canales, address, cables, librerías, splitters, nodos, patch visual, calculadora, ART-NET — con simuladores integrados
- **Redes IP** *(módulo 9)*: fundamentos para no iniciados — qué es una red (analogía del barrio), dirección IP, subred y máscara, router vs switch, ART-NET vs sACN, configuración práctica con tabla de IPs y resolución de errores comunes — con quiz "¿Misma Red?"
- Calculadora de iluminación escénica *(módulo 10)*: throw, cobertura del haz, lux, focos necesarios, carga eléctrica

### 🟣 Control DMX & MagicQ (`magicq.html`)
Consola de iluminación MagicQ de ChamSys.
- Interfaz completa: zonas de pantalla y funciones
- Setup y configuración inicial
- DMX y patch de fixtures — con juego de cálculo de dirección y simulador "Parchea las Luces"
- Grupos, posiciones, paletas
- Cues & playbacks — con diagrama de flujo interactivo de programación + juego "Construye el Comando"
- Color — con mezclador CMY sustractivo y reto de igualar colores objetivo
- Ejecutores, remote
- Calculadora DMX, referencia de sintaxis, tiempos de fade
- Glosario de programación, catálogo de focos — con juego "Elige el Foco Correcto"

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
| **Rueda de armonías** | Illustrator · Color | SVG de 360 sectores con generación automática de armonías cromáticas y valores HEX/RGB/HSL. |
| **Tutorial Pluma** | Illustrator · Pluma | Canvas con 4 niveles para reproducir trazados (línea, S, círculo, C) usando puntos de esquina y curvas con mangos. |
| **Brazo Robótico** | After Effects · Parenting | Cinemática inversa manual con 3 segmentos jerárquicos; las rotaciones se acumulan padre→hijo. |
| **Match Properties** | After Effects · Propiedades | Validación de igualdad entre dos capas mediante 5 sliders y cálculo de similitud normalizado. |
| **BPM sync** | Resolume | Calculadora de sincronización musical con detector de tempo y tabla de fracciones de beat. |
| **BPM Tap Trainer** | Resolume · Audio | Anillo visual al ritmo objetivo; mide la sincronización del usuario con `performance.now()` sobre 8 taps. |
| **Mezclador CMY** | MagicQ · Color | Mezcla sustractiva real con sliders C/M/Y; cálculo de similitud al objetivo por distancia euclídea RGB. |
| **Parchea las Luces** | MagicQ · DMX | Asignación de direcciones DMX con detección visual de solapamientos y comprobación de overflow del canal 512. |
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
