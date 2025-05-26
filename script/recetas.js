console.log("holasssss");
const urlapi= "https://www.themealdb.com/api/json/v1/1/random.php";
const busquedas=  document.getElementById('busqueda');

async function data(urlapi){
    const response= await fetch (urlapi);
    const data = await response.json();
    return data;
}
console.log(data(urlapi))
async function Comidas(){
    console.log(data(urlapi))
    console.log(data(urlapi).meals)
    
    for (let i = 0; i < 20; i++) {
        let comidas = data.comidas[i];
        let imagen = comidas.nombre;
        let Categoria = comidas.imagen;
        let TipoComida = comidas.imagen;
        console.log(data(comidas))
    }
}
