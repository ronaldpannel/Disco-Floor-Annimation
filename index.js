/**@type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const insetSlider = document.getElementById("insertSlider");
const sidesSlider = document.getElementById("sidesSlider");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;

let polyArray = [];
let cellSize = 100;
let rows = Math.floor(canvas.height / cellSize);
let cols = Math.floor(canvas.width / cellSize);
let margin = 0;
const radius = cellSize / 2;
let insert = insetSlider.value;
let n = sidesSlider.value;


  function grid() {
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        ctx.strokeStyle = "white";
        ctx.rect(
          x * cellSize + (canvas.width % cols),
          y * cellSize + (canvas.height % rows),
          cellSize,
          cellSize
        );
        ctx.stroke();

        polyArray.push(
          new Polygon(
            x * cellSize + cellSize / 2 + (canvas.width % cols),
            y * cellSize + cellSize / 2 + (canvas.height % rows),
            radius,
            insert,
            n
          )
        );
      }
    }
  }

grid()
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  polyArray.forEach((poly) => {
    poly.update();
    poly.draw();
  });
  requestAnimationFrame(animate);
}
animate();



insetSlider.addEventListener("change", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  insert = insetSlider.value;
   grid()

});
sidesSlider.addEventListener("change", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  n = sidesSlider.value;
   grid()

});

// window.addEventListener("resize", (e) => {
//   canvas.width = e.currentTarget.innerWidth;
//   canvas.height = e.currentTarget.innerHeight;
//   grid();
// });
