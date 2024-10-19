 const canvas = document.getElementById('algerianFlag');
const ctx = canvas.getContext('2d');

// Draw the green stripe
ctx.fillStyle = '#00843D';  // Green color
ctx.fillRect(0,0,150,200);

// Draw the white stripe
ctx.fillStyle = '#FFFFFF';  // White Color
ctx.fillRect(150,0,150,200);

// Draw the red crescent
ctx.fillStyle = '#D52B1E';  // Red color
ctx.beginPath();
ctx.arc(100,100,40,0.5 * Math.PI, 1.5 * Math.PI);  // Create a crescent shape
ctx.lineTo(100,100); // Draw line back to center
ctx.arc(100,100,30,1.5 * Math.PI, 0.5 * Math.PI);
ctx.closePath();
ctx.fill();

// Draw the red star
ctx.fillStyle = '#D52B1E'; // Red color
ctx.beginPath();
ctx.moveTo(100,75); // starting point of the star

for(let i = 0; i<5; i++)
{
    ctx.lineTo(100 + 10 * Math.cos((i * 2 * Math.PI) / 5 - Math.PI / 2),
75 + 10 * Math.sin((i * 2 * Math.PI) / 5 - Math.PI / 2));
}

ctx.closePath();
ctx.fill