# SDC ERP refactorizado

Proyecto separado en HTML, CSS y JavaScript.

## Archivos principales

- `index.html`: estructura de la aplicación.
- `assets/css/styles.css`: apariencia premium, tarjetas, modal y footer.
- `assets/js/app.js`: lógica de catálogo, carrito, ventas, cotizaciones e inventario.
- `assets/js/firebase.js`: conexión a Firebase/Firestore.
- `manifest.json` y `sw.js`: soporte básico PWA.

## Cambios de esta versión

- UI más premium con bordes suaves, sombras, mejor tipografía y tarjetas más limpias.
- Footer estático dentro del layout, sin tapar el scroll.
- Modal de producto optimizado con imagen `object-fit: contain`.
- Promociones como botones interactivos que ajustan la cantidad mínima del descuento.
- Nueva pestaña **Ventas** con historial de ventas facturadas.
- Lectura del historial desde la colección `ventas` de Firebase, con respaldo en `localStorage`.
- Estados vacíos para cotizaciones y ventas.
- Cierre de modales tocando fuera o presionando `Escape`.
- Limpieza de estructura para evitar elementos sobrantes al final de la página.

## Probar localmente

Ejecuta desde la carpeta del proyecto:

```bash
python -m http.server 8000
```

Luego abre:

```text
http://localhost:8000
```

> Nota: Firebase requiere conexión a internet y reglas de Firestore compatibles con lectura/escritura en `productos` y `ventas`.
