# SDC ERP ADMIN v21 Color Refresh

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


## Novedades v15
- Catálogo móvil menos cargado: se eliminó el doble chip y se simplificó la tarjeta.
- Mejor legibilidad en modo claro para promociones del modal.
- Botones de promociones más claros y cómodos en celular.
- Ajustes generales de espaciado y limpieza visual.


## Novedades v16
- Revisión visual más completa del catálogo, modal, ventas, cotizaciones y factura.
- Tarjetas de catálogo más limpias y menos cargadas.
- Promociones del modal corregidas para modo claro y mejor interacción móvil.
- Cotizaciones con resumen visual de artículos y botón WhatsApp más claro.
- Ventas con pastillas de resumen, mejor jerarquía y acciones más cómodas.
- Factura con distribución más premium, total destacado y bloque de contacto.


## Novedades v17
- Catálogo estilo tienda real con tarjetas más premium.
- Botón rápido “+ Añadir” desde catálogo, usando la primera variante disponible.
- Contador de productos visibles en catálogo.
- Tabbar móvil inferior tipo app para Inicio, Catálogo, Venta y Ventas.
- Navegación móvil más limpia: se oculta el nav superior en celular.
- Mejor comportamiento visual en modo claro y oscuro.


## Novedades v18
- Eliminadas leyendas innecesarias del catálogo.
- Encabezado de modo venta más limpio y compacto.
- Corregida la navegación móvil tipo app: ahora cambia color al seleccionar cada pestaña.
- Ajustes de contraste en modo claro y oscuro para la barra inferior.


## Novedades v19
- Ajuste del logo en la pantalla de carga (splash).
- El logo ahora usa `object-fit: contain` y un contenedor circular para que encaje mejor.
- Mejor presentación del splash en modo oscuro y claro.


## Novedades v20
- Filtros del catálogo más compactos y mejor distribuidos en móvil.
- Categorías rediseñadas con chips más limpios.
- Formulario de logística del carrito reorganizado en 2 columnas para ahorrar espacio.
- Se dejó la dirección como campo ancho.


## Novedades v21
- Nueva paleta para los botones principales del carrito.
- WhatsApp, Compartir factura, Imprimir ticket y Respaldar nube ahora tienen colores más coherentes.
- Resumen total rediseñado con mejor jerarquía y lectura.
- Ajuste adicional del botón Guardar para integrarlo mejor al resto de la interfaz.
