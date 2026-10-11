# DC vs WiZZ

[![Build APK](https://github.com/DebianS4/DCvsWIZZ/actions/workflows/android.yml/badge.svg)](https://github.com/DebianS4/DCvsWIZZ/actions/workflows/android.yml)
[![Latest APK](https://img.shields.io/github/v/release/DebianS4/DCvsWIZZ?label=APK&logo=android)](https://github.com/DebianS4/DCvsWIZZ/releases/latest)
[![Website](https://img.shields.io/badge/website-arcade-13a7ff)](https://3000-ix80hq8qdffndiosddthl-776f1337.us1.manus.computer)
[![License](https://img.shields.io/badge/license-private-lightgrey)](https://github.com/DebianS4/DCvsWIZZ)

Arcade fighter remasterizado **DC vs WiZZ**, con página promocional, juego web completo, cinemática especial de Miguel, entrada de Wero y Yiyo, y envoltura Android con icono propio.

## Descargar la APK

- **[Descargar DCvsWIZZ APK desde la página](https://3000-ix80hq8qdffndiosddthl-776f1337.us1.manus.computer/downloads/DCvsWIZZ.apk)**
- **[Abrir releases de GitHub](https://github.com/DebianS4/DCvsWIZZ/releases)**

La APK se instala en dispositivos Android compatibles. Puede ser necesario habilitar la instalación desde fuentes externas en el dispositivo.

## Contenido

- Landing arcade responsiva con la portada `portada.jpg` de Drive y el arte de DC y WiZZ.
- Juego integrado en gabinete arcade.
- Selección de luchador con los artes `p1` y `p2`.
- Combates normales con los lados del jugador e IA fijados.
- Jefe Miguel con escenario nocturno, tres rayos, entrada lenta de Yiyo y diálogo: “¡VETE A LA ÑONGA, MIGUEL!”.
- Sprites de K.O. `DCmuerto` y `wizmuerto`.
- APK Android con icono DC vs WiZZ y recursos web incluidos.

## Desarrollo web

```bash
npm install
npm run dev
```

La página se sirve en `http://localhost:3000`.

## Compilar la APK

Requiere Java 17, Android SDK Platform 35 y Build Tools 35.0.0.

```bash
cd android
./gradlew assembleDebug
```

El resultado se genera en:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

El workflow de GitHub Actions compila la APK firmada de instalación en cada push a `main` y permite descargarla como artefacto desde la pestaña **Actions**.

## Estructura

- `public/`: página, estilos, juego y recursos.
- `android/`: aplicación Android nativa que carga los recursos locales del juego.
- `.github/workflows/android.yml`: compilación automática de la APK.
