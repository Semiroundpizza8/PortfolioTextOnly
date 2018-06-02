// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


// Variables
const mouse = {
	x: innerWidth / 2,
	y: innerHeight / 2 
};

const colors = [
	'#6A7059',
	'#FDEEA7',
	'#9BCC93',
	'#1A9481',
	'#003D5C'
];


// Event Listeners
addEventListener('mousemove', event => {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

addEventListener('resize', () => {
	canvas.width = innerWidth;	
	canvas.height = innerHeight;

	init();
});

addEventListener('click', () => {

})


// Utility Functions
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1;
    const yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

var gravity = 1;
var friction = 0.9;
// Objects
function Ball(x, y, dx, dy, radius, color) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = color;


	this.update = () => {
		if(this.y + this.radius + this.dy >= canvas.height ||
				this.y + this.radius + this.dy <= 0) {
			this.dy = -this.dy
		} else {
			// this.dy += gravity;
		}

		balls.forEach(ball => {
			if(this.color != ball.color && distance(this.x, this.y, ball.x, ball.y) < 100) {
				c.beginPath();
				c.moveTo(this.x, this.y);
				c.lineTo(ball.x, ball.y);
				c.strokeStyle = this.color;
				c.stroke();
			}
		})

		if(this.x + this.radius + this.dx > canvas.width ||
				this.x - this.radius <= 0) {
			this.dx = -this.dx;
		}
		this.x += this.dx;
		this.y += this.dy;
		this.draw();
	};

	this.draw = () => {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);	
		c.strokeStyle = this.color;
		// c.stroke();
		c.closePath();
	};
}


// Implementation
let balls = [];
let radius = 10

function init() {
	balls = [];
	for (let i = 0; i < 150; i++) {
		var radius = randomIntFromRange(4, 10);
		var x = randomIntFromRange(radius, canvas.width-radius);
		var y = randomIntFromRange(radius, canvas.height-radius);
		var dx = randomIntFromRange(-.5, .5);
		var dy = randomIntFromRange(-.5, .5);
		var color = randomColor(colors);
		balls.push(new Ball(x, y, dx, dy, radius, color));
	}
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	balls.forEach(ball => {
		ball.update();
	});
}

init();
animate();