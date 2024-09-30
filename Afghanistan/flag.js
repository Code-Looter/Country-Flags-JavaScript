const canvas = document.getElementById('afghanistanFlag');
const ctx = canvas.getContext('2d');

// Draw the black stripe
ctx.fillStyle = '#00000';   // black color
ctx.fillRect(0,0,100,200);  // Left third

// raw the red stripe
ctx.fillStyle = '#D32011';  // Red Color
ctx.fillRect(100,0,100,200);    // Middle third

// Draw the green stripe
ctx.fillStyle = '#007A36';  // green color
ctx.fillRect(200, 0, 100,200);  // Right Third

// Draw the national emblem (simplified version)
ctx.fillStyle = '#FFFFFF';   // White Color
ctx.beginPath();
ctx.arc(150,100,30,0,2 * Math.PI);  // Center circle
ctx.fill();
ctx.strokeStyle = '#000000'; // Black outline
ctx.stroke();