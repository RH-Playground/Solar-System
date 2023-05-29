const sunElm = document.createElement("div");
sunElm.classList.add("sun");
document.body.append(sunElm);

let originX = sunElm.offsetLeft + sunElm.offsetWidth / 2;
let originY = sunElm.offsetTop + sunElm.offsetWidth / 2;

class Planet {
  theta = 0;
  radius;
  speed;
  dia;
  url;
  elm;
  orbit;
  orbitWidth;
  x;
  y;
  constructor(radius, speed, dia, url, orbitWidth) {
    this.orbitWidth = orbitWidth;
    this.dia = dia;
    this.url = url;
    this.radius = radius;
    this.speed = speed;
    this.elm = document.createElement("div");
    this.orbit = document.createElement("div");
    this.orbit.style.left = `${originX - this.orbitWidth / 2}px`;
    this.orbit.style.top = `${originY - this.orbitWidth / 2}px`;
    this.orbit.style.width = `${this.orbitWidth}px`;
    this.orbit.style.height = `${this.orbitWidth}px`;
    this.elm.style.width = `${this.dia}px`;
    this.elm.style.height = `${this.dia}px`;
    this.elm.classList.add("planet");
    this.orbit.classList.add("orbit");
    this.elm.style.backgroundImage = `url('../img/${this.url}')`;
    document.body.append(this.elm, this.orbit);
  }
  isOrbiting() {
    let originX1 = sunElm.offsetLeft + sunElm.offsetWidth / 2;
    let originY1 = sunElm.offsetTop + sunElm.offsetWidth / 2;
    if (this.theta === 360) this.theta = 0;
    this.orbit.style.left = `${originX1 - this.orbitWidth / 2}px`;
    this.orbit.style.top = `${originY1 - this.orbitWidth / 2}px`;
    this.theta += this.speed;
    this.x = originX1 + this.radius * Math.cos(this.theta * (Math.PI / 180));
    this.y = originY1 + this.radius * Math.sin(this.theta * (Math.PI / 180));
    this.elm.style.left = `${this.x - this.dia / 2}px`;
    this.elm.style.top = `${this.y - this.dia / 2}px`;
  }
}
let planet1 = new Planet(100, 2.5, 20, "Mercury.jpg", 200);
let planet2 = new Planet(150, 2.2, 35, "venus.jpg", 300);
let planet3 = new Planet(200, 1.8, 40, "earth.png", 400);
let planet4 = new Planet(250, 1.5, 30, "mars.png", 500);
let planet5 = new Planet(300, 1.1, 60, "jupitor.png", 600);
let planet6 = new Planet(350, 0.8, 70, "saturn.jpg", 700);
let planet7 = new Planet(400, 0.5, 45, "uranus.png", 800);
let planet8 = new Planet(450, 0.3, 45, "neptune.png", 900);



setInterval(() => {
  planet1.isOrbiting();
  planet2.isOrbiting();
  planet3.isOrbiting();
  planet4.isOrbiting();
  planet5.isOrbiting();
  planet6.isOrbiting();
  planet7.isOrbiting();
  planet8.isOrbiting();
}, 50);
