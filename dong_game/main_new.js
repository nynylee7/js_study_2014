/**
 * Created by nynylee on 2014-10-08.
 */

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var collision = false;
var score = new Scoreboard();

function loop() {
    //  image_zola.onload = function () {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);  // screen reset


    for (i = 0; i < 10; i++) {
        if (dong.yd[i] > hero.y - 50  && Math.abs(dong.xd[i] -hero.x) < 50 ) collision =true;
        dong.yd[i] += 5;
        if (dong.yd[i] > window.innerHeight) {
            dong.yd[i] = 0;
            dong.xd[i] = Math.floor(50 + Math.random() * window.innerWidth);
            score.countUp(1);
            score.render();
        }
        context.drawImage(dong.image, dong.xd[i], dong.yd[i]);

        if(flag_down==true && sign == -1 ) {
  //          console.log('hero left');
            hero.x += sign * (1 + 0.3 * count);
            if (hero.x < 0) hero.x = 0;
        }
        if(flag_down==true && sign == +1 ) {
   //         console.log('hero right')
            hero.x += sign * (1 + 0.3 * count);
            if (hero.x > window.innerWidth) hero.x = window.innerWidth;
        }
        context.drawImage(hero.image, hero.x, hero.y);

    }
    if (!collision) requestAnimationFrame(loop);
}
loop();