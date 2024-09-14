class Polygon {
  constructor(x, y, radius, insert, n) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.insert = insert;
    this.n = n;
    this.hue = 0;
    this.angle = 0;
    this.speed = 0;
  }
  draw() {
    ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;

    ctx.beginPath();
    ctx.save();
    ctx.translate(this.x, this.y);

    ctx.rotate(this.angle);

    ctx.moveTo(0, 0 - this.radius);
    for (let i = 0; i < this.n; i++) {
      ctx.rotate(Math.PI / this.n);
      ctx.lineTo(0, 0 - this.radius * this.insert);
      ctx.rotate(Math.PI / this.n);
      ctx.lineTo(0, 0 - this.radius);
    }
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    ctx.closePath();
  }
  update() {
   
    if (Math.random() < 0.5) {
      setInterval(() => {
         this.speed = this.x * 0.0001;
          this.hue += 0.5;
      }, 1000);
     
    }else{
      setInterval(() => {
         this.speed = -this.y * 0.0001;
      }, 5000);
     
    }

    // this.speed = mapRange(Math.cos(0), -1, 1, Math.PI/4, Math.PI/3) * 0.01;
    this.angle += this.speed;
  }
}
