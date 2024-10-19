const canvas = document.getElementById('andorraFlag');
const ctx = canvas.getContext('2d');

// Draw the Blue stripe
ctx.fillStyle = '#005EB8';  // Blue color
ctx.fillRect(0,0,100,200);

// Draw the yellow stripe
ctx.fillStyle = '#FEC300';  // Yellow color
ctx.fillRect(100,0,100,200);

// Draw the red stripe
ctx.fillStyle = '#A50034';   // Red color
ctx.fillRect(200,0,100,200);

// Function to draw the coat of arms

function drawCoatOfArms()
{
    // Coat of arms background
    ctx.fillStyle = 'FFCC00';   // Coat of arms background color
    ctx.fillRect(130,50,40,100);

    // Draw a simple Shiled shape
    ctx.fillStyle = 'A50034';   // Shield Color
    ctx.beginPath();
    ctx.moveTo(130,50);
    ctx.lineTo(150,30);
    ctx.lineTo(170,50);
    ctx.lineTo(170,150);
    ctx.lineTo(130,150);
    ctx.closePAth();
    ctx.fill();

    // Draw some simple symbols inside the shield
    ctx.fillStyle = '#FFFFF';   // Symbol color
    ctx.fillRect(140, 70, 10, 10)   // example symbol
    ctx.fillRect(140,100,10,10);    // Example symbol
}

// Draw the coat of arms
drawCoatOfArms();
