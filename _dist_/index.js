

// import { registerImage } from "./lazy";


    const min = 1;
    const max = 122;
    
    const randomNumber = () => Math.floor(Math.random()*(max - min + 1)) + min;


    const createImageNode =  () =>{ 
    const container = document.createElement("div");
    container.className = "container";
    
    

    const imagen = document.createElement("img");
    imagen.className ="mx-auto";
    imagen.width ="320";
    imagen.src = `https://randomfox.ca/images/${randomNumber()}.jpg`;
    
    
    container.appendChild(imagen);
    
    return container;
    
}
const button = document.getElementById("boton");
const mountNode = document.getElementById("image");


const addImg = ()=>{
    const nuevaImagen = createImageNode();
    mountNode.append(nuevaImagen);
    registerImage(nuevaImagen);


}




button.addEventListener("click",addImg);