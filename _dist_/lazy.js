


const isIntersecting = (entry )=>{

    return entry.isIntersecting
}



const accion = () => {

    console.log("holis");
};


const observador = new IntersectionObserver((entries)=>{
entries
.filter(isIntersecting)
.forEach(accion)

});




export const registerImage = (imagen)=>{
observador.observe(imagen);

}