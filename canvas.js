var canvas = document.querySelector ('canvas');
//canvas = console.log(window.innerWidth);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext ('2d');
//c.fillRect (100, 100, 100, 100);

/*
//Line
c.beginPath ();
c.moveTo (0, 0);
c.lineTo (250, 250);
c.lineTo (500, 250);
//c.strokeStyle = "red";
c.stroke ();

//Arc / circle
//c.beginPath ();
//c.moveTo (500, 250);
//c.arc (250, 250, 100, 0, Math.PI * 2, true);
//c.stroke ();
for (var i = 0; i < 100; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var r = Math.random() * 100;
    var re = Math.random() * 255;
    var gr = Math.random() * 255;
    var bl = Math.random() * 255;
    c.beginPath();
    c.arc (x, y, r, 0, Math.PI * 2, true);
    c.strokeStyle = 'rgba (re, gr, bl, 1)';
    c.stroke();
}
*/
//console.log(canvas);
/*var x = 200;
var dx = 3;
//for (var i = 0; i < 1; i++) {


function animator() {
    requestAnimationFrame (animator);
    //c.clearRect (0, 0, innerWidth, innerheight);
    c.beginPath();
    c.arc (x, 200, 20, 0, Math.PI * 2, true);
    c.strokeStyle = 'red';
    c.stroke();
    x =+ dx * i;
    //animator();
}
animator();
//}
*/
// c.beginPath ();
// c.arc (300, 300, 35, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke ();
//*************************************************************************
// const animator = function (delx, dely) {
//     if (delx > 500 || dely > 500) {
//         return;
//     }
    // clearRect (0, 0, innerWidth, innerHeight);
    // const animate = function () {
    //     requestAnimationFrame (animate);
    //     // clearRect (0, 0, innerWidth, innerHeight);
    //     c.beginPath ();
    //     c.arc (delx, dely, 35, 0, Math.PI * 2, false);
    //     c.strokeStyle = 'blue';
    //     c.stroke ();
    // }
    // // animate ();
    //  animate ();
    // delx ++;
    // dely ++;
    // clearRect (0, 0, innerWidth, innerHeight);
//     return animator (delx + 1, dely + 1);
// }
//  animator (100, 100);
//**********************************************************************************
var x = 500;
var y = 100;
var difx = 3;
var dify = 3;
const animate = function () {
    requestAnimationFrame (animate);
    c.clearRect (0, 0, innerWidth, innerHeight);
    c.beginPath ();
    c.arc (x, y, 35, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke ();
    if (x - 35 >= innerWidth || (x - 35) <= 0) {
        difx = - difx;
    }
    if (y - 35 >= innerHeight || (y - 35) <= 0) {
        difx = - difx;
    }
    x = x + difx;
    y = x + dify;

}
animate ();
