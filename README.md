# SDC ERP - versión separada

Esta versión separa el archivo original en una estructura más mantenible:

```
index.html
assets/css/styles.css
assets/js/app.js
assets/js/firebase.js
manifest.json
sw.js
```

## Cambios principales

- El CSS salió del `<style>` y ahora está en `assets/css/styles.css`.
- La lógica principal salió del HTML y ahora está en `assets/js/app.js`.
- La configuración y funciones de Firebase están en `assets/js/firebase.js`.
- Se agregó `manifest.json` y `sw.js` para que el enlace PWA no quede apuntando a archivos inexistentes.
- Se mejoró la carga inicial: si Firebase no responde rápido, la app intenta usar datos guardados en `localStorage` en vez de quedarse cargando indefinidamente.
- Las imágenes de catálogo ahora tienen `alt` y `loading="lazy"`.

## Cómo probar

Abre `index.html` desde un servidor local. Por ejemplo:

```bash
python -m http.server 8000
```

Luego entra a `http://localhost:8000`.

> Nota: para publicar, revisa las reglas de seguridad de Firebase. La configuración pública de Firebase no es una contraseña, pero las reglas sí determinan quién puede leer o escribir datos.
