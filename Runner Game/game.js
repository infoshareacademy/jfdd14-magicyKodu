const canvas = document.getElementsByClassName("canvas")[0];
const ctx = canvas.getContext("2d"); 
const scale = 20; 
const rows = canvas.height/scale;
const columns = canvas.width/scale;



function setup() {

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        banana.move(7);
        banana.print();
        banana2.move(5);
        banana2.print();
        floor.print();
    }, 200);
    
}

// Inicjalizacja gry
setup();