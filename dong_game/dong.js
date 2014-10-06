/**
 * Created by nynylee on 2014-10-06.
 */

var dong = {};
dong.image = new Image();
dong.image.src = 'http://images.recover39.com/poo_75x72.png';

dong.xd = [], dong.yd = [];
for( i = 0; i <10 ; i++) {
    dong.xd[i] = Math.floor( Math.random() * 700);
    dong.yd[i] = Math.floor(-500 + Math.random() * 600);
}


