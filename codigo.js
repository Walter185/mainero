const contenedor  = document.querySelector(".flex-container");

function crearMaquina(nombre,modelo,precio){
    img= "<img src='https://www.mainero.com/es/wp-content/uploads/2020/02/MDD200.jpg'>";
    nombre= '<h2>${nombre}</h2>';
    modelo= '<h3>${modelo}</h3>';
    precio= '<p>Precio: <b>$${precio}</b></p>';
    return [img,nombre,modelo,precio];
}
const Maquina=crearMaquina("maquina","modelo","precio")
document.write(Maquina[0],Maquina[1],Maquina[2])