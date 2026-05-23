# SDC ERP ADMIN v24 Regalos Responsive Pro

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


## Novedades v22
- Unificación visual completa de colores y superficies.
- Catálogo con tarjetas más consistentes y CTA mejor integrados.
- Modal de producto con promociones y variantes más elegantes.
- Tarjetas de cotizaciones y ventas alineadas al mismo sistema visual.
- Factura con acabado más premium y mejor jerarquía del total.
- Ajustes de modo claro y móvil para mantener consistencia.


## Novedades v23
- Header más profesional con subtítulo y mejor agrupación de acciones.
- Login más premium con chips informativos y mejor mensaje.
- Splash screen refinado con presentación de suite premium.
- Modo venta mejor estructurado con panel superior y flujo visual más claro.
- Ajustes de logout/login para limpiar el estado del PIN al entrar y salir.


## Novedades v24
- Header simplificado y mejor alineado en móvil.
- Corrección del switch día/noche y acciones superiores en pantallas pequeñas.
- Modal por encima de la navegación móvil y botones finales visibles.
- Nueva opción opcional de regalos para ventas y cotizaciones (catálogo o manual).
- Mejoras visuales en modo claro para botones con borde punteado.
- Ajustes responsivos para S24 Ultra y pantallas grandes de laptop.


## Novedades v25
- Corrección de layout en computadora para aprovechar mejor toda la pantalla.
- Ajustes extra de responsive en móvil y S24 Ultra.
- Nav horizontal móvil más estable y sin desbordes raros.
- Mejor distribución de tarjetas, catálogo y hero en desktop grande.


## Novedades v26
- Layout de escritorio tipo app-shell: aprovecha mejor pantallas de laptop/PC.
- Navegación superior sticky y móvil más limpia.
- Filtros rápidos en Ventas: Todo, Hoy, Últimos 7 días, Facturadas y Anuladas.
- Pulido visual del catálogo premium y tarjetas con hover más fino.
- Ajustes extra para S24 Ultra y móviles altos.


## Novedades v27
- Modo claro corregido en modales y formularios.
- Catálogo móvil más limpio: botón +Nuevo más sólido y filtros mejor distribuidos.
- Categorías visualmente más limpias.
- Splash inicial más ligero y menos cargado.
- Ajustes extra para visualización móvil tipo S24 Ultra.


## Novedades v28
- Se eliminaron leyendas y textos innecesarios en splash, login, inicio y tarjetas.
- Factura más limpia y WhatsApp más directo.
- Vista general más minimalista sin sobrecargar.


## Novedades v29
- Corregido el desplazamiento global en PC y móvil.
- Al abrir un modal, el fondo se bloquea y el scroll queda dentro del modal.
- Los botones de acción de los formularios quedan fijos abajo dentro del modal.
- Ajustes de catálogo para que +Nuevo y filtros se vean mejor.


## Novedades v30
- Modo nocturno corregido para que toda la app use fondo oscuro real.
- Tema por defecto ahora es oscuro.
- Mejoradas las superficies oscuras de Inicio, Catálogo y Venta.
- El modo claro queda más limpio si decides usarlo.


## Novedades v31
- Pulido premium general del catálogo y botones.
- Inicio más limpio en móvil, con menos texto innecesario.
- Filtros del catálogo más compactos y mejor acomodados en celular.
- Mejoras visuales en acciones de venta, navegación móvil y panel principal.


## Novedades v32
- Corregido el footer de acciones en modales: ahora queda anclado abajo como barra fija.
- Más espacio interno al final del modal para que el contenido no se vea debajo de los botones.
- Mejor separación visual entre el contenido del formulario y las acciones Cancelar / Guardar.


## Novedades v33
- Modal de nuevo producto y edición más limpio y premium.
- Sin leyendas pequeñas innecesarias en formularios.
- Títulos de sección más cortos.
- Inputs y botones más ordenados, manteniendo el footer fijo abajo.


## Novedades v34
- Catálogo final más limpio: menos textos, tarjetas más directas y mejor botón de venta rápida.
- Modo venta más compacto, sin leyendas innecesarias.
- Factura final más limpia, con etiquetas cortas y mejor jerarquía visual.


## Novedades v35
- Los botones Cancelar y Guardar en Nuevo producto / Editar producto vuelven al final real del formulario.
- Ya no quedan flotando encima del contenido.
- Ajuste limpio para móvil y escritorio.


## Novedades v36
- Catálogo más limpio.
- Modal de producto simplificado.
- Modo venta más compacto.
- Factura con menos texto.
- Sin leyendas innecesarias.


## Novedades v37
- Departamento y Municipio ahora se mantienen en 2 columnas.
- Paquetera y Tipo de envío ahora se mantienen en 2 columnas.
- Mejor compactación del formulario del cliente en móvil.


## Novedades v38
- Campos de costo y precio ahora se entienden por placeholder, sin usar leyendas.
- Aplicado en nuevo producto y editar producto.


## Novedades v39
- Modal de producto más claro y ordenado visualmente.
- Placeholders más claros para nombre, categoría, costo y precio.
- Precio de venta resaltado sin agregar leyendas.
- Mejor compactación de variantes y descuentos.


## Novedades v40
- Modal de producto más premium.
- Tarjetas del catálogo más limpias y elegantes.
- Venta y carrito más compactos.
- Factura y bloques visuales más consistentes.


## Novedades v41
- Catálogo móvil más pulido.
- Venta más compacta y mejor distribuida.
- Factura final mejor alineada y más elegante.
- Sin leyendas innecesarias.


## Novedades v42
- Login más limpio.
- Dashboard/Inicio más compacto y premium.
- Modo claro y oscuro revisados al detalle.
- Sin leyendas innecesarias.

## Novedades v51
- Header más fino y compacto.
- Búsqueda de catálogo más rápida con debounce.
- Render de productos optimizado.
- Tarjetas más elegantes y compactas en PC/celular.
