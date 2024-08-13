// arreglo para hexadecimal
const hexColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e"];

// funcion para extraer un valor del arreglo
function getValue(index){
    return hexColor[index];
}

function generateColor(){
    let color = '#';
    let arraySize = hexColor.length - 1;

    // recorrer el arreglo para generar un color
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.round(Math.random() * arraySize);
        color += getValue(randomIndex);
    }

    return color;
}

document.getElementById('color-btn').addEventListener('click', () =>{
    const color = generateColor();
    document.getElementById('color-value').innerText = color;
    document.body.style.background = color;
});