console.log ("Homework#9");

function getRandomColor () {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let color = `rgb(${r},${g},${b})` ;

    return color;
}

function generateBlocks(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const size = 50;
    let x;
    let y;

    for (let i = 0; i<5; i++){  
        y = size * i;
        for (j = 0; j < 5; j++){
            x = j * size; 
            ctx.fillStyle = getRandomColor();
            ctx.fillRect(x, y ,50,50);
            
        }  
    }     
}
setInterval(()=> generateBlocks(), 1000);
