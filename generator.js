var barnsley = [
    { p : 0.03, mat : [[0, 0], [0, 0.16]], arr : [0, 0] },
    { p : 0.85, mat : [[0.85, 0.04], [-0.04, 0.85]], arr : [0, 1.60] },
    { p : 0.06, mat : [[0.20, -0.26], [0.23, 0.22]], arr : [0, 1.60] },
    { p : 0.06, mat : [[-0.15, 0.28], [0.26, 0.24]], arr : [0, 0.44] }
];

var triangle = [
	{ p : 1, cord : [200, 0]},
	{ p : 2, cord : [0, 400]},
	{ p : 3, cord : [400, 400]}
];

var point = [0, 0];
var tPoint = [200, 0];
var ctx;
$(document).ready(function()
{
	var c = document.getElementById("mycanvas");
	ctx = c.getContext("2d");
	// ctx.fillStyle = '#39ff12';
	ctx.fillStyle = "dark-green";
	// myVar = setInterval(display, 0.00001);

	myVar = setInterval(sierpinskiDispay, 0.001);
});
function makeTriangle()
{
	ctx.beginPath();
    ctx.moveTo(200, 0);
    ctx.lineTo(0, 400);
    ctx.lineTo(400, 400);
    ctx.closePath();
    ctx.stroke();
}
function calc(mat, pt, arr)
{
	var ans = new Array(2);
	ans[0] = mat[0][0]*pt[0] + mat[0][1]*pt[1] + arr[0];
	ans[1] = mat[1][0]*pt[0] + mat[1][1]*pt[1] + arr[1];
	return ans;
}
function sierCalc(a, b)
{
	var ans = new Array();
	ans[0] = (a[0] + b[0])/2;
	ans[1] = (a[1] + b[1])/2;
	return ans;
}
function sierpinskiDispay()
{
	var r = Math.random() * 3;
	for(var it of triangle)
	{
		if(r < it.p)
		{
			tPoint = sierCalc(it.cord, tPoint);
			console.log(tPoint);
			ctx.fillRect(tPoint[0], tPoint[1], 1, 1);
			break;
		}
	}
}
function display()
{
	var r = Math.random();
		// console.log(r);
	for(var it of barnsley)
	{
		if(r < it.p)
		{
			point = calc(it.mat, point, it.arr);
			console.log(point);
			// ctx.fillRect(point[0]*40+135,140-(point[1]*12),1,1);
			ctx.fillRect(point[0]*75 + 200, 401-(point[1]*40), 1, 1);
			break;
		}
		else
		{
			r -= it.p;
		}
	}
}