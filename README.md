# DC vs WiZZ

[![Build APK](https://github.com/DebianS4/DCvsWIZZ/actions/workflows/android.yml/badge.svg)](https://github.com/DebianS4/DCvsWIZZ/actions/workflows/android.yml)
[![Latest APK](https://img.shields.io/github/v/release/DebianS4/DCvsWIZZ?label=APK&logo=android)](https://github.com/DebianS4/DCvsWIZZ/releases/latest)
[![APK Download](https://img.shields.io/badge/download-APK-34a853?logo=android&logoColor=white)](https://github.com/DebianS4/DCvsWIZZ/releases/download/v1.0.0/DCvsWIZZ.apk)
[![Website](https://img.shields.io/badge/website-arcade-13a7ff)](https://github.com/DebianS4/DCvsWIZZ)
[![Security](https://img.shields.io/badge/security-SECURITY.md-2ea44f)](SECURITY.md)
[![License](https://img.shields.io/badge/license-public-lightgrey)](https://github.com/DebianS4/DCvsWIZZ)

![Portada DC vs WiZZ](public/assets/portada.jpg)

**DC vs WiZZ** es un arcade fighter remasterizado con página promocional, juego web completo, cinemática especial de Miguel, entrada de Wero y Yiyo, y una aplicación Android con icono propio.

## Enlaces principales

- **[Visitar la página](https://github.com/DebianS4/DCvsWIZZ)**
- **[Descargar la APK](https://github.com/DebianS4/DCvsWIZZ/releases/download/v1.0.0/DCvsWIZZ.apk)**
- **[Ver la release v1.0.0](https://github.com/DebianS4/DCvsWIZZ/releases/tag/v1.0.0)**
- **[Ver el repositorio](https://github.com/DebianS4/DCvsWIZZ)**

La APK está firmada para instalación de prueba en Android. Puede ser necesario habilitar la instalación desde fuentes externas en el dispositivo.

## Contenido

- Landing arcade responsiva con portada e identidad visual DC vs WiZZ.
- Juego integrado en gabinete arcade.
- Selección de luchador con los artes `p1` y `p2`.
- Combates normales con los lados del jugador e IA fijados.
- Jefe Miguel con escenario nocturno, tres rayos, entrada lenta de Yiyo y diálogo: “¡VETE A LA ÑONGA, MIGUEL!”.
- Sprites de K.O. `DCmuerto` y `wizmuerto`.
- APK Android con icono basado en `logo.png` y recursos web incluidos.

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

El workflow de GitHub Actions compila la APK en cada push a `main` y permite descargarla como artefacto desde la pestaña **Actions**.

## Seguridad

Consulta la [política de seguridad](SECURITY.md) para reportar vulnerabilidades. El proyecto mantiene permisos mínimos en Android, no incluye claves secretas en el código y configura el workflow con `contents: read`. Las dependencias y acciones de GitHub se revisan mediante Dependabot.

## Estructura

- `public/`: página, estilos, juego y recursos.
- `android/`: aplicación Android nativa que carga los recursos locales del juego.
- `.github/workflows/android.yml`: compilación automática de la APK.
- `.github/dependabot.yml`: actualizaciones automáticas de Gradle y GitHub Actions.
- `SECURITY.md`: proceso de reporte y prácticas de seguridad.
