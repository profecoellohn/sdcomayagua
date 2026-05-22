# SDC ERP ADMIN v14 Full Pro

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


## Novedades v8
- Modo claro corregido completamente.
- Se eliminaron los tonos grises/oscuros que se veían mal en botones, tarjetas, filtros, catálogo, historial y modal.
- Modo claro queda como tema predeterminado, pero el botón para volver a oscuro sigue disponible.


## Novedades v12
- Inicio rediseñado con estilo premium.
- Header móvil más profesional y compacto.
- Botón de modo claro/oscuro visible en celular.
- KPIs del inventario más elegantes y compactos.
- Accesos rápidos mejorados con iconos, flechas y mejor distribución.
- Hero con logo, métricas y acciones principales.


## Novedades v13
- Catálogo móvil mejorado: tarjetas más limpias, chips sin cortarse y CTA más ordenado.
- Órdenes pendientes rediseñadas con mejor contraste, fecha, cantidad de artículos y botón principal más visible.
- Factura premium con contenedor más elegante y mejor presentación general.


## Novedades v14
- Catálogo móvil más premium: chips más limpios, tarjetas mejor proporcionadas y CTA más cómodo.
- Navegación superior más cómoda con scroll centrado al cambiar de pestaña.
- Cotizaciones con botón WhatsApp, botón eliminar y tarjeta más profesional.
- Factura más tipo negocio real: entrega, pago, mejor distribución de datos, sello y diseño más fino.
- Compartir factura intenta usar el menú nativo del teléfono antes de descargar.
