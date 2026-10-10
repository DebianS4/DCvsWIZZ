# Plan de implementación — DC vs WiZZ

## Alcance y enfoque

Se creará una landing web estática, modular y lista para despliegue para **DC vs WiZZ**. Tendrá una experiencia de pelea arcade original: una interfaz explosiva de selección, combate y galería, inspirada en la energía de los arcades de lucha de los años 90, sin reproducir marcas, personajes, logotipos ni recursos protegidos de terceros.

El archivo `.zip` referido en el encargo no está disponible en el área de trabajo actual. Por ello, el primer entregable implementará una demo de combate funcional con arte gráfico CSS/Canvas propio y puntos de integración de assets. Al recibir el `.zip`, se inspeccionará su estructura, se moverán los recursos a `public/assets/` y se conectarán los sprites reales, incluidos `DCmuerto` y `Wizmuerto`, a la lógica de KO ya preparada.

## Arquitectura y entrega

- **Tecnología:** HTML semántico, CSS moderno y JavaScript sin dependencias.
- **Servidor local:** servidor Node ligero para desarrollo y vista previa en el puerto 3000.
- **Producción:** sitio estático publicado desde `public/` sin requerir backend.
- **Interacción:** JavaScript gestionará navegación anclada, selección de luchadores, simulación jugable, controles de teclado/táctiles, barras de vida, temporizador, KO y reinicio.
- **Sistema KO:** cada luchador tendrá estado `active` o `defeated`. Al llegar su vida a 0, la escena activará la variante visual derrotada; la misma interfaz se conectará a los sprites `DCmuerto` / `Wizmuerto` cuando estén disponibles.

## Estructura propuesta

```text
/public
  index.html                 Página única con hero, versus, combate y galería
  /css
    styles.css               Sistema visual, responsive y animaciones
  /js
    app.js                   Interacciones de sitio y navegación
    game.js                  Estado, controles y render del combate en canvas
  /assets
    README.md                Convención para assets extraídos del .zip
  manus-routes.json          Declaración de rutas
/package.json                Scripts de desarrollo y build estático
/server.js                   Servidor local mínimo
/app.config.ts               Metadatos del proyecto
/plan.md                     Plan y sistema de diseño
/TODO.md                     Resultados y criterios de entrega
```

## Sistema de diseño

### Movimiento de diseño

**Arcade de choque hipercinético:** una reinterpretación original de las pantallas de versus y máquinas de pelea, combinando cómic de alto contraste, neón y capas diagonales.

### Principios centrales

1. **Confrontación visible:** DC y WiZZ siempre se leen como rivales en polos opuestos.
2. **Jerarquía de impacto:** titulares grandes, controles inequívocos y bloques de contenido breves.
3. **Velocidad controlada:** diagonales, destellos y microanimaciones transmiten fuerza sin afectar legibilidad.
4. **Juego primero:** la sección jugable ocupa el centro de la experiencia y puede abrirse desde cualquier CTA.

### Filosofía de color

El negro profundo funciona como gabinete arcade y hace resaltar los colores de impacto. El azul eléctrico representa a DC, el rojo intenso representa a WiZZ, y el amarillo neón crea puntos de atención para acciones, temporizador, VS y KO. El magenta y morado se reservan para energía, transiciones y profundidad.

- Negro: `#07070E`
- Azul eléctrico: `#13A7FF`
- Rojo intenso: `#FF334F`
- Amarillo neón: `#FFE900`
- Magenta: `#EF3DFF`
- Morado: `#6E3CFF`

### Paradigma de composición

La página se organiza como una **secuencia de pantallas de combate** en lugar de una cuadrícula convencional: hero en diagonal, panel versus enfrentado, gabinete arcade central y cinta de capturas inclinada.

### Elementos distintivos

- **Cortes de cómic:** bordes irregulares y recortes `clip-path` para paneles y botones.
- **Rayo VS:** emblema central vibrante con oscilación y brillo.
- **Líneas de velocidad:** fondos estratificados que se desplazan lentamente y reaccionan a las acciones.

### Interacción y animación

Los botones producen destello y una sacudida contenida. La elección de un luchador cambia el foco de color de la interfaz. El combate responde a teclado y botones táctiles, con barras de vida, ataques, contador y estado KO. Se respetará `prefers-reduced-motion` para reducir los movimientos no esenciales.

### Tipografía

- **Titulares:** `Bangers` o una pila sans serif condensada de respaldo, en mayúsculas y con inclinación.
- **UI y datos:** `Barlow Condensed` / `Arial Narrow`, con números monoespaciados en el marcador.
- **Contraste:** bordes oscuros, sombra desplazada y espaciado compactado para una lectura arcade clara.

### Esencia de marca

> **DC vs WiZZ es una arena arcade de combate directo para jugadores que quieren entrar, elegir y pelear sin fricción.**

Personalidad: **eléctrica, desafiante, irreverente**.

### Voz de marca

Titulares y CTAs son breves, imperativos y competitivos.

- “EL CHOQUE DEFINITIVO DE MUNDOS.”
- “ELIGE. PELEA. DOMINA LA ARENA.”

### Marca y color firma

El wordmark propuesto es `DC // WiZZ`, con dos bloques contrapuestos y un corte amarillo en forma de rayo. El **Volt Strike Yellow (`#FFE900`)** será el color distintivo para ataques, CTAs y el emblema VS.

## Integración futura del archivo del juego

Cuando se proporcione el `.zip`:

1. Descomprimir e inventariar recursos y código existente.
2. Mantener o migrar a `public/assets/`, `public/css/` y `public/js/` según corresponda.
3. Localizar `DCmuerto` y `Wizmuerto` y registrar sus rutas en el módulo de personajes.
4. En la transición a KO, reemplazar el sprite de cada luchador por su sprite derrotado, conservando el estado final, las barras de vida y el resultado.
5. Conectar capturas reales al carrusel y el juego corregido al marco arcade.
