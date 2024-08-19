const canvas = document.getElementById('fireworkCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function Firework() {
    this.x = canvas.width / 2;
    this.y = canvas.height ;
    this.targetX = random(100, canvas.width - 100);
    this.targetY = random(50, canvas.height );
    this.size = 2;
    this.speed = 2;
    this.angle = Math.atan2(this.targetY - this.y, this.targetX - this.x);
    this.lines = [];
    this.exploded = true;

    for (let i = 0; i < 20; i++) {
        this.lines.push({
            x: this.targetX,
            y: this.targetY,
            angle: random(0, Math.PI * 2),
            speed: random(1, 2),
            length: random(15, 30),
            alpha: 1.2
        });
    }
}

Firework.prototype.update = function() {
    if (!this.exploded) {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (Math.abs(this.x - this.targetX) < this.speed && Math.abs(this.y - this.targetY) < this.speed) {
            this.exploded = true;
        }
    } else {
        for (let i = 0; i < this.lines.length; i++) {
            const line = this.lines[i];
            line.x += Math.cos(line.angle) * line.speed;
            line.y += Math.sin(line.angle) * line.speed;
            line.alpha -= .01; // Reduce la opacidad gradualmente

            // Evita que la opacidad baje de 0
            if (line.alpha < 0) {
                line.alpha = 0;
            }
        }
    }
};

Firework.prototype.draw = function() {
    if (!this.exploded) {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
    
    for (let i = 0; i < this.lines.length; i++) {
        const line = this.lines[i];
        ctx.strokeStyle = `rgba(${random(0,256)}, ${random(0,256)}, ${random(0,256)}, ${line.alpha})`;
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + Math.cos(line.angle) * line.length, 
                   line.y + Math.sin(line.angle) * line.length);
        ctx.stroke();
    }
};

const fireworks = [];
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.05) {
        fireworks.push(new Firework());
    }

    for (let i = 0; i < fireworks.length; i++) {
        const firework = fireworks[i];
        firework.update();
        firework.draw();

        if (firework.lines.every(line => line.alpha <= 0)) {
            fireworks.splice(i, 1);
            i--;
        }
    }

    requestAnimationFrame(animate);
}

animate();

