// Registro del service worker para modo PWA.
if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js')
                    .then(reg => console.log('App lista para instalar'))
                    .catch(err => console.log('App en modo web'));
            });
        }

const ahora = new Date();
        document.getElementById('fecha-hora-header').innerText = ahora.toLocaleTimeString('es-HN', {hour: '2-digit', minute:'2-digit'});
        document.getElementById('saludo-fecha').innerText = `${ahora.getHours() < 12 ? 'Buenos días' : 'Buenas tardes'}, hoy es ${ahora.toLocaleDateString('es-HN')}`;

        const deptosHN = {
            "Atlántida": ["La Ceiba", "El Porvenir", "Esparta", "Jutiapa", "La Masica", "San Francisco", "Tela", "Arizona"],
            "Choluteca": ["Choluteca", "Apacilagua", "Concepción de María", "Duyure", "El Corpus", "El Triunfo", "Marcovia", "Morolica", "Namasigüe", "Orocuina", "Pespire", "San Antonio de Flores", "San Isidro", "San José", "San Marcos de Colón", "Santa Ana de Yusguare"],
            "Colón": ["Trujillo", "Balfate", "Iriona", "Limón", "Sabá", "Santa Fe", "Santa Rosa de Aguán", "Sonaguera", "Tocoa", "Bonito Oriental"],
            "Comayagua": ["Comayagua", "Ajuterique", "El Rosario", "Esquías", "Humuya", "La Libertad", "Lamaní", "La Trinidad", "Lejamaní", "Meámbar", "Minas de Oro", "Ojos de Agua", "San Jerónimo", "San José de Comayagua", "San José del Potrero", "San Luis", "Siguatepeque", "Taulabé", "Villa de San Antonio", "Las Lajas"],
            "Copán": ["Santa Rosa de Copán", "Cabañas", "Concepción", "Copán Ruinas", "Corquín", "Cucuyagua", "Dolores", "Dulce Nombre", "El Paraíso", "Florida", "La Jigua", "La Unión", "Nueva Arcadia", "San Agustín", "San Antonio", "San Jerónimo", "San José", "San Juan de Opoa", "San Nicolás", "San Pedro", "Santa Rita", "Trinidad de Copán", "Veracruz"],
            "Cortés": ["San Pedro Sula", "Choloma", "Omoa", "Pimienta", "Potrerillos", "Puerto Cortés", "San Antonio de Cortés", "San Francisco de Yojoa", "San Manuel", "Santa Cruz de Yojoa", "Villanueva", "La Lima"],
            "El Paraíso": ["Yuscarán", "Alauca", "Danlí", "El Paraíso", "Güinope", "Jacaleapa", "Liure", "Morocelí", "Oropolí", "Potrerillos", "San Lucas", "San Matías", "Soledad", "Teupasenti", "Texiguat", "Vado Ancho", "Yauyupe", "Trojes"],
            "Francisco Morazán": ["Tegucigalpa", "Alubarén", "Cedros", "Curarén", "El Porvenir", "Guaimaca", "La Libertad", "La Venta", "Lepaterique", "Maraita", "Marale", "Nueva Armenia", "Ojojona", "Orica", "Reitoca", "Sabanagrande", "San Antonio de Oriente", "San Buenaventura", "San Ignacio", "San Juan de Flores", "San Miguelito", "Santa Ana", "Santa Lucía", "Talanga", "Tatumbla", "Valle de Ángeles", "Villa de San Francisco", "Vallecillo"],
            "Gracias a Dios": ["Puerto Lempira", "Brus Laguna", "Ahuas", "Juan Francisco Bulnes", "Villeda Morales", "Wampusirpi"],
            "Intibucá": ["La Esperanza", "Camasca", "Colomoncagua", "Concepción", "Dolores", "Intibucá", "Jesús de Otoro", "Magdalena", "Masaguara", "San Antonio", "San Isidro", "San Juan", "San Marcos de la Sierra", "San Miguel Guancapla", "Santa Lucía", "Yamaranguila", "San Francisco de Opalaca"],
            "Islas de la Bahía": ["Roatán", "Guanaja", "José Santos Guardiola", "Utila"],
            "La Paz": ["La Paz", "Aguanqueterique", "Cabañas", "Cane", "Chinacla", "Guajiquiro", "Lauterique", "Marcala", "Mercedes de Oriente", "San Antonio del Norte", "San José", "San Juan", "San Pedro de Tutule", "Santa Ana", "Santa Elena", "Santa María", "Santiago de Puringla", "Yarula", "Opatoro"],
            "Lempira": ["Gracias", "Belén", "Candelaria", "Cololaca", "Erandique", "Gualcince", "Guarita", "La Campa", "La Iguala", "Las Flores", "La Unión", "Lepaera", "Mapulaca", "Piraera", "San Andrés", "San Francisco", "San Juan Guarita", "San Manuel Colohete", "San Marcos de Caiquín", "San Rafael", "San Sebastián", "Santa Cruz", "Talgua", "Tambla", "Tomalá", "Valladolid", "Virginia"],
            "Ocotepeque": ["Ocotepeque", "Belén Gualcho", "Concepción", "Dolores Merendón", "Fraternidad", "La Encarnación", "La Labor", "Lucerna", "Mercedes", "San Fernando", "San Francisco del Valle", "San Jorge", "San Marcos", "Santa Fe", "Sinuapa", "Sensenti"],
            "Olancho": ["Juticalpa", "Campamento", "Catacamas", "Concordia", "Dulce Nombre de Culmí", "El Rosario", "Esquipulas del Norte", "Gualaco", "Guarizama", "Guata", "Ignacio", "Jano", "La Unión", "Mangulile", "Manto", "Patuca", "Salamá", "San Francisco de Becerra", "San Francisco de la Paz", "Santa María del Real", "Silca", "Yocón"],
            "Santa Bárbara": ["Santa Bárbara", "Arada", "Atima", "Azacualpa", "Ceguaca", "Colinas", "Concepción del Norte", "Concepción del Sur", "Chinda", "El Nispero", "Gualala", "Ilama", "Macuelizo", "Naranjito", "Nuevo Celilac", "Petoa", "Protección", "Quimistán", "San Francisco de Ojuera", "San Luis", "San Marcos", "San Nicolás", "San Pedro Zacapa", "Santa Rita", "San Vicente Centenario", "Trinidad", "Las Vegas", "Nueva Frontera"],
            "Valle": ["Nacaome", "Alianza", "Amapala", "Aramecina", "Caridad", "Goascorán", "Langue", "San Francisco de Coray", "San Lorenzo"],
            "Yoro": ["Yoro", "Arenal", "El Negrito", "El Progreso", "Jocón", "Morazán", "Olanchito", "Santa Rita", "Sulaco", "Victoria", "Yorito"]
        };

        function initLugares() {
            const depto = document.getElementById('c-depto');
            depto.innerHTML = '<option value="">Seleccione Departamento</option>';
            Object.keys(deptosHN).sort().forEach(d => depto.innerHTML += `<option value="${d}">${d}</option>`);
            depto.value = "Comayagua"; cargarMunicipios(); document.getElementById('c-muni').value = "Comayagua";
        }

        function cargarMunicipios() {
            const d = document.getElementById('c-depto').value;
            const muni = document.getElementById('c-muni');
            muni.innerHTML = '<option value="">Seleccione Municipio</option>';
            if(d && deptosHN[d]) deptosHN[d].sort().forEach(m => muni.innerHTML += `<option value="${m}">${m}</option>`);
        }

        let baseDeDatos = []; let carrito = []; let cotizaciones = []; let ventasTotales = 0; let historialVentas = [];
        let productoActivoModal = null; let varianteActivaModal = null; let totalCarritoActual = 0;
        const ADMIN_PIN = "199311";
        let modoEdicionVentaId = null;
        let ventaOriginalEdicion = null;
        let categoriaActivaCatalogo = "Todos";
        const filtroCatalogo = { texto: "", stock: "todos", promo: "todos", orden: "nombre" };
        const LOGO_SDC = "assets/images/logo-sdcomayagua.png";

        function setSplashStatus(texto) {
            const el = document.getElementById('splash-status');
            if(el) el.textContent = texto;
        }

        function ocultarSplash() {
            const splash = document.getElementById('splash-screen');
            if(splash) splash.classList.add('oculto');
        }

        function normalizarTelefonoHN(valor) {
            const soloNumeros = String(valor || '').replace(/\D/g, '');
            if(!soloNumeros) return '';
            if(soloNumeros.startsWith('504') && soloNumeros.length >= 11) return soloNumeros;
            const ultimos8 = soloNumeros.slice(-8);
            return ultimos8.length === 8 ? `504${ultimos8}` : soloNumeros;
        }

        function abrirWhatsAppMensaje(mensaje, telefono = '') {
            const numero = normalizarTelefonoHN(telefono);
            const base = numero ? `https://wa.me/${numero}` : 'https://wa.me/';
            window.open(`${base}?text=${encodeURIComponent(mensaje)}`, '_blank');
        }

        async function procesarImagenInput(input, opciones = {}) {
            const archivo = input?.files?.[0];
            if(!archivo) return '';
            const maxSize = opciones.maxSize || 1400;
            const calidad = opciones.quality || 0.82;
            const dataUrlOriginal = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => resolve(e.target.result);
                reader.onerror = reject;
                reader.readAsDataURL(archivo);
            });
            const image = await new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = dataUrlOriginal;
            });
            const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
            const canvas = document.createElement('canvas');
            canvas.width = Math.max(1, Math.round(image.width * scale));
            canvas.height = Math.max(1, Math.round(image.height * scale));
            const ctx = canvas.getContext('2d');
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            return canvas.toDataURL('image/jpeg', calidad);
        }

        function initTheme() {
            const temaGuardado = localStorage.getItem("sdc_theme") || "light";
            document.body.classList.toggle("light-theme", temaGuardado === "light");
            actualizarTextoBotonTema();
        }

        function actualizarTextoBotonTema() {
            const btn = document.getElementById("theme-toggle");
            if(!btn) return;
            const light = document.body.classList.contains("light-theme");
            btn.textContent = light ? "🌙 Oscuro" : "☀️ Claro";
        }

        function toggleTheme() {
            document.body.classList.toggle("light-theme");
            localStorage.setItem("sdc_theme", document.body.classList.contains("light-theme") ? "light" : "dark");
            actualizarTextoBotonTema();
        }

        function formatearLps(valor) {
            return `Lps. ${Math.round(Number(valor || 0)).toLocaleString('es-HN')}`;
        }

        function setCloudStatus(estado = 'checking', texto = 'Nube: verificando') {
            const chip = document.getElementById('cloud-status');
            if(!chip) return;
            chip.textContent = texto;
            chip.classList.remove('cloud-online', 'cloud-offline', 'cloud-checking');
            chip.classList.add(`cloud-${estado}`);
        }
        window.sdcSetCloudStatus = setCloudStatus;

        function fechaInicioDia(fecha) {
            const f = new Date(fecha);
            f.setHours(0, 0, 0, 0);
            return f;
        }

        function obtenerVentasHoy() {
            const hoy = fechaInicioDia(new Date()).getTime();
            return ventasActivas().filter(v => fechaInicioDia(normalizarFechaVenta(v.fecha)).getTime() === hoy);
        }


        function actualizarTabbarActiva(idVista) {
            const mapa = {
                inicio: 'inicio',
                catalogo: 'catalogo',
                carrito: 'carrito',
                ventas: 'ventas',
                cotizaciones: 'ventas',
                dashboard: 'ventas'
            };
            const activo = mapa[idVista] || idVista;
            document.querySelectorAll('.mobile-tabbar button').forEach(btn => {
                const seleccionado = btn.dataset.tabbar === activo;
                btn.classList.toggle('activo', seleccionado);
                btn.setAttribute('aria-current', seleccionado ? 'page' : 'false');
            });
        }

        function actualizarCatalogoCount(count) {
            const chip = document.getElementById('catalogo-count-chip');
            if(chip) chip.innerText = `${count} producto${count === 1 ? '' : 's'}`;
        }

        function primeraVarianteDisponible(prod) {
            return (prod?.variantes || []).find(v => Number(v.stock || 0) > 0) || null;
        }

        function agregarRapidoCatalogo(idProducto, event) {
            event?.stopPropagation?.();
            const prod = baseDeDatos.find(p => String(p.id) === String(idProducto));
            if(!prod) return alert('No encontré este producto.');
            const variante = primeraVarianteDisponible(prod);
            if(!variante) return mostrarToast('Producto agotado');
            const maxDisponible = stockDisponibleTotal(prod.id, variante.nombre);
            const actualEnCarrito = cantidadEnCarrito(prod.id, variante.nombre);
            if(actualEnCarrito + 1 > maxDisponible) return alert(`No hay más stock disponible de ${prod.nombre} - ${variante.nombre}.`);
            const idU = `${prod.id}-${variante.nombre}`;
            const existe = carrito.find(i => i.uid === idU);
            if(existe) existe.cantidad += 1;
            else carrito.push({
                uid: idU,
                id: prod.id,
                nombre: prod.nombre,
                precioBase: Number(prod.precio || 0),
                costo: Number(prod.costo || 0),
                variante: variante.nombre,
                cantidad: 1
            });
            document.getElementById('cart-badge').innerText = carrito.reduce((s,i)=>s+i.cantidad,0);
            calcularTotalesCarrito();
            mostrarToast(`Agregado: ${prod.nombre}`);
        }

        function iniciarControlAcceso() {
            const loginScreen = document.getElementById('login-screen');
            const form = document.getElementById('login-form');
            const input = document.getElementById('pin-admin');
            const error = document.getElementById('login-error');
            const yaIngreso = sessionStorage.getItem('sdc_admin_ok') === '1';

            if(yaIngreso) {
                document.body.classList.remove('login-locked');
                if(loginScreen) loginScreen.classList.add('oculto');
            } else {
                document.body.classList.add('login-locked');
                setTimeout(() => input?.focus(), 150);
            }

            form?.addEventListener('submit', (event) => {
                event.preventDefault();
                if((input?.value || '').trim() === ADMIN_PIN) {
                    sessionStorage.setItem('sdc_admin_ok', '1');
                    document.body.classList.remove('login-locked');
                    loginScreen?.classList.add('oculto');
                    mostrarToast('Bienvenido, ADMIN');
                } else {
                    if(error) error.textContent = 'PIN incorrecto. Intenta de nuevo.';
                    input.value = '';
                    input.focus();
                }
            });
        }

        function cerrarSesionAdmin() {
            sessionStorage.removeItem('sdc_admin_ok');
            document.body.classList.add('login-locked');
            document.getElementById('login-screen')?.classList.remove('oculto');
            document.getElementById('pin-admin')?.focus();
        }

        function cargarRestoDatosLocales() {
            let ventasG = localStorage.getItem('sdc_ventas');
            if(ventasG) { ventasTotales = parseFloat(ventasG); }
            let cotsG = localStorage.getItem('sdc_cots');
            if(cotsG) { cotizaciones = JSON.parse(cotsG); }
            let ventasHistG = localStorage.getItem('sdc_historial_ventas');
            if(ventasHistG) { historialVentas = JSON.parse(ventasHistG); }
            if(historialVentas.length > 0) {
                ventasTotales = ventasActivas().reduce((s, v) => s + Number(v.total || 0), 0);
            }
        }

        let respaldoTimer = null;
        function guardarDatosLocales() {
            localStorage.setItem('sdc_bd', JSON.stringify(baseDeDatos));
            localStorage.setItem('sdc_ventas', ventasTotales);
            localStorage.setItem('sdc_cots', JSON.stringify(cotizaciones));
            localStorage.setItem('sdc_historial_ventas', JSON.stringify(historialVentas));
            if(respaldoTimer) clearTimeout(respaldoTimer);
            respaldoTimer = setTimeout(() => {
                if(typeof window.respaldarDatosFirebase === 'function') {
                    window.respaldarDatosFirebase({
                        productos: baseDeDatos,
                        ventas: historialVentas,
                        cotizaciones,
                        ventasTotales,
                        fecha: new Date().toISOString()
                    }).catch(err => console.warn('Respaldo automático pendiente:', err));
                }
            }, 1200);
        }

        function resetearSistema() {
            if(confirm("¿Estás seguro? Esto borrará tus ventas locales. Los productos en Firebase no se borrarán.")) {
                localStorage.removeItem('sdc_bd'); localStorage.removeItem('sdc_ventas'); localStorage.removeItem('sdc_cots'); localStorage.removeItem('sdc_historial_ventas');
                location.reload();
            }
        }

        function ventasActivas() {
            return historialVentas.filter(v => (v.estado || 'facturada') !== 'anulada');
        }

        function calcularCostoVenta(venta) {
            const articulos = Array.isArray(venta.articulos) ? venta.articulos : [];
            return articulos.reduce((s, it) => {
                const producto = baseDeDatos.find(p => p.id === it.id);
                const costoUnitario = Number(it.costoUnitario ?? producto?.costo ?? 0);
                return s + (costoUnitario * Number(it.cantidad || 0));
            }, 0);
        }

        function actualizarDashboard() {
            let tStk = 0; let bStk = 0; let sFot = 0; let inv = 0; let proy = 0;
            baseDeDatos.forEach(p => {
                let pStk = 0;
                (p.variantes || []).forEach(v => {
                    pStk += Number(v.stock || 0);
                    if(Number(v.stock || 0) > 0 && Number(v.stock || 0) < 3) bStk++;
                });
                tStk += pStk;
                inv += (pStk * Number(p.costo || 0));
                proy += (pStk * Number(p.precio || 0));
                if(!p.img || p.img === '') sFot++;
            });

            const activas = ventasActivas();
            const totalVentas = activas.reduce((s, v) => s + Number(v.total || 0), 0);
            const costoVendido = activas.reduce((s, v) => s + calcularCostoVenta(v), 0);
            const gananciaReal = totalVentas - costoVendido;
            const ticket = activas.length ? totalVentas / activas.length : 0;
            const hoy = new Date().toLocaleDateString('es-HN');
            const ventasHoy = activas
                .filter(v => normalizarFechaVenta(v.fecha).toLocaleDateString('es-HN') === hoy)
                .reduce((s, v) => s + Number(v.total || 0), 0);

            const topMap = {};
            activas.forEach(v => (v.articulos || []).forEach(it => {
                const nombre = it.nombre || 'Producto';
                topMap[nombre] = (topMap[nombre] || 0) + Number(it.cantidad || 0);
            }));
            const topProducto = Object.entries(topMap).sort((a,b) => b[1] - a[1])[0];
            const articulosVendidos = activas.reduce((s, v) => s + (v.articulos || []).reduce((t, it) => t + Number(it.cantidad || 0), 0), 0);
            const margenReal = totalVentas > 0 ? (gananciaReal / totalVentas) * 100 : 0;
            const agotados = baseDeDatos.reduce((s, p) => s + (p.variantes || []).filter(v => Number(v.stock || 0) === 0).length, 0);
            const stockCritico = productosCriticos().length;
            const syncPendiente = historialVentas.filter(v => v.estadoSync === 'pendiente').length;

            document.getElementById('op-tot').innerText = tStk;
            document.getElementById('op-baj').innerText = bStk;
            document.getElementById('op-fot').innerText = sFot;
            document.getElementById('op-inv').innerText = `Lps. ${Math.round(inv)}`;
            document.getElementById('dash-inv').innerText = `Lps. ${Math.round(inv)}`;
            document.getElementById('dash-proy').innerText = `Lps. ${Math.round(proy)}`;
            document.getElementById('dash-gan').innerText = `Lps. ${Math.round(proy - inv)}`;
            document.getElementById('dash-ventas').innerText = `Lps. ${Math.round(totalVentas)}`;
            document.getElementById('dash-costo-vendido') && (document.getElementById('dash-costo-vendido').innerText = `Lps. ${Math.round(costoVendido)}`);
            document.getElementById('dash-gan-real') && (document.getElementById('dash-gan-real').innerText = `Lps. ${Math.round(gananciaReal)}`);
            document.getElementById('dash-ticket') && (document.getElementById('dash-ticket').innerText = `Lps. ${Math.round(ticket)}`);
            document.getElementById('dash-hoy') && (document.getElementById('dash-hoy').innerText = `Lps. ${Math.round(ventasHoy)}`);
            document.getElementById('dash-top-prod') && (document.getElementById('dash-top-prod').innerText = topProducto ? `${topProducto[0]} (${topProducto[1]})` : 'Sin ventas');
            document.getElementById('dash-ordenes') && (document.getElementById('dash-ordenes').innerText = activas.length);
            document.getElementById('dash-articulos-vendidos') && (document.getElementById('dash-articulos-vendidos').innerText = articulosVendidos);
            document.getElementById('dash-margen') && (document.getElementById('dash-margen').innerText = `${margenReal.toFixed(1)}%`);
            document.getElementById('dash-agotados') && (document.getElementById('dash-agotados').innerText = agotados);
            document.getElementById('dash-stock-critico') && (document.getElementById('dash-stock-critico').innerText = stockCritico);
            document.getElementById('dash-sync') && (document.getElementById('dash-sync').innerText = syncPendiente);
            ventasTotales = totalVentas;
            actualizarResumenVentas();
            renderPanelInicio();
            renderMiniChartVentas();
            renderAlertasDashboard();
        }

        function productosCriticos() {
            const filas = [];
            baseDeDatos.forEach(p => (p.variantes || []).forEach(v => {
                const stock = Number(v.stock || 0);
                if(stock <= 2) filas.push({ producto: p.nombre || 'Producto', variante: v.nombre || 'Estándar', stock, img: v.img || p.img || '' });
            }));
            return filas.sort((a, b) => a.stock - b.stock || a.producto.localeCompare(b.producto));
        }

        function renderPanelInicio() {
            const ventasHoy = obtenerVentasHoy().reduce((s, v) => s + Number(v.total || 0), 0);
            const pendientes = historialVentas.filter(v => v.estadoSync === 'pendiente').length;
            const criticos = productosCriticos();
            const ventasHoyEl = document.getElementById('home-ventas-hoy');
            const heroVentasHoyEl = document.getElementById('hero-ventas-hoy');
            const pendientesEl = document.getElementById('home-pendiente-sync');
            const countEl = document.getElementById('home-stock-critico-count');
            const heroStockCriticoEl = document.getElementById('hero-stock-critico');
            const listEl = document.getElementById('home-stock-list');
            const topEl = document.getElementById('home-top-productos');
            if(ventasHoyEl) ventasHoyEl.innerText = formatearLps(ventasHoy);
            if(heroVentasHoyEl) heroVentasHoyEl.innerText = formatearLps(ventasHoy);
            if(pendientesEl) pendientesEl.innerText = pendientes;
            if(countEl) countEl.innerText = criticos.length;
            if(heroStockCriticoEl) heroStockCriticoEl.innerText = criticos.length;
            if(listEl) {
                listEl.innerHTML = criticos.slice(0, 6).map(item => `
                    <div class="compact-row">
                        <div><b>${item.producto}</b><span>${item.variante}</span></div>
                        <strong class="${item.stock === 0 ? 'danger-text' : 'warning-text'}">${item.stock} disp.</strong>
                    </div>`).join('') || '<div class="empty-state mini">Todo el inventario se ve saludable.</div>';
            }
            if(topEl) {
                const topMap = {};
                ventasActivas().forEach(v => (v.articulos || []).forEach(it => {
                    const key = it.nombre || 'Producto';
                    topMap[key] = (topMap[key] || 0) + Number(it.cantidad || 0);
                }));
                const top = Object.entries(topMap).sort((a,b) => b[1] - a[1]).slice(0,5);
                topEl.innerHTML = top.map(([nombre, qty], i) => `
                    <div class="compact-row">
                        <div><b>#${i+1} ${nombre}</b><span>Producto destacado</span></div>
                        <strong>${qty} vend.</strong>
                    </div>`).join('') || '<div class="empty-state mini">Aún no hay productos destacados por ventas.</div>';
            }
        }

        function resumenVentasPorUltimosDias(dias = 7) {
            const hoy = fechaInicioDia(new Date());
            const data = [];
            for(let i = dias - 1; i >= 0; i--) {
                const dia = new Date(hoy);
                dia.setDate(hoy.getDate() - i);
                const key = dia.toISOString().slice(0, 10);
                const total = ventasActivas().filter(v => fechaInicioDia(normalizarFechaVenta(v.fecha)).toISOString().slice(0, 10) === key)
                    .reduce((s, v) => s + Number(v.total || 0), 0);
                data.push({ fecha: dia, total });
            }
            return data;
        }

        function renderMiniChartVentas() {
            const cont = document.getElementById('dash-mini-chart');
            if(!cont) return;
            const data = resumenVentasPorUltimosDias(7);
            const max = Math.max(1, ...data.map(d => d.total));
            cont.innerHTML = data.map(d => {
                const h = Math.max(8, Math.round((d.total / max) * 96));
                const label = d.fecha.toLocaleDateString('es-HN', { weekday: 'short' }).replace('.', '');
                return `<div class="chart-day" title="${d.fecha.toLocaleDateString('es-HN')}: ${formatearLps(d.total)}"><div class="chart-bar" style="height:${h}px"></div><span>${label}</span></div>`;
            }).join('');
        }

        function renderAlertasDashboard() {
            const cont = document.getElementById('dash-alertas');
            if(!cont) return;
            const alertas = [];
            const criticos = productosCriticos();
            const sinFoto = baseDeDatos.filter(p => !p.img).length;
            const pendientes = historialVentas.filter(v => v.estadoSync === 'pendiente').length;
            if(criticos.length) alertas.push(`Reponer ${criticos.length} variante(s) con stock crítico.`);
            if(sinFoto) alertas.push(`Agregar foto a ${sinFoto} producto(s) para mejorar el catálogo.`);
            if(pendientes) alertas.push(`${pendientes} venta(s) quedaron pendientes de sincronizar.`);
            if(!ventasActivas().length) alertas.push('Aún no hay ventas activas registradas.');
            cont.innerHTML = alertas.map(a => `<div class="compact-row"><div><b>${a}</b><span>Revisión sugerida</span></div><strong>!</strong></div>`).join('') || '<div class="empty-state mini">Sin alertas importantes por ahora.</div>';
        }

        async function esperarFirebase(maxMs = 5000) {
            setCloudStatus('checking', 'Nube: verificando');
            const inicio = Date.now();
            while (typeof window.cargarDesdeFirebase !== 'function' && Date.now() - inicio < maxMs) {
                await new Promise(r => setTimeout(r, 100));
            }
            const listo = typeof window.cargarDesdeFirebase === 'function';
            setCloudStatus(listo ? 'online' : 'offline', listo ? 'Nube: conectada' : 'Nube: offline');
            return listo;
        }

        async function inicializarCatalogo() {
            const contProd = document.getElementById('contenedor-productos');
            contProd.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--accent); font-weight: bold; padding: 20px;">☁️ Conectando con la Nube...</p>';
            
            const firebaseListo = await esperarFirebase();

            try {
                if (!firebaseListo) throw new Error('Firebase no disponible');
                setSplashStatus('Descargando catálogo...');
                baseDeDatos = await window.cargarDesdeFirebase();
                localStorage.setItem('sdc_bd', JSON.stringify(baseDeDatos)); 
                setCloudStatus('online', 'Nube: conectada');
            } catch (e) {
                console.error("Error al descargar de la nube:", e);
                let bdGuardada = localStorage.getItem('sdc_bd');
                if(bdGuardada) baseDeDatos = JSON.parse(bdGuardada);
                setCloudStatus('offline', 'Nube: offline');
                mostrarToast("Sin conexión. Usando datos locales guardados.");
            }

            cargarRestoDatosLocales();
            const cat = ['Todos', ...new Set(baseDeDatos.map(p => p.categoria))];
            document.getElementById('contenedor-filtros').innerHTML = cat.map(c => `<button class="btn-cat ${c==='Todos'?'activo':''}" onclick="filtrar('${c}', this)">${c}</button>`).join('');
            
            aplicarFiltrosCatalogo(); actualizarDashboard(); renderCotizaciones(); setSplashStatus('Cargando historial de ventas...'); await cargarHistorialVentas();
        }

        function filtrar(c, btn) {
            categoriaActivaCatalogo = c;
            document.querySelectorAll('.btn-cat').forEach(b => b.classList.remove('activo'));
            btn.classList.add('activo');
            aplicarFiltrosCatalogo();
        }

        function buscarProducto() {
            filtroCatalogo.texto = (document.getElementById('buscador').value || '').toLowerCase().trim();
            aplicarFiltrosCatalogo();
        }

        function actualizarFiltrosCatalogo() {
            filtroCatalogo.stock = document.getElementById('filtro-stock')?.value || 'todos';
            filtroCatalogo.promo = document.getElementById('filtro-promo')?.value || 'todos';
            filtroCatalogo.orden = document.getElementById('orden-catalogo')?.value || 'nombre';
            aplicarFiltrosCatalogo();
        }

        function aplicarFiltrosCatalogo() {
            let arr = [...baseDeDatos];
            if(categoriaActivaCatalogo !== 'Todos') arr = arr.filter(p => p.categoria === categoriaActivaCatalogo);
            if(filtroCatalogo.texto) arr = arr.filter(p => `${p.nombre || ''} ${p.categoria || ''}`.toLowerCase().includes(filtroCatalogo.texto));

            arr = arr.filter(prod => {
                const stock = (prod.variantes || []).reduce((s, v) => s + Number(v.stock || 0), 0);
                const tienePromo = Array.isArray(prod.promos) && prod.promos.length > 0;
                let okStock = true;
                if(filtroCatalogo.stock === 'disponibles') okStock = stock > 0;
                if(filtroCatalogo.stock === 'bajo') okStock = stock > 0 && stock <= 3;
                if(filtroCatalogo.stock === 'agotados') okStock = stock === 0;
                let okPromo = true;
                if(filtroCatalogo.promo === 'con') okPromo = tienePromo;
                if(filtroCatalogo.promo === 'sin') okPromo = !tienePromo;
                return okStock && okPromo;
            });

            arr.sort((a, b) => {
                const stockA = (a.variantes || []).reduce((s, v) => s + Number(v.stock || 0), 0);
                const stockB = (b.variantes || []).reduce((s, v) => s + Number(v.stock || 0), 0);
                switch(filtroCatalogo.orden) {
                    case 'precio-asc': return Number(a.precio || 0) - Number(b.precio || 0);
                    case 'precio-desc': return Number(b.precio || 0) - Number(a.precio || 0);
                    case 'stock-desc': return stockB - stockA;
                    default: return String(a.nombre || '').localeCompare(String(b.nombre || ''));
                }
            });

            renderizarProductos(arr);
        }

        function renderizarProductos(arr) {
            const cont = document.getElementById('contenedor-productos'); cont.innerHTML = '';
            actualizarCatalogoCount(arr.length);
            arr.forEach(prod => {
                const stk = (prod.variantes || []).reduce((s, v) => s + Number(v.stock || 0), 0);
                const agotado = stk <= 0;
                const badge = agotado ? `<span class="tag-stock tag-agotado">Agotado</span>` : stk <= 3 ? `<span class="tag-stock tag-low">${stk} en stock</span>` : `<span class="tag-stock">${stk} en stock</span>`;
                const categoria = prod.categoria || 'General';
                const tienePromo = Array.isArray(prod.promos) && prod.promos.length > 0;
                const metaPromo = tienePromo ? `<p class="card-submeta is-promo">Promo por volumen</p>` : `<p class="card-submeta">Precio regular</p>`;
                const variantesCount = (prod.variantes || []).length;
                const accionRapida = agotado
                    ? `<button class="quick-add disabled" onclick="event.stopPropagation()" disabled>Agotado</button>`
                    : `<button class="quick-add" onclick="agregarRapidoCatalogo('${prod.id}', event)">+ Añadir</button>`;
                cont.innerHTML += `
                    <article class="card-prod shop-card ${agotado ? 'agotado' : ''}" onclick="abrirModal('${prod.id}')">
                        <div class="card-prod-media">
                            ${badge}
                            <img src="${prod.img || 'https://via.placeholder.com/400x400?text=Producto'}" alt="${prod.nombre}" loading="lazy">
                        </div>
                        <div class="card-prod-body">
                            <div class="card-prod-topline">
                                <span class="card-category">${categoria}</span>
                                <span class="variant-mini">${variantesCount} variante${variantesCount === 1 ? '' : 's'}</span>
                            </div>
                            <h3>${prod.nombre}</h3>
                            ${metaPromo}
                            <div class="card-prod-footer">
                                <div>
                                    <small class="price-label">Precio</small>
                                    <p class="precio-card">Lps. ${Math.round(prod.precio)}</p>
                                </div>
                                <span class="card-cta">Detalle</span>
                            </div>
                            <div class="shop-card-actions">
                                ${accionRapida}
                            </div>
                        </div>
                    </article>`;
            });
            if(arr.length === 0) {
                cont.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 20px;">No hay productos guardados aún. Haz clic en + Nuevo.</p>';
            }
        }

        function abrirModal(id) {
            productoActivoModal = baseDeDatos.find(p => p.id === id);
            document.getElementById('m-img').src = productoActivoModal.img || 'https://via.placeholder.com/500';
            document.getElementById('m-categoria').innerText = productoActivoModal.categoria;
            document.getElementById('m-nombre').innerText = productoActivoModal.nombre;
            document.getElementById('m-precio').innerText = `Lps. ${Math.round(productoActivoModal.precio)}`;
            
            let pt = '';
            if(productoActivoModal.promos && productoActivoModal.promos.length > 0) {
                let sortedP = [...productoActivoModal.promos].sort((a,b)=>a.cant-b.cant);
                pt = '<div class="promo-block-title">Descuentos por volumen</div><div class="promo-actions-grid">';
                sortedP.forEach((pr) => {
                    pt += `<button type="button" class="btn-promo" onclick="seleccionarPromo(${Number(pr.cant)})">Lleva ${Number(pr.cant)} o más<span>Lps. ${Math.round(pr.precio)} c/u</span></button>`;
                });
                pt += '</div>';
            }
            document.getElementById('m-promos-text').innerHTML = pt;

            const contVar = document.getElementById('m-variantes'); contVar.innerHTML = '';
            productoActivoModal.variantes.forEach((v, i) => {
                const clas = v.stock === 0 ? 'sin-stock' : '';
                contVar.innerHTML += `<button class="btn-variante ${clas}" id="var-btn-${i}" onclick="selVariante(${i})">${v.nombre}</button>`;
            });
            
            const idx = productoActivoModal.variantes.findIndex(v => v.stock > 0);
            if(idx !== -1) selVariante(idx); else { document.getElementById('m-stock-texto').innerText = 'Agotado'; varianteActivaModal = null; }
            sincronizarFichaProductoCompartir();
            document.getElementById('modal-producto').classList.add('activo'); document.body.classList.add('modal-open');
        }

        function selVariante(i) {
            varianteActivaModal = productoActivoModal.variantes[i];
            document.querySelectorAll('.btn-variante').forEach(b => b.classList.remove('seleccionado'));
            document.getElementById(`var-btn-${i}`).classList.add('seleccionado');
            document.getElementById('m-stock-texto').innerText = `Disponible para esta venta: ${stockDisponibleTotal(productoActivoModal.id, varianteActivaModal.nombre)} unidades`;
            document.getElementById('m-cantidad').value = 1;
            if(varianteActivaModal.img) document.getElementById('m-img').src = varianteActivaModal.img;
            else document.getElementById('m-img').src = productoActivoModal.img || 'https://via.placeholder.com/500';
            sincronizarFichaProductoCompartir();
        }

        function modCantidadModal(v) {
            if(!varianteActivaModal) return;
            let n = parseInt(document.getElementById('m-cantidad').value) + v;
            if(n >= 1 && n <= varianteActivaModal.stock) document.getElementById('m-cantidad').value = n;
        }

        function seleccionarPromo(cantidadMinima) {
            if(!varianteActivaModal) return;
            const cantidad = Math.min(Number(cantidadMinima) || 1, varianteActivaModal.stock);
            document.getElementById('m-cantidad').value = Math.max(1, cantidad);
            mostrarToast(`Promo seleccionada: ${cantidad} unidad${cantidad === 1 ? '' : 'es'}`);
        }

        function obtenerPromosOrdenadasProducto(prod) {
            return [...(prod?.promos || [])].sort((a, b) => Number(a.cant || 0) - Number(b.cant || 0));
        }

        function renderPromosFichaProducto(prod) {
            const promos = obtenerPromosOrdenadasProducto(prod);
            if(!promos.length) {
                return `<div class="share-offer-item"><b>Precio regular</b><span>Lps. ${Math.round(Number(prod?.precio || 0))} c/u</span></div>`;
            }
            return promos.map(pr => `
                <div class="share-offer-item">
                    <b>Lleva ${Number(pr.cant || 0)} o más</b>
                    <span>Lps. ${Math.round(Number(pr.precio || 0))} c/u</span>
                </div>`).join('');
        }

        function sincronizarFichaProductoCompartir() {
            if(!productoActivoModal) return;
            const totalStock = (productoActivoModal.variantes || []).reduce((s, v) => s + Number(v.stock || 0), 0);
            const imgActual = varianteActivaModal?.img || productoActivoModal.img || 'https://via.placeholder.com/600x600?text=Producto';
            const stockVariante = varianteActivaModal ? `${stockDisponibleTotal(productoActivoModal.id, varianteActivaModal.nombre)} en ${varianteActivaModal.nombre}` : `${totalStock} unidades disponibles`;
            document.getElementById('sp-img').src = imgActual;
            document.getElementById('sp-name').innerText = productoActivoModal.nombre || 'Producto';
            document.getElementById('sp-cat').innerText = productoActivoModal.categoria || 'Categoría general';
            document.getElementById('sp-price').innerText = `Lps. ${Math.round(Number(productoActivoModal.precio || 0))}`;
            document.getElementById('sp-stock').innerText = stockVariante;
            document.getElementById('sp-promos').innerHTML = renderPromosFichaProducto(productoActivoModal);
        }

        function canvasToBlob(canvas, type = 'image/png', quality = 1) {
            return new Promise((resolve) => canvas.toBlob(resolve, type, quality));
        }

        async function compartirFichaProducto() {
            if(!productoActivoModal) return;
            sincronizarFichaProductoCompartir();
            try {
                const shareNode = document.getElementById('contenedor-ficha-producto');
                const canvas = await html2canvas(shareNode, {
                    scale: 2,
                    useCORS: true,
                    backgroundColor: null,
                    width: shareNode.scrollWidth,
                    height: shareNode.scrollHeight,
                    scrollX: 0,
                    scrollY: 0
                });
                const blob = await canvasToBlob(canvas);
                if(!blob) throw new Error('No se pudo crear la imagen.');
                const archivo = new File([blob], `producto_${(productoActivoModal.nombre || 'sdc').replace(/\s+/g, '_').toLowerCase()}.png`, { type: 'image/png' });
                if(navigator.canShare && navigator.canShare({ files: [archivo] })) {
                    await navigator.share({
                        files: [archivo],
                        title: productoActivoModal.nombre || 'Producto SDC',
                        text: `Te comparto la ficha de ${productoActivoModal.nombre || 'este producto'} con precio y promociones.`
                    });
                    mostrarToast('Ficha lista para compartir');
                    return;
                }
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = `ficha_${(productoActivoModal.nombre || 'producto').replace(/\s+/g, '_').toLowerCase()}.png`;
                link.click();
                setTimeout(() => URL.revokeObjectURL(link.href), 1200);
                mostrarToast('Se descargó la foto del producto para compartir');
            } catch (error) {
                console.error(error);
                alert('No se pudo generar la ficha del producto.');
            }
        }

        function cerrarModal() { document.getElementById('modal-producto').classList.remove('activo'); document.body.classList.remove('modal-open'); }
        function irAlCarrito() { cerrarModal(); cambiarVista('carrito', document.querySelectorAll('nav button')[2]); }

        function cantidadOriginalVenta(idProducto, variante) {
            if(!ventaOriginalEdicion) return 0;
            return (ventaOriginalEdicion.articulos || [])
                .filter(it => it.id === idProducto && it.variante === variante)
                .reduce((s, it) => s + Number(it.cantidad || 0), 0);
        }

        function stockActualVariante(idProducto, variante) {
            const producto = baseDeDatos.find(p => p.id === idProducto);
            const varBD = producto?.variantes?.find(v => v.nombre === variante);
            return Number(varBD?.stock || 0);
        }

        function stockDisponibleTotal(idProducto, variante) {
            return stockActualVariante(idProducto, variante) + cantidadOriginalVenta(idProducto, variante);
        }

        function cantidadEnCarrito(idProducto, variante) {
            return carrito
                .filter(it => it.id === idProducto && it.variante === variante)
                .reduce((s, it) => s + Number(it.cantidad || 0), 0);
        }

        function agregarDesdeModal() {
            if(!varianteActivaModal) return;
            let cant = parseInt(document.getElementById('m-cantidad').value) || 1;
            let idU = productoActivoModal.id + '-' + varianteActivaModal.nombre;
            let itm = carrito.find(i => i.idUnico === idU);
            const maxDisponible = stockDisponibleTotal(productoActivoModal.id, varianteActivaModal.nombre);
            const actualEnCarrito = cantidadEnCarrito(productoActivoModal.id, varianteActivaModal.nombre);

            if(actualEnCarrito + cant > maxDisponible) {
                return alert(`Stock insuficiente. Disponible para esta venta: ${maxDisponible}`);
            }

            if(itm) itm.cantidad += cant;
            else carrito.push({
                idUnico: idU,
                id: productoActivoModal.id,
                nombre: productoActivoModal.nombre,
                variante: varianteActivaModal.nombre,
                precioBase: Number(productoActivoModal.precio || 0),
                costoUnitario: Number(productoActivoModal.costo || 0),
                cantidad: cant
            });

            document.getElementById('cart-badge').innerText = carrito.reduce((s, i) => s + i.cantidad, 0);
            calcularTotalesCarrito();
            mostrarToast(`Agregado: ${cant}x ${varianteActivaModal.nombre}`);
            document.getElementById('m-cantidad').value = 1;
        }

        function getPromoDinamica(idProd, cantTotalBase) {
            let p = baseDeDatos.find(x => x.id === idProd);
            if(!p || !p.promos || p.promos.length === 0) return p.precio;
            let ordenadas = [...p.promos].sort((a,b) => b.cant - a.cant);
            for(let pr of ordenadas) { if(cantTotalBase >= pr.cant) return pr.precio; }
            return p.precio;
        }

        function calcularTotalesCarrito() {
            const list = document.getElementById('lista-carrito');
            list.innerHTML = '';
            let sB = 0; let sP = 0; let agrupados = {};

            carrito.forEach((it, origIdx) => {
                if(!agrupados[it.id]) agrupados[it.id] = { id: it.id, nombre: it.nombre, precioBase: it.precioBase, cantidadTotal: 0, items: [] };
                agrupados[it.id].cantidadTotal += Number(it.cantidad || 0);
                agrupados[it.id].items.push({ ...it, idxReal: origIdx });
            });

            Object.values(agrupados).forEach(grupo => {
                let pP = getPromoDinamica(grupo.id, grupo.cantidadTotal);
                let lBase = grupo.precioBase * grupo.cantidadTotal;
                let lPromo = pP * grupo.cantidadTotal;
                sB += lBase; sP += lPromo;

                let htmlItems = '';
                grupo.items.forEach(it => {
                    let totalLinea = pP * it.cantidad;
                    const max = stockDisponibleTotal(it.id, it.variante);
                    htmlItems += `
                    <div class="cart-line">
                        <div>
                            <span>${it.cantidad}x ${it.variante}</span>
                            <b>(Lps. ${Math.round(totalLinea)})</b>
                            <small>Máx: ${max}</small>
                        </div>
                        <div class="cart-line-actions">
                            <button type="button" onclick="cambiarCantidadCarrito(${it.idxReal}, -1)">−</button>
                            <button type="button" onclick="cambiarCantidadCarrito(${it.idxReal}, 1)">+</button>
                            <button type="button" class="danger" onclick="eliminar(${it.idxReal})">Quitar</button>
                        </div>
                    </div>`;
                });

                let msgPromo = grupo.precioBase > pP ? `<div class="promo-note">✅ Aplica promo: Sale a Lps. ${Math.round(pP)} c/u</div>` : '';

                list.innerHTML += `
                <div class="item-lista" style="padding:15px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:5px; gap:10px;">
                        <b style="font-size:15px; color: var(--accent);">${grupo.cantidadTotal}x ${grupo.nombre}</b>
                        <b style="color:var(--success); font-size:16px; white-space:nowrap;">Lps. ${Math.round(lPromo)}</b>
                    </div>
                    ${htmlItems}
                    ${msgPromo}
                </div>`;
            });

            if(carrito.length === 0) list.innerHTML = '<p style="text-align:center; color:var(--text-muted); padding: 20px;">Tu carrito está vacío</p>';

            let env = 0; let com = 0; const tE = document.getElementById('tipoEnvio').value;
            if(tE !== 'local') env = 110;
            if(tE === 'contra_entrega') {
                let comExacta = (sP + env) * 0.06;
                if(comExacta > 0) com = Math.ceil(comExacta) + 1;
                document.getElementById('div-com').style.display='flex';
            } else document.getElementById('div-com').style.display='none';

            totalCarritoActual = sP + env + com;
            document.getElementById('txt-aho').innerText = `- Lps. ${Math.round(sB - sP)}`;
            document.getElementById('txt-env').innerText = `Lps. ${env}`;
            document.getElementById('txt-com').innerText = `Lps. ${com}`;
            document.getElementById('txt-tot').innerText = `Lps. ${Math.round(totalCarritoActual)}`;
            actualizarEstadoEdicionVenta();
        }

        function cambiarCantidadCarrito(idxReal, delta) {
            const item = carrito[idxReal];
            if(!item) return;
            const nueva = Number(item.cantidad || 0) + delta;
            if(nueva <= 0) return eliminar(idxReal);
            const max = stockDisponibleTotal(item.id, item.variante);
            if(nueva > max) return alert(`No hay suficiente stock. Disponible para esta venta: ${max}`);
            item.cantidad = nueva;
            document.getElementById('cart-badge').innerText = carrito.reduce((s,i)=>s+Number(i.cantidad || 0),0);
            calcularTotalesCarrito();
        }

        function eliminar(idxReal) {
            carrito.splice(idxReal, 1);
            document.getElementById('cart-badge').innerText = carrito.reduce((s,i)=>s+Number(i.cantidad || 0),0);
            calcularTotalesCarrito();
        }

        // --- SISTEMA DE "NUEVO PRODUCTO" ---
        let npVarTemp = []; let npProTemp = []; let npImgTemp = '';

        function abrirModalNuevo() {
            document.getElementById('np-nombre').value = '';
            document.getElementById('np-categoria').value = '';
            document.getElementById('np-costo').value = '';
            document.getElementById('np-precio').value = '';
            
            npImgTemp = '';
            document.getElementById('np-img-preview').src = '';
            document.getElementById('np-img-preview').style.display = 'none';

            npVarTemp = [{ nombre: 'Estándar', stock: 1, img: '' }];
            npProTemp = [];

            renderNpVar(); renderNpPro();
            document.getElementById('modal-nuevo-producto').classList.add('activo'); document.body.classList.add('modal-open');
        }

        async function actualizarFotoNp(input, idx) {
            if (!(input.files && input.files[0])) return;
            try {
                const dataUrl = await procesarImagenInput(input, { maxSize: 1400, quality: 0.82 });
                if(idx === 'main') {
                    npImgTemp = dataUrl;
                    document.getElementById('np-img-preview').src = npImgTemp;
                    document.getElementById('np-img-preview').style.display = 'block';
                } else {
                    npVarTemp[idx].img = dataUrl;
                }
                mostrarToast("Foto optimizada y cargada.");
            } catch (error) {
                console.error(error);
                alert("No se pudo procesar la imagen.");
            }
        }

        // DIBUJAR VARIANTES NUEVO PRODUCTO CON BOTONES SEPARADOS
        function renderNpVar() {
            const list = document.getElementById('np-variantes-lista'); list.innerHTML = '';
            npVarTemp.forEach((v, i) => {
                list.innerHTML += `
                <div class="edicion-fila">
                    <div class="edicion-grid">
                        <input type="text" class="input-box" value="${v.nombre}" onchange="npVarTemp[${i}].nombre=this.value" placeholder="Color/Nombre">
                        <input type="number" class="input-box" style="width:80px;" value="${v.stock}" onchange="npVarTemp[${i}].stock=parseInt(this.value)" placeholder="Stock">
                        <button class="btn-quitar-fila" onclick="npVarTemp.splice(${i},1); renderNpVar();">✕</button>
                    </div>
                    <p style="font-size: 11px; color: var(--text-muted); margin-bottom: 5px;">Foto para "${v.nombre}"</p>
                    <div class="grid-2-col">
                        <label class="btn-foto-peq" style="margin:0;">
                            📁 Subir
                            <input type="file" accept="image/*" onchange="actualizarFotoNp(this, ${i})">
                        </label>
                        <label class="btn-foto-peq" style="margin:0;">
                            📷 Tomar
                            <input type="file" accept="image/*" capture="environment" onchange="actualizarFotoNp(this, ${i})">
                        </label>
                    </div>
                </div>`;
            });
        }

        function renderNpPro() {
            const list = document.getElementById('np-promos-lista'); list.innerHTML = '';
            npProTemp.forEach((p, i) => {
                list.innerHTML += `
                <div class="edicion-grid" style="margin-bottom:10px;">
                    <input type="number" class="input-box" placeholder="Cant. mínima" value="${p.cant}" onchange="npProTemp[${i}].cant=parseInt(this.value)">
                    <input type="number" class="input-box" placeholder="Precio nuevo" value="${Math.round(p.precio)}" onchange="npProTemp[${i}].precio=parseInt(this.value)">
                    <button class="btn-quitar-fila" onclick="npProTemp.splice(${i},1); renderNpPro();">✕</button>
                </div>`;
            });
        }

        function agregarFilaNpVar() { npVarTemp.push({ nombre: '', stock: 0, img: '' }); renderNpVar(); }
        function agregarFilaNpPro() { npProTemp.push({ cant: 2, precio: 0 }); renderNpPro(); }

        async function guardarNuevoProductoLocal() {
            const nombre = document.getElementById("np-nombre").value;
            const categoria = document.getElementById("np-categoria").value || "General";
            const costo = Number(document.getElementById("np-costo").value);
            const precio = Number(document.getElementById("np-precio").value);

            if(!nombre || precio <= 0) return alert("Por favor, ingresa un nombre y un precio válido.");
            if(npVarTemp.length === 0) return alert("Debes agregar al menos un color/variante.");

            const btn = document.getElementById("btn-guardar-firebase");
            btn.innerText = "Guardando en la Nube..."; btn.disabled = true;

            try {
                let cloudId = await window.guardarNuevoFirebase(nombre, categoria, costo, precio, npImgTemp, npVarTemp, npProTemp);
                
                baseDeDatos.push({
                    id: cloudId, nombre: nombre, categoria: categoria, costo: costo, precio: precio,
                    img: npImgTemp, variantes: npVarTemp, promos: npProTemp
                });
                guardarDatosLocales(); inicializarCatalogo();
                
                document.getElementById("modal-nuevo-producto").classList.remove('activo');
                mostrarToast("¡Producto Creado Exitosamente!");
            } catch(e) {
                console.error(e); alert("Error de conexión. Revisa tu internet.");
            }
            btn.innerText = "Guardar en Nube"; btn.disabled = false;
        }

        // --- SISTEMA DE EDICIÓN ---
        let edVarTemp = []; let edProTemp = [];
        
        async function actualizarFoto(input, idx) {
            if (!(input.files && input.files[0])) return;
            try {
                const dataUrl = await procesarImagenInput(input, { maxSize: 1400, quality: 0.82 });
                if(idx === 'main') productoActivoModal.img = dataUrl;
                else edVarTemp[idx].img = dataUrl;
                mostrarToast("Foto optimizada y cargada.");
            } catch (error) {
                console.error(error);
                alert("No se pudo procesar la imagen.");
            }
        }

        function abrirModalEdicion() {
            document.getElementById('edit-nom').value = productoActivoModal.nombre;
            document.getElementById('edit-cos').value = Math.round(productoActivoModal.costo);
            document.getElementById('edit-pre').value = Math.round(productoActivoModal.precio);
            
            edVarTemp = JSON.parse(JSON.stringify(productoActivoModal.variantes));
            edProTemp = JSON.parse(JSON.stringify(productoActivoModal.promos || []));
            
            renderEditorV(); renderEditorP();
            document.getElementById('modal-editar').classList.add('activo'); document.body.classList.add('modal-open');
        }

        // DIBUJAR VARIANTES EDICIÓN CON BOTONES SEPARADOS
        function renderEditorV() {
            const list = document.getElementById('edit-variantes-lista'); list.innerHTML = '';
            edVarTemp.forEach((v, i) => {
                list.innerHTML += `
                <div class="edicion-fila">
                    <div class="edicion-grid">
                        <input type="text" class="input-box" value="${v.nombre}" onchange="edVarTemp[${i}].nombre=this.value" placeholder="Color/Nombre">
                        <input type="number" class="input-box" style="width:80px;" value="${v.stock}" onchange="edVarTemp[${i}].stock=parseInt(this.value)" placeholder="Stock">
                        <button class="btn-quitar-fila" onclick="edVarTemp.splice(${i},1); renderEditorV();">✕</button>
                    </div>
                    <p style="font-size: 11px; color: var(--text-muted); margin-bottom: 5px;">Foto para "${v.nombre}"</p>
                    <div class="grid-2-col">
                        <label class="btn-foto-peq" style="margin:0;">
                            📁 Subir
                            <input type="file" accept="image/*" onchange="actualizarFoto(this, ${i})">
                        </label>
                        <label class="btn-foto-peq" style="margin:0;">
                            📷 Tomar
                            <input type="file" accept="image/*" capture="environment" onchange="actualizarFoto(this, ${i})">
                        </label>
                    </div>
                </div>`;
            });
        }

        function renderEditorP() {
            const list = document.getElementById('edit-promos-lista'); list.innerHTML = '';
            edProTemp.forEach((p, i) => {
                list.innerHTML += `
                <div class="edicion-grid" style="margin-bottom:10px;">
                    <input type="number" class="input-box" placeholder="Cant. mínima" value="${p.cant}" onchange="edProTemp[${i}].cant=parseInt(this.value)">
                    <input type="number" class="input-box" placeholder="Precio nuevo" value="${Math.round(p.precio)}" onchange="edProTemp[${i}].precio=parseInt(this.value)">
                    <button class="btn-quitar-fila" onclick="edProTemp.splice(${i},1); renderEditorP();">✕</button>
                </div>`;
            });
        }

        function agregarFilaVariante() { edVarTemp.push({ nombre: '', stock: 0, img: '' }); renderEditorV(); }
        function agregarFilaPromo() { edProTemp.push({ cant: 2, precio: Math.round(productoActivoModal.precio) - 1 }); renderEditorP(); }

        async function guardarEdicion() {
            const btn = document.getElementById("btn-guardar-edicion");
            btn.innerText = "Actualizando Nube..."; btn.disabled = true;

            productoActivoModal.nombre = document.getElementById('edit-nom').value;
            productoActivoModal.costo = parseFloat(document.getElementById('edit-cos').value);
            productoActivoModal.precio = parseFloat(document.getElementById('edit-pre').value);
            productoActivoModal.variantes = edVarTemp; 
            productoActivoModal.promos = edProTemp;
            
            try {
                await window.actualizarFirebase(productoActivoModal.id, {
                    nombre: productoActivoModal.nombre, costo: productoActivoModal.costo, precio: productoActivoModal.precio,
                    variantes: productoActivoModal.variantes, promos: productoActivoModal.promos, img: productoActivoModal.img
                });

                guardarDatosLocales(); 
                document.getElementById('modal-editar').classList.remove('activo');
                mostrarToast("Producto Modificado en la Nube"); abrirModal(productoActivoModal.id); inicializarCatalogo(); 
                if(carrito.length > 0) calcularTotalesCarrito();
            } catch(e) {
                console.error(e); alert("Hubo un problema actualizando la nube.");
            }
            btn.innerText = "Guardar Cambios"; btn.disabled = false;
        }

        function mostrarToast(msg) {
            const t = document.getElementById('toast-msg'); t.innerText = msg; t.classList.add('mostrar');
            setTimeout(() => t.classList.remove('mostrar'), 3000);
        }

        // --- SISTEMA DE VENTAS INTELIGENTE CONECTADO A FIREBASE ---
        function generarCodigoVenta() {
            const fecha = new Date();
            const y = fecha.getFullYear();
            const consecutivo = String(historialVentas.length + 1).padStart(4, '0');
            return `SDC-${y}-${consecutivo}`;
        }

        function obtenerDatosClienteDesdeFormulario() {
            return {
                cliente: document.getElementById('c-nombre').value || 'Consumidor Final',
                telefono: document.getElementById('c-tel').value || 'No especificado',
                destino: `${document.getElementById('c-muni').value || ''}, ${document.getElementById('c-depto').value || ''}`,
                departamento: document.getElementById('c-depto').value || '',
                municipio: document.getElementById('c-muni').value || '',
                paqueteria: document.getElementById('c-paquetera').value,
                direccion: document.getElementById('c-dir').value || 'No especificada',
                tipoEnvio: document.getElementById('tipoEnvio').value
            };
        }

        function construirDatosOrden() {
            const articulos = JSON.parse(JSON.stringify(carrito)).map(it => ({
                ...it,
                cantidad: Number(it.cantidad || 0),
                precioBase: Number(it.precioBase || 0),
                costoUnitario: Number(it.costoUnitario ?? baseDeDatos.find(p => p.id === it.id)?.costo ?? 0)
            }));
            const costo = articulos.reduce((s, it) => s + (Number(it.costoUnitario || 0) * Number(it.cantidad || 0)), 0);
            return {
                ...obtenerDatosClienteDesdeFormulario(),
                codigo: ventaOriginalEdicion?.codigo || generarCodigoVenta(),
                articulos,
                total: totalCarritoActual,
                costo,
                ganancia: totalCarritoActual - costo,
                estado: modoEdicionVentaId ? 'actualizada' : 'facturada',
                fecha: ventaOriginalEdicion?.fecha || new Date().toISOString(),
                fechaActualizacion: modoEdicionVentaId ? new Date().toISOString() : null
            };
        }

        function mapaCantidades(items) {
            const mapa = new Map();
            (items || []).forEach(it => {
                const key = `${it.id}|||${it.variante}`;
                mapa.set(key, (mapa.get(key) || 0) + Number(it.cantidad || 0));
            });
            return mapa;
        }

        function validarStockCarrito() {
            const acumulado = mapaCantidades(carrito);
            for(const [key, cantidad] of acumulado.entries()) {
                const [id, variante] = key.split('|||');
                const max = stockDisponibleTotal(id, variante);
                if(cantidad > max) {
                    const producto = baseDeDatos.find(p => p.id === id);
                    alert(`Stock insuficiente para ${producto?.nombre || 'producto'} - ${variante}. Disponible: ${max}`);
                    return false;
                }
            }
            return true;
        }

        async function aplicarDiferenciaStock(itemsOriginales = [], itemsNuevos = []) {
            const original = mapaCantidades(itemsOriginales);
            const nuevo = mapaCantidades(itemsNuevos);
            const keys = new Set([...original.keys(), ...nuevo.keys()]);
            const afectados = new Set();

            keys.forEach(key => {
                const [id, variante] = key.split('|||');
                const antes = original.get(key) || 0;
                const despues = nuevo.get(key) || 0;
                const diferencia = despues - antes;
                if(diferencia === 0) return;
                const producto = baseDeDatos.find(p => p.id === id);
                const varBD = producto?.variantes?.find(v => v.nombre === variante);
                if(!producto || !varBD) return;
                varBD.stock = Number(varBD.stock || 0) - diferencia;
                if(varBD.stock < 0) varBD.stock = 0;
                afectados.add(producto.id);
            });

            for(let id of afectados) {
                const productoActualizado = baseDeDatos.find(p => p.id === id);
                if(typeof window.actualizarFirebase === 'function') {
                    await window.actualizarFirebase(id, { variantes: productoActualizado.variantes });
                }
            }
        }

        function actualizarEstadoEdicionVenta() {
            const banner = document.getElementById('venta-edit-banner');
            const btn = document.getElementById('btn-procesar-venta');
            if(banner) banner.hidden = !modoEdicionVentaId;
            if(btn) btn.innerText = modoEdicionVentaId ? 'Actualizar venta' : 'Vender';
        }

        function cancelarEdicionVenta() {
            modoEdicionVentaId = null;
            ventaOriginalEdicion = null;
            limpiarCarrito();
            actualizarEstadoEdicionVenta();
            mostrarToast('Edición cancelada');
        }

        function llenarFormularioDesdeVenta(venta) {
            document.getElementById('c-nombre').value = venta.cliente || venta.datos?.cli || '';
            document.getElementById('c-tel').value = venta.telefono || venta.datos?.tel || '';
            document.getElementById('c-depto').value = venta.departamento || venta.datos?.dep || 'Comayagua';
            cargarMunicipios();
            document.getElementById('c-muni').value = venta.municipio || venta.datos?.mun || 'Comayagua';
            document.getElementById('c-dir').value = venta.direccion || venta.datos?.dir || '';
            document.getElementById('c-paquetera').value = venta.paqueteria || venta.datos?.paq || 'Local';
            document.getElementById('tipoEnvio').value = venta.tipoEnvio || venta.envio || 'local';
        }

        function editarVenta(idVenta) {
            const venta = historialVentas.find(v => String(v.id) === String(idVenta));
            if(!venta) return alert('No encontré esa venta.');
            if((venta.estado || 'facturada') === 'anulada') return alert('No puedes editar una venta anulada.');
            modoEdicionVentaId = venta.id;
            ventaOriginalEdicion = JSON.parse(JSON.stringify(venta));
            carrito = JSON.parse(JSON.stringify(venta.articulos || []));
            llenarFormularioDesdeVenta(venta);
            document.getElementById('cart-badge').innerText = carrito.reduce((s,i)=>s+Number(i.cantidad || 0),0);
            calcularTotalesCarrito();
            actualizarEstadoEdicionVenta();
            cambiarVista('carrito', document.querySelectorAll('nav button')[2]);
            mostrarToast('Venta cargada para editar');
        }

        async function anularVenta(idVenta) {
            const venta = historialVentas.find(v => String(v.id) === String(idVenta));
            if(!venta) return alert('No encontré esa venta.');
            if((venta.estado || 'facturada') === 'anulada') return alert('Esta venta ya está anulada.');
            if(!confirm('¿Anular esta venta y devolver el stock al inventario?')) return;

            try {
                await aplicarDiferenciaStock(venta.articulos || [], []);
                venta.estado = 'anulada';
                venta.fechaAnulacion = new Date().toISOString();
                if(typeof window.actualizarVentaFirebase === 'function' && !String(venta.id).startsWith('local-')) {
                    await window.actualizarVentaFirebase(venta.id, { estado: venta.estado, fechaAnulacion: venta.fechaAnulacion });
                }
                historialVentas = fusionarVentas(historialVentas);
                guardarDatosLocales();
                renderVentas();
                actualizarDashboard();
                renderizarProductos(baseDeDatos);
                mostrarToast('Venta anulada y stock devuelto');
            } catch(e) {
                console.error(e);
                alert('No se pudo anular la venta. Revisa conexión o Firebase.');
            }
        }

        async function procesarVenta() {
            if(carrito.length === 0) return alert("Tu carrito está vacío");
            if(!validarStockCarrito()) return;

            const btn = document.getElementById("btn-procesar-venta");
            if(btn) { btn.innerText = modoEdicionVentaId ? "Actualizando..." : "Procesando Venta..."; btn.disabled = true; }

            try {
                const datosOrden = construirDatosOrden();

                if(modoEdicionVentaId) {
                    datosOrden.id = modoEdicionVentaId;
                    await aplicarDiferenciaStock(ventaOriginalEdicion?.articulos || [], datosOrden.articulos);
                    if(typeof window.actualizarVentaFirebase === 'function' && !String(modoEdicionVentaId).startsWith('local-')) {
                        await window.actualizarVentaFirebase(modoEdicionVentaId, datosOrden);
                    }
                    historialVentas = historialVentas.map(v => String(v.id) === String(modoEdicionVentaId) ? { ...v, ...datosOrden } : v);
                    mostrarToast('Venta actualizada. Inventario ajustado.');
                } else {
                    await aplicarDiferenciaStock([], datosOrden.articulos);
                    try {
                        if(typeof window.registrarVentaFirebase === 'function') {
                            const ventaId = await window.registrarVentaFirebase(datosOrden);
                            datosOrden.id = ventaId || `local-${Date.now()}`;
                        } else {
                            datosOrden.id = `local-${Date.now()}`;
                        }
                    } catch(e) {
                        console.warn('No se pudo guardar la venta en Firebase, se guardó localmente:', e);
                        datosOrden.id = `local-${Date.now()}`;
                        datosOrden.estadoSync = 'pendiente';
                    }
                    historialVentas.unshift(datosOrden);
                    mostrarToast(datosOrden.estadoSync === 'pendiente' ? 'Venta guardada localmente. Pendiente de nube.' : '¡Venta exitosa! Inventario actualizado.');
                }

                historialVentas = fusionarVentas(historialVentas);
                ventasTotales = ventasActivas().reduce((s, v) => s + Number(v.total || 0), 0);
                modoEdicionVentaId = null;
                ventaOriginalEdicion = null;
                guardarDatosLocales();
                actualizarDashboard();
                renderVentas();
                limpiarCarrito();
                renderizarProductos(baseDeDatos);
            } catch (error) {
                console.error("Error al vender:", error);
                alert("Hubo un error al procesar la venta. Revisa tu internet o reglas de Firebase.");
            }

            if(btn) { btn.innerText = "Vender"; btn.disabled = false; }
            actualizarEstadoEdicionVenta();
        }

        function iniciarVentaRapida() {
            if(modoEdicionVentaId) cancelarEdicionVenta();
            cambiarVista('catalogo', document.querySelectorAll('nav button')[1]);
            mostrarToast('Selecciona productos para iniciar la venta');
        }

        function enviarWhatsApp() {
            if(carrito.length===0) return alert("El carrito está vacío");
            let cli = document.getElementById('c-nombre').value || 'Consumidor Final';
            let tel = document.getElementById('c-tel').value || 'No especificado';
            let zona = `${document.getElementById('c-muni').value || ''}, ${document.getElementById('c-depto').value || ''}`;
            let paq = document.getElementById('c-paquetera').value;

            let m = `*SDC - COMAYAGUA*\n_Resumen de tu Orden_\n\n*Cliente:* ${cli}\n*Teléfono:* ${tel}\n*Destino:* ${zona}\n*Paquetera:* ${paq}\n\n*Detalle de Artículos:*\n`;
            
            let agrupados = {};
            carrito.forEach((it) => {
                if(!agrupados[it.id]) agrupados[it.id] = { id: it.id, nombre: it.nombre, precioBase: it.precioBase, cantidadTotal: 0, items: [] };
                agrupados[it.id].cantidadTotal += it.cantidad; agrupados[it.id].items.push(it);
            });

            Object.values(agrupados).forEach(g => {
                let pP = getPromoDinamica(g.id, g.cantidadTotal);
                m += `\n[ ${g.cantidadTotal}x ${g.nombre} ] -> Total: Lps. ${Math.round(pP * g.cantidadTotal)}\n`;
                g.items.forEach(it => m += ` - ${it.cantidad}x ${it.variante} (Lps. ${Math.round(pP * it.cantidad)})\n`);
            });

            m += `\n*Ahorro:* ${document.getElementById('txt-aho').innerText}\n*Envío:* ${document.getElementById('txt-env').innerText}\n`;
            if(document.getElementById('tipoEnvio').value === 'contra_entrega') m += `*Comisión CCE:* ${document.getElementById('txt-com').innerText}\n`;
            m += `\n*TOTAL NETO A PAGAR: ${document.getElementById('txt-tot').innerText}*`;
            
            abrirWhatsAppMensaje(m, tel);
        }

        function armarFac() {
            const cliente = document.getElementById('c-nombre').value || 'Consumidor Final';
            const telefono = document.getElementById('c-tel').value || 'No especificado';
            const zona = `${document.getElementById('c-muni').value || ''}, ${document.getElementById('c-depto').value || ''}`.replace(/^,\s*|,\s*$/g, '') || 'No especificado';
            const direccion = document.getElementById('c-dir').value || 'No especificada';
            const paq = document.getElementById('c-paquetera').value;
            const tipoEnvioSelect = document.getElementById('tipoEnvio');
            const tipoEnvioTexto = tipoEnvioSelect?.selectedOptions?.[0]?.textContent || 'Entrega local';
            const pagoTexto = tipoEnvioSelect?.value === 'contra_entrega' ? 'Contra entrega' : 'A convenir';
            document.getElementById('f-fecha').innerText = new Date().toLocaleString('es-HN', { dateStyle: 'full', timeStyle: 'short' });
            document.getElementById('f-codigo').innerText = ventaOriginalEdicion?.codigo || generarCodigoVenta();
            document.getElementById('f-cli').innerText = cliente;
            document.getElementById('f-tel').innerText = telefono;
            document.getElementById('f-zona').innerText = zona;
            document.getElementById('f-dir').innerText = direccion;
            document.getElementById('f-paq').innerText = paq;
            document.getElementById('f-envio-tipo') && (document.getElementById('f-envio-tipo').innerText = tipoEnvioTexto);
            document.getElementById('f-pago') && (document.getElementById('f-pago').innerText = pagoTexto);

            const items = document.getElementById('f-items'); items.innerHTML = '';
            let sB = 0;
            let agrupados = {};
            carrito.forEach((it) => {
                if(!agrupados[it.id]) agrupados[it.id] = { id: it.id, nombre: it.nombre, precioBase: it.precioBase, cantidadTotal: 0, items: [] };
                agrupados[it.id].cantidadTotal += it.cantidad;
                agrupados[it.id].items.push(it);
            });

            Object.values(agrupados).forEach(grupo => {
                const pP = getPromoDinamica(grupo.id, grupo.cantidadTotal);
                sB += grupo.precioBase * grupo.cantidadTotal;
                const detalles = grupo.items.map(it => `• ${it.cantidad}x ${it.variante} — Lps. ${Math.round(pP * it.cantidad)}`).join('<br>');
                items.innerHTML += `
                    <div class="fac-item">
                        <div class="fac-item-main">
                            <span>${grupo.cantidadTotal}x ${grupo.nombre}</span>
                            <span>Lps. ${Math.round(pP * grupo.cantidadTotal)}</span>
                        </div>
                        <div class="fac-item-sub">${detalles}</div>
                    </div>`;
            });

            document.getElementById('f-sub').innerText = `Lps. ${Math.round(sB)}`;
            document.getElementById('f-aho').innerText = document.getElementById('txt-aho').innerText;
            document.getElementById('f-env').innerText = document.getElementById('txt-env').innerText;
            document.getElementById('f-com').innerText = document.getElementById('txt-com').innerText;
            document.getElementById('f-tot').innerText = document.getElementById('txt-tot').innerText;
            document.getElementById('f-row-com').style.display = document.getElementById('tipoEnvio').value === 'contra_entrega' ? 'flex' : 'none';
        }

        function actualizarFormatoFactura() {
            const cont = document.getElementById('contenedor-factura');
            const formato = document.getElementById('factura-formato')?.value || 'carta';
            cont.classList.remove('factura-carta', 'factura-ticket');
            cont.classList.add(formato === 'ticket' ? 'factura-ticket' : 'factura-carta');
        }

        async function generarImagenFactura() {
            if(carrito.length===0) return alert("Agrega artículos al carrito");
            armarFac();
            actualizarFormatoFactura();
            try {
                const factura = document.getElementById('contenedor-factura');
                const canvas = await html2canvas(factura, {
                    scale: 2,
                    useCORS: true,
                    backgroundColor: '#ffffff',
                    width: factura.scrollWidth,
                    height: factura.scrollHeight,
                    scrollX: 0,
                    scrollY: 0
                });
                const blob = await canvasToBlob(canvas);
                if(!blob) throw new Error('No se pudo crear la factura.');
                const archivo = new File([blob], `Factura_SDC_${Date.now()}.png`, { type: 'image/png' });
                if(navigator.canShare && navigator.canShare({ files: [archivo] })) {
                    await navigator.share({
                        files: [archivo],
                        title: 'Factura SDC',
                        text: 'Factura de Soluciones Digitales Comayagua'
                    });
                    mostrarToast('Factura lista para compartir');
                    return;
                }
                const link = document.createElement('a');
                link.download = `Factura_SDC_${Date.now()}.png`;
                link.href = URL.createObjectURL(blob);
                link.click();
                setTimeout(() => URL.revokeObjectURL(link.href), 1200);
                mostrarToast('Factura descargada para compartir');
            } catch (error) {
                console.error(error);
                alert('No se pudo generar la factura.');
            }
        }


        function obtenerGruposCarrito() {
            const agrupados = {};
            carrito.forEach((it) => {
                if(!agrupados[it.id]) agrupados[it.id] = { id: it.id, nombre: it.nombre, precioBase: it.precioBase, cantidadTotal: 0, items: [] };
                agrupados[it.id].cantidadTotal += Number(it.cantidad || 0);
                agrupados[it.id].items.push(it);
            });
            return Object.values(agrupados);
        }

        function htmlTicketActual() {
            const cli = document.getElementById('c-nombre').value || 'Consumidor Final';
            const tel = document.getElementById('c-tel').value || 'N/A';
            const zona = `${document.getElementById('c-muni').value || ''}, ${document.getElementById('c-depto').value || ''}`.replace(/^,\s*|,\s*$/g, '') || 'N/A';
            const paq = document.getElementById('c-paquetera').value || 'N/A';
            const codigo = ventaOriginalEdicion?.codigo || generarCodigoVenta();
            const filas = obtenerGruposCarrito().map(g => {
                const precioPromo = getPromoDinamica(g.id, g.cantidadTotal);
                const variantes = g.items.map(it => `<div class="sub">- ${it.cantidad}x ${it.variante} · Lps. ${Math.round(precioPromo * it.cantidad)}</div>`).join('');
                return `<div class="item"><b>${g.cantidadTotal}x ${g.nombre}</b><span>Lps. ${Math.round(precioPromo * g.cantidadTotal)}</span></div>${variantes}`;
            }).join('');
            const comision = document.getElementById('tipoEnvio').value === 'contra_entrega'
                ? `<div class="row"><span>Comisión CCE</span><b>${document.getElementById('txt-com').innerText}</b></div>`
                : '';
            return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Ticket SDC</title>
<style>
@page { size: 80mm auto; margin: 4mm; }
* { box-sizing: border-box; }
body { margin: 0; color: #000; background:#fff; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 12px; }
.ticket { width: 72mm; margin: 0 auto; }
.logo { display:block; width:70px; height:70px; object-fit:contain; margin:0 auto 4px; }
h1 { font-size: 15px; text-align:center; margin: 0; line-height:1.15; }
.center { text-align:center; }
.muted { color:#444; }
.hr { border-top:1px dashed #000; margin:8px 0; }
.row, .item { display:flex; justify-content:space-between; gap:8px; margin:4px 0; }
.item b { max-width: 48mm; }
.sub { margin-left: 8px; color:#333; line-height:1.35; }
.total { font-size: 17px; font-weight: 900; margin-top: 8px; }
</style>
</head>
<body onload="window.print(); setTimeout(()=>window.close(), 450);">
<div class="ticket">
<img src="${LOGO_SDC}" class="logo">
<h1>SOLUCIONES DIGITALES<br>COMAYAGUA</h1>
<div class="center muted">+504 3151-7755</div>
<div class="hr"></div>
<div><b>Orden:</b> ${codigo}</div>
<div><b>Fecha:</b> ${new Date().toLocaleString('es-HN')}</div>
<div><b>Cliente:</b> ${cli}</div>
<div><b>Tel:</b> ${tel}</div>
<div><b>Destino:</b> ${zona}</div>
<div><b>Paquetera:</b> ${paq}</div>
<div class="hr"></div>
${filas}
<div class="hr"></div>
<div class="row"><span>Ahorro</span><b>${document.getElementById('txt-aho').innerText}</b></div>
<div class="row"><span>Envío</span><b>${document.getElementById('txt-env').innerText}</b></div>
${comision}
<div class="row total"><span>TOTAL</span><b>${document.getElementById('txt-tot').innerText}</b></div>
<div class="hr"></div>
<div class="center">Gracias por su compra</div>
</div>
</body>
</html>`;
        }

        function imprimirTicket() {
            if(carrito.length===0) return alert("Agrega artículos al carrito");
            const win = window.open('', '_blank', 'width=420,height=720');
            if(!win) return alert('El navegador bloqueó la ventana de impresión.');
            win.document.open();
            win.document.write(htmlTicketActual());
            win.document.close();
        }

        async function respaldarAhora() {
            try {
                if(typeof window.respaldarDatosFirebase !== 'function') {
                    guardarDatosLocales();
                    return mostrarToast('Respaldo local guardado.');
                }
                await window.respaldarDatosFirebase({
                    productos: baseDeDatos,
                    ventas: historialVentas,
                    cotizaciones,
                    ventasTotales,
                    fecha: new Date().toISOString()
                });
                mostrarToast('Respaldo en nube completado.');
            } catch (error) {
                console.error(error);
                guardarDatosLocales();
                alert('No se pudo respaldar en la nube. Se guardó localmente.');
            }
        }

        function guardarCotizacion() {
            if(carrito.length===0) return alert("Agrega artículos primero");
            let d = {
                cli: document.getElementById('c-nombre').value || 'Sin Nombre', tel: document.getElementById('c-tel').value || 'N/A',
                dep: document.getElementById('c-depto').value, mun: document.getElementById('c-muni').value,
                dir: document.getElementById('c-dir').value, paq: document.getElementById('c-paquetera').value
            };
            cotizaciones.push({ id: Date.now(), datos: d, items: [...carrito], total: totalCarritoActual, envio: document.getElementById('tipoEnvio').value });
            guardarDatosLocales();
            limpiarCarrito(); renderCotizaciones(); mostrarToast("Cotización guardada exitosamente"); cambiarVista('cotizaciones', document.querySelectorAll('nav button')[3]);
        }

        function renderCotizaciones() {
            const cont = document.getElementById('lista-cotizaciones'); cont.innerHTML = '';
            if(cotizaciones.length === 0) {
                cont.innerHTML = '<div class="empty-state">No tienes cotizaciones pendientes.</div>';
                return;
            }
            cotizaciones
                .slice()
                .sort((a, b) => Number(b.id || 0) - Number(a.id || 0))
                .forEach(c => {
                    const fecha = new Date(Number(c.id) || Date.now()).toLocaleString('es-HN', { dateStyle: 'medium', timeStyle: 'short' });
                    const itemsCount = (c.items || []).reduce((s, it) => s + Number(it.cantidad || 0), 0);
                    const preview = (c.items || []).slice(0, 2).map(it => `${it.cantidad}x ${it.nombre}${it.variante ? ' · ' + it.variante : ''}`).join(' • ');
                    const extra = Math.max((c.items || []).length - 2, 0);
                    const resumenPreview = preview ? `${preview}${extra ? ` • +${extra} más` : ''}` : 'Sin artículos agregados';
                    cont.innerHTML += `
                        <div class="cot-card">
                            <div class="cot-head">
                                <div>
                                    <b>${c.datos.cli}</b>
                                    <div class="cot-date">${fecha}</div>
                                </div>
                                <span class="cot-total">Lps. ${Math.round(c.total)}</span>
                            </div>
                            <p class="cot-meta">📍 ${c.datos.mun}, ${c.datos.dep} &nbsp; | &nbsp; 📦 ${c.datos.paq}</p>
                            <div class="cot-pill-row">
                                <span class="cot-pill">${itemsCount} artículo(s)</span>
                                <span class="cot-pill">${c.envio === 'contra_entrega' ? 'Contra entrega' : 'Envío estándar'}</span>
                            </div>
                            <div class="cot-preview">${resumenPreview}</div>
                            <div class="cot-actions">
                                <button class="btn-block btn-recuperar" onclick="cargarCot(${c.id})">Recuperar venta</button>
                                <button class="btn-cot-wa" onclick="whatsappCotizacion(${c.id})" title="Enviar por WhatsApp">WhatsApp</button>
                                <button class="btn-borrar-cot" onclick="eliminarCot(${c.id})" title="Eliminar cotización">×</button>
                            </div>
                        </div>`;
                });
        }


        function whatsappCotizacion(id) {
            const c = cotizaciones.find(x => String(x.id) === String(id));
            if(!c) return alert('No encontré esa cotización.');
            const items = (c.items || []).map(it => `• ${it.cantidad}x ${it.nombre}${it.variante ? ' - ' + it.variante : ''}`).join('\n');
            let msg = `*🛍️ SDC COMAYAGUA - Cotización*\n\n`;
            msg += `*Cliente:* ${c.datos.cli || 'Consumidor Final'}\n`;
            msg += `*Teléfono:* ${c.datos.tel || 'N/A'}\n`;
            msg += `*Destino:* ${c.datos.mun || ''}, ${c.datos.dep || ''}\n`;
            msg += `*Paquetera:* ${c.datos.paq || 'N/A'}\n\n`;
            msg += `*Artículos:*\n${items}\n\n`;
            msg += `*TOTAL ESTIMADO: Lps. ${Math.round(Number(c.total || 0))}*\n`;
            msg += `\nGracias por consultar con Soluciones Digitales Comayagua.`;
            abrirWhatsAppMensaje(msg, c.datos.tel || '');
        }

        function cargarCot(id) {
            let c = cotizaciones.find(x => x.id === id); carrito = [...c.items];
            document.getElementById('c-nombre').value = c.datos.cli; document.getElementById('c-tel').value = c.datos.tel;
            document.getElementById('c-depto').value = c.datos.dep; cargarMunicipios(); document.getElementById('c-muni').value = c.datos.mun;
            document.getElementById('c-dir').value = c.datos.dir; document.getElementById('c-paquetera').value = c.datos.paq;
            document.getElementById('tipoEnvio').value = c.envio;
            document.getElementById('cart-badge').innerText = carrito.reduce((s,i)=>s+i.cantidad,0); calcularTotalesCarrito();
            cotizaciones = cotizaciones.filter(x => x.id !== id); 
            guardarDatosLocales(); renderCotizaciones(); cambiarVista('carrito', document.querySelectorAll('nav button')[2]);
        }

        function limpiarCarrito() {
            carrito = []; document.getElementById('cart-badge').innerText = 0;
            ['c-nombre', 'c-tel', 'c-dir'].forEach(id => document.getElementById(id).value = '');
            document.getElementById('c-depto').value = "Comayagua"; cargarMunicipios(); document.getElementById('c-muni').value = "Comayagua";
            calcularTotalesCarrito();
        }

        function normalizarFechaVenta(fecha) {
            if(!fecha) return new Date(0);
            if(typeof fecha?.toDate === 'function') return fecha.toDate();
            if(fecha?.seconds) return new Date(fecha.seconds * 1000);
            return new Date(fecha);
        }

        function fusionarVentas(lista) {
            const mapa = new Map();
            lista.filter(Boolean).forEach((venta) => {
                const clave = venta.id || `${venta.fecha || ''}-${venta.cliente || ''}-${venta.total || ''}`;
                mapa.set(clave, { ...venta, id: clave });
            });
            return [...mapa.values()].sort((a,b) => normalizarFechaVenta(b.fecha) - normalizarFechaVenta(a.fecha));
        }

        async function cargarHistorialVentas() {
            try {
                if(typeof window.cargarVentasFirebase === 'function') {
                    const ventasNube = await window.cargarVentasFirebase();
                    historialVentas = fusionarVentas([...(ventasNube || []), ...historialVentas]);
                    ventasTotales = ventasActivas().reduce((s, v) => s + Number(v.total || 0), 0);
                    guardarDatosLocales();
                    setCloudStatus('online', 'Nube: conectada');
                    actualizarDashboard();
                }
            } catch(e) {
                setCloudStatus('offline', 'Nube: offline');
                console.warn('No se pudo cargar el historial de ventas desde Firebase:', e);
            }
            renderVentas();
        }

        function actualizarResumenVentas() {
            const activas = ventasActivas();
            const total = activas.reduce((s, v) => s + Number(v.total || 0), 0);
            const promedio = activas.length ? total / activas.length : 0;
            const countEl = document.getElementById('ventas-count');
            const totalEl = document.getElementById('ventas-total');
            const promEl = document.getElementById('ventas-promedio');
            if(countEl) countEl.innerText = activas.length;
            if(totalEl) totalEl.innerText = `Lps. ${Math.round(total)}`;
            if(promEl) promEl.innerText = `Lps. ${Math.round(promedio)}`;
        }

        function claseEstadoVenta(estado) {
            const e = estado || 'facturada';
            if(e === 'anulada') return 'status-danger';
            if(e === 'actualizada') return 'status-warning';
            return 'status-success';
        }

        function renderVentas() {
            const cont = document.getElementById('lista-ventas');
            if(!cont) return;
            const filtro = (document.getElementById('buscador-ventas')?.value || '').toLowerCase().trim();
            const estadoFiltro = document.getElementById('ventas-filtro-estado')?.value || '';
            const desde = document.getElementById('ventas-fecha-desde')?.value || '';
            const hasta = document.getElementById('ventas-fecha-hasta')?.value || '';
            const ventasFiltradas = historialVentas.filter(v => {
                const estado = v.estado || 'facturada';
                const texto = `${v.codigo || ''} ${v.cliente || ''} ${v.telefono || ''} ${v.destino || ''} ${v.paqueteria || ''}`.toLowerCase();
                const fecha = normalizarFechaVenta(v.fecha);
                const fechaKey = isNaN(fecha.getTime()) ? '' : fecha.toISOString().slice(0, 10);
                const pasaDesde = !desde || fechaKey >= desde;
                const pasaHasta = !hasta || fechaKey <= hasta;
                return texto.includes(filtro) && (!estadoFiltro || estado === estadoFiltro) && pasaDesde && pasaHasta;
            });

            actualizarResumenVentas();
            cont.innerHTML = '';

            if(ventasFiltradas.length === 0) {
                cont.innerHTML = `<div class="empty-state">${historialVentas.length ? 'No hay ventas que coincidan con tu búsqueda.' : 'Aún no hay ventas facturadas.'}</div>`;
                return;
            }

            ventasFiltradas.forEach((venta) => {
                const fecha = normalizarFechaVenta(venta.fecha);
                const fechaTxt = isNaN(fecha.getTime()) ? 'Fecha no disponible' : fecha.toLocaleString('es-HN', { dateStyle: 'medium', timeStyle: 'short' });
                const articulos = Array.isArray(venta.articulos) ? venta.articulos : [];
                const totalItems = articulos.reduce((s, it) => s + Number(it.cantidad || 0), 0);
                const estado = venta.estado || 'facturada';
                const resumenItems = articulos.length
                    ? articulos.map(it => `${it.cantidad || 0}x ${it.nombre || 'Producto'}${it.variante ? ' - ' + it.variante : ''}`).join('<br>')
                    : 'Sin detalle de artículos';
                const botones = estado === 'anulada'
                    ? `<button class="btn-mini btn-ghost" onclick="reenviarVentaWhatsApp('${venta.id}')">WhatsApp</button>
                               <button class="btn-mini btn-ghost" onclick="imprimirVentaTicket('${venta.id}')">Ticket</button>`
                    : `<button class="btn-mini" onclick="editarVenta('${venta.id}')">Editar / agregar más</button>
                       <button class="btn-mini btn-ghost" onclick="reenviarVentaWhatsApp('${venta.id}')">WhatsApp</button>
                       <button class="btn-mini btn-ghost" onclick="imprimirVentaTicket('${venta.id}')">Ticket</button>
                       <button class="btn-mini btn-danger-soft" onclick="anularVenta('${venta.id}')">Anular</button>`;
                cont.innerHTML += `
                    <div class="item-lista venta-card ${estado === 'anulada' ? 'venta-anulada' : ''}">
                        <div class="venta-top">
                            <div>
                                <div class="venta-title-row"><b>${venta.cliente || 'Consumidor Final'}</b><span class="status-pill ${claseEstadoVenta(estado)}">${estado}</span></div>
                                <p class="venta-meta">${venta.codigo || 'Sin código'} · ${fechaTxt}<br>📍 ${venta.destino || 'Destino no especificado'} · 📦 ${venta.paqueteria || 'N/A'} · ☎️ ${venta.telefono || 'N/A'}</p>
                            </div>
                            <div class="venta-total">Lps. ${Math.round(Number(venta.total || 0))}</div>
                        </div>
                        <div class="venta-pill-row">
                            <span class="venta-pill">${totalItems} artículo(s)</span>
                            <span class="venta-pill">${venta.codigo || 'Sin código'}</span>
                        </div>
                        <div class="venta-items">${resumenItems}</div>
                        <div class="venta-actions">${botones}</div>
                    </div>`;
            });
        }

        function limpiarFiltrosVentas() {
            ['buscador-ventas', 'ventas-fecha-desde', 'ventas-fecha-hasta'].forEach(id => {
                const el = document.getElementById(id);
                if(el) el.value = '';
            });
            const estado = document.getElementById('ventas-filtro-estado');
            if(estado) estado.value = '';
            renderVentas();
        }

        function reenviarVentaWhatsApp(idVenta) {
            const venta = historialVentas.find(v => String(v.id) === String(idVenta));
            if(!venta) return alert('No encontré esa venta.');
            const items = (venta.articulos || []).map(it => `• ${it.cantidad}x ${it.nombre}${it.variante ? ' - ' + it.variante : ''}`).join('\n');
            let msg = `*🧾 SOLUCIONES DIGITALES COMAYAGUA*\n`;
            msg += `_Resumen de compra_\n\n`;
            msg += `*Orden:* ${venta.codigo || venta.id}\n`;
            msg += `*Cliente:* ${venta.cliente || 'Consumidor Final'}\n`;
            msg += `*Teléfono:* ${venta.telefono || 'N/A'}\n`;
            msg += `*Destino:* ${venta.destino || 'N/A'}\n`;
            msg += `*Paquetera:* ${venta.paqueteria || 'N/A'}\n\n`;
            msg += `*📦 Artículos*\n${items}\n\n`;
            msg += `*TOTAL A PAGAR:* Lps. ${Math.round(Number(venta.total || 0))}\n`;
            msg += `Gracias por comprar con SDC 🙌`;
            abrirWhatsAppMensaje(msg, venta.telefono || '');
        }


        function imprimirVentaTicket(idVenta) {
            const venta = historialVentas.find(v => String(v.id) === String(idVenta));
            if(!venta) return alert('No encontré esa venta.');
            const filas = (venta.articulos || []).map(it => `<div class="item"><b>${it.cantidad}x ${it.nombre}${it.variante ? ' - ' + it.variante : ''}</b></div>`).join('');
            const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Ticket ${venta.codigo || ''}</title>
<style>
@page { size: 80mm auto; margin: 4mm; }
body{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px;color:#000;background:#fff;margin:0}
.ticket{width:72mm;margin:0 auto}.logo{display:block;width:70px;height:70px;object-fit:contain;margin:0 auto 4px}
h1{text-align:center;font-size:15px;margin:0}.center{text-align:center}.hr{border-top:1px dashed #000;margin:8px 0}
.item{margin:4px 0}.row{display:flex;justify-content:space-between}.total{font-size:17px;font-weight:900}
</style></head><body onload="window.print(); setTimeout(()=>window.close(),450)"><div class="ticket">
<img src="${LOGO_SDC}" class="logo"><h1>SOLUCIONES DIGITALES<br>COMAYAGUA</h1><div class="center">+504 3151-7755</div>
<div class="hr"></div><div><b>Orden:</b> ${venta.codigo || venta.id}</div><div><b>Fecha:</b> ${normalizarFechaVenta(venta.fecha).toLocaleString('es-HN')}</div>
<div><b>Cliente:</b> ${venta.cliente || 'Consumidor Final'}</div><div><b>Tel:</b> ${venta.telefono || 'N/A'}</div><div><b>Destino:</b> ${venta.destino || 'N/A'}</div><div class="hr"></div>${filas}
<div class="hr"></div><div class="row total"><span>TOTAL</span><b>Lps. ${Math.round(Number(venta.total || 0))}</b></div><div class="hr"></div><div class="center">Gracias por su compra</div></div></body></html>`;
            const win = window.open('', '_blank', 'width=420,height=720');
            if(!win) return alert('El navegador bloqueó la ventana de impresión.');
            win.document.open();
            win.document.write(html);
            win.document.close();
        }

        function exportarVentasCSV() {
            const filas = [['codigo','fecha','estado','cliente','telefono','destino','paqueteria','total','costo','ganancia','articulos']];
            historialVentas.forEach(v => {
                const articulos = (v.articulos || []).map(it => `${it.cantidad}x ${it.nombre} ${it.variante || ''}`).join(' | ');
                filas.push([
                    v.codigo || v.id || '',
                    normalizarFechaVenta(v.fecha).toISOString(),
                    v.estado || 'facturada',
                    v.cliente || '',
                    v.telefono || '',
                    v.destino || '',
                    v.paqueteria || '',
                    Math.round(Number(v.total || 0)),
                    Math.round(Number(v.costo || calcularCostoVenta(v) || 0)),
                    Math.round(Number(v.ganancia ?? (Number(v.total || 0) - calcularCostoVenta(v)))),
                    articulos
                ]);
            });
            const csv = filas.map(row => row.map(campo => `"${String(campo).replace(/"/g, '""')}"`).join(',')).join('\n');
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `ventas_sdc_${new Date().toISOString().slice(0,10)}.csv`;
            link.click();
            URL.revokeObjectURL(url);
        }

        function cerrarModalDesdeOverlay(event) {
            if(event.target !== event.currentTarget) return;
            event.currentTarget.classList.remove('activo');
            document.body.classList.remove('modal-open');
        }

        function cambiarVista(idVista, btn) {
            document.querySelectorAll('.vista').forEach(v => v.classList.remove('activa'));
            const vista = document.getElementById('vista-' + idVista);
            if(vista) vista.classList.add('activa');
            actualizarTabbarActiva(idVista);
            document.querySelectorAll('nav button').forEach(b => b.classList.remove('activo'));
            if(btn) {
                btn.classList.add('activo');
                setTimeout(() => btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }), 20);
            }
            if(idVista === 'ventas') renderVentas();
        }

        document.querySelectorAll('.modal-overlay').forEach(modal => modal.addEventListener('click', cerrarModalDesdeOverlay));
        document.addEventListener('keydown', (event) => {
            if(event.key === 'Escape') {
                document.querySelectorAll('.modal-overlay.activo').forEach(m => m.classList.remove('activo'));
                document.body.classList.remove('modal-open');
            }
        });

        initTheme();
        iniciarControlAcceso();
        initLugares();
        inicializarCatalogo()
            .catch((error) => {
                console.error(error);
                mostrarToast('No se pudo completar la carga inicial.');
            })
            .finally(() => {
                actualizarEstadoEdicionVenta();
                actualizarFormatoFactura();
                const params = new URLSearchParams(location.search);
                const vistaInicial = params.get('vista');
                if(vistaInicial) {
                    const indexMap = { inicio:0, catalogo:1, carrito:2, cotizaciones:3, ventas:4, dashboard:5 };
                    const btn = document.querySelectorAll('nav button')[indexMap[vistaInicial] || 0];
                    cambiarVista(vistaInicial, btn);
                }
                setTimeout(ocultarSplash, 280);
            });
