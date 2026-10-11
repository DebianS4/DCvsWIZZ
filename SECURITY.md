# Política de seguridad

## Versiones soportadas

| Versión | Soporte |
| --- | --- |
| `v1.0.x` | Sí |
| Versiones anteriores | No garantizado |

## Reportar una vulnerabilidad

No publiques vulnerabilidades, claves, tokens ni datos personales en issues públicos. Abre un **Security Advisory privado** desde la pestaña **Security** del repositorio [DCvsWIZZ](https://github.com/DebianS4/DCvsWIZZ/security/advisories), incluyendo:

- descripción y pasos para reproducir;
- impacto estimado;
- versión o commit afectado;
- evidencia mínima, sin datos sensibles;
- propuesta de corrección, si existe.

Si no puedes abrir un advisory, contacta al propietario del repositorio mediante GitHub y no compartas credenciales en el reporte.

## Prácticas aplicadas

- El workflow de GitHub Actions usa `permissions: contents: read`.
- No se almacenan API keys, tokens ni contraseñas en el repositorio.
- La APK solicita únicamente el permiso `INTERNET` para enlaces y recursos externos.
- La aplicación carga el juego desde recursos locales incluidos en la APK.
- Las actualizaciones de Gradle y Actions se gestionan con Dependabot.
- Las descargas se sirven mediante HTTPS.
