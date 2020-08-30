/*
    1. select the elementon the page - canvas, shake button.
        => canvas allow to draw like in paint. 
    2. setup aor canvas for drawing

    3. write a draw function

    4. write a handler for the case

    5. clear / shake function

    6. listen for arrow keys.
*/


// Select the elements on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch'); // element id= etch-a-sketch
const ctx = canvas.getContext('2d'); // mathod that add a 2D to the canvas ( can be 3D)
const shakebutton = document.querySelector('.shake'); // add shake element from button

const MOVE_AMOUNT = 10; // caps becuse its true constent

// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas.
const { width, height } = canvas;
/*
const width = canvas.width
const heigth = canvas.heigth
can be write as const {width, heigth} = canvas , becouse its the same name as the property

*/

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// create random x and y starting points on the canvas


ctx.lineJoin = 'round'; // for smoth drawing 
ctx.lineCap = 'round'; // for smoth drawing
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0; // rainbow color
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing  
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) { // pass the object as argument
  // increment the hue
  hue += 1;
  console.log(hue);
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  console.log(key);

  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);

  // move our x and y values depending on what the user did
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) { // if keyword includes arrow then
    e.preventDefault(); // the page move along with the key. we want to prevent this with preventDefault method. 
    draw({ key: e.key }); // add object
  }
}
// clear /shke function
function clearCanvas() {
  canvas.classList.add('shake'); // add cladd shack
  ctx.clearRect(0, 0, width, height);  // clear from top 0,0 
  canvas.addEventListener(
    'animationend',
    function() {
      console.log('Done the shake!');
      canvas.classList.remove('shake');
    },
    { once: true } // another argument => event will be only once.! 
  );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);

