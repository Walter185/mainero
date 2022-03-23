const contenedor = document.querySelector(".flex-container");

function crearMaquina(nombre, modelo, precio) {
    img = "<img src='https://www.mainero.com/es/wp-content/uploads/2020/02/MDD200.jpg'>";
    nombre = '<h2>${nombre}</h2>';
    modelo = '<h3>${modelo}</h3>';
    precio = '<p>Precio: <b>$${precio}</b></p>';
    return [img, nombre, modelo, precio];
}

let documentFragment = document.createDocumentFragment();
for (var i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random() * 10000);
    let precioRandom = Math.round(Math.random() * 10 + 30);
    let Maquina = crearMaquina('Maquina ${i}', 'modelo ${modeloRandom}', precioRandom);
    let div = document.createElement("DIV");
    div.classList.add('item-${i}', 'flex-item');
    div.innerHTML = Maquina[0] + Maquina[1] + Maquina[2] + Maquina[3];
    documentFragment.appendChild(div);

}

contenedor.appendChild(documentFragment);