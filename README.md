<div align="center">

# AVV Lab — Animación Visual en Vivo

**Plataforma educativa interactiva para el módulo de Animación Visual en Vivo.**

Una suite de herramientas didácticas en HTML para el módulo de *Animación Visual en Vivo* (195h) del **Ciclo Formativo de Grado Medio en Vídeo DJ** — Conselleria d'Educació, Cultura i Esport · Comunitat Valenciana. Funciona sin conexión.

[![Abrir en el navegador](https://img.shields.io/badge/🌐_Abrir_en_el_navegador-141210?style=for-the-badge)](https://javitatay.github.io/AVV/)

</div>

---

## ¿Qué es AVV Lab?

AVV Lab reúne **6 herramientas educativas** en HTML independientes, accesibles desde una landing page central. Cada suite cubre un software o área temática del módulo y combina teoría, calculadoras interactivas, diagramas, simuladores, **mini-juegos de autoevaluación con feedback inmediato** y quizzes.

Todo funciona directamente en el navegador: **no necesita servidor, base de datos, dependencias externas ni crear ninguna cuenta**. Cada archivo es autocontenido y puede abrirse en local o desde GitHub Pages.

### Funciones principales

- 🧰 **6 suites temáticas** — Imagen & Vídeo, Diseño Vectorial, VJing & Resolume, Motion Graphics, Iluminación y Control DMX, accesibles desde una landing común.
- 🎮 **27 mini-juegos didácticos** — repartidos entre las suites, con feedback inmediato, sistema de puntos, barras de progreso y validación visual o numérica.
- 🧮 **Calculadoras y simuladores** — triángulo de exposición, DOF avanzado, BPM sync, temperatura de color, patch DMX, mezclador CMY y muchos más.
- 🔀 **Constructor de diagramas** — módulo drag-and-drop para crear esquemas de bloques AV con 25 dispositivos categorizados y exportación a JPG.
- 📖 **Glosario visual** — 54 términos técnicos con equivalencias EN/ES, buscador global y filtros por suite.
- 🧭 **Navegación flotante** — salta entre suites desde cualquier página, con retorno a la última suite visitada.
- 📴 **Funciona sin conexión**, ideal para usar en el aula, en proyección o en tablet.

---

## 🌐 Usar sin instalar nada

AVV Lab se usa directamente en el navegador, sin instalación:

👉 **[javitatay.github.io/AVV](https://javitatay.github.io/AVV/)**

Funciona igual en ordenador, proyector y tablet. Desde el navegador del móvil, además, puedes usar la opción **"Añadir a la pantalla de inicio"** para tenerlo siempre a mano.

---

## 🧩 Suites disponibles

| Suite | Contenido principal | UDs |
|---|---|---|
| 🎬 **Imagen & Vídeo** | Resolución, PPI, óptica, DOF, codecs, contenedores, NDI, señal AV | UD 1·2·3 |
| ✏️ **Diseño Vectorial** | Illustrator: pluma, Bézier, color, formas, tipografía, exportación | CFGM·DG |
| 🟢 **VJing & Resolume** | Interfaz, clips, efectos, outputs, BPM sync, blend modes, constructor de diagramas | UD 1·2·3 |
| 🔵 **Motion Graphics** | After Effects: keyframes, composición, efectos visuales, motion graphics | UD 2·3 |
| 💡 **Iluminación** | Magnitudes fotométricas, fuentes de luz, tipos de focos, rigging, DMX, redes IP | UD 4·5 |
| 🟣 **MagicQ · DMX** | Patch, grupos, paletas, cues, playbacks, ejecutores, sintaxis | EDU·V4 |

---

## 🎮 Mini-juegos didácticos

Cada suite incluye varios mini-juegos integrados en sus secciones temáticas, con barra de progreso, sistema de aciertos y feedback explicativo. Diseñados para autoevaluación rápida tras estudiar cada bloque.

### 🎬 Imagen & Vídeo (4 juegos)
- **🎮 Quiz Resoluciones** — identifica resolución, aspecto y uso típico a partir del nº de píxeles.
- **🎮 Progresivo o Entrelazado** — clip animado en canvas con efecto peine real (alteración pares/impares vía `getImageData`); identifica el tipo de señal.
- **🎮 Conecta el Conector** — drag & drop con 8 conectores (HDMI, SDI/BNC, DisplayPort, USB-C, RCA, XLR, Jack, RJ45) hacia 8 equipos profesionales.
- **🎮 Raster o Vectorial** — canvas con slider de zoom ×1–×10; el raster pixela visiblemente, el vectorial mantiene nitidez. Identifica el tipo.
- **🎮 Pixel Pitch Correcto** — 6 escenarios reales (estudio TV, festival, retail…); elige P1.5/P2/P3/P5/P10 aplicando la regla "distancia (m) ≈ pitch (mm)".

### ✏️ Diseño Vectorial (4 juegos)
- **🎨 Rueda de Armonías Cromáticas** — SVG interactivo de 360 sectores; arrastra el selector y elige armonía (complementaria, análoga, triádica, tetrádica, split, monocromática). Genera colores con HEX/RGB/HSL.
- **🎯 Tutorial Guiado de Pluma** — canvas con 4 niveles (línea, S, círculo, letra C); haz trazados con clic/clic+arrastrar viendo los mangos en tiempo real, con guía superpuesta opcional.
- **🎮 Identifica la Operación Booleana** — 8 retos del Buscatrazos: ves dos formas y el resultado, eliges entre Unir/Menos frente/Intersección/Excluir.
- **⏱ Pulsa el Atajo Correcto** — 15 retos cronometrados (5s/reto) con 24 atajos reales de Illustrator; sistema de puntos +10/−5.

### 🟢 VJing & Resolume (5 juegos)
- **🎮 Blend Mode Match** — tres canvas (capa A, capa B, resultado) con fórmulas reales de fusión calculadas píxel a píxel (Add, Multiply, Screen, Overlay).
- **🎮 BPM Tap Trainer** — anillo visual pulsando al BPM objetivo (110/120/128/140/174); sincroniza 8 taps consecutivos dentro de ±5 BPM.
- **🎮 Identifica el Efecto** — canvas con efectos reales aplicados: Blur (box blur), Mosaic/Pixelate, Kaleidoscope (4 espejos), Invert, Edge Detection (Sobel).
- **🎮 Pulsa el Atajo de Resolume** — 15 retos cronometrados con atajos reales (Bypass, Tap BPM, Trigger column, Solo monitor, Quick Access…).
- **🎮 Triggea el Clip Correcto** — rejilla 4×4 de clips con thumbnails únicos; te piden uno por nombre o coordenada (A1, B3…) con 4s de límite.

### 🔵 Motion Graphics & After Effects (5 juegos)
- **🎮 Brazo Robótico** — 4 retos de cinemática inversa manual; brazo de 3 segmentos con jerarquía real (cada hijo hereda rotación del padre). Coloca la mano en el target con tolerancia ±15px.
- **🎮 Identifica el Modo de Fusión** — variante AE del blend mode match con 6 retos.
- **🎮 Match Properties** — capa objetivo vs tu capa; ajusta Position X/Y, Scale, Rotation y Opacity hasta alcanzar ≥90% de similitud (cálculo por error medio normalizado).
- **🎮 Ordena la Timeline** — 4 escenas con drag-and-drop nativo; lee la composición y ordena las capas según orden Z (capa 1 = arriba/delante).
- **🎮 Identifica el Text Animator** — animación canvas en vivo del texto "AFTER EFFECTS" letra a letra con efectos reales: Wiggle, Range, Opacity, Scale, Rotation.

### 💡 Iluminación (4 juegos · más quiz Redes IP)
- **🎮 Identifica la Dirección de Luz** — 5 retos con escena SVG de personaje iluminado; sombras y haz cambian dinámicamente según frontal/contra/lateral/cenital/nadir.
- **🎮 Adivina los Kelvin** — 6 escenas teñidas con presets reales (1800K vela, 3200K tungsteno, 4000K LED neutro, 5600K HMI, 7000K día nublado…) usando algoritmo Tanner Helland K→RGB.
- **🎮 Identifica el Foco** — 6 retos con SVG vectorial mostrando silueta + perfil de haz; cada foco tiene su lente característica visible (anillos Fresnel, cuchillas Profile, LEDs Wash…).
- **🎮 Detecta el Peligro** — auditoría de seguridad sobre escena de truss con 6 fallos: foco sin safety, garra mal apretada, cable mal pasado, sin cadena 2ª, sobrecarga eléctrica, técnico sin EPIs.

### 🟣 MagicQ · DMX (5 juegos · más constructor de Patch)
- **🎮 Calcula la Dirección DMX** — 6 retos con la fórmula `start + (n-1) × canales`; te dan fixture, canales y nº y calculas la dirección.
- **🎮 Parchea las Luces** — 3 escenarios crecientes (4 → 5 → 7 fixtures); asignas direcciones DMX y la barra detecta solapamientos visualmente, con animación de conflicto.
- **🎮 Mezclador CMY** — sliders Cyan/Magenta/Yellow con fórmula sustractiva real (`R = 255×(1−C/100)` etc.); reproduce el color objetivo con ≥90% de similitud (distancia euclídea RGB).
- **🎮 Construye el Comando** — 8 retos con sintaxis MagicQ real (`Group 1 @ 50 Enter`, `Record Cue 3 Time 4 Enter`…); arrastras tokens y se valida orden + contenido exacto.
- **🎮 Elige el Foco Correcto** — 6 escenarios reales (concierto pop, teatro, danza, festival, plató TV, discoteca); el sistema distingue alternativa razonable de respuesta correcta.

---

## 🧪 Simuladores destacados

| Simulador | Suite · Tab | Descripción |
|---|---|---|
| **Triángulo de Exposición** | Vídeo · Óptica & DOF | Escena de concierto animada en canvas. Muestra motion blur (velocidad lenta), ruido digital (ISO alto) y cambios de luminosidad en tiempo real. Histograma, exposímetro EV ±3, regla de 180° y presets de luz. |
| **DOF avanzado** | Vídeo · Óptica & DOF | Vista fotográfica con bokeh simulado + vista de planta con escala métrica. 7 sensores con factor de recorte, f-stops clickables f/1.4–f/22, sujeto y fondo independientes, hiperfocal, 5 presets de producción. |
| **Temperatura de color** | Iluminación · Magnitudes | Slider continuo de Kelvin con visualización de tono de luz y ejemplos de fuentes reales. |
| **Perfil de haz** | Iluminación · Tipos de Focos | Comparativa SVG de perfiles Wash / Spot / Beam en función del ángulo y la apertura. |
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

## 📚 Contenido por suite

### 🎬 Imagen & Vídeo (`video.html`)
Fundamentos técnicos de la imagen digital y la señal de vídeo.
- Resolución, PPI, MCD, DAR/SAR/PAR — con calculadora y comparativa visual SVG a escala.
- Óptica: distancia focal, DOF con simulador avanzado (7 sensores, f-stops reales, vistas fotográfica y de planta con bokeh, escala métrica, hiperfocal, 5 presets de producción).
- **Triángulo de exposición** — simulador interactivo con escena de concierto animada: motion blur por velocidad lenta, ruido digital por ISO alto, overlay de luminosidad, histograma animado, exposímetro EV, regla de 180° y presets de condición de luz (Noche · Interior · Nublado · Exterior · Brillante).
- Señal de vídeo: progresivo vs entrelazado, espacio de color, gamma, alpha — con juego de identificación.
- Conectores, HDCP, codecs de vídeo y audio, codecs VJ/Live — con drag & drop de conectores.
- Árbol de decisión interactivo para selección de codec.
- NDI: versiones, modos, herramientas, caso práctico.
- Distribución & Routing: constructor de diagramas con 25 dispositivos y cables bezier.
- Proyección: throw distance, luminancia, lentes.
- Pantallas LED & Mapping: cálculo de píxeles, nits, mapping — con juego de pixel pitch.

### ✏️ Diseño Vectorial (`illustrator.html`)
Adobe Illustrator orientado a diseño para espectáculos y producciones audiovisuales.
- Entorno de trabajo, paneles, mesas de trabajo.
- Vectores: trazados, operaciones booleanas, alineación — con juego Pathfinder.
- Color: RGB/CMYK/HSB con canvas interactivo + rueda de armonías cromáticas (complementaria, análoga, triádica, tetrádica, split, monocromática).
- Pluma y curvas Bézier con canvas interactivo arrastrable + tutorial guiado de 4 niveles.
- Tipografía, texto en trazado, degradados, transparencias.
- Exportación e impresión, atajos de teclado con juego cronometrado, glosario.

### 🟢 VJing & Resolume Arena (`resolume.html`)
Software de VJing y projection mapping en tiempo real.
- Interfaz, deck, capa, composición.
- Setup: audio, MIDI, OSC, DMX.
- Clips: formatos, gestión, propiedades — con juego "Triggea el Clip".
- BPM sync: sincronización música-imagen con simulador interactivo + Tap Trainer cronometrado.
- Blend modes — con juego de identificación visual.
- Efectos — con juego "Identifica el Efecto" (renderizado real en canvas).
- Calculadora de throw distance y lúmenes para proyección.
- Constructor de diagramas drag-and-drop, atajos con juego cronometrado, glosario.

### 🔵 Motion Graphics & After Effects (`after-effects.html`)
Composición, animación y efectos visuales.
- Interfaz y flujo de trabajo.
- Capas: tipos, propiedades — con juego "Match Properties".
- Modos de fusión — con juego de identificación visual.
- Keyframes y curvas de animación.
- Parenting jerárquico — con simulador "Brazo Robótico" de 3 segmentos.
- Timeline y orden Z — con juego de drag & drop "Ordena la Timeline".
- Texto y animators — con juego de identificación animada en canvas.
- Efectos, presets, motion graphics, shapes.
- Composición, precomps, render y exportación.
- Atajos, referencia, ejercicios.

### 💡 Iluminación de Espectáculos (`iluminacion.html`)
Fundamentos de iluminación técnica para escenarios.
- Física de la luz: magnitudes, dirección de la luz con juego de identificación, temperatura de color con simulador interactivo + juego "Adivina los Kelvin".
- Fuentes de luz: incandescente, halógena, dicroica, fluorescente, HMI, LED.
- Tipos de focos: PAR, Fresnel, PC, recortes, moving heads — con diagrama SVG de perfiles de haz + juego "Identifica el Foco".
- Cabezas móviles: Wash, Spot, Beam — diferencias y simulador visual.
- Atributos y canales de control: dimmer, pan/tilt, color, zoom, gobo, prisma — con constructor de fixture.
- Rigging: estructuras, sujeción, elevación, electricidad trifásica — con juego "Detecta el Peligro" (auditoría de seguridad).
- Protocolo DMX: canales, address, cables, librerías, splitters, nodos, patch visual, calculadora, ART-NET — con simuladores integrados.
- **Redes IP** *(módulo 9)*: fundamentos para no iniciados — qué es una red (analogía del barrio), dirección IP, subred y máscara, router vs switch, ART-NET vs sACN, configuración práctica con tabla de IPs y resolución de errores comunes — con quiz "¿Misma Red?".
- Calculadora de iluminación escénica *(módulo 10)*: throw, cobertura del haz, lux, focos necesarios, carga eléctrica.

### 🟣 Control DMX & MagicQ (`magicq.html`)
Consola de iluminación MagicQ de ChamSys.
- Interfaz completa: zonas de pantalla y funciones.
- Setup y configuración inicial.
- DMX y patch de fixtures — con juego de cálculo de dirección y simulador "Parchea las Luces".
- Grupos, posiciones, paletas.
- Cues & playbacks — con diagrama de flujo interactivo de programación + juego "Construye el Comando".
- Color — con mezclador CMY sustractivo y reto de igualar colores objetivo.
- Ejecutores, remote.
- Calculadora DMX, referencia de sintaxis, tiempos de fade.
- Glosario de programación, catálogo de focos — con juego "Elige el Foco Correcto".

---

## 🛠️ Para desarrolladores

AVV Lab está construido con **HTML, CSS y JavaScript vanilla**: sin frameworks, sin npm, sin build step. Cada suite es un archivo `.html` autocontenido que funciona de forma independiente, y todo el conjunto se sirve como sitio estático mediante GitHub Pages.

```
index.html              · landing page — acceso a todas las suites
video.html              · suite Imagen & Vídeo
illustrator.html        · suite Diseño Vectorial (Illustrator)
resolume.html           · suite VJing & Projection Mapping (Resolume Arena)
after-effects.html      · suite Motion Graphics & Composición (After Effects)
iluminacion.html        · suite Iluminación de Espectáculos
magicq.html             · suite Control DMX & Consola de Luz (MagicQ)
```

**Detalles técnicos**
- Tipografía: Inter (Google Fonts) con fallback a fuentes del sistema; JetBrains Mono para código y valores técnicos.
- Diseño responsive adaptado a ordenador, proyector y tablet.
- Barra de navegación flotante con retorno a la última suite visitada (`sessionStorage`).
- 9 diagramas SVG/canvas interactivos clicables distribuidos entre las suites.

Para probarlo en local, clona el repositorio y abre cualquier archivo `.html` directamente en el navegador:

```bash
git clone https://github.com/javitatay/AVV.git
cd AVV
open index.html   # macOS — o simplemente arrastra el archivo al navegador
```

O sirve la carpeta con cualquier servidor estático:

```bash
python3 -m http.server 8080
# y abrir http://localhost:8080
```

---

## 🎓 Contexto curricular

| Campo | Detalle |
|---|---|
| **Módulo** | Animación Visual en Vivo (AVV) |
| **Código** | IMSE0111 |
| **Horas** | 195h |
| **Ciclo** | CFGM Vídeo DJ — 2º curso |
| **Marco** | LOE / FP Grado Medio |
| **Comunidad** | Comunitat Valenciana |

---

## 📄 Licencia

AVV Lab se distribuye bajo la licencia **[GNU General Public License v3.0](LICENSE)**.

Eres libre de usar, estudiar, modificar y compartir este software. La única condición importante es que, si distribuyes una versión modificada, debe mantenerse también como código abierto bajo esta misma licencia, para que las mejoras sigan estando disponibles para todos.

[![Licencia: GPL v3](https://img.shields.io/badge/Licencia-GPLv3-c89838?style=flat-square)](LICENSE)

---

## ✉️ Contacto

**Javier Tatay Rubio** · Profesor del módulo
📧 j.tatayrubio@edu.gva.es

---

<div align="center">
<sub>Material docente de uso educativo · AVV Lab · 2026</sub>
</div>
