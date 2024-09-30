const canvas = document.getElementById('albanianFlag');
const ctx = canvas.getContext('2d');

// Draw the red background
ctx.fillStyle = '#E42E20';  // Red Color
ctx.fillRect(0,0,300,200);  // Entire canvas

// Draw the black double-headed eagle (simplified version)
ctx.fillStyle = '#000000'; // Black color
ctx.beginPath();
ctx.moveTo(150, 50);    // starting point
ctx.lineTo(170, 90);    // Right wing
ctx.lineTo(130, 90);    // Left wing
ctx.closePath();
ctx.fill();