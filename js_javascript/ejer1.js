function clasificarMagnitud() {
    let mag = parseFloat(document.getElementById("magnitud").value);
    let resultado = document.getElementById("resultado-ej1");
    let imagen = document.getElementById("imagen-brillo");

    if (isNaN(mag)) {
        resultado.innerText = "Por favor ingresa un valor numérico.";
        imagen.style.display = "none";
        return;
    }

    let texto = "";
    let imagenURL = "";

    if (mag <= 0) {
        texto = "🌟 Extremadamente brillante";
        imagenURL = "https://www.astrobitacora.com/wp-content/uploads/2015/08/The_bright_star_Alpha_Centauri_and_its_surroundings.jpg";
    } else if (mag <= 2) {
        texto = "✨ Muy brillante";
        imagenURL = "https://thumbs.dreamstime.com/b/captura-de-la-brillante-estrella-en-el-cielo-nocturno-sobre-un-paisaje-sereno-medianoche-una-impresionante-ilumina-iluminando-328065687.jpg?w=400";
    } else if (mag <= 4) {
        texto = "⭐ Brillante";
        imagenURL = "https://thumbs.dreamstime.com/b/una-estrella-brillante-brilla-entre-estrellas-dispersas-en-el-cielo-nocturno-luminosa-irradia-luz-dorada-rodeada-de-innumerables-361251519.jpg";
    } else if (mag <= 6) {
        texto = "🔭 Débil";
        imagenURL = "https://fotos.perfil.com/2020/01/31/trim/900/900/estrella-supernova-31012020-909647.jpg";
    } else {
        texto = "🚫 No visible a simple vista";
        imagenURL = "https://www.shutterstock.com/shutterstock/videos/1014591917/thumb/1.jpg?ip=x480";
    }

    resultado.innerHTML = `Resultado: <br>${texto}`;
    imagen.src = imagenURL;
    imagen.style.display = "block";
}