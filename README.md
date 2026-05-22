# SDC ERP - Versión ADMIN v3

Versión refactorizada del ERP de Soluciones Digitales Comayagua.

## Archivos principales

```text
index.html
assets/css/styles.css
assets/js/app.js
assets/js/firebase.js
manifest.json
sw.js
```

## Cambios de esta versión

- Login local por PIN de administrador.
- PIN configurado: `199311`.
- Modo Venta con flujo de facturación rápida.
- Historial de ventas con búsqueda, filtro por estado y exportación CSV.
- Edición de ventas: puedes cargar una venta anterior, agregar productos o cambiar cantidades si el cliente pide más.
- Ajuste inteligente de inventario por diferencia al editar ventas.
- Anulación de ventas con devolución de stock.
- Reenvío de ventas por WhatsApp.
- Dashboard financiero con ventas activas, costo vendido, ganancia real, ticket promedio, ventas de hoy y top producto.
- UI premium con login, tarjetas, chips de estado y controles móviles.
- Integración Firebase para productos y ventas.

## Importante sobre seguridad

El PIN está en el frontend para facilidad de uso. Esto sirve como bloqueo visual/simple, pero no es seguridad real contra usuarios técnicos. Para producción, protege Firestore con reglas de seguridad y Firebase Auth.

## Cómo probar localmente

Desde la carpeta del proyecto:

```bash
python -m http.server 8000
```

Luego abre:

```text
http://localhost:8000
```

