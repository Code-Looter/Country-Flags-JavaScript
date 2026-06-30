document.addEventListener("DOMContentLoaded", function()
{
    var canvas = document.getElementById('angloFlag');
    var ctx = canvas.getContext('2d');

    // Draw the upper red half
    ctx.fillStyle = '#ff0000'; // Red Color
    ctx.fillRect(0,0, canvas.width, canvas.height / 2);

    // Draw the lower black half
    ctx.fillStyle = '#000000';   // Black color
    ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

    // Draw the yellow half gear and machete
    drawGearAndMachete(ctx);
});

function drawGearAndMachete(ctx)
{
    ctx.fillStyle = '#ffcc00';  // Yellow color

    // Draw the half gear (a simplified version)
    ctx.beginPath();
    ctx.arc(300, 200, 60, 0, Math.PI, false);   // Half circle
    ctx.closePath();
    ctx.fill();

    // Draw the machete (simplified)
    ctx.beginPath();
    ctx.moveTo(300, 140);
    ctx.lineTo(350, 260);
    ctx.lineTo(300, 250);
    ctx.lineTo(250, 260);
    ctx.closePath();
    ctx.fill();

    // Draw the star
    drawStar(ctx, 300, 200, 5, 30, 15);
}

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius)
{
    var root = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (var i = 0; i < spikes; i++)
    {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x,y);
        rot += step;

        
    }

    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = '#ffcc00';
    ctx.fill();
}