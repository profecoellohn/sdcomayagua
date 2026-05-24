/* =========================================================
   Router de páginas reales - SD COMAYAGUA
   Navega entre archivos .html sin repetir login ni splash.
   Ahora usa transición suave para evitar cambios bruscos.
   Funciona también probando desde file:/// en PC.
   ========================================================= */
(function(){
  const rutas = {
    inicio: 'index.html',
    catalogo: 'productos.html',
    carrito: 'venta.html',
    cotizaciones: 'cotizaciones.html',
    ventas: 'ventas.html',
    dashboard: 'finanzas.html'
  };

  const vistaActual = String(window.SDC_PAGE_VIEW || document.body?.className?.match(/page-([\w-]+)/)?.[1] || 'inicio').trim();
  let navegando = false;

  function nombreArchivoActual(){
    const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    return file === '' ? 'index.html' : file;
  }

  function adminActivo(){
    try { if(window.SDC_ADMIN_OK === true) return true; } catch(e) {}
    try { if(sessionStorage.getItem('sdc_admin_ok') === '1') return true; } catch(e) {}
    try { if(localStorage.getItem('sdc_admin_ok') === '1') return true; } catch(e) {}
    try {
      const params = new URLSearchParams(location.search || '');
      if(params.get('sdc_admin') === '1' || params.get('admin') === '1' || params.get('auth') === '1') return true;
    } catch(e) {}
    return false;
  }

  function guardarEstadoNavegacion(vistaId){
    try { sessionStorage.setItem('sdc_splash_seen', '1'); } catch(e) {}
    try { localStorage.setItem('sdc_splash_seen', '1'); } catch(e) {}
    try { sessionStorage.setItem('sdc_soft_nav', '1'); } catch(e) {}
    try { localStorage.setItem('sdc_last_page_view', vistaId || vistaActual); } catch(e) {}
    if(adminActivo()) {
      try { sessionStorage.setItem('sdc_admin_ok', '1'); } catch(e) {}
      try { localStorage.setItem('sdc_admin_ok', '1'); } catch(e) {}
    }
  }

  function limpiarEntradaSuave(){
    try { sessionStorage.removeItem('sdc_soft_nav'); } catch(e) {}
    setTimeout(function(){
      try { document.documentElement.classList.remove('sdc-soft-enter'); } catch(e) {}
    }, 420);
  }

  function destinoConSesion(destino){
    if(!adminActivo()) return destino;
    const [base, hash = ''] = destino.split('#');
    const separador = base.includes('?') ? '&' : '?';
    const url = base.includes('sdc_admin=1') ? base : `${base}${separador}sdc_admin=1`;
    return hash ? `${url}#${hash}` : url;
  }

  function asegurarCapaTransicion(){
    let capa = document.getElementById('sdc-page-transition');
    if(!capa) {
      capa = document.createElement('div');
      capa.id = 'sdc-page-transition';
      capa.setAttribute('aria-hidden', 'true');
      document.body.appendChild(capa);
    }
    return capa;
  }

  function activarSalidaSuave(callback){
    const reduceMotion = false;
    try {
      if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        callback();
        return;
      }
    } catch(e) {}

    asegurarCapaTransicion();
    document.body.classList.add('sdc-page-leaving');
    window.setTimeout(callback, 150);
  }

  function activarVistaLocal(vistaId){
    document.querySelectorAll('.vista').forEach(v => v.classList.remove('activa'));
    const vista = document.getElementById('vista-' + vistaId);
    if(vista) vista.classList.add('activa');

    document.querySelectorAll('nav.main-nav a.nav-link').forEach(a => {
      const activo = a.dataset.view === vistaId;
      a.classList.toggle('activo', activo);
      a.setAttribute('aria-current', activo ? 'page' : 'false');
    });

    document.querySelectorAll('.mobile-tabbar a').forEach(a => {
      const tab = a.dataset.tabbar || '';
      const activo = tab === vistaId;
      a.classList.toggle('activo', activo);
      a.setAttribute('aria-current', activo ? 'page' : 'false');
    });

    if(vistaId === 'ventas' && typeof window.renderVentas === 'function') window.renderVentas();
    if(vistaId === 'cotizaciones' && typeof window.renderCotizaciones === 'function') window.renderCotizaciones();
    if(vistaId === 'dashboard' && typeof window.actualizarDashboard === 'function') window.actualizarDashboard();
    if(vistaId === 'catalogo') {
      if(typeof window.toggleCatalogSearch === 'function') window.toggleCatalogSearch(false);
      if(typeof window.toggleCategorySearch === 'function') window.toggleCategorySearch(false);
    }
  }

  function navegarVista(vistaId){
    if(navegando) return false;
    const destino = rutas[vistaId] || 'index.html';
    guardarEstadoNavegacion(vistaId);

    if(nombreArchivoActual() !== destino.toLowerCase()) {
      navegando = true;
      activarSalidaSuave(function(){
        location.href = destinoConSesion(destino);
      });
      return false;
    }

    activarVistaLocal(vistaId);
    return false;
  }

  window.cambiarVista = function(idVista){
    const vistaId = String(idVista || vistaActual || 'inicio').trim();
    return navegarVista(vistaId);
  };

  window.SDC_RUTAS = rutas;
  window.SDC_ACTIVAR_VISTA_LOCAL = activarVistaLocal;
  window.SDC_NAVEGAR_VISTA = navegarVista;

  document.addEventListener('DOMContentLoaded', function(){
    limpiarEntradaSuave();
    activarVistaLocal(vistaActual);

    document.querySelectorAll('nav.main-nav a.nav-link, .mobile-tabbar a').forEach(a => {
      a.addEventListener('click', function(event){
        if(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button === 1) return;
        const vistaId = a.dataset.view || a.dataset.tabbar;
        if(vistaId) {
          event.preventDefault();
          navegarVista(vistaId);
        }
      });
    });
  });
})();
