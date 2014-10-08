/**
 * Created by nynylee on 2014-10-08.
 */

var hero = {};
var flag_down, flag_up;
hero.x = 0;
hero.y = window.innerHeight -150;
hero.image = new Image();
hero.image.src = 'http://images.recover39.com/zolaman_114x161.png';
//hero.image.onload = function () {
//    context.drawImage(hero.image, hero.x, hero.y);
//};
var i = 0, count = 0, countmax = 100, start, end, time, interval = 100, sign = 1 ;
// do accelerate in case of successive key events within 100ms interval

start = new Date().getTime();

function onKeyDown(event) {
    flag_down = true;
    flag_up = false;

    end = new Date().getTime();
    time = end - start ;
    //below is the setting with *3 acceleration
    if(time < interval) {
        count += 1;
        if(count > countmax) count = countmax ;
    }
    else  count =0;

    switch (event.keyCode) {
        case 37: // left key pressed
            sign = -1 ;
        //    console.log('left key');
        //    hero.x += sign*(10 + 3*count);
        //    if (hero.x < 0) hero.x = 0;
            break;
        case 39: // right key pressed
            sign = +1 ;
//            console.log('right key');
        //    hero.x += sign* (10 + 3*count);
        //    if(hero.x>800) hero.x=800;
            break;
    }
    start = new Date().getTime();
}
function onKeyUp(event) {
    flag_down = false;
    flag_up = true;
}