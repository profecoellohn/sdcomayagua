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

        let baseDeDatos = []; let carrito = []; let cotizaciones = []; let ventasTotales = 0;
        let productoActivoModal = null; let varianteActivaModal = null; let totalCarritoActual = 0;

        function cargarRestoDatosLocales() {
            let ventasG = localStorage.getItem('sdc_ventas');
            if(ventasG) { ventasTotales = parseFloat(ventasG); }
            let cotsG = localStorage.getItem('sdc_cots');
            if(cotsG) { cotizaciones = JSON.parse(cotsG); }
        }

        function guardarDatosLocales() {
            localStorage.setItem('sdc_bd', JSON.stringify(baseDeDatos));
            localStorage.setItem('sdc_ventas', ventasTotales);
            localStorage.setItem('sdc_cots', JSON.stringify(cotizaciones));
        }

        function resetearSistema() {
            if(confirm("¿Estás seguro? Esto borrará tus ventas locales. Los productos en Firebase no se borrarán.")) {
                localStorage.removeItem('sdc_bd'); localStorage.removeItem('sdc_ventas'); localStorage.removeItem('sdc_cots');
                location.reload();
            }
        }

        function actualizarDashboard() {
            let tStk = 0; let bStk = 0; let sFot = 0; let inv = 0; let proy = 0;
            baseDeDatos.forEach(p => {
                let pStk = 0;
                p.variantes.forEach(v => { pStk += v.stock; if(v.stock > 0 && v.stock < 3) bStk++; });
                tStk += pStk; inv += (pStk * p.costo); proy += (pStk * p.precio);
                if(!p.img || p.img === '') sFot++;
            });
            document.getElementById('op-tot').innerText = tStk; document.getElementById('op-baj').innerText = bStk;
            document.getElementById('op-fot').innerText = sFot; document.getElementById('op-inv').innerText = `Lps. ${inv}`;
            document.getElementById('dash-inv').innerText = `Lps. ${inv}`; document.getElementById('dash-proy').innerText = `Lps. ${proy}`;
            document.getElementById('dash-gan').innerText = `Lps. ${proy - inv}`;
            document.getElementById('dash-ventas').innerText = `Lps. ${Math.round(ventasTotales)}`;
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
            
            renderizarProductos(baseDeDatos); actualizarDashboard(); renderCotizaciones();
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
                pt = '<div style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px; font-weight: 600;">Descuentos por volumen:</div><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">';
                sortedP.forEach((pr, index) => {
                    let bg = index % 2 === 0 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(16, 185, 129, 0.1)';
                    let color = index % 2 === 0 ? 'var(--accent)' : 'var(--success)';
                    let border = index % 2 === 0 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(16, 185, 129, 0.3)';
                    pt += `<div style="background: ${bg}; color: ${color}; padding: 8px; border-radius: 8px; font-size: 12px; border: 1px solid ${border}; font-weight: 700; text-align: center;">Llevas ${pr.cant} o más:<br><span style="font-size: 14px;">Lps. ${Math.round(pr.precio)} c/u</span></div>`;
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
            document.getElementById('modal-producto').classList.add('activo');
        }

        function selVariante(i) {
            varianteActivaModal = productoActivoModal.variantes[i];
            document.querySelectorAll('.btn-variante').forEach(b => b.classList.remove('seleccionado'));
            document.getElementById(`var-btn-${i}`).classList.add('seleccionado');
            document.getElementById('m-stock-texto').innerText = `Disponible: ${varianteActivaModal.stock} unidades`;
            document.getElementById('m-cantidad').value = 1;
            if(varianteActivaModal.img) document.getElementById('m-img').src = varianteActivaModal.img;
            else document.getElementById('m-img').src = productoActivoModal.img || 'https://via.placeholder.com/500';
        }

        function modCantidadModal(v) {
            if(!varianteActivaModal) return;
            let n = parseInt(document.getElementById('m-cantidad').value) + v;
            if(n >= 1 && n <= varianteActivaModal.stock) document.getElementById('m-cantidad').value = n;
        }

        function cerrarModal() { document.getElementById('modal-producto').classList.remove('activo'); }
        function irAlCarrito() { cerrarModal(); cambiarVista('carrito', document.querySelectorAll('nav button')[2]); }

        function agregarDesdeModal() {
            if(!varianteActivaModal) return;
            let cant = parseInt(document.getElementById('m-cantidad').value);
            let idU = productoActivoModal.id + '-' + varianteActivaModal.nombre;
            let itm = carrito.find(i => i.idUnico === idU);
            if (itm && itm.cantidad + cant > varianteActivaModal.stock) return alert("Superas el stock");

            if(itm) itm.cantidad += cant;
            else carrito.push({ idUnico: idU, id: productoActivoModal.id, nombre: productoActivoModal.nombre, variante: varianteActivaModal.nombre, precioBase: productoActivoModal.precio, cantidad: cant });

            document.getElementById('cart-badge').innerText = carrito.reduce((s, i) => s + i.cantidad, 0);
            calcularTotalesCarrito(); mostrarToast(`Agregado: ${cant}x ${varianteActivaModal.nombre}`);
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
            const list = document.getElementById('lista-carrito'); list.innerHTML = '';
            let sB = 0; let sP = 0; let agrupados = {};
            
            carrito.forEach((it, origIdx) => {
                if(!agrupados[it.id]) agrupados[it.id] = { id: it.id, nombre: it.nombre, precioBase: it.precioBase, cantidadTotal: 0, items: [] };
                agrupados[it.id].cantidadTotal += it.cantidad;
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
                    htmlItems += `
                    <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px; color:var(--text-main); margin-top:8px; padding: 10px; background: rgba(0,0,0,0.2); border-radius: 6px;">
                        <span>${it.cantidad}x ${it.variante} <b style="color:var(--accent);">(Lps. ${Math.round(totalLinea)})</b></span>
                        <span onclick="eliminar(${it.idxReal})" style="color:var(--danger); cursor:pointer; font-weight:bold; font-size: 11px; text-transform: uppercase;">Quitar</span>
                    </div>`;
                });

                let msgPromo = grupo.precioBase > pP ? `<div style="font-size:12px; color:var(--success); margin-top:10px; font-weight:600;">✅ Aplica promo: Sale a Lps. ${Math.round(pP)} c/u</div>` : '';

                list.innerHTML += `
                <div class="item-lista" style="padding:15px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                        <b style="font-size:15px; color: var(--accent);">${grupo.cantidadTotal}x ${grupo.nombre}</b>
                        <b style="color:var(--success); font-size:16px;">Lps. ${Math.round(lPromo)}</b>
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
        }

        function eliminar(idxReal) { carrito.splice(idxReal, 1); document.getElementById('cart-badge').innerText = carrito.reduce((s,i)=>s+i.cantidad,0); calcularTotalesCarrito(); }

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
            document.getElementById('modal-nuevo-producto').classList.add('activo');
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
            document.getElementById('modal-editar').classList.add('activo');
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
        async function procesarVenta() {
            if(carrito.length === 0) return alert("Tu carrito está vacío");

            const btn = document.getElementById("btn-procesar-venta");
            if(btn) { btn.innerText = "Procesando Venta..."; btn.disabled = true; }

            try {
                // 1. Preparamos el recibo de la orden
                let datosOrden = {
                    cliente: document.getElementById('c-nombre').value || 'Consumidor Final',
                    telefono: document.getElementById('c-tel').value || 'No especificado',
                    destino: `${document.getElementById('c-muni').value || ''}, ${document.getElementById('c-depto').value || ''}`,
                    paqueteria: document.getElementById('c-paquetera').value,
                    articulos: carrito,
                    total: totalCarritoActual,
                    fecha: new Date().toISOString()
                };

                // 2. Guardamos el recibo en la carpeta "ventas" de Firebase
                await window.registrarVentaFirebase(datosOrden);

                // 3. Modificamos el stock y guardamos qué productos tocamos
                let idsProductosAfectados = new Set();
                carrito.forEach(itemCarrito => {
                    let productoBD = baseDeDatos.find(p => p.id === itemCarrito.id);
                    if(productoBD) {
                        let varianteBD = productoBD.variantes.find(v => v.nombre === itemCarrito.variante);
                        if(varianteBD) {
                            varianteBD.stock -= itemCarrito.cantidad;
                            idsProductosAfectados.add(productoBD.id);
                        }
                    }
                });

                // 4. Subimos el nuevo stock de cada producto tocado a Firebase
                for(let id of idsProductosAfectados) {
                    let productoActualizado = baseDeDatos.find(p => p.id === id);
                    await window.actualizarFirebase(id, { variantes: productoActualizado.variantes });
                }

                // 5. Finalizamos
                ventasTotales += totalCarritoActual; 
                guardarDatosLocales();
                document.getElementById('dash-ventas').innerText = `Lps. ${Math.round(ventasTotales)}`;
                
                limpiarCarrito(); 
                inicializarCatalogo();
                mostrarToast("¡Venta Exitosa! Inventario actualizado en la Nube.");

            } catch (error) {
                console.error("Error al vender:", error);
                alert("Hubo un error al procesar la venta. Revisa tu internet.");
            }

            if(btn) { btn.innerText = "Vender"; btn.disabled = false; }
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

        function cambiarVista(idVista, btn) {
            document.querySelectorAll('.vista').forEach(v => v.classList.remove('activa')); document.getElementById('vista-' + idVista).classList.add('activa');
            document.querySelectorAll('nav button').forEach(b => b.classList.remove('activo')); btn.classList.add('activo');
        }

        initLugares(); inicializarCatalogo();
