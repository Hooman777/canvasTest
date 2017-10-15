var canvas = document.querySelector ('canvas');
//canvas =console.log(window.innerWidth);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext ('2d');
c.fillRect (100, 100, 100, 100);

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
console.log(canvas);
