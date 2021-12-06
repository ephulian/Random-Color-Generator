const btn = document.getElementById('btn');
const body = document.getElementById('body');

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const randColorPicker = () => {
    const x = getRandomInt(0, 256);
    const y = getRandomInt(0, 256);
    const z = getRandomInt(0, 100);

    return `hsl(${x}, ${y}%, ${z}%)`;

}

btn.onclick = function(){
    body.style.backgroundColor = randColorPicker()
    console.log(randColorPicker());
}
