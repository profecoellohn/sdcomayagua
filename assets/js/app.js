
// v87: Splash desactivado. Evita bloqueo en "Preparando sistema".
(function(){
  function hideSplashNow(){
    try {
      document.documentElement.classList.add('sdc-splash-skip');
      if (document.body) document.body.classList.add('sdc-no-splash');
      var s = document.getElementById('splash-screen');
      if(s){
        s.classList.add('oculto');
        s.setAttribute('hidden','hidden');
        s.style.setProperty('display','none','important');
        s.style.setProperty('visibility','hidden','important');
        s.style.setProperty('opacity','0','important');
        s.style.setProperty('pointer-events','none','important');
      }
    } catch(e) {}
  }
  hideSplashNow();
  document.addEventListener('DOMContentLoaded', hideSplashNow);
  window.addEventListener('load', hideSplashNow);
  setTimeout(hideSplashNow, 50);
  setTimeout(hideSplashNow, 500);
})();


// Failsafe: nunca dejar la app pegada en "Preparando sistema".
(function(){
  function sdcForceHideSplash(){
    try {
      sessionStorage.setItem('sdc_splash_seen', '1');
      localStorage.setItem('sdc_splash_seen', '1');
      document.documentElement.classList.add('sdc-splash-skip');
      document.body.classList.add('sdc-no-splash');
      const splash = document.getElementById('splash-screen');
      if(splash) splash.classList.add('oculto');
    } catch(e) {}
  }
  window.addEventListener('error', function(){ setTimeout(sdcForceHideSplash, 600); });
  window.addEventListener('unhandledrejection', function(){ setTimeout(sdcForceHideSplash, 600); });
  setTimeout(sdcForceHideSplash, 8500);
})();
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

        const COLOR_PRESETS = [
            { nombre: 'Negro', color: '#111827' },
            { nombre: 'Azul', color: '#2563eb' },
            { nombre: 'Rojo', color: '#dc2626' },
            { nombre: 'Blanco', color: '#f8fafc' },
            { nombre: 'Verde', color: '#16a34a' },
            { nombre: 'Amarillo', color: '#facc15' },
            { nombre: 'Rosado', color: '#ec4899' },
            { nombre: 'Morado', color: '#7c3aed' },
            { nombre: 'Gris', color: '#94a3b8' },
            { nombre: 'Café', color: '#92400e' },
            { nombre: 'Naranja', color: '#f97316' }
        ];


        const CATEGORY_VISUALS = [
            { keys: ['dedales', 'gamer movil', 'gamer móvil'], icon: '🎮', accent: '#2563eb', accent2: '#06b6d4', base: '#0f172a' },
            { keys: ['audio', 'audifonos', 'audífonos', 'qkz'], icon: '🎧', accent: '#7c3aed', accent2: '#2563eb', base: '#0f172a' },
            { keys: ['micro sd', 'microsd', 'memorias microsd', 'adaptador microsd', 'adaptador micro sd'], icon: '💾', accent: '#0ea5e9', accent2: '#22c55e', base: '#0f172a' },
            { keys: ['usb', 'cable', 'adaptador', 'tecnologia', 'tecnología', 'accesorios', 'mouse', 'mousepad'], icon: '🔌', accent: '#2563eb', accent2: '#38bdf8', base: '#0f172a' },
            { keys: ['control', 'gamepad', 'consola'], icon: '🕹️', accent: '#4f46e5', accent2: '#0ea5e9', base: '#111827' },
            { keys: ['hogar', 'cocina', 'termos', 'lavadora'], icon: '🏠', accent: '#f59e0b', accent2: '#f97316', base: '#1f2937' },
            { keys: ['automotriz'], icon: '🚗', accent: '#ef4444', accent2: '#f59e0b', base: '#1f2937' },
            { keys: ['belleza', 'accesorio de dama'], icon: '✨', accent: '#ec4899', accent2: '#8b5cf6', base: '#1f2937' },
            { keys: ['herramientas'], icon: '🛠️', accent: '#f97316', accent2: '#facc15', base: '#1f2937' },
            { keys: ['mascotas'], icon: '🐾', accent: '#10b981', accent2: '#0ea5e9', base: '#1f2937' },
            { keys: ['coolers'], icon: '❄️', accent: '#06b6d4', accent2: '#60a5fa', base: '#0f172a' },
            { keys: ['general', 'tienda', 'informacion', 'información'], icon: '📦', accent: '#475569', accent2: '#2563eb', base: '#0f172a' }
        ];

        const CATEGORY_ASSET_FILES = [
            {
                        "slug": "accesorio",
                        "file": "accesorio.svg",
                        "name": "Accesorio"
            },
            {
                        "slug": "accesorios",
                        "file": "accesorios.svg",
                        "name": "Accesorios"
            },
            {
                        "slug": "adaptador-de-microsd",
                        "file": "adaptador-de-microsd.svg",
                        "name": "Adaptador De MicroSD"
            },
            {
                        "slug": "adaptador-micro-sd",
                        "file": "adaptador-micro-sd.svg",
                        "name": "Adaptador Micro Sd"
            },
            {
                        "slug": "adaptador-microsd",
                        "file": "adaptador-microsd.svg",
                        "name": "Adaptador MicroSD"
            },
            {
                        "slug": "adaptador",
                        "file": "adaptador.svg",
                        "name": "Adaptador"
            },
            {
                        "slug": "adaptadores",
                        "file": "adaptadores.svg",
                        "name": "Adaptadores"
            },
            {
                        "slug": "agotados",
                        "file": "agotados.svg",
                        "name": "Agotados"
            },
            {
                        "slug": "audifono",
                        "file": "audifono.svg",
                        "name": "Audifono"
            },
            {
                        "slug": "audifonos-c",
                        "file": "audifonos-c.svg",
                        "name": "Audifonos C"
            },
            {
                        "slug": "audifonos-qkz",
                        "file": "audifonos-qkz.svg",
                        "name": "Audifonos QKZ"
            },
            {
                        "slug": "audifonos-tipo-c",
                        "file": "audifonos-tipo-c.svg",
                        "name": "Audifonos Tipo C"
            },
            {
                        "slug": "audifonos",
                        "file": "audifonos.svg",
                        "name": "Audifonos"
            },
            {
                        "slug": "audio",
                        "file": "audio.svg",
                        "name": "Audio"
            },
            {
                        "slug": "auriculares",
                        "file": "auriculares.svg",
                        "name": "Auriculares"
            },
            {
                        "slug": "belleza",
                        "file": "belleza.svg",
                        "name": "Belleza"
            },
            {
                        "slug": "cable",
                        "file": "cable.svg",
                        "name": "Cable"
            },
            {
                        "slug": "cables",
                        "file": "cables.svg",
                        "name": "Cables"
            },
            {
                        "slug": "cargador",
                        "file": "cargador.svg",
                        "name": "Cargador"
            },
            {
                        "slug": "cargadores",
                        "file": "cargadores.svg",
                        "name": "Cargadores"
            },
            {
                        "slug": "categoria",
                        "file": "categoria.svg",
                        "name": "Categoria"
            },
            {
                        "slug": "celulares",
                        "file": "celulares.svg",
                        "name": "Celulares"
            },
            {
                        "slug": "cocina",
                        "file": "cocina.svg",
                        "name": "Cocina"
            },
            {
                        "slug": "cooler",
                        "file": "cooler.svg",
                        "name": "Cooler"
            },
            {
                        "slug": "coolers",
                        "file": "coolers.svg",
                        "name": "Coolers"
            },
            {
                        "slug": "dedales-memo",
                        "file": "dedales-memo.svg",
                        "name": "Dedales Memo"
            },
            {
                        "slug": "dedales-v1",
                        "file": "dedales-v1.svg",
                        "name": "Dedales V1"
            },
            {
                        "slug": "dedales-v2",
                        "file": "dedales-v2.svg",
                        "name": "Dedales V2"
            },
            {
                        "slug": "dedales",
                        "file": "dedales.svg",
                        "name": "Dedales"
            },
            {
                        "slug": "enfriador-memo",
                        "file": "enfriador-memo.svg",
                        "name": "Enfriador Memo"
            },
            {
                        "slug": "enfriador-x112",
                        "file": "enfriador-x112.svg",
                        "name": "Enfriador X112"
            },
            {
                        "slug": "enfriador",
                        "file": "enfriador.svg",
                        "name": "Enfriador"
            },
            {
                        "slug": "enfriadores",
                        "file": "enfriadores.svg",
                        "name": "Enfriadores"
            },
            {
                        "slug": "gamer-movil",
                        "file": "gamer-movil.svg",
                        "name": "Gamer Movil"
            },
            {
                        "slug": "gamer",
                        "file": "gamer.svg",
                        "name": "Gamer"
            },
            {
                        "slug": "gaming",
                        "file": "gaming.svg",
                        "name": "Gaming"
            },
            {
                        "slug": "gatillo",
                        "file": "gatillo.svg",
                        "name": "Gatillo"
            },
            {
                        "slug": "gatillos",
                        "file": "gatillos.svg",
                        "name": "Gatillos"
            },
            {
                        "slug": "general",
                        "file": "general.svg",
                        "name": "General"
            },
            {
                        "slug": "guante",
                        "file": "guante.svg",
                        "name": "Guante"
            },
            {
                        "slug": "guantes-memo",
                        "file": "guantes-memo.svg",
                        "name": "Guantes Memo"
            },
            {
                        "slug": "guantes",
                        "file": "guantes.svg",
                        "name": "Guantes"
            },
            {
                        "slug": "herramienta",
                        "file": "herramienta.svg",
                        "name": "Herramienta"
            },
            {
                        "slug": "herramientas",
                        "file": "herramientas.svg",
                        "name": "Herramientas"
            },
            {
                        "slug": "hogar",
                        "file": "hogar.svg",
                        "name": "Hogar"
            },
            {
                        "slug": "juegos",
                        "file": "juegos.svg",
                        "name": "Juegos"
            },
            {
                        "slug": "limpieza",
                        "file": "limpieza.svg",
                        "name": "Limpieza"
            },
            {
                        "slug": "mas-vendidos",
                        "file": "mas-vendidos.svg",
                        "name": "Mas Vendidos"
            },
            {
                        "slug": "memoria",
                        "file": "memoria.svg",
                        "name": "Memoria"
            },
            {
                        "slug": "memorias",
                        "file": "memorias.svg",
                        "name": "Memorias"
            },
            {
                        "slug": "micro-sd",
                        "file": "micro-sd.svg",
                        "name": "Micro Sd"
            },
            {
                        "slug": "microsd",
                        "file": "microsd.svg",
                        "name": "MicroSD"
            },
            {
                        "slug": "nuevo",
                        "file": "nuevo.svg",
                        "name": "Nuevo"
            },
            {
                        "slug": "ofertas",
                        "file": "ofertas.svg",
                        "name": "Ofertas"
            },
            {
                        "slug": "otro",
                        "file": "otro.svg",
                        "name": "Otro"
            },
            {
                        "slug": "otros",
                        "file": "otros.svg",
                        "name": "Otros"
            },
            {
                        "slug": "promociones",
                        "file": "promociones.svg",
                        "name": "Promociones"
            },
            {
                        "slug": "secador-de-zapatos",
                        "file": "secador-de-zapatos.svg",
                        "name": "Secador De Zapatos"
            },
            {
                        "slug": "secador-zapatos",
                        "file": "secador-zapatos.svg",
                        "name": "Secador Zapatos"
            },
            {
                        "slug": "stock-bajo",
                        "file": "stock-bajo.svg",
                        "name": "Stock Bajo"
            },
            {
                        "slug": "tecnologia",
                        "file": "tecnologia.svg",
                        "name": "Tecnologia"
            },
            {
                        "slug": "termo-stanley",
                        "file": "termo-stanley.svg",
                        "name": "Termo Stanley"
            },
            {
                        "slug": "termo",
                        "file": "termo.svg",
                        "name": "Termo"
            },
            {
                        "slug": "termos",
                        "file": "termos.svg",
                        "name": "Termos"
            },
            {
                        "slug": "tipo-c-audio",
                        "file": "tipo-c-audio.svg",
                        "name": "Tipo C Audio"
            },
            {
                        "slug": "tipo-c",
                        "file": "tipo-c.svg",
                        "name": "Tipo C"
            },
            {
                        "slug": "todas",
                        "file": "todas.svg",
                        "name": "Todas"
            },
            {
                        "slug": "trigger",
                        "file": "trigger.svg",
                        "name": "Trigger"
            },
            {
                        "slug": "zapato",
                        "file": "zapato.svg",
                        "name": "Zapato"
            },
            {
                        "slug": "zapatos",
                        "file": "zapatos.svg",
                        "name": "Zapatos"
            }
];


function slugSeguroCategoria(str = '') {
    return normalizarTextoClave(str)
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function nombreBonitoDesdeSlug(slug = '') {
    return String(slug || '')
        .split('-')
        .filter(Boolean)
        .map(part => {
            const lower = part.toLowerCase();
            if(['usb', 'qkz'].includes(lower)) return lower.toUpperCase();
            if(lower === 'microsd') return 'MicroSD';
            if(lower === 'sd') return 'SD';
            if(lower === 'c') return 'C';
            if(/^v\d+$/.test(lower)) return lower.toUpperCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join(' ');
}

function obtenerCategoriaAsset(categoria = '', nombre = '') {
    const candidatos = [
        slugSeguroCategoria(nombre),
        slugSeguroCategoria(categoria),
        ...slugSeguroCategoria(nombre).split('-'),
        ...slugSeguroCategoria(categoria).split('-')
    ].filter(Boolean);

    const exacto = CATEGORY_ASSET_FILES.find(item => candidatos.includes(item.slug));
    if(exacto) return `assets/images/categorias/${exacto.file}`;

    const combinado = `${slugSeguroCategoria(categoria)} ${slugSeguroCategoria(nombre)}`.trim();
    const porClave = CATEGORY_ASSET_FILES.find(item => {
        const slug = item.slug;
        return combinado.includes(slug) || slug.split('-').every(part => combinado.includes(part));
    });
    if(porClave) return `assets/images/categorias/${porClave.file}`;

    const tema = obtenerTemaCategoria(categoria || nombre);
    const temaClave = slugSeguroCategoria(tema?.keys?.[0] || '');
    const porTema = CATEGORY_ASSET_FILES.find(item => item.slug === temaClave || item.slug.includes(temaClave));
    if(porTema) return `assets/images/categorias/${porTema.file}`;

    const general = CATEGORY_ASSET_FILES.find(item => ['general', 'categoria', 'otro', 'otros'].includes(item.slug));
    return general ? `assets/images/categorias/${general.file}` : '';
}

function categoriasBasePorDefecto() {
    const desdeAssets = CATEGORY_ASSET_FILES
        .map(item => item.name || nombreBonitoDesdeSlug(item.slug))
        .filter(Boolean);
    const desdeCatalogo = (baseDeDatos || [])
        .map(p => p.categoria)
        .filter(Boolean);
    return [...new Set([...desdeCatalogo, ...desdeAssets])].sort((a, b) => String(a).localeCompare(String(b)));
}

function poblarCategoriasDefault() {
    const lista = document.getElementById('categorias-default-list');
    if(!lista) return;
    lista.innerHTML = categoriasBasePorDefecto()
        .map(cat => `<option value="${escapeHtml(cat)}"></option>`)
        .join('');
}

function actualizarPreviewCategoriaNuevo() {
    const input = document.getElementById('np-categoria');
    const preview = document.getElementById('np-img-preview');
    if(!input || !preview || npImgTemp) return;
    const categoria = input.value || 'General';
    const asset = obtenerCategoriaAsset(categoria, document.getElementById('np-nombre')?.value || '');
    if(asset) {
        preview.src = asset;
        preview.classList.add('fallback-categoria');
        preview.style.display = 'block';
    }
}

        function normalizarTextoClave(str = '') {
            return String(str || '')
                .normalize('NFD')
                .replace(/[̀-ͯ]/g, '')
                .toLowerCase()
                .trim();
        }

        function obtenerTemaCategoria(categoria = '') {
            const clave = normalizarTextoClave(categoria);
            return CATEGORY_VISUALS.find(item => item.keys.some(key => clave.includes(normalizarTextoClave(key))))
                || { icon: '📦', accent: '#2563eb', accent2: '#06b6d4', base: '#0f172a' };
        }

        function limitarTextoCategoria(texto = '', max = 20) {
            const limpio = String(texto || '').trim() || 'General';
            return limpio.length > max ? `${limpio.slice(0, max - 1)}…` : limpio;
        }

        function obtenerImagenCategoriaBase(categoria = '', nombre = 'Producto', estado = 'en-stock', formato = 'card') {
            const tema = obtenerTemaCategoria(categoria);
            const titulo = limitarTextoCategoria(categoria || nombre || 'Producto', formato === 'share' ? 24 : 18);
            const subtitulo = estado === 'agotado'
                ? 'Sin foto · Agotado'
                : estado === 'bajo-stock'
                    ? 'Sin foto · Stock bajo'
                    : 'Sin foto disponible';
            const stroke = estado === 'agotado' ? '#ef4444' : estado === 'bajo-stock' ? '#f59e0b' : tema.accent;
            const glow = estado === 'agotado' ? 'rgba(239,68,68,.28)' : estado === 'bajo-stock' ? 'rgba(245,158,11,.28)' : 'rgba(37,99,235,.22)';
            const svg = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
                    <defs>
                        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="${tema.base}"/>
                            <stop offset="55%" stop-color="#172554"/>
                            <stop offset="100%" stop-color="#0b1220"/>
                        </linearGradient>
                        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="${tema.accent}"/>
                            <stop offset="100%" stop-color="${tema.accent2}"/>
                        </linearGradient>
                        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="18" stdDeviation="24" flood-color="${glow}"/>
                        </filter>
                    </defs>
                    <rect width="800" height="800" rx="58" fill="url(#bg)"/>
                    <circle cx="660" cy="150" r="120" fill="rgba(255,255,255,.05)"/>
                    <circle cx="145" cy="650" r="155" fill="rgba(255,255,255,.04)"/>
                    <rect x="54" y="54" width="692" height="692" rx="44" fill="none" stroke="${stroke}" stroke-opacity=".40" stroke-width="3"/>
                    <rect x="170" y="146" width="460" height="330" rx="38" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.09)" stroke-width="2"/>
                    <g filter="url(#shadow)">
                        <circle cx="400" cy="306" r="92" fill="url(#accent)"/>
                        <text x="400" y="335" text-anchor="middle" font-size="100">${tema.icon}</text>
                    </g>
                    <rect x="122" y="518" width="210" height="54" rx="27" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.12)" stroke-width="2"/>
                    <text x="227" y="552" text-anchor="middle" font-size="26" font-weight="700" fill="#dbeafe" font-family="Arial, Helvetica, sans-serif">${titulo.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</text>
                    <text x="122" y="626" font-size="50" font-weight="800" fill="#ffffff" font-family="Arial, Helvetica, sans-serif">${(categoria || 'Producto').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</text>
                    <text x="122" y="676" font-size="28" fill="#cbd5e1" font-family="Arial, Helvetica, sans-serif">${subtitulo}</text>
                </svg>`;
            return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.replace(/\n\s+/g, ' ').trim())}`;
        }

        function obtenerImagenProducto(prod = {}, variante = null, formato = 'card', estadoManual = '') {
            const stockTotal = (prod?.variantes || []).reduce((sum, item) => sum + Number(item.stock || 0), 0);
            const estado = estadoManual || (stockTotal <= 0 ? 'agotado' : (stockTotal <= 3 ? 'bajo-stock' : 'en-stock'));
            if(variante?.img) return variante.img;
            if(prod?.img) return prod.img;
            return obtenerCategoriaAsset(prod?.categoria || 'General', prod?.nombre || 'Producto')
                || obtenerImagenCategoriaBase(prod?.categoria || 'General', prod?.nombre || 'Producto', estado, formato);
        }

        function restaurarFallbackProducto(imgEl, categoria = '', nombre = 'Producto', estado = 'en-stock', formato = 'card') {
            if(!imgEl) return;
            imgEl.onerror = null;
            imgEl.src = obtenerCategoriaAsset(categoria, nombre) || obtenerImagenCategoriaBase(categoria, nombre, estado, formato);
            imgEl.classList.add('fallback-categoria');
        }

        function escapeHtml(str = '') {
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

        function normalizarColorNombre(str = '') {
            return String(str || '')
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .trim();
        }

        function colorHexToRgb(hex) {
            const clean = String(hex || '').replace('#', '');
            const full = clean.length === 3 ? clean.split('').map(ch => ch + ch).join('') : clean;
            const int = parseInt(full || '000000', 16);
            return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
        }

        function colorTextoParaFondo(hex) {
            const { r, g, b } = colorHexToRgb(hex || '#111827');
            const luminancia = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            return luminancia > 0.68 ? '#0f172a' : '#ffffff';
        }

        function obtenerPresetsDetectados(nombre = '') {
            const normalized = normalizarColorNombre(nombre);
            return COLOR_PRESETS.filter(p => normalized.includes(normalizarColorNombre(p.nombre)));
        }

        function obtenerEstiloColor(nombre = '', seleccionado = false) {
            const matches = obtenerPresetsDetectados(nombre);
            if(!matches.length) {
                return {
                    bg: seleccionado ? 'linear-gradient(135deg, #3b82f6, #2563eb)' : 'rgba(37, 99, 235, 0.10)',
                    border: seleccionado ? '#60a5fa' : 'rgba(96, 165, 250, 0.32)',
                    color: '#ffffff'
                };
            }
            if(matches.length === 1) {
                const base = matches[0].color;
                return {
                    bg: seleccionado ? base : 'rgba(255,255,255,0.04)',
                    border: base,
                    color: seleccionado ? colorTextoParaFondo(base) : '#e2e8f0'
                };
            }
            const grad = `linear-gradient(135deg, ${matches.slice(0,3).map(m => m.color).join(', ')})`;
            return {
                bg: seleccionado ? grad : 'rgba(255,255,255,0.04)',
                border: matches[0].color,
                color: '#ffffff'
            };
        }

        function estiloInlineColor(nombre = '', seleccionado = false) {
            const style = obtenerEstiloColor(nombre, seleccionado);
            return `--chip-bg:${style.bg};--chip-border:${style.border};--chip-text:${style.color};`;
        }

        function renderPresetColorButtons(valorActual = '', scope = 'np', index = 0) {
            const actual = normalizarColorNombre(valorActual);
            const chips = COLOR_PRESETS.slice(0, 8).map(p => {
                const activo = actual === normalizarColorNombre(p.nombre);
                const txt = colorTextoParaFondo(p.color);
                return `<button type="button" class="preset-color-chip ${activo ? 'activo' : ''}" style="--preset-color:${p.color};--preset-text:${txt};" onclick="seleccionarPresetColor('${scope}', ${index}, '${p.nombre}')">${p.nombre}</button>`;
            }).join('');
            return `<div class="preset-color-row">${chips}<button type="button" class="preset-color-chip preset-color-chip-manual" onclick="enfocarColorPersonalizado('${scope}', ${index})">Otro</button></div>`;
        }

        function seleccionarPresetColor(scope, index, nombre) {
            if(scope === 'edit') {
                if(edVarTemp[index]) edVarTemp[index].nombre = nombre;
                renderEditorV();
            } else {
                if(npVarTemp[index]) npVarTemp[index].nombre = nombre;
                renderNpVar();
            }
        }

        function enfocarColorPersonalizado(scope, index) {
            const id = `${scope}-color-input-${index}`;
            const input = document.getElementById(id);
            if(input) {
                input.focus();
                input.select();
            }
        }

        let regalosVenta = []; let giftMode = 'catalogo';
        const ADMIN_PIN = "199311";

        function leerAdminDesdeUrl() {
            try {
                const params = new URLSearchParams(window.location.search || '');
                return params.get('sdc_admin') === '1' || params.get('admin') === '1' || params.get('auth') === '1';
            } catch(e) {
                return false;
            }
        }

        function marcarAdminAutenticado() {
            try { sessionStorage.setItem('sdc_admin_ok', '1'); } catch(e) {}
            try { localStorage.setItem('sdc_admin_ok', '1'); } catch(e) {}
            try { document.documentElement.classList.add('sdc-admin-unlocked'); } catch(e) {}
            window.SDC_ADMIN_OK = true;
        }

        function limpiarAdminDeUrl() {
            try {
                const params = new URLSearchParams(window.location.search || '');
                let cambio = false;
                ['sdc_admin', 'admin', 'auth'].forEach(key => {
                    if(params.has(key)) { params.delete(key); cambio = true; }
                });
                if(cambio && window.history && window.history.replaceState) {
                    const query = params.toString();
                    const limpia = `${window.location.pathname}${query ? '?' + query : ''}${window.location.hash || ''}`;
                    window.history.replaceState(null, document.title, limpia);
                }
            } catch(e) {}
        }

        function adminEstaAutenticado() {
            let ok = false;
            try { ok = ok || sessionStorage.getItem('sdc_admin_ok') === '1'; } catch(e) {}
            try { ok = ok || localStorage.getItem('sdc_admin_ok') === '1'; } catch(e) {}
            ok = ok || leerAdminDesdeUrl();
            if(ok) marcarAdminAutenticado();
            return !!ok;
        }

        let modoEdicionVentaId = null;
        let ventaOriginalEdicion = null;
        let categoriaActivaCatalogo = "Todos";
        let categoriasCatalogo = [];
        let filtroCategoriaTexto = '';
        const filtroCatalogo = { texto: "", stock: "todos", promo: "todos", orden: "nombre" };
        let catalogSearchTimer = null;
        let catalogRenderFrame = null;
        const LOGO_SDC = "assets/images/logo-sdcomayagua.png";

        function activarScrollGlobal() {
            document.documentElement.style.overflowY = 'auto';
            document.documentElement.style.overflowX = 'hidden';
            document.body.style.overflowY = document.body.classList.contains('modal-open') ? 'hidden' : 'auto';
            document.body.style.overflowX = 'hidden';
            document.body.style.height = 'auto';
        }

        window.addEventListener('load', activarScrollGlobal);

        function setSplashStatus(texto) {
            const el = document.getElementById('splash-status');
            if(el) el.textContent = texto;
        }

        function ocultarSplash() {
            try {
                sessionStorage.setItem('sdc_splash_seen', '1');
                localStorage.setItem('sdc_splash_seen', '1');
                document.documentElement.classList.add('sdc-splash-skip');
                document.body.classList.add('sdc-no-splash');
            } catch(e) {}
            const splash = document.getElementById('splash-screen');
            if(splash) {
                splash.classList.add('oculto');
                splash.setAttribute('hidden','hidden');
                splash.style.setProperty('display','none','important');
                splash.style.setProperty('visibility','hidden','important');
                splash.style.setProperty('opacity','0','important');
                splash.style.setProperty('pointer-events','none','important');
            }
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
            const temaGuardado = localStorage.getItem("sdc_theme") || "dark";
            document.body.classList.toggle("light-theme", temaGuardado === "light");
            actualizarTextoBotonTema();
        }

        function actualizarTextoBotonTema() {
            const btn = document.getElementById("theme-toggle");
            if(!btn) return;
            const light = document.body.classList.contains("light-theme");
            const icon = light ? '🌙' : '☀️';
            const label = light ? 'Oscuro' : 'Claro';
            btn.setAttribute('aria-label', `Cambiar a modo ${label}`);
            btn.innerHTML = `<span class="theme-icon" aria-hidden="true">${icon}</span><span class="theme-label">${label}</span>`;
        }

        function toggleTheme() {
            document.body.classList.toggle("light-theme");
            localStorage.setItem("sdc_theme", document.body.classList.contains("light-theme") ? "light" : "dark");
            actualizarTextoBotonTema();
        }

        function aplicarEstadoSidebar(colapsado) {
            document.body.classList.toggle("sidebar-collapsed", !!colapsado);
            const btn = document.getElementById("sidebar-toggle");
            if(btn) {
                btn.setAttribute("aria-label", colapsado ? "Expandir menú" : "Colapsar menú");
                btn.setAttribute("title", colapsado ? "Expandir menú" : "Colapsar menú");
            }
        }

        function aplicarVersionSidebar(version) {
            const ver = Math.min(3, Math.max(1, parseInt(version || '1', 10) || 1));
            const nombres = { 1: 'Marketplace', 2: 'Apple Full', 3: 'Gamer Brutal' };
            document.body.classList.remove('sidebar-version-1', 'sidebar-version-2', 'sidebar-version-3');
            document.body.classList.add(`sidebar-version-${ver}`);
            document.body.setAttribute('data-app-version', `v${ver}`);
            try { localStorage.setItem('sdc_sidebar_version', String(ver)); } catch(e) {}
            const btnVersion = document.getElementById('sidebar-version-btn');
            if(btnVersion) {
                btnVersion.innerHTML = `<span class="version-btn-label">CAMBIAR VERSIÓN</span><span class="version-btn-name">${nombres[ver]}</span><span class="version-btn-badge">V${ver}</span>`;
                btnVersion.setAttribute('data-version', `V${ver}`);
                btnVersion.setAttribute('data-version-name', nombres[ver]);
                btnVersion.setAttribute('aria-label', `Cambiar versión visual de toda la página. Actual: ${nombres[ver]}`);
                btnVersion.setAttribute('title', `Cambiar versión de toda la página · ${nombres[ver]}`);
            }
        }

        function initSidebarState() {
            const guardado = localStorage.getItem("sdc_sidebar_collapsed") === "1";
            aplicarEstadoSidebar(guardado && window.innerWidth >= 1024);
            const versionGuardada = localStorage.getItem('sdc_sidebar_version') || '1';
            aplicarVersionSidebar(versionGuardada);
        }

        function toggleSidebar() {
            const proximo = !document.body.classList.contains("sidebar-collapsed");
            localStorage.setItem("sdc_sidebar_collapsed", proximo ? "1" : "0");
            aplicarEstadoSidebar(proximo);
        }

        function cambiarVersionSidebar() {
            const actual = parseInt(localStorage.getItem('sdc_sidebar_version') || '1', 10) || 1;
            const siguiente = actual >= 3 ? 1 : actual + 1;
            aplicarVersionSidebar(siguiente);
            try { mostrarToast(`Versión del menú: V${siguiente}`); } catch(e) {}
        }

        window.addEventListener("resize", () => {
            if(window.innerWidth < 1024) {
                document.body.classList.remove("sidebar-collapsed");
            } else if(localStorage.getItem("sdc_sidebar_collapsed") === "1") {
                document.body.classList.add("sidebar-collapsed");
            }
        });

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

        let ventasFiltroRapido = 'todos';

        function syncVentasQuickFilters() {
            document.querySelectorAll('#ventas-quick-filters .quick-filter-chip').forEach(btn => {
                const active = (btn.dataset.filter || 'todos') === ventasFiltroRapido;
                btn.classList.toggle('activo', active);
                btn.setAttribute('aria-pressed', active ? 'true' : 'false');
            });
        }

        function aplicarFiltroRapidoVentas(tipo = 'todos', btn = null) {
            ventasFiltroRapido = tipo || 'todos';
            const estado = document.getElementById('ventas-filtro-estado');
            const desde = document.getElementById('ventas-fecha-desde');
            const hasta = document.getElementById('ventas-fecha-hasta');
            const hoy = new Date();
            const yyyy = hoy.getFullYear();
            const mm = String(hoy.getMonth() + 1).padStart(2, '0');
            const dd = String(hoy.getDate()).padStart(2, '0');
            const hoyISO = `${yyyy}-${mm}-${dd}`;
            if(tipo === 'todos') {
                if(estado) estado.value = '';
                if(desde) desde.value = '';
                if(hasta) hasta.value = '';
            } else if(tipo === 'hoy') {
                if(estado) estado.value = '';
                if(desde) desde.value = hoyISO;
                if(hasta) hasta.value = hoyISO;
            } else if(tipo === '7dias') {
                const inicio = new Date();
                inicio.setDate(hoy.getDate() - 6);
                const iyy = inicio.getFullYear();
                const imm = String(inicio.getMonth() + 1).padStart(2, '0');
                const idd = String(inicio.getDate()).padStart(2, '0');
                if(estado) estado.value = '';
                if(desde) desde.value = `${iyy}-${imm}-${idd}`;
                if(hasta) hasta.value = hoyISO;
            } else if(['facturada','actualizada','anulada'].includes(tipo)) {
                if(estado) estado.value = tipo;
            }
            syncVentasQuickFilters();
            renderVentas();
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

        function toggleCatalogSearch(forceOpen = null) {
            const wrap = document.getElementById('catalog-search-row');
            const btn = document.getElementById('catalog-search-toggle');
            const input = document.getElementById('buscador');
            if(!wrap || !btn) return;
            const abiertoActual = !wrap.hasAttribute('hidden');
            const abrir = typeof forceOpen === 'boolean' ? forceOpen : !abiertoActual;
            if(!abrir && input && String(input.value || '').trim()) {
                input.value = '';
                buscarProducto();
            }
            if(abrir) {
                wrap.removeAttribute('hidden');
                wrap.classList.remove('is-collapsed');
                wrap.classList.add('is-open');
                btn.classList.add('activo');
                btn.setAttribute('aria-expanded', 'true');
                setTimeout(() => input?.focus?.({ preventScroll: true }), 60);
            } else {
                wrap.setAttribute('hidden', 'hidden');
                wrap.classList.remove('is-open');
                wrap.classList.add('is-collapsed');
                btn.classList.remove('activo');
                btn.setAttribute('aria-expanded', 'false');
            }
        }

        function clearCatalogSearch() {
            const input = document.getElementById('buscador');
            if(input) input.value = '';
            buscarProducto();
            toggleCatalogSearch(false);
        }

        function toggleCategorySearch(forceOpen = null) {
            const wrap = document.getElementById('category-search-row');
            const btn = document.getElementById('category-search-toggle');
            const input = document.getElementById('category-search');
            if(!wrap || !btn) return;
            const abiertoActual = !wrap.hasAttribute('hidden');
            const abrir = typeof forceOpen === 'boolean' ? forceOpen : !abiertoActual;
            if(!abrir && input && String(input.value || '').trim()) {
                input.value = '';
                filtrarCategoriasTexto('');
            }
            if(abrir) {
                wrap.removeAttribute('hidden');
                wrap.classList.remove('is-collapsed');
                wrap.classList.add('is-open');
                btn.classList.add('activo');
                btn.setAttribute('aria-expanded', 'true');
                setTimeout(() => input?.focus?.({ preventScroll: true }), 60);
            } else {
                wrap.setAttribute('hidden', 'hidden');
                wrap.classList.remove('is-open');
                wrap.classList.add('is-collapsed');
                btn.classList.remove('activo');
                btn.setAttribute('aria-expanded', 'false');
            }
        }

        function clearCategorySearch() {
            const input = document.getElementById('category-search');
            if(input) input.value = '';
            filtrarCategoriasTexto('');
            toggleCategorySearch(false);
        }

        function setCatalogSection(section, btn) {
            const esNuevo = section === 'nuevo';
            document.querySelectorAll('.catalog-switcher button').forEach(b => b.classList.remove('activo'));
            if(btn) btn.classList.add('activo');
            else document.getElementById(esNuevo ? 'catalog-tab-nuevo' : 'catalog-tab-productos')?.classList.add('activo');
            document.getElementById('catalog-panel-productos')?.classList.toggle('activo', !esNuevo);
            document.getElementById('catalog-panel-nuevo')?.classList.toggle('activo', esNuevo);
            try { localStorage.setItem('sdc_catalog_section', esNuevo ? 'nuevo' : 'productos'); } catch(e) {}
            if(esNuevo) {
                toggleCatalogSearch(false);
                toggleCategorySearch(false);
            }
        }

        function initCatalogSection() {
            let saved = 'productos';
            try { saved = localStorage.getItem('sdc_catalog_section') || 'productos'; } catch(e) {}
            setCatalogSection(saved === 'nuevo' ? 'nuevo' : 'productos');
            toggleCatalogSearch(false);
            toggleCategorySearch(false);
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
            const yaIngreso = adminEstaAutenticado();

            if(yaIngreso) {
                document.body.classList.remove('login-locked'); activarScrollGlobal();
                if(loginScreen) loginScreen.classList.add('oculto');
                limpiarAdminDeUrl();
                setTimeout(() => { try { if(typeof syncMobileHeaderAndCatalogV63 === 'function') syncMobileHeaderAndCatalogV63(); } catch(e) {} try { if(typeof initMobileTopMenu === 'function') initMobileTopMenu(); } catch(e) {} }, 80);
            } else {
                window.SDC_ADMIN_OK = false;
                document.documentElement.classList.remove('sdc-admin-unlocked');
                document.body.classList.add('login-locked'); activarScrollGlobal();
                setTimeout(() => input?.focus(), 150);
            }

            form?.addEventListener('submit', (event) => {
                event.preventDefault();
                if((input?.value || '').trim() === ADMIN_PIN || (location.protocol === 'file:' && (input?.value || '').trim() === '')) {
                    marcarAdminAutenticado();
                    limpiarAdminDeUrl();
                    document.body.classList.remove('login-locked'); activarScrollGlobal();
                    loginScreen?.classList.add('oculto');
                    setTimeout(() => { try { if(typeof syncMobileHeaderAndCatalogV63 === 'function') syncMobileHeaderAndCatalogV63(); } catch(e) {} try { if(typeof initMobileTopMenu === 'function') initMobileTopMenu(); } catch(e) {} }, 80);
                    if(error) error.textContent = '';
                    input.value = '';
                    mostrarToast('Bienvenido, ADMIN');
                } else {
                    if(error) error.textContent = 'PIN incorrecto. Intenta de nuevo.';
                    input.value = '';
                    input.focus();
                }
            });
        }

        function cerrarSesionAdmin() {
            try { sessionStorage.removeItem('sdc_admin_ok'); } catch(e) {}
            try { localStorage.removeItem('sdc_admin_ok'); } catch(e) {}
            try { document.documentElement.classList.remove('sdc-admin-unlocked'); } catch(e) {}
            window.SDC_ADMIN_OK = false;
            limpiarAdminDeUrl();
            document.body.classList.add('login-locked'); activarScrollGlobal();
            document.getElementById('login-screen')?.classList.remove('oculto');
            const input = document.getElementById('pin-admin');
            if(input) { input.value = ''; input.focus(); }
            const error = document.getElementById('login-error'); if(error) error.textContent = '';
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

        function normalizarClaveTexto(valor = '') {
            return String(valor || '')
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .trim();
        }

        function obtenerValorFilaCatalogo(fila = {}, aliases = []) {
            const mapa = {};
            Object.keys(fila || {}).forEach(key => { mapa[normalizarClaveTexto(key)] = fila[key]; });
            for(const alias of aliases) {
                const key = normalizarClaveTexto(alias);
                if(Object.prototype.hasOwnProperty.call(mapa, key)) return mapa[key];
            }
            return '';
        }

        function numeroSeguro(valor, fallback = 0) {
            if(typeof valor === 'number') return Number.isFinite(valor) ? valor : fallback;
            const limpio = String(valor ?? '')
                .replace(/lps\.?/gi, '')
                .replace(/,/g, '')
                .replace(/[^0-9.\-]/g, '')
                .trim();
            const num = parseFloat(limpio);
            return Number.isFinite(num) ? num : fallback;
        }

        function booleanoSeguro(valor, fallback = true) {
            if(typeof valor === 'boolean') return valor;
            const raw = normalizarClaveTexto(valor);
            if(['1', 'si', 'sí', 'true', 'activo', 'activa', 'yes'].includes(raw)) return true;
            if(['0', 'no', 'false', 'inactivo', 'inactiva'].includes(raw)) return false;
            return fallback;
        }

        function parsearVariantesDesdeTexto(coloresTexto = '', stockFallback = 0) {
            const limpio = String(coloresTexto || '').trim();
            if(!limpio) {
                return [{ nombre: 'Estándar', stock: Math.max(0, Number(stockFallback || 0)), img: '' }];
            }
            const partes = limpio.split(/[;\n|]+/).map(v => v.trim()).filter(Boolean);
            const variantes = [];
            partes.forEach((parte, idx) => {
                const match = parte.match(/^(.*?)(?:\s*(?:=|:|x)\s*|\s+-\s*)(\d+)$/i);
                if(match) {
                    variantes.push({ nombre: (match[1] || '').trim() || `Variante ${idx + 1}`, stock: Number(match[2] || 0), img: '' });
                } else if(idx === 0 && Number(stockFallback || 0) > 0) {
                    variantes.push({ nombre: parte || 'Estándar', stock: Number(stockFallback || 0), img: '' });
                } else {
                    variantes.push({ nombre: parte || `Variante ${idx + 1}`, stock: 0, img: '' });
                }
            });
            const suma = variantes.reduce((s, v) => s + Number(v.stock || 0), 0);
            if(suma === 0 && Number(stockFallback || 0) > 0 && variantes[0]) variantes[0].stock = Number(stockFallback || 0);
            return variantes.length ? variantes : [{ nombre: 'Estándar', stock: Math.max(0, Number(stockFallback || 0)), img: '' }];
        }

        function variantesDesdeFilaCatalogo(fila = {}) {
            const stock = numeroSeguro(obtenerValorFilaCatalogo(fila, ['stock', 'existencia', 'cantidad']), 0);
            const colores = obtenerValorFilaCatalogo(fila, ['colores', 'variantes', 'color', 'colores y stock']);
            const jsonRaw = obtenerValorFilaCatalogo(fila, ['json']);
            let desdeJson = null;
            if(jsonRaw) {
                try {
                    const parsed = typeof jsonRaw === 'string' ? JSON.parse(jsonRaw) : jsonRaw;
                    if(Array.isArray(parsed?.colors) && parsed.colors.length) {
                        desdeJson = parsed.colors.map(v => ({ nombre: v.name || v.nombre || 'Estándar', stock: Number(v.qty || v.stock || 0), img: '' }));
                    }
                } catch (_) {}
            }
            return desdeJson && desdeJson.length ? desdeJson : parsearVariantesDesdeTexto(colores, stock);
        }

        function promosDesdeFilaCatalogo(fila = {}) {
            const precioPromo = numeroSeguro(obtenerValorFilaCatalogo(fila, ['precio_mayoreo', 'precio mayoreo', 'precio promo']), 0);
            const cantidadPromo = numeroSeguro(obtenerValorFilaCatalogo(fila, ['cantidad_mayoreo', 'cantidad mayoreo', 'cantidad promo']), 0);
            if(precioPromo > 0 && cantidadPromo > 1) {
                return [{ cant: Math.round(cantidadPromo), precio: precioPromo }];
            }
            return [];
        }

        function resumenColoresDesdeVariantes(variantes = []) {
            return (variantes || []).map(v => `${v.nombre || 'Estándar'}=${Number(v.stock || 0)}`).join('; ');
        }

        function productoDesdeFilaCatalogo(fila = {}, idx = 0) {
            const nombre = String(obtenerValorFilaCatalogo(fila, ['nombre', 'producto', 'articulo']) || '').trim();
            if(!nombre) return null;
            const categoria = String(obtenerValorFilaCatalogo(fila, ['categoria', 'categoría']) || 'General').trim() || 'General';
            const codigo = String(obtenerValorFilaCatalogo(fila, ['codigo', 'código', 'sku', 'id']) || '').trim();
            const precio = numeroSeguro(obtenerValorFilaCatalogo(fila, ['precio', 'precio venta', 'venta']), 0);
            const costo = numeroSeguro(obtenerValorFilaCatalogo(fila, ['costo', 'costo real', 'costo real (lps.)']), 0);
            const img = String(obtenerValorFilaCatalogo(fila, ['imagen', 'foto', 'image']) || '').trim();
            const descripcion = String(obtenerValorFilaCatalogo(fila, ['descripcion', 'descripción', 'detalle']) || '').trim();
            const marca = String(obtenerValorFilaCatalogo(fila, ['marca']) || '').trim();
            const activo = booleanoSeguro(obtenerValorFilaCatalogo(fila, ['activo', 'estado activo']), true);
            const variantes = variantesDesdeFilaCatalogo(fila);
            const promos = promosDesdeFilaCatalogo(fila);
            const totalStock = variantes.reduce((s, v) => s + Number(v.stock || 0), 0);
            return {
                id: `import-${Date.now()}-${idx}`,
                codigo,
                nombre,
                categoria,
                marca,
                costo,
                precio,
                img,
                descripcion,
                activo,
                variantes,
                promos,
                stockImportado: totalStock,
                coloresImportados: resumenColoresDesdeVariantes(variantes)
            };
        }

        function refrescarCatalogoVisual() {
            categoriasCatalogo = ['Todos', ...new Set(baseDeDatos.map(p => p.categoria).filter(Boolean))];
            if(!categoriasCatalogo.includes(categoriaActivaCatalogo)) categoriaActivaCatalogo = 'Todos';
            renderCategoriasCatalogo();
            poblarCategoriasDefault();
            aplicarFiltrosCatalogo();
            actualizarDashboard();
            poblarProductosRegalo();
        }

        function renderCategoriasCatalogo() {
            const contenedor = document.getElementById('contenedor-filtros');
            const picker = document.getElementById('category-picker');
            const busqueda = String(filtroCategoriaTexto || '').toLowerCase().trim();
            const visibles = categoriasCatalogo.filter(c => c === 'Todos' || !busqueda || c.toLowerCase().includes(busqueda) || c === categoriaActivaCatalogo);
            if(contenedor) {
                contenedor.innerHTML = visibles.map(c => `<button class="btn-cat ${c===categoriaActivaCatalogo?'activo':''}" data-categoria="${String(c).replace(/"/g, '&quot;')}" onclick="filtrarDesdeBoton(this)">${c}</button>`).join('');
                const activo = contenedor.querySelector('.btn-cat.activo');
                setTimeout(() => activo?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }), 40);
            }
            if(picker) {
                picker.innerHTML = categoriasCatalogo.map(c => `<option value="${String(c).replace(/"/g, '&quot;')}">${c === 'Todos' ? 'Todas las categorías' : c}</option>`).join('');
                picker.value = categoriaActivaCatalogo;
            }
        }

        function filtrarDesdeBoton(btn) {
            if(!btn) return;
            filtrar(btn.dataset.categoria || 'Todos', btn);
        }

        function filtrarCategoriasTexto(valor) {
            filtroCategoriaTexto = valor || '';
            renderCategoriasCatalogo();
        }

        function seleccionarCategoriaDesdePicker(valor) {
            filtrar(valor || 'Todos');
        }

        function scrollCategorias(direction = 1) {
            const contenedor = document.getElementById('contenedor-filtros');
            if(!contenedor) return;
            contenedor.scrollBy({ left: 220 * direction, behavior: 'smooth' });
        }

        function abrirImportadorCatalogo() {
            const input = document.getElementById('catalog-import-input');
            if(input) input.click();
        }

        async function subirProductoImportadoANube(producto) {
            const nubeLista = await esperarFirebase(1800);
            if(!nubeLista || typeof window.guardarNuevoFirebase !== 'function') return producto.id;
            const cloudId = await window.guardarNuevoFirebase(producto.nombre, producto.categoria, producto.costo, producto.precio, producto.img || '', producto.variantes || [], producto.promos || []);
            if(typeof window.actualizarFirebase === 'function') {
                await window.actualizarFirebase(cloudId, {
                    codigo: producto.codigo || '',
                    descripcion: producto.descripcion || '',
                    marca: producto.marca || '',
                    activo: producto.activo !== false
                });
            }
            return cloudId;
        }

        async function sincronizarProductoExistenteEnNube(producto) {
            const nubeLista = await esperarFirebase(1800);
            if(!nubeLista || typeof window.actualizarFirebase !== 'function') return;
            if(String(producto.id || '').startsWith('local-') || String(producto.id || '').startsWith('import-')) {
                const nuevoId = await subirProductoImportadoANube(producto);
                producto.id = nuevoId;
                return;
            }
            await window.actualizarFirebase(producto.id, {
                nombre: producto.nombre,
                categoria: producto.categoria,
                costo: Number(producto.costo || 0),
                precio: Number(producto.precio || 0),
                img: producto.img || '',
                variantes: producto.variantes || [],
                promos: producto.promos || [],
                codigo: producto.codigo || '',
                descripcion: producto.descripcion || '',
                marca: producto.marca || '',
                activo: producto.activo !== false,
                fechaActualizacionImport: new Date().toISOString()
            });
        }

        async function manejarImportacionCatalogo(event) {
            const archivo = event?.target?.files?.[0];
            if(!archivo) return;
            if(typeof XLSX === 'undefined') {
                alert('No se pudo cargar el lector de Excel.');
                return;
            }
            try {
                mostrarToast('Importando catálogo...');
                const data = await archivo.arrayBuffer();
                const workbook = XLSX.read(data, { type: 'array' });
                const hoja = workbook.Sheets[workbook.SheetNames[0]];
                const filas = XLSX.utils.sheet_to_json(hoja, { defval: '' });
                if(!filas.length) {
                    alert('El archivo no tiene productos para importar.');
                    return;
                }
                let creados = 0;
                let actualizados = 0;
                const usados = new Set();
                for(let i = 0; i < filas.length; i++) {
                    const productoImportado = productoDesdeFilaCatalogo(filas[i], i);
                    if(!productoImportado) continue;
                    const clave = `${normalizarClaveTexto(productoImportado.codigo || '')}|||${normalizarClaveTexto(productoImportado.nombre || '')}`;
                    if(usados.has(clave)) continue;
                    usados.add(clave);
                    const existente = baseDeDatos.find(p => (
                        productoImportado.codigo && p.codigo && normalizarClaveTexto(p.codigo) === normalizarClaveTexto(productoImportado.codigo)
                    ) || normalizarClaveTexto(p.nombre || '') === normalizarClaveTexto(productoImportado.nombre || ''));
                    if(existente) {
                        Object.assign(existente, {
                            codigo: productoImportado.codigo || existente.codigo || '',
                            nombre: productoImportado.nombre,
                            categoria: productoImportado.categoria,
                            marca: productoImportado.marca || existente.marca || '',
                            costo: productoImportado.costo,
                            precio: productoImportado.precio,
                            img: productoImportado.img || existente.img || '',
                            descripcion: productoImportado.descripcion || existente.descripcion || '',
                            activo: productoImportado.activo,
                            variantes: productoImportado.variantes,
                            promos: productoImportado.promos
                        });
                        await sincronizarProductoExistenteEnNube(existente);
                        actualizados++;
                    } else {
                        const nuevo = { ...productoImportado };
                        nuevo.id = await subirProductoImportadoANube(nuevo);
                        baseDeDatos.push(nuevo);
                        creados++;
                    }
                }
                guardarDatosLocales();
                refrescarCatalogoVisual();
                mostrarToast(`Importación lista: ${creados} nuevos, ${actualizados} actualizados.`);
                alert(`Importación completada.\n\nNuevos: ${creados}\nActualizados: ${actualizados}`);
            } catch (error) {
                console.error(error);
                alert('No se pudo importar el catálogo. Revisa el archivo Excel.');
            } finally {
                if(event?.target) event.target.value = '';
            }
        }

        function exportarCatalogoExcel() {
            if(typeof XLSX === 'undefined') {
                alert('No se pudo cargar el exportador de Excel.');
                return;
            }
            const filas = (baseDeDatos || []).map((p, idx) => {
                const variantes = Array.isArray(p.variantes) && p.variantes.length ? p.variantes : [{ nombre: 'Estándar', stock: 0, img: '' }];
                const stock = variantes.reduce((s, v) => s + Number(v.stock || 0), 0);
                const primerPromo = Array.isArray(p.promos) && p.promos.length ? p.promos[0] : null;
                return {
                    codigo: p.codigo || `SDC-${String(idx + 1).padStart(3, '0')}`,
                    nombre: p.nombre || '',
                    categoria: p.categoria || 'General',
                    marca: p.marca || '',
                    precio: Number(p.precio || 0),
                    costo: Number(p.costo || 0),
                    stock,
                    colores: resumenColoresDesdeVariantes(variantes),
                    imagen: p.img || '',
                    descripcion: p.descripcion || '',
                    activo: p.activo !== false,
                    precio_mayoreo: primerPromo ? Number(primerPromo.precio || 0) : '',
                    cantidad_mayoreo: primerPromo ? Number(primerPromo.cant || 0) : ''
                };
            });
            const wb = XLSX.utils.book_new();
            const ws = XLSX.utils.json_to_sheet(filas);
            XLSX.utils.book_append_sheet(wb, ws, 'productos_pos');
            const fecha = new Date().toISOString().slice(0, 10);
            XLSX.writeFile(wb, `catalogo_sdc_${fecha}.xlsx`);
            mostrarToast('Catálogo exportado.');
        }

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
            refrescarCatalogoVisual(); renderCotizaciones(); setSplashStatus('Cargando historial de ventas...'); await cargarHistorialVentas();
        }

        function filtrar(c, btn) {
            categoriaActivaCatalogo = c || 'Todos';
            document.querySelectorAll('.btn-cat').forEach(b => b.classList.remove('activo'));
            if(btn) btn.classList.add('activo');
            const picker = document.getElementById('category-picker');
            if(picker) picker.value = categoriaActivaCatalogo;
            renderCategoriasCatalogo();
            aplicarFiltrosCatalogo();
        }

        function buscarProducto() {
            filtroCatalogo.texto = (document.getElementById('buscador').value || '').toLowerCase().trim();
            clearTimeout(catalogSearchTimer);
            catalogSearchTimer = setTimeout(aplicarFiltrosCatalogo, 90);
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
            const cont = document.getElementById('contenedor-productos');
            actualizarCatalogoCount(arr.length);
            if(catalogRenderFrame) cancelAnimationFrame(catalogRenderFrame);
            catalogRenderFrame = requestAnimationFrame(() => {
                if(!arr.length) {
                    cont.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 20px;">No hay productos.</p>';
                    return;
                }
                cont.innerHTML = arr.map(prod => {
                    const stk = (prod.variantes || []).reduce((s, v) => s + Number(v.stock || 0), 0);
                    const agotado = stk <= 0;
                    const bajoStock = stk > 0 && stk <= 3;
                    const estadoClase = agotado ? 'agotado' : (bajoStock ? 'bajo-stock' : 'en-stock');
                    const badge = agotado
                        ? `<span class="tag-stock tag-agotado">Agotado</span>`
                        : bajoStock
                            ? `<span class="tag-stock tag-low">Poco: ${stk}</span>`
                            : `<span class="tag-stock">${stk}</span>`;
                    const categoria = escapeHtml(prod.categoria || 'General');
                    const nombre = escapeHtml(prod.nombre || 'Producto');
                    const img = escapeHtml(obtenerImagenProducto(prod, null, 'card', estadoClase));
                    const idSeguro = String(prod.id || '').replace(/'/g, "\'");
                    const accionRapida = agotado
                        ? `<button class="quick-add disabled" onclick="event.stopPropagation()" disabled>Agotado</button>`
                        : `<button class="quick-add" onclick="agregarRapidoCatalogo('${idSeguro}', event)">+ Añadir</button>`;
                    return `
                        <article class="card-prod shop-card ${estadoClase}" data-stock-state="${estadoClase}" onclick="abrirModal('${idSeguro}')">
                            <div class="card-prod-media">
                                ${badge}
                                <img src="${img}" alt="${nombre}" loading="lazy" decoding="async" onerror='restaurarFallbackProducto(this, ${JSON.stringify(prod.categoria || "General")}, ${JSON.stringify(prod.nombre || "Producto")}, ${JSON.stringify(estadoClase)}, "card")'>
                            </div>
                            <div class="card-prod-body">
                                <div class="card-prod-topline">
                                    <span class="card-category">${categoria}</span>
                                </div>
                                <h3>${nombre}</h3>
                                <div class="card-prod-footer">
                                    <p class="precio-card">Lps. ${Math.round(Number(prod.precio || 0))}</p>
                                    <span class="card-cta">Ver</span>
                                </div>
                                <div class="shop-card-actions">
                                    ${accionRapida}
                                </div>
                            </div>
                        </article>`;
                }).join('');
            });
        }

        function abrirModal(id) {
            productoActivoModal = baseDeDatos.find(p => p.id === id);
            document.getElementById('m-img').src = obtenerImagenProducto(productoActivoModal, null, 'modal');
            document.getElementById('m-img').onerror = () => restaurarFallbackProducto(document.getElementById('m-img'), productoActivoModal.categoria || 'General', productoActivoModal.nombre || 'Producto', '', 'modal');
            document.getElementById('m-categoria').innerText = productoActivoModal.categoria;
            document.getElementById('m-nombre').innerText = productoActivoModal.nombre;
            document.getElementById('m-precio').innerText = `Lps. ${Math.round(Number(productoActivoModal.precio || 0))}`;
            
            let pt = '';
            if(productoActivoModal.promos && productoActivoModal.promos.length > 0) {
                let sortedP = [...productoActivoModal.promos].sort((a,b)=>a.cant-b.cant);
                pt = '<div class="promo-block-title">Descuentos por volumen</div><div class="promo-actions-grid promo-actions-grid-compact">';
                sortedP.forEach((pr) => {
                    pt += `<button type="button" class="btn-promo" onclick="seleccionarPromo(${Number(pr.cant)})"><b>Lleva ${Number(pr.cant)} o más</b><span>Lps. ${Math.round(Number(pr.precio || 0))} c/u</span></button>`;
                });
                pt += '</div>';
            }
            document.getElementById('m-promos-text').innerHTML = pt;

            const contVar = document.getElementById('m-variantes'); contVar.innerHTML = '';
            productoActivoModal.variantes.forEach((v, i) => {
                const clas = v.stock === 0 ? 'sin-stock' : '';
                contVar.innerHTML += `<button class="btn-variante color-aware ${clas}" id="var-btn-${i}" style="${estiloInlineColor(v.nombre, false)}" onclick="selVariante(${i})">${escapeHtml(v.nombre)}</button>`;
            });
            
            const idx = productoActivoModal.variantes.findIndex(v => v.stock > 0);
            if(idx !== -1) {
                selVariante(idx);
            } else {
                document.getElementById('m-stock-texto').innerText = 'Agotado';
                varianteActivaModal = null;
                actualizarResumenPrecioModal();
            }
            sincronizarFichaProductoCompartir();
            document.getElementById('modal-producto').classList.add('activo'); document.body.classList.add('modal-open'); activarScrollGlobal();
        }

        function selVariante(i) {
            varianteActivaModal = productoActivoModal.variantes[i];
            document.querySelectorAll('.btn-variante').forEach((b, idx) => {
                b.classList.remove('seleccionado');
                const nombre = productoActivoModal?.variantes?.[idx]?.nombre || b.innerText;
                b.setAttribute('style', estiloInlineColor(nombre, false));
            });
            const btnActivo = document.getElementById(`var-btn-${i}`);
            btnActivo.classList.add('seleccionado');
            btnActivo.setAttribute('style', estiloInlineColor(varianteActivaModal.nombre, true));
            document.getElementById('m-stock-texto').innerText = `Disponible para esta venta: ${stockDisponibleTotal(productoActivoModal.id, varianteActivaModal.nombre)} unidades`;
            document.getElementById('m-cantidad').value = 1;
            document.getElementById('m-img').src = obtenerImagenProducto(productoActivoModal, varianteActivaModal, 'modal');
            document.getElementById('m-img').onerror = () => restaurarFallbackProducto(document.getElementById('m-img'), productoActivoModal.categoria || 'General', productoActivoModal.nombre || 'Producto', '', 'modal');
            actualizarResumenPrecioModal();
            sincronizarFichaProductoCompartir();
        }

        function obtenerPrecioUnitarioModal(prod, cantidad) {
            const precioBase = Number(prod?.precio || 0);
            const promos = [...(prod?.promos || [])].sort((a, b) => Number(b.cant || 0) - Number(a.cant || 0));
            const cantidadSegura = Math.max(1, Number(cantidad || 1));
            for(const pr of promos) {
                if(cantidadSegura >= Number(pr.cant || 0)) return Number(pr.precio || precioBase);
            }
            return precioBase;
        }

        function actualizarResumenPrecioModal() {
            const precioBox = document.getElementById('m-precio');
            const unitBox = document.getElementById('m-precio-unitario');
            const totalBox = document.getElementById('m-precio-total');
            const cant = Math.max(1, parseInt(document.getElementById('m-cantidad')?.value || '1', 10));
            if(!productoActivoModal || !varianteActivaModal) {
                if(precioBox) precioBox.innerText = 'Lps. 0';
                if(unitBox) unitBox.innerText = 'Lps. 0';
                if(totalBox) totalBox.innerText = 'Lps. 0';
                return;
            }
            const precioUnitario = obtenerPrecioUnitarioModal(productoActivoModal, cant);
            const total = precioUnitario * cant;
            if(precioBox) precioBox.innerText = `Lps. ${Math.round(precioUnitario)}`;
            if(unitBox) unitBox.innerText = `Lps. ${Math.round(precioUnitario)}`;
            if(totalBox) totalBox.innerText = `Lps. ${Math.round(total)}`;
        }

        function modCantidadModal(v) {
            if(!varianteActivaModal) return;
            const maxStock = stockDisponibleTotal(productoActivoModal.id, varianteActivaModal.nombre);
            let n = parseInt(document.getElementById('m-cantidad').value) + v;
            if(n >= 1 && n <= maxStock) {
                document.getElementById('m-cantidad').value = n;
                actualizarResumenPrecioModal();
            }
        }

        function seleccionarPromo(cantidadMinima) {
            if(!varianteActivaModal) return;
            const maxStock = stockDisponibleTotal(productoActivoModal.id, varianteActivaModal.nombre);
            const cantidad = Math.min(Number(cantidadMinima) || 1, maxStock);
            document.getElementById('m-cantidad').value = Math.max(1, cantidad);
            actualizarResumenPrecioModal();
            mostrarToast(`Promo seleccionada: ${cantidad} unidad${cantidad === 1 ? '' : 'es'}`);
        }

        function obtenerPromosOrdenadasProducto(prod) {
            return [...(prod?.promos || [])].sort((a, b) => Number(a.cant || 0) - Number(b.cant || 0));
        }

        function renderPromosFichaProducto(prod) {
            const promos = obtenerPromosOrdenadasProducto(prod);
            if(!promos.length) {
                return `<div class="share-promos-grid"><div class="share-offer-card single"><b>Precio regular</b><span>Lps. ${Math.round(Number(prod?.precio || 0))} c/u</span></div></div>`;
            }
            return `<div class="share-promos-grid">${promos.map(pr => `
                <div class="share-offer-card">
                    <b>Lleva ${Number(pr.cant || 0)} o más</b>
                    <span>Lps. ${Math.round(Number(pr.precio || 0))} c/u</span>
                </div>`).join('')}</div>`;
        }

        function sincronizarFichaProductoCompartir() {
            if(!productoActivoModal) return;
            const totalStock = (productoActivoModal.variantes || []).reduce((s, v) => s + Number(v.stock || 0), 0);
            const imgActual = obtenerImagenProducto(productoActivoModal, varianteActivaModal, 'share');
            const stockVariante = varianteActivaModal ? `${stockDisponibleTotal(productoActivoModal.id, varianteActivaModal.nombre)} en ${varianteActivaModal.nombre}` : `${totalStock} unidades disponibles`;
            document.getElementById('sp-img').src = imgActual;
            document.getElementById('sp-img').onerror = () => restaurarFallbackProducto(document.getElementById('sp-img'), productoActivoModal.categoria || 'General', productoActivoModal.nombre || 'Producto', '', 'share');
            document.getElementById('sp-name').innerText = productoActivoModal.nombre || 'Producto';
            document.getElementById('sp-cat').innerText = productoActivoModal.categoria || 'Categoría general';
            const precioBaseFicha = Number(productoActivoModal.precio || 0);
            document.getElementById('sp-price').innerText = `Lps. ${Math.round(precioBaseFicha)}`;
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

        function cerrarModal() { document.getElementById('modal-producto').classList.remove('activo'); document.body.classList.remove('modal-open'); activarScrollGlobal(); }
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
            actualizarResumenPrecioModal();
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
            renderRegalosVenta();
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
            document.getElementById('np-img-preview').classList.remove('fallback-categoria');
            document.getElementById('np-img-preview').style.display = 'none';

            npVarTemp = [{ nombre: 'Estándar', stock: 1, img: '' }];
            npProTemp = [];

            renderNpVar(); renderNpPro();
            document.getElementById('modal-nuevo-producto').classList.add('activo'); document.body.classList.add('modal-open'); activarScrollGlobal();
        }


        function cerrarModalNuevoProducto() {
            const modal = document.getElementById('modal-nuevo-producto');
            if(modal) modal.classList.remove('activo');
            document.body.classList.remove('modal-open');
            activarScrollGlobal();
        }

        async function actualizarFotoNp(input, idx) {
            if (!(input.files && input.files[0])) return;
            try {
                const dataUrl = await procesarImagenInput(input, { maxSize: 1400, quality: 0.82 });
                if(idx === 'main') {
                    npImgTemp = dataUrl;
                    document.getElementById('np-img-preview').src = npImgTemp;
                    document.getElementById('np-img-preview').classList.remove('fallback-categoria');
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
                const nombreSeguro = escapeHtml(v.nombre || '');
                list.innerHTML += `
                <div class="edicion-fila variant-editor-card">
                    ${renderPresetColorButtons(v.nombre || '', 'np', i)}
                    <div class="edicion-grid variant-editor-grid">
                        <input type="text" id="np-color-input-${i}" class="input-box" value="${nombreSeguro}" onchange="npVarTemp[${i}].nombre=this.value" placeholder="Color o combinación">
                        <input type="number" class="input-box stock-mini-input" style="width:80px;" value="${Number(v.stock || 0)}" onchange="npVarTemp[${i}].stock=parseInt(this.value || 0)" placeholder="Stock">
                        <button class="btn-quitar-fila" onclick="npVarTemp.splice(${i},1); renderNpVar();">✕</button>
                    </div>
                    <div class="grid-2-col compact-upload-grid">
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
                cerrarModalNuevoProducto();
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
            document.getElementById('modal-editar').classList.add('activo'); document.body.classList.add('modal-open'); activarScrollGlobal();
        }

        // DIBUJAR VARIANTES EDICIÓN CON BOTONES SEPARADOS
        function renderEditorV() {
            const list = document.getElementById('edit-variantes-lista'); list.innerHTML = '';
            edVarTemp.forEach((v, i) => {
                const nombreSeguro = escapeHtml(v.nombre || '');
                list.innerHTML += `
                <div class="edicion-fila variant-editor-card">
                    ${renderPresetColorButtons(v.nombre || '', 'edit', i)}
                    <div class="edicion-grid variant-editor-grid">
                        <input type="text" id="edit-color-input-${i}" class="input-box" value="${nombreSeguro}" onchange="edVarTemp[${i}].nombre=this.value" placeholder="Color o combinación">
                        <input type="number" class="input-box stock-mini-input" style="width:80px;" value="${Number(v.stock || 0)}" onchange="edVarTemp[${i}].stock=parseInt(this.value || 0)" placeholder="Stock">
                        <button class="btn-quitar-fila" onclick="edVarTemp.splice(${i},1); renderEditorV();">✕</button>
                    </div>
                    <div class="grid-2-col compact-upload-grid">
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
            renderRegalosVenta();
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
            const buscador = document.getElementById('buscador-ventas');
            const estado = document.getElementById('ventas-filtro-estado');
            const desde = document.getElementById('ventas-fecha-desde');
            const hasta = document.getElementById('ventas-fecha-hasta');
            if(buscador) buscador.value = '';
            if(estado) estado.value = '';
            if(desde) desde.value = '';
            if(hasta) hasta.value = '';
            ventasFiltroRapido = 'todos';
            syncVentasQuickFilters();
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
            document.body.classList.remove('modal-open'); activarScrollGlobal();
        }

        function cambiarVista(idVista, btn) {
            const vistaId = String(idVista || 'inicio').trim();
            const vista = document.getElementById('vista-' + vistaId);
            if(!vista) {
                console.warn('Vista no encontrada:', vistaId);
                return;
            }

            document.body.classList.remove('modal-open');
            document.querySelectorAll('.modal-overlay.activo').forEach(m => m.classList.remove('activo'));
            document.querySelectorAll('.vista').forEach(v => v.classList.remove('activa'));
            vista.classList.add('activa');
            actualizarTabbarActiva(vistaId);

            const navBtn = btn || document.querySelector(`nav.main-nav button[data-view="${vistaId}"]`);
            document.querySelectorAll('nav.main-nav button').forEach(b => {
                b.classList.toggle('activo', b === navBtn);
                b.removeAttribute('disabled');
                b.style.pointerEvents = 'auto';
                b.setAttribute('aria-current', b === navBtn ? 'page' : 'false');
            });
            if(navBtn) {
                setTimeout(() => navBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }), 20);
            }

            if(vistaId === 'ventas') renderVentas();
            if(vistaId === 'cotizaciones') renderCotizaciones?.();
            if(vistaId === 'dashboard') actualizarDashboard?.();

            const main = document.querySelector('main');
            if(main) main.scrollTo({ top: 0, behavior: 'smooth' });
            else window.scrollTo({ top: 0, behavior: 'smooth' });

            setTimeout(() => {
                if(vistaId === 'catalogo') {
                    toggleCatalogSearch(false);
                    toggleCategorySearch(false);
                }
                // En PC no se fuerza el foco al formulario de venta para que el cambio de pantalla se sienta limpio.
                if(vistaId === 'carrito' && window.innerWidth < 768) {
                    const objetivo = [
                        document.getElementById('c-nombre'),
                        document.getElementById('c-tel'),
                        document.getElementById('c-dir')
                    ].find(input => input && !String(input.value || '').trim()) || document.getElementById('c-nombre');
                    objetivo?.focus?.({ preventScroll: true });
                }
            }, 140);
        }

        document.querySelectorAll('nav.main-nav button[data-view]').forEach(btn => {
            btn.type = 'button';
            btn.addEventListener('click', (event) => {
                event.preventDefault();
                cambiarVista(btn.dataset.view, btn);
            });
        });

        document.querySelectorAll('.modal-overlay').forEach(modal => modal.addEventListener('click', cerrarModalDesdeOverlay));
        document.addEventListener('keydown', (event) => {
            if(event.key === 'Escape') {
                document.querySelectorAll('.modal-overlay.activo').forEach(m => m.classList.remove('activo'));
                document.body.classList.remove('modal-open'); activarScrollGlobal();
            }
        });

        initTheme();
        initSidebarState();
        initCatalogSection();
        iniciarControlAcceso();
        initLugares();
        const cargaInicialSegura = Promise.race([
            inicializarCatalogo(),
            new Promise((resolve) => setTimeout(() => {
                console.warn('Carga inicial tardó demasiado; se continúa en modo seguro.');
                resolve('timeout');
            }, 6500))
        ]);

        cargaInicialSegura
            .catch((error) => {
                console.error(error);
                mostrarToast('No se pudo completar la carga inicial.');
            })
            .finally(() => {
                try { actualizarEstadoEdicionVenta(); } catch(e) {}
                try { actualizarFormatoFactura(); } catch(e) {}
                try { renderRegalosVenta(); } catch(e) {}
                try {
                    const params = new URLSearchParams(location.search);
                    const vistaInicial = params.get('vista');
                    if(vistaInicial) {
                        const indexMap = { inicio:0, catalogo:1, carrito:2, cotizaciones:3, ventas:4, dashboard:5 };
                        const btn = document.querySelectorAll('nav button')[indexMap[vistaInicial] || 0];
                        cambiarVista(vistaInicial, btn);
                    }
                } catch(e) {}
                setTimeout(ocultarSplash, 280);
            });


        function normalizarRegalo(regalo = {}) {
            return {
                giftId: regalo.giftId || `gift-${Date.now()}-${Math.random().toString(16).slice(2,8)}`,
                tipo: regalo.tipo || (regalo.id ? 'catalogo' : 'manual'),
                id: regalo.id || '',
                nombre: regalo.nombre || 'Regalo',
                variante: regalo.variante || 'Detalle',
                cantidad: Number(regalo.cantidad || 1),
                precioBase: 0,
                costoUnitario: Number(regalo.costoUnitario || 0),
                esRegalo: true,
                nota: regalo.nota || ''
            };
        }

        function obtenerRegalosVenta() {
            return (regalosVenta || []).map(normalizarRegalo);
        }

        function cantidadEnRegalosCatalogo(idProducto, variante) {
            return obtenerRegalosVenta()
                .filter(it => it.id === idProducto && it.variante === variante)
                .reduce((s, it) => s + Number(it.cantidad || 0), 0);
        }

        function combinarItemsStock(articulos = [], regalos = []) {
            const arrArt = Array.isArray(articulos) ? articulos : [];
            const arrReg = (Array.isArray(regalos) ? regalos : []).filter(r => r && r.id);
            return [...arrArt, ...arrReg.map(r => ({ id: r.id, variante: r.variante, cantidad: Number(r.cantidad || 0) }))];
        }

        function cantidadOriginalVenta(idProducto, variante) {
            if(!ventaOriginalEdicion) return 0;
            const base = combinarItemsStock(ventaOriginalEdicion.articulos || [], ventaOriginalEdicion.regalos || []);
            return base.filter(it => it.id === idProducto && it.variante === variante)
                .reduce((s, it) => s + Number(it.cantidad || 0), 0);
        }

        function cantidadEnCarrito(idProducto, variante) {
            const qtyCarrito = carrito
                .filter(it => it.id === idProducto && it.variante === variante)
                .reduce((s, it) => s + Number(it.cantidad || 0), 0);
            return qtyCarrito + cantidadEnRegalosCatalogo(idProducto, variante);
        }

        function poblarProductosRegalo() {
            const select = document.getElementById('gift-catalog-product');
            if(!select) return;
            const lista = [...baseDeDatos].sort((a,b)=> String(a.nombre || '').localeCompare(String(b.nombre || '')));
            select.innerHTML = lista.length
                ? lista.map(p => `<option value="${p.id}">${p.nombre}</option>`).join('')
                : '<option value="">No hay productos disponibles</option>';
            actualizarGiftCatalogo();
        }

        function actualizarGiftCatalogo() {
            const productId = document.getElementById('gift-catalog-product')?.value;
            const selVar = document.getElementById('gift-catalog-variant');
            const stockNote = document.getElementById('gift-stock-note');
            if(!selVar || !stockNote) return;
            const prod = baseDeDatos.find(p => String(p.id) === String(productId));
            if(!prod) {
                selVar.innerHTML = '<option value="">Sin variantes</option>';
                stockNote.textContent = 'Primero crea o selecciona un producto del catálogo.';
                return;
            }
            const variantes = (prod.variantes || []).filter(v => Number(v.stock || 0) > 0);
            const source = variantes.length ? variantes : (prod.variantes || []);
            selVar.innerHTML = source.map(v => `<option value="${v.nombre}">${v.nombre}</option>`).join('') || '<option value="">Sin variantes</option>';
            const primera = source[0];
            if(primera) {
                const reservado = cantidadEnCarrito(prod.id, primera.nombre);
                const disponible = stockDisponibleTotal(prod.id, primera.nombre) - reservado;
                stockNote.textContent = `Disponible para regalo: ${Math.max(0, disponible)} unidad(es).`;
            } else {
                stockNote.textContent = 'Este producto no tiene variantes disponibles.';
            }
            selVar.onchange = () => {
                const variante = selVar.value;
                const reservado = cantidadEnCarrito(prod.id, variante);
                const disponible = stockDisponibleTotal(prod.id, variante) - reservado;
                stockNote.textContent = `Disponible para regalo: ${Math.max(0, disponible)} unidad(es).`;
            };
        }

        function setGiftMode(mode = 'catalogo') {
            giftMode = mode;
            document.getElementById('gift-panel-catalogo')?.toggleAttribute('hidden', mode !== 'catalogo');
            document.getElementById('gift-panel-manual')?.toggleAttribute('hidden', mode !== 'manual');
            document.getElementById('gift-mode-catalogo')?.classList.toggle('activo', mode === 'catalogo');
            document.getElementById('gift-mode-manual')?.classList.toggle('activo', mode === 'manual');
        }

        function renderRegalosVenta() {
            const cont = document.getElementById('gift-summary');
            const modalList = document.getElementById('gift-modal-list');
            if(!cont) return;
            const regalos = obtenerRegalosVenta();
            if(regalos.length === 0) {
                const empty = '<div class="gift-summary-empty">Todavía no has agregado regalos en esta venta.</div>';
                cont.innerHTML = empty;
                if(modalList) modalList.innerHTML = empty;
                return;
            }
            const html = regalos.map((gift, idx) => {
                const meta = gift.id
                    ? `Producto del catálogo · ${gift.variante || 'Estándar'}`
                    : `${gift.variante || 'Detalle'}${gift.nota ? ' · ' + gift.nota : ''}`;
                return `<div class="gift-summary-card"><div><b>🎁 ${gift.cantidad}x ${gift.nombre}</b><small>${meta}</small></div><button type="button" class="gift-remove-btn" onclick="eliminarRegaloVenta(${idx})">Quitar</button></div>`;
            }).join('');
            cont.innerHTML = html;
            if(modalList) modalList.innerHTML = html;
        }

        function abrirModalRegalo() {
            poblarProductosRegalo();
            setGiftMode('catalogo');
            renderRegalosVenta();
            const modal = document.getElementById('modal-regalo');
            if(modal) modal.classList.add('activo');
            document.body.classList.add('modal-open'); activarScrollGlobal();
        }

        function cerrarModalRegalo() {
            document.getElementById('modal-regalo')?.classList.remove('activo');
            document.body.classList.remove('modal-open'); activarScrollGlobal();
        }

        function agregarRegaloActual() {
            if(giftMode === 'catalogo') {
                const productId = document.getElementById('gift-catalog-product')?.value;
                const variant = document.getElementById('gift-catalog-variant')?.value;
                const cantidad = Math.max(1, Number(document.getElementById('gift-catalog-cant')?.value || 1));
                const prod = baseDeDatos.find(p => String(p.id) === String(productId));
                if(!prod || !variant) return alert('Selecciona un producto y una variante para el regalo.');
                const reservado = carrito.filter(it => it.id === prod.id && it.variante === variant).reduce((s,it)=>s+Number(it.cantidad || 0),0)
                    + cantidadEnRegalosCatalogo(prod.id, variant);
                const disponible = stockDisponibleTotal(prod.id, variant) - reservado;
                if(cantidad > disponible) return alert(`No tienes suficiente stock para regalar ${prod.nombre} (${variant}). Disponible: ${Math.max(0, disponible)}.`);
                regalosVenta.push(normalizarRegalo({
                    tipo: 'catalogo',
                    id: prod.id,
                    nombre: prod.nombre,
                    variante: variant,
                    cantidad,
                    costoUnitario: Number(prod.costo || 0)
                }));
            } else {
                const nombre = (document.getElementById('gift-manual-name')?.value || '').trim();
                const variante = (document.getElementById('gift-manual-variant')?.value || 'Detalle').trim();
                const cantidad = Math.max(1, Number(document.getElementById('gift-manual-cant')?.value || 1));
                if(!nombre) return alert('Escribe el nombre del regalo manual.');
                regalosVenta.push(normalizarRegalo({ tipo: 'manual', nombre, variante, cantidad }));
                document.getElementById('gift-manual-name').value = '';
                document.getElementById('gift-manual-variant').value = '';
                document.getElementById('gift-manual-cant').value = 1;
            }
            renderRegalosVenta();
            actualizarGiftCatalogo();
            mostrarToast('Regalo agregado a la venta');
        }

        function eliminarRegaloVenta(idx) {
            regalosVenta.splice(idx, 1);
            renderRegalosVenta();
            actualizarGiftCatalogo();
        }

        function obtenerTextoRegalos(regalos = obtenerRegalosVenta(), multiline = false) {
            if(!regalos.length) return '';
            return regalos.map(g => multiline
                ? `• ${g.cantidad}x ${g.nombre}${g.variante ? ' - ' + g.variante : ''}`
                : `${g.cantidad}x ${g.nombre}${g.variante ? ' · ' + g.variante : ''}`
            ).join(multiline ? '\n' : ' • ');
        }

        function validarStockCarrito() {
            const acumulado = mapaCantidades(carrito);
            obtenerRegalosVenta().filter(r => r.id).forEach(r => {
                const key = `${r.id}|||${r.variante}`;
                acumulado.set(key, (acumulado.get(key) || 0) + Number(r.cantidad || 0));
            });
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

        function construirDatosOrden() {
            const articulos = JSON.parse(JSON.stringify(carrito)).map(it => ({
                ...it,
                cantidad: Number(it.cantidad || 0),
                precioBase: Number(it.precioBase || 0),
                costoUnitario: Number(it.costoUnitario ?? baseDeDatos.find(p => p.id === it.id)?.costo ?? 0)
            }));
            const regalos = obtenerRegalosVenta().map(g => ({ ...g, cantidad: Number(g.cantidad || 0), costoUnitario: Number(g.costoUnitario || 0) }));
            const costoArticulos = articulos.reduce((s, it) => s + (Number(it.costoUnitario || 0) * Number(it.cantidad || 0)), 0);
            const costoRegalos = regalos.reduce((s, it) => s + (Number(it.costoUnitario || 0) * Number(it.cantidad || 0)), 0);
            const costo = costoArticulos + costoRegalos;
            return {
                ...obtenerDatosClienteDesdeFormulario(),
                codigo: ventaOriginalEdicion?.codigo || generarCodigoVenta(),
                articulos,
                regalos,
                total: totalCarritoActual,
                costo,
                ganancia: totalCarritoActual - costo,
                estado: modoEdicionVentaId ? 'actualizada' : 'facturada',
                fecha: ventaOriginalEdicion?.fecha || new Date().toISOString(),
                fechaActualizacion: modoEdicionVentaId ? new Date().toISOString() : null
            };
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
            regalosVenta = JSON.parse(JSON.stringify(venta.regalos || []));
            renderRegalosVenta();
        }

        function editarVenta(idVenta) {
            const venta = historialVentas.find(v => String(v.id) === String(idVenta));
            if(!venta) return alert('No encontré esa venta.');
            if((venta.estado || 'facturada') === 'anulada') return alert('No puedes editar una venta anulada.');
            modoEdicionVentaId = venta.id;
            ventaOriginalEdicion = JSON.parse(JSON.stringify(venta));
            carrito = JSON.parse(JSON.stringify(venta.articulos || []));
            regalosVenta = JSON.parse(JSON.stringify(venta.regalos || []));
            llenarFormularioDesdeVenta(venta);
            document.getElementById('cart-badge').innerText = carrito.reduce((s,i)=>s+Number(i.cantidad || 0),0);
            calcularTotalesCarrito();
            renderRegalosVenta();
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
                await aplicarDiferenciaStock(combinarItemsStock(venta.articulos || [], venta.regalos || []), []);
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
                const stockNuevo = combinarItemsStock(datosOrden.articulos, datosOrden.regalos);
                const stockOriginal = combinarItemsStock(ventaOriginalEdicion?.articulos || [], ventaOriginalEdicion?.regalos || []);
                if(modoEdicionVentaId) {
                    datosOrden.id = modoEdicionVentaId;
                    await aplicarDiferenciaStock(stockOriginal, stockNuevo);
                    if(typeof window.actualizarVentaFirebase === 'function' && !String(modoEdicionVentaId).startsWith('local-')) {
                        await window.actualizarVentaFirebase(modoEdicionVentaId, datosOrden);
                    }
                    historialVentas = historialVentas.map(v => String(v.id) === String(modoEdicionVentaId) ? { ...v, ...datosOrden } : v);
                    mostrarToast('Venta actualizada. Inventario ajustado.');
                } else {
                    await aplicarDiferenciaStock([], stockNuevo);
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

        function guardarCotizacion() {
            if(carrito.length===0) return alert("Agrega artículos primero");
            let d = {
                cli: document.getElementById('c-nombre').value || 'Sin Nombre', tel: document.getElementById('c-tel').value || 'N/A',
                dep: document.getElementById('c-depto').value, mun: document.getElementById('c-muni').value,
                dir: document.getElementById('c-dir').value, paq: document.getElementById('c-paquetera').value
            };
            cotizaciones.push({ id: Date.now(), datos: d, items: [...carrito], regalos: obtenerRegalosVenta(), total: totalCarritoActual, envio: document.getElementById('tipoEnvio').value });
            guardarDatosLocales();
            limpiarCarrito(); renderCotizaciones(); mostrarToast("Cotización guardada exitosamente"); cambiarVista('cotizaciones', document.querySelectorAll('nav button')[3]);
        }

        function renderCotizaciones() {
            const cont = document.getElementById('lista-cotizaciones'); cont.innerHTML = '';
            if(cotizaciones.length === 0) {
                cont.innerHTML = '<div class="empty-state">No tienes cotizaciones pendientes.</div>';
                return;
            }
            cotizaciones.slice().sort((a, b) => Number(b.id || 0) - Number(a.id || 0)).forEach(c => {
                const fecha = new Date(Number(c.id) || Date.now()).toLocaleString('es-HN', { dateStyle: 'medium', timeStyle: 'short' });
                const itemsCount = (c.items || []).reduce((s, it) => s + Number(it.cantidad || 0), 0);
                const preview = (c.items || []).slice(0, 2).map(it => `${it.cantidad}x ${it.nombre}${it.variante ? ' · ' + it.variante : ''}`).join(' • ');
                const extra = Math.max((c.items || []).length - 2, 0);
                const regaloTxt = (c.regalos || []).length ? `<div class="cot-preview">🎁 ${(c.regalos || []).map(r => `${r.cantidad}x ${r.nombre}`).join(' • ')}</div>` : '';
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
                        ${regaloTxt}
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
            const regalosTxt = (c.regalos || []).length ? `\n*🎁 Regalos:*\n${(c.regalos || []).map(r => `• ${r.cantidad}x ${r.nombre}${r.variante ? ' - ' + r.variante : ''}`).join('\n')}\n` : '';
            let msg = `*🛍️ SDC COMAYAGUA - Cotización*\n\n`;
            msg += `*Cliente:* ${c.datos.cli || 'Consumidor Final'}\n`;
            msg += `*Teléfono:* ${c.datos.tel || 'N/A'}\n`;
            msg += `*Destino:* ${c.datos.mun || ''}, ${c.datos.dep || ''}\n`;
            msg += `*Paquetera:* ${c.datos.paq || 'N/A'}\n\n`;
            msg += `*Artículos:*\n${items}\n`;
            msg += regalosTxt + `\n*TOTAL ESTIMADO: Lps. ${Math.round(Number(c.total || 0))}*\n`;
            msg += `\nGracias por consultar con Soluciones Digitales Comayagua.`;
            abrirWhatsAppMensaje(msg, c.datos.tel || '');
        }

        function cargarCot(id) {
            let c = cotizaciones.find(x => x.id === id); 
            carrito = [...(c.items || [])];
            regalosVenta = JSON.parse(JSON.stringify(c.regalos || []));
            document.getElementById('c-nombre').value = c.datos.cli; document.getElementById('c-tel').value = c.datos.tel;
            document.getElementById('c-depto').value = c.datos.dep; cargarMunicipios(); document.getElementById('c-muni').value = c.datos.mun;
            document.getElementById('c-dir').value = c.datos.dir; document.getElementById('c-paquetera').value = c.datos.paq;
            document.getElementById('tipoEnvio').value = c.envio;
            document.getElementById('cart-badge').innerText = carrito.reduce((s,i)=>s+i.cantidad,0); 
            calcularTotalesCarrito();
            renderRegalosVenta();
            cotizaciones = cotizaciones.filter(x => x.id !== id); 
            guardarDatosLocales(); renderCotizaciones(); cambiarVista('carrito', document.querySelectorAll('nav button')[2]);
        }

        function limpiarCarrito() {
            carrito = []; regalosVenta = []; document.getElementById('cart-badge').innerText = 0;
            ['c-nombre', 'c-tel', 'c-dir'].forEach(id => document.getElementById(id).value = '');
            document.getElementById('c-depto').value = "Comayagua"; cargarMunicipios(); document.getElementById('c-muni').value = "Comayagua";
            renderRegalosVenta();
            calcularTotalesCarrito();
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
            const regalos = obtenerRegalosVenta();
            if(regalos.length) {
                m += `\n*🎁 Regalos incluidos:*\n`;
                regalos.forEach(g => m += ` - ${g.cantidad}x ${g.nombre}${g.variante ? ' (' + g.variante + ')' : ''}\n`);
            }
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
            const regalos = obtenerRegalosVenta();
            if(regalos.length) {
                const detalleRegalos = regalos.map(g => `• ${g.cantidad}x ${g.nombre}${g.variante ? ' - ' + g.variante : ''}`).join('<br>');
                items.innerHTML += `
                    <div class="fac-item">
                        <div class="fac-item-main">
                            <span>🎁 Regalos incluidos</span>
                            <span>Lps. 0</span>
                        </div>
                        <div class="fac-item-sub">${detalleRegalos}</div>
                    </div>`;
            }
            document.getElementById('f-sub').innerText = `Lps. ${Math.round(sB)}`;
            document.getElementById('f-aho').innerText = document.getElementById('txt-aho').innerText;
            document.getElementById('f-env').innerText = document.getElementById('txt-env').innerText;
            document.getElementById('f-com').innerText = document.getElementById('txt-com').innerText;
            document.getElementById('f-tot').innerText = document.getElementById('txt-tot').innerText;
            document.getElementById('f-row-com').style.display = document.getElementById('tipoEnvio').value === 'contra_entrega' ? 'flex' : 'none';
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
            const regalos = obtenerRegalosVenta();
            const regalosHtml = regalos.length ? `<div class="hr"></div><div><b>🎁 Regalos</b></div>${regalos.map(g => `<div class="sub">- ${g.cantidad}x ${g.nombre}${g.variante ? ' · ' + g.variante : ''}</div>`).join('')}` : '';
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
${regalosHtml}
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

        function reenviarVentaWhatsApp(idVenta) {
            const venta = historialVentas.find(v => String(v.id) === String(idVenta));
            if(!venta) return alert('No encontré esa venta.');
            const items = (venta.articulos || []).map(it => `• ${it.cantidad}x ${it.nombre}${it.variante ? ' - ' + it.variante : ''}`).join('\n');
            const regalosTxt = (venta.regalos || []).length ? `\n*🎁 Regalos*\n${(venta.regalos || []).map(r => `• ${r.cantidad}x ${r.nombre}${r.variante ? ' - ' + r.variante : ''}`).join('\n')}\n` : '';
            let msg = `*🧾 SOLUCIONES DIGITALES COMAYAGUA*\n`;
            msg += `_Resumen de compra_\n\n`;
            msg += `*Orden:* ${venta.codigo || venta.id}\n`;
            msg += `*Cliente:* ${venta.cliente || 'Consumidor Final'}\n`;
            msg += `*Teléfono:* ${venta.telefono || 'N/A'}\n`;
            msg += `*Destino:* ${venta.destino || 'N/A'}\n`;
            msg += `*Paquetera:* ${venta.paqueteria || 'N/A'}\n\n`;
            msg += `*📦 Artículos*\n${items}\n`;
            msg += regalosTxt;
            msg += `\n*TOTAL A PAGAR:* Lps. ${Math.round(Number(venta.total || 0))}\n`;
            msg += `Gracias por comprar con SDC 🙌`;
            abrirWhatsAppMensaje(msg, venta.telefono || '');
        }

        function imprimirVentaTicket(idVenta) {
            const venta = historialVentas.find(v => String(v.id) === String(idVenta));
            if(!venta) return alert('No encontré esa venta.');
            const filas = (venta.articulos || []).map(it => `<div class="item"><b>${it.cantidad}x ${it.nombre}${it.variante ? ' - ' + it.variante : ''}</b></div>`).join('');
            const regalosHtml = (venta.regalos || []).length ? `<div class="hr"></div><div><b>🎁 Regalos</b></div>${(venta.regalos || []).map(r => `<div class="item"><b>${r.cantidad}x ${r.nombre}${r.variante ? ' - ' + r.variante : ''}</b></div>`).join('')}` : '';
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
<div><b>Cliente:</b> ${venta.cliente || 'Consumidor Final'}</div><div><b>Tel:</b> ${venta.telefono || 'N/A'}</div><div><b>Destino:</b> ${venta.destino || 'N/A'}</div><div class="hr"></div>${filas}${regalosHtml}
<div class="hr"></div><div class="row total"><span>TOTAL</span><b>Lps. ${Math.round(Number(venta.total || 0))}</b></div><div class="hr"></div><div class="center">Gracias por su compra</div></div></body></html>`;
            const win = window.open('', '_blank', 'width=420,height=720');
            if(!win) return alert('El navegador bloqueó la ventana de impresión.');
            win.document.open();
            win.document.write(html);
            win.document.close();
        }

        function calcularCostoVenta(venta) {
            const articulos = Array.isArray(venta.articulos) ? venta.articulos : [];
            const regalos = Array.isArray(venta.regalos) ? venta.regalos : [];
            const totalArticulos = articulos.reduce((s, it) => {
                const producto = baseDeDatos.find(p => p.id === it.id);
                const costoUnitario = Number(it.costoUnitario ?? producto?.costo ?? 0);
                return s + (costoUnitario * Number(it.cantidad || 0));
            }, 0);
            const totalRegalos = regalos.reduce((s, it) => s + (Number(it.costoUnitario || 0) * Number(it.cantidad || 0)), 0);
            return totalArticulos + totalRegalos;
        }

        function renderVentas() {
            const cont = document.getElementById('lista-ventas');
            if(!cont) return;
            syncVentasQuickFilters();
            const filtro = (document.getElementById('buscador-ventas')?.value || '').trim().toLowerCase();
            const fechaDesde = document.getElementById('ventas-fecha-desde')?.value || '';
            const fechaHasta = document.getElementById('ventas-fecha-hasta')?.value || '';
            const estadoFiltro = document.getElementById('ventas-filtro-estado')?.value || 'todos';
            const ventasFiltradas = ventasActivas().concat(historialVentas.filter(v => (v.estado || 'facturada') === 'anulada'))
                .filter((venta, index, arr) => arr.findIndex(v => String(v.id) === String(venta.id)) === index)
                .filter((venta) => {
                    const textoBase = `${venta.cliente || ''} ${venta.telefono || ''} ${venta.destino || ''} ${venta.codigo || ''}`.toLowerCase();
                    const cumpleTexto = !filtro || textoBase.includes(filtro);
                    const fechaVenta = normalizarFechaVenta(venta.fecha);
                    const cumpleDesde = !fechaDesde || (fechaVenta instanceof Date && !isNaN(fechaVenta) && fechaVenta >= new Date(`${fechaDesde}T00:00:00`));
                    const cumpleHasta = !fechaHasta || (fechaVenta instanceof Date && !isNaN(fechaVenta) && fechaVenta <= new Date(`${fechaHasta}T23:59:59`));
                    const estado = venta.estado || 'facturada';
                    const cumpleEstado = estadoFiltro === 'todos' || estado === estadoFiltro;
                    return cumpleTexto && cumpleDesde && cumpleHasta && cumpleEstado;
                })
                .sort((a, b) => normalizarFechaVenta(b.fecha) - normalizarFechaVenta(a.fecha));

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
                const regalos = Array.isArray(venta.regalos) ? venta.regalos : [];
                const estado = venta.estado || 'facturada';
                const resumenItems = articulos.length ? articulos.map(it => `${it.cantidad || 0}x ${it.nombre || 'Producto'}${it.variante ? ' - ' + it.variante : ''}`).join('<br>') : 'Sin detalle de artículos';
                const resumenRegalos = regalos.length ? `<div class="venta-items" style="margin-top:8px;"><b>🎁 Regalos:</b><br>${regalos.map(r => `${r.cantidad || 0}x ${r.nombre || 'Regalo'}${r.variante ? ' - ' + r.variante : ''}`).join('<br>')}</div>` : '';
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
                            ${regalos.length ? `<span class="venta-pill">🎁 ${regalos.length} regalo(s)</span>` : ''}
                        </div>
                        <div class="venta-items">${resumenItems}</div>
                        ${resumenRegalos}
                        <div class="venta-actions">${botones}</div>
                    </div>`;
            });
        }


(function(){
    function syncMobileCatalogSearchButtons() {
        const btn = document.getElementById('catalog-search-toggle');
        const originRow = document.querySelector('.catalog-search-toggle-row');
        const mainRow = document.querySelector('.compact-category-main');
        const categorySelect = document.getElementById('category-picker');
        if(!btn || !originRow || !mainRow || !categorySelect) return;

        btn.setAttribute('aria-label', 'Buscar producto');
        btn.title = 'Buscar producto';

        if(window.innerWidth <= 680) {
            if(btn.parentElement !== mainRow) {
                mainRow.insertBefore(btn, categorySelect);
            }
            btn.classList.add('mobile-search-trigger');
        } else {
            if(btn.parentElement !== originRow) {
                originRow.appendChild(btn);
            }
            btn.classList.remove('mobile-search-trigger');
        }
    }

    document.addEventListener('DOMContentLoaded', syncMobileCatalogSearchButtons);
    window.addEventListener('load', syncMobileCatalogSearchButtons);
    window.addEventListener('resize', syncMobileCatalogSearchButtons);
})();


(function(){
    function syncMobileHeaderAndCatalogV63() {
        const header = document.querySelector('body:not(.login-locked) header');
        const btn = document.getElementById('catalog-search-toggle');
        const originRow = document.querySelector('.catalog-search-toggle-row');
        const mainRow = document.querySelector('.compact-category-main');
        const categorySelect = document.getElementById('category-picker');
        const themeBtn = document.getElementById('theme-toggle');

        if(themeBtn) {
            themeBtn.title = 'Cambiar tema';
        }

        if(btn && originRow && mainRow && categorySelect) {
            btn.setAttribute('aria-label', 'Buscar producto');
            btn.title = 'Buscar producto';
            if(window.innerWidth <= 680) {
                if(btn.parentElement !== mainRow) {
                    mainRow.insertBefore(btn, categorySelect);
                }
                btn.classList.add('mobile-search-trigger');
            } else {
                if(btn.parentElement !== originRow) {
                    originRow.appendChild(btn);
                }
                btn.classList.remove('mobile-search-trigger');
            }
        }

        if(header && window.innerWidth <= 860) {
            header.classList.add('mobile-header-premium');
        } else if(header) {
            header.classList.remove('mobile-header-premium');
        }
    }

    document.addEventListener('DOMContentLoaded', syncMobileHeaderAndCatalogV63);
    window.addEventListener('load', syncMobileHeaderAndCatalogV63);
    window.addEventListener('resize', syncMobileHeaderAndCatalogV63);
})();


/* --- v62 FIX: navegación lateral clickeable en PC --- */
(function(){
  function limpiarEstadoModalPegado() {
    const hayModalActivo = !!document.querySelector('.modal-overlay.activo');
    if(!hayModalActivo) {
      document.body.classList.remove('modal-open');
      if(typeof window.activarScrollGlobal === 'function') window.activarScrollGlobal();
      else document.body.style.overflowY = 'auto';
    }
  }

  function botonNavDeVista(vistaId) {
    return document.querySelector(`nav.main-nav button[data-view="${vistaId}"]`);
  }

  function actualizarBotones(vistaId, btn) {
    const navBtn = btn?.matches?.('nav.main-nav button[data-view]') ? btn : botonNavDeVista(vistaId);
    document.querySelectorAll('nav.main-nav button[data-view]').forEach((b) => {
      const activo = b === navBtn || b.dataset.view === vistaId;
      b.disabled = false;
      b.removeAttribute('disabled');
      b.style.pointerEvents = 'auto';
      b.style.cursor = 'pointer';
      b.classList.toggle('activo', activo);
      b.setAttribute('aria-current', activo ? 'page' : 'false');
    });

    document.querySelectorAll('.mobile-tabbar button').forEach((b) => {
      const tab = b.dataset.tabbar || '';
      const activo = tab === vistaId;
      b.classList.toggle('activo', activo);
      b.setAttribute('aria-current', activo ? 'page' : 'false');
    });
  }

  function cambiarVistaSeguro(idVista, btn) {
    const vistaId = String(idVista || 'inicio').trim();
    const vista = document.getElementById('vista-' + vistaId);
    if(!vista) {
      console.warn('Vista no encontrada:', vistaId);
      return false;
    }

    // Si quedó una capa/modal invisible encima, la cerramos antes de cambiar de pantalla.
    document.querySelectorAll('.modal-overlay.activo').forEach((modal) => modal.classList.remove('activo'));
    document.body.classList.remove('modal-open');
    if(typeof window.activarScrollGlobal === 'function') window.activarScrollGlobal();

    document.querySelectorAll('.vista').forEach((v) => v.classList.remove('activa'));
    vista.classList.add('activa');
    actualizarBotones(vistaId, btn);

    try {
      const url = new URL(window.location.href);
      url.searchParams.set('vista', vistaId);
      history.replaceState(null, '', url.pathname + url.search + url.hash);
    } catch(e) {}

    if(vistaId === 'ventas' && typeof window.renderVentas === 'function') window.renderVentas();
    if(vistaId === 'cotizaciones' && typeof window.renderCotizaciones === 'function') window.renderCotizaciones();
    if(vistaId === 'dashboard' && typeof window.actualizarDashboard === 'function') window.actualizarDashboard();
    if(vistaId === 'catalogo') {
      if(typeof window.toggleCatalogSearch === 'function') window.toggleCatalogSearch(false);
      if(typeof window.toggleCategorySearch === 'function') window.toggleCategorySearch(false);
    }

    const main = document.querySelector('main');
    if(main) main.scrollTo({ top: 0, behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });

    return false;
  }

  window.cambiarVista = cambiarVistaSeguro;

  function blindarBotonesNav() {
    limpiarEstadoModalPegado();
    document.querySelectorAll('nav.main-nav button[data-view]').forEach((btn) => {
      btn.type = 'button';
      btn.disabled = false;
      btn.removeAttribute('disabled');
      btn.style.pointerEvents = 'auto';
      btn.style.cursor = 'pointer';
    });
  }

  document.addEventListener('click', function(event) {
    const navBtn = event.target.closest('nav.main-nav button[data-view]');
    const tabBtn = event.target.closest('.mobile-tabbar button[data-tabbar]');
    const btn = navBtn || tabBtn;
    if(!btn) return;

    const vistaId = btn.dataset.view || btn.dataset.tabbar;
    if(!vistaId) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    cambiarVistaSeguro(vistaId, btn);
  }, true);

  document.addEventListener('DOMContentLoaded', blindarBotonesNav);
  window.addEventListener('load', blindarBotonesNav);
  window.addEventListener('pageshow', blindarBotonesNav);
  setTimeout(blindarBotonesNav, 400);
  setTimeout(blindarBotonesNav, 1200);
})();


(function(){
  function initMobileTopMenu(){
    const isMobile = window.innerWidth <= 860;
    const headerQuick = document.querySelector('.header-quick-actions') || document.querySelector('.header-actions') || document.querySelector('header');
    const nav = document.querySelector('nav.main-nav');
    if(!headerQuick || !nav) return;

    const locked = document.body.classList.contains('login-locked');
    let toggle = document.getElementById('mobile-menu-toggle');
    let overlay = document.getElementById('mobile-menu-overlay');
    let drawer = document.getElementById('mobile-menu-drawer');

    if(!toggle) {
      toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.id = 'mobile-menu-toggle';
      toggle.className = 'mobile-menu-toggle';
      toggle.setAttribute('aria-label', 'Abrir menú');
      toggle.setAttribute('title', 'Menú');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '<span class="sr-only">Menú</span>';
      const themeBtn = document.getElementById('theme-toggle');
      if (themeBtn && themeBtn.parentElement === headerQuick) {
        themeBtn.insertAdjacentElement('afterend', toggle);
      } else {
        headerQuick.appendChild(toggle);
      }
    }

    if(!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'mobile-menu-overlay';
      overlay.className = 'mobile-menu-overlay';
      document.body.appendChild(overlay);
    }

    if(!drawer) {
      drawer = document.createElement('aside');
      drawer.id = 'mobile-menu-drawer';
      drawer.className = 'mobile-menu-drawer';
      drawer.setAttribute('aria-hidden', 'true');
      document.body.appendChild(drawer);
    }

    toggle.style.display = isMobile && !locked ? 'inline-flex' : 'none';

    const logo = document.querySelector('.brand-logo');
    const sourceLinks = Array.from(nav.querySelectorAll('a.nav-link'));
    const currentPath = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const linksHtml = sourceLinks.map((link) => {
      const href = link.getAttribute('href') || '#';
      const icon = link.querySelector('.nav-icon') ? link.querySelector('.nav-icon').innerHTML : '';
      const label = link.querySelector('.nav-label') ? link.querySelector('.nav-label').textContent.trim() : (link.dataset.short || link.textContent.trim());
      let meta = link.getAttribute('title') || label;
      if((link.dataset.view || '') === 'carrito') {
        const badge = document.getElementById('cart-badge');
        const count = badge ? (badge.textContent || '0').trim() : '0';
        meta = 'Productos en venta: ' + count;
      }
      const active = href.toLowerCase() === currentPath || (currentPath === 'catalogo.html' && href.toLowerCase() === 'productos.html');
      return '<a class="mobile-menu-link'+(active?' is-active':'')+'" href="'+href+'">'
        + '<span class="mobile-menu-icon" aria-hidden="true">'+icon+'</span>'
        + '<span class="mobile-menu-copy"><strong>'+label+'</strong><small>'+meta+'</small></span>'
        + '</a>'
    }).join('');

    drawer.innerHTML = ''
      + '<div class="mobile-menu-head">'
      +   '<div class="mobile-menu-brand">'
      +     (logo ? '<img src="'+logo.getAttribute('src')+'" alt="SDC">' : '')
      +     '<div><strong>SD COMAYAGUA</strong><span>Menú principal</span></div>'
      +   '</div>'
      +   '<button type="button" class="mobile-menu-close" aria-label="Cerrar menú">×</button>'
      + '</div>'
      + '<nav class="mobile-menu-links" aria-label="Menú móvil">'+linksHtml+'</nav>'
      + '<div class="mobile-menu-footer">'
      +   '<button type="button" class="mobile-menu-action" id="mobile-version-action">Cambiar versión</button>'
      +   '<button type="button" class="mobile-menu-action is-primary" id="mobile-logout-action">Salir</button>'
      + '</div>'; 

    const openMenu = () => {
      if(!isMobile || locked) return;
      document.body.classList.add('mobile-menu-open');
      toggle.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
    };
    const closeMenu = () => {
      document.body.classList.remove('mobile-menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    };

    toggle.onclick = function(){
      if(document.body.classList.contains('mobile-menu-open')) closeMenu(); else openMenu();
    };
    overlay.onclick = closeMenu;
    const closeBtn = drawer.querySelector('.mobile-menu-close');
    if(closeBtn) closeBtn.onclick = closeMenu;
    drawer.querySelectorAll('a.mobile-menu-link').forEach(a => a.addEventListener('click', closeMenu));
    const versionBtn = drawer.querySelector('#mobile-version-action');
    if(versionBtn) versionBtn.onclick = function(){ closeMenu(); if(typeof cambiarVersionSidebar === 'function') cambiarVersionSidebar(); };
    const logoutBtn = drawer.querySelector('#mobile-logout-action');
    if(logoutBtn) logoutBtn.onclick = function(){ closeMenu(); if(typeof cerrarSesionAdmin === 'function') cerrarSesionAdmin(); };

    if(!isMobile || locked) closeMenu();
  }

  document.addEventListener('DOMContentLoaded', initMobileTopMenu);
  window.addEventListener('load', initMobileTopMenu);
  window.addEventListener('resize', initMobileTopMenu);
  setTimeout(initMobileTopMenu, 300);
  setTimeout(initMobileTopMenu, 1200);

  const bodyObserver = new MutationObserver(function(){
    initMobileTopMenu();
  });
  document.addEventListener('DOMContentLoaded', function(){
    if(document.body) {
      bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    }
  });

  document.addEventListener('keydown', function(ev){
    if(ev.key === 'Escape') {
      document.body.classList.remove('mobile-menu-open');
      const toggle = document.getElementById('mobile-menu-toggle');
      const drawer = document.getElementById('mobile-menu-drawer');
      if(toggle) toggle.setAttribute('aria-expanded', 'false');
      if(drawer) drawer.setAttribute('aria-hidden', 'true');
    }
  });
})();





(function(){
  function cleanMobileCatalogLoupeDuplicates(){
    const isMobile = window.innerWidth <= 860;
    const mainRow = document.querySelector('#vista-catalogo .compact-category-main');
    const mainSearchBtn = document.getElementById('catalog-search-toggle');
    const legacySearchBtn = document.getElementById('catalog-search-toggle-mobile');
    const categoryPicker = document.getElementById('category-picker');
    const categorySearchBtn = document.getElementById('category-search-toggle');
    const categorySearchRow = document.getElementById('category-search-row');
    if(!mainRow || !mainSearchBtn || !categoryPicker) return;

    if(isMobile){
      if(legacySearchBtn){
        legacySearchBtn.style.display = 'none';
        legacySearchBtn.setAttribute('hidden', 'hidden');
      }
      if(categorySearchBtn){
        categorySearchBtn.style.display = 'none';
        categorySearchBtn.setAttribute('hidden', 'hidden');
      }
      if(categorySearchRow){
        categorySearchRow.style.display = 'none';
        categorySearchRow.setAttribute('hidden', 'hidden');
        categorySearchRow.classList.add('is-collapsed');
      }
      if(mainSearchBtn.parentElement !== mainRow){
        mainRow.appendChild(mainSearchBtn);
      }
      mainSearchBtn.style.display = 'inline-flex';
      mainSearchBtn.removeAttribute('hidden');
      categoryPicker.style.gridColumn = '1 / 2';
      mainSearchBtn.style.gridColumn = '2 / 3';
    } else {
      if(legacySearchBtn){ legacySearchBtn.style.display = ''; legacySearchBtn.removeAttribute('hidden'); }
      if(categorySearchBtn){ categorySearchBtn.style.display = ''; categorySearchBtn.removeAttribute('hidden'); }
      if(categorySearchRow){ categorySearchRow.style.display = ''; }
    }
  }

  document.addEventListener('DOMContentLoaded', cleanMobileCatalogLoupeDuplicates);
  window.addEventListener('load', cleanMobileCatalogLoupeDuplicates);
  window.addEventListener('resize', cleanMobileCatalogLoupeDuplicates);
})();

// V88: acceso directo de respaldo para depuración/local.
window.sdcUnlockAdminDirect = function(){
  try { sessionStorage.setItem('sdc_admin_ok','1'); localStorage.setItem('sdc_admin_ok','1'); } catch(e) {}
  try {
    window.SDC_ADMIN_OK = true;
    document.documentElement.classList.add('sdc-admin-unlocked','sdc-splash-skip');
    document.body.classList.remove('login-locked');
    document.body.classList.add('sdc-admin-ready','sdc-no-splash');
    document.getElementById('login-screen')?.classList.add('oculto');
    const splash = document.getElementById('splash-screen');
    if(splash){ splash.classList.add('oculto'); splash.setAttribute('hidden','hidden'); splash.style.setProperty('display','none','important'); }
  } catch(e) {}
};
