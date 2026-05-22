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

        function guardarDatosLocales() {
            localStorage.setItem('sdc_bd', JSON.stringify(baseDeDatos));
            localStorage.setItem('sdc_ventas', ventasTotales);
            localStorage.setItem('sdc_cots', JSON.stringify(cotizaciones));
            localStorage.setItem('sdc_historial_ventas', JSON.stringify(historialVentas));
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
            ventasTotales = totalVentas;
            actualizarResumenVentas();
        }

        async function esperarFirebase(maxMs = 5000) {
            const inicio = Date.now();
            while (typeof window.cargarDesdeFirebase !== 'function' && Date.now() - inicio < maxMs) {
                await new Promise(r => setTimeout(r, 100));
            }
            return typeof window.cargarDesdeFirebase === 'function';
        }

        async function inicializarCatalogo() {
            const contProd = document.getElementById('contenedor-productos');
            contProd.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--accent); font-weight: bold; padding: 20px;">☁️ Conectando con la Nube...</p>';
            
            const firebaseListo = await esperarFirebase();

            try {
                if (!firebaseListo) throw new Error('Firebase no disponible');
                baseDeDatos = await window.cargarDesdeFirebase();
                localStorage.setItem('sdc_bd', JSON.stringify(baseDeDatos)); 
            } catch (e) {
                console.error("Error al descargar de la nube:", e);
                let bdGuardada = localStorage.getItem('sdc_bd');
                if(bdGuardada) baseDeDatos = JSON.parse(bdGuardada);
                mostrarToast("Sin conexión. Usando datos locales guardados.");
            }

            cargarRestoDatosLocales();
            const cat = ['Todos', ...new Set(baseDeDatos.map(p => p.categoria))];
            document.getElementById('contenedor-filtros').innerHTML = cat.map(c => `<button class="btn-cat ${c==='Todos'?'activo':''}" onclick="filtrar('${c}', this)">${c}</button>`).join('');
            
            renderizarProductos(baseDeDatos); actualizarDashboard(); renderCotizaciones(); await cargarHistorialVentas();
        }

        function filtrar(c, btn) {
            document.querySelectorAll('.btn-cat').forEach(b => b.classList.remove('activo')); btn.classList.add('activo');
            renderizarProductos(c === 'Todos' ? baseDeDatos : baseDeDatos.filter(p => p.categoria === c));
        }

        function buscarProducto() {
            let txt = document.getElementById('buscador').value.toLowerCase();
            renderizarProductos(baseDeDatos.filter(p => p.nombre.toLowerCase().includes(txt)));
        }

        function renderizarProductos(arr) {
            const cont = document.getElementById('contenedor-productos'); cont.innerHTML = '';
            arr.forEach(prod => {
                const stk = prod.variantes.reduce((s, v) => s + v.stock, 0);
                const badge = stk > 0 ? `<span class="tag-stock">${stk} en stock</span>` : `<span class="tag-stock" style="background:var(--danger)">Agotado</span>`;
                cont.innerHTML += `<div class="card-prod" onclick="abrirModal('${prod.id}')">${badge}<img src="${prod.img || 'https://via.placeholder.com/250'}" alt="${prod.nombre}" loading="lazy"><h3>${prod.nombre}</h3><p class="precio-card">Lps. ${Math.round(prod.precio)}</p></div>`;
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
                pt = '<div style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px; font-weight: 700;">Descuentos por volumen:</div><div class="promo-actions-grid">';
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

        function actualizarFotoNp(input, idx) {
            if (input.files && input.files[0]) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    if(idx === 'main') {
                        npImgTemp = e.target.result;
                        document.getElementById('np-img-preview').src = npImgTemp;
                        document.getElementById('np-img-preview').style.display = 'block';
                    } else {
                        npVarTemp[idx].img = e.target.result;
                    }
                    mostrarToast("Foto cargada a la memoria.");
                }
                reader.readAsDataURL(input.files[0]);
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
        
        function actualizarFoto(input, idx) {
            if (input.files && input.files[0]) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    if(idx === 'main') productoActivoModal.img = e.target.result;
                    else edVarTemp[idx].img = e.target.result;
                    mostrarToast("Foto temporal cargada a la memoria.");
                }
                reader.readAsDataURL(input.files[0]);
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
            
            window.open(`https://wa.me/?text=${encodeURIComponent(m)}`, '_blank');
        }

        function armarFac() {
            document.getElementById('f-fecha').innerText = new Date().toLocaleString('es-HN');
            document.getElementById('f-codigo').innerText = `ORDEN: SDC-${Date.now().toString().slice(-5)}`;
            document.getElementById('f-cli').innerText = document.getElementById('c-nombre').value || 'Consumidor Final';
            document.getElementById('f-tel').innerText = document.getElementById('c-tel').value || 'No especificado';
            document.getElementById('f-zona').innerText = `${document.getElementById('c-muni').value || ''}, ${document.getElementById('c-depto').value || ''}`;
            document.getElementById('f-dir').innerText = document.getElementById('c-dir').value || 'No especificada';
            document.getElementById('f-paq').innerText = document.getElementById('c-paquetera').value;

            const items = document.getElementById('f-items'); items.innerHTML = '';
            let sB = 0; let agrupados = {};
            
            carrito.forEach((it) => {
                if(!agrupados[it.id]) agrupados[it.id] = { id: it.id, nombre: it.nombre, precioBase: it.precioBase, cantidadTotal: 0, items: [] };
                agrupados[it.id].cantidadTotal += it.cantidad; agrupados[it.id].items.push(it);
            });

            Object.values(agrupados).forEach(grupo => {
                let pP = getPromoDinamica(grupo.id, grupo.cantidadTotal);
                sB += grupo.precioBase * grupo.cantidadTotal;
                
                items.innerHTML += `<div class="fac-row" style="font-weight:bold; margin-bottom: 4px; font-size:14px; margin-top: 10px;"><span>${grupo.cantidadTotal}x ${grupo.nombre}</span> <span>Lps. ${Math.round(pP * grupo.cantidadTotal)}</span></div>`;
                grupo.items.forEach(it => {
                    items.innerHTML += `<div style="font-size:12px; color:#555; margin-bottom: 2px;">• ${it.cantidad}x ${it.variante} (Lps. ${Math.round(pP * it.cantidad)})</div>`;
                });
            });

            document.getElementById('f-sub').innerText = `Lps. ${Math.round(sB)}`;
            document.getElementById('f-aho').innerText = document.getElementById('txt-aho').innerText;
            document.getElementById('f-env').innerText = document.getElementById('txt-env').innerText;
            document.getElementById('f-com').innerText = document.getElementById('txt-com').innerText;
            document.getElementById('f-tot').innerText = document.getElementById('txt-tot').innerText;
            document.getElementById('f-row-com').style.display = document.getElementById('tipoEnvio').value === 'contra_entrega' ? 'flex' : 'none';
        }

        function generarImagenFactura() {
            if(carrito.length===0) return alert("Agrega artículos al carrito");
            armarFac();
            html2canvas(document.getElementById('contenedor-factura'), {scale: 2}).then(c => {
                const link = document.createElement('a'); link.download = `Factura_SDC_${Date.now()}.png`; link.href = c.toDataURL('image/png'); link.click();
            });
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
            cotizaciones.forEach(c => {
                cont.innerHTML += `<div class="item-lista"><div style="display:flex; justify-content:space-between;"><b>${c.datos.cli}</b><span style="color:var(--accent); font-weight: bold;">Lps. ${Math.round(c.total)}</span></div><p style="font-size:12px; color:var(--text-muted); margin:8px 0;">📍 ${c.datos.mun}, ${c.datos.dep} | 📦 ${c.datos.paq}</p><button class="btn-block" style="background:var(--panel-hover); border:1px solid var(--border); padding:12px; font-size:13px;" onclick="cargarCot(${c.id})">Recuperar al Carrito</button></div>`;
            });
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
                    actualizarDashboard();
                }
            } catch(e) {
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
            const ventasFiltradas = historialVentas.filter(v => {
                const estado = v.estado || 'facturada';
                const texto = `${v.codigo || ''} ${v.cliente || ''} ${v.telefono || ''} ${v.destino || ''} ${v.paqueteria || ''}`.toLowerCase();
                return texto.includes(filtro) && (!estadoFiltro || estado === estadoFiltro);
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
                const estado = venta.estado || 'facturada';
                const resumenItems = articulos.length
                    ? articulos.map(it => `${it.cantidad || 0}x ${it.nombre || 'Producto'}${it.variante ? ' - ' + it.variante : ''}`).join('<br>')
                    : 'Sin detalle de artículos';
                const botones = estado === 'anulada'
                    ? `<button class="btn-mini btn-ghost" onclick="reenviarVentaWhatsApp('${venta.id}')">WhatsApp</button>`
                    : `<button class="btn-mini" onclick="editarVenta('${venta.id}')">Editar / agregar más</button>
                       <button class="btn-mini btn-ghost" onclick="reenviarVentaWhatsApp('${venta.id}')">WhatsApp</button>
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
                        <div class="venta-items">${resumenItems}</div>
                        <div class="venta-actions">${botones}</div>
                    </div>`;
            });
        }

        function reenviarVentaWhatsApp(idVenta) {
            const venta = historialVentas.find(v => String(v.id) === String(idVenta));
            if(!venta) return alert('No encontré esa venta.');
            const items = (venta.articulos || []).map(it => `• ${it.cantidad}x ${it.nombre}${it.variante ? ' - ' + it.variante : ''}`).join('\n');
            const msg = `*SOLUCIONES DIGITALES COMAYAGUA*\nOrden: ${venta.codigo || venta.id}\nCliente: ${venta.cliente || 'Consumidor Final'}\nTeléfono: ${venta.telefono || 'N/A'}\nDestino: ${venta.destino || 'N/A'}\nPaquetera: ${venta.paqueteria || 'N/A'}\n\n${items}\n\n*TOTAL: Lps. ${Math.round(Number(venta.total || 0))}*`;
            window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
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
            document.querySelectorAll('nav button').forEach(b => b.classList.remove('activo'));
            if(btn) btn.classList.add('activo');
            if(idVista === 'ventas') renderVentas();
        }

        document.querySelectorAll('.modal-overlay').forEach(modal => modal.addEventListener('click', cerrarModalDesdeOverlay));
        document.addEventListener('keydown', (event) => {
            if(event.key === 'Escape') {
                document.querySelectorAll('.modal-overlay.activo').forEach(m => m.classList.remove('activo'));
                document.body.classList.remove('modal-open');
            }
        });

        iniciarControlAcceso(); initLugares(); inicializarCatalogo(); actualizarEstadoEdicionVenta();
