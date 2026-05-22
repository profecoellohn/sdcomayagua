// Conexión con Firebase/Firestore. Revisa las reglas de seguridad de Firebase antes de publicar.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
        import { getFirestore, collection, addDoc, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

        const firebaseConfig = {
            apiKey: "AIzaSyDenfEHylza_0JVHDprJL7Z4tjzlbpXb_c",
            authDomain: "sdcomayagua-746c6.firebaseapp.com",
            projectId: "sdcomayagua-746c6",
            storageBucket: "sdcomayagua-746c6.firebasestorage.app",
            messagingSenderId: "375047857881",
            appId: "1:375047857881:web:15fc0ed10bcec0538300c8",
            measurementId: "G-R3TL0ZCNDX"
        };

        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        window.cargarDesdeFirebase = async function() {
            const querySnapshot = await getDocs(collection(db, "productos"));
            let productosDescargados = [];
            querySnapshot.forEach((documento) => {
                let data = documento.data();
                productosDescargados.push({
                    id: documento.id,
                    nombre: data.nombre, categoria: data.categoria || "General",
                    costo: data.costo || 0, precio: data.precio || 0,
                    img: data.img || '',
                    variantes: data.variantes || [{ nombre: 'Estándar', stock: data.stock_inicial || 0, img: '' }],
                    promos: data.promos || []
                });
            });
            return productosDescargados;
        };

        window.guardarNuevoFirebase = async function(nombre, categoria, costo, precio, img, variantes, promos) {
            const docRef = await addDoc(collection(db, "productos"), {
                nombre: nombre, categoria: categoria, costo: costo, precio: precio,
                img: img, variantes: variantes, promos: promos,
                fechaRegistro: new Date()
            });
            return docRef.id;
        };

        window.actualizarFirebase = async function(idProducto, datosNuevos) {
            const referenciaDocumento = doc(db, "productos", idProducto);
            await updateDoc(referenciaDocumento, datosNuevos);
        };

        window.registrarVentaFirebase = async function(datosOrden) {
            const docRef = await addDoc(collection(db, "ventas"), datosOrden);
            return docRef.id;
        };

        window.cargarVentasFirebase = async function() {
            const querySnapshot = await getDocs(collection(db, "ventas"));
            const ventas = [];
            querySnapshot.forEach((documento) => {
                ventas.push({ id: documento.id, ...documento.data() });
            });
            ventas.sort((a, b) => {
                const fechaA = a.fecha?.seconds ? a.fecha.seconds * 1000 : new Date(a.fecha || 0).getTime();
                const fechaB = b.fecha?.seconds ? b.fecha.seconds * 1000 : new Date(b.fecha || 0).getTime();
                return fechaB - fechaA;
            });
            return ventas;
        };
