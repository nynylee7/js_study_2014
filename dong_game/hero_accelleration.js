/**
 * Created by nynylee on 2014-10-06.
 */

var hero = {};
hero.x = 0;
hero.y = 550;
hero.image = new Image();
hero.image.src = 'http://images.recover39.com/zolaman_114x161.png';
hero.image.onload = function () {
    context.drawImage(hero.image, hero.x, hero.y);
};


function onKeyDown(event) {

    switch (event.keyCode) {
        case 37: // left key pressed
            // console.log(event.keyCode);
            hero.x -= 10;
            if(hero.x<0) hero.x = 0;
            break;
        case 39: // right key pressed
            hero.x +=10;
            if(hero.x>800) hero.x=800;
            break;
    }
}