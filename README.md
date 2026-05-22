# SDC ERP ADMIN v7 Final

Versión con branding SDC Comayagua, PIN de administrador, catálogo premium, modo venta, ventas editables, facturación, tickets, PWA y Firebase.

## PIN
199311

## Novedades v7
- Logo real integrado en login, header, factura, ficha de producto, PWA y ticket.
- Pantalla de carga tipo splash.
- Favicon e íconos PWA personalizados.
- Modo claro / oscuro.
- Catálogo con filtros avanzados por stock, promociones y orden.
- WhatsApp directo al teléfono del cliente cuando está capturado.
- Factura premium y factura compacta.
- Impresión térmica tipo ticket 80mm desde venta actual e historial.
- Compresión automática de imágenes antes de guardarlas.
- Respaldo automático de estado en Firebase en la colección `respaldos/ultimo_estado`.
- Dashboard con métricas adicionales: margen, órdenes, unidades vendidas, agotados, stock crítico y sincronización pendiente.

## Uso local
```bash
python -m http.server 8000
```
Abrir:
```text
http://localhost:8000
```

## Nota de seguridad
El PIN protege visualmente el panel en el navegador. Para seguridad real en producción se recomienda Firebase Auth y reglas de Firestore.
