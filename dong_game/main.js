var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var collision = false;

function loop() {
    //  image_zola.onload = function () {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);  // screen reset
    context.drawImage(hero.image, hero.x, hero.y);

    for (i = 0; i < 10; i++) {
        if (dong.yd[i] > 550 && Math.abs(dong.xd[i] -hero.x) < 50 ) collision =true;
        dong.yd[i] += 5;
        if(dong.yd[i]>600) {
            dong.yd[i]=0;
            dong.xd[i] = Math.floor(50 + Math.random() * 700);
        }
        else {
            context.drawImage(dong.image, dong.xd[i], dong.yd[i]);
        }
    }
    if(!collision) requestAnimationFrame(loop);
    //  }
}
loop();