var barnsley = [
    { p : 0.01, mat : [[0, 0], [0, 0.16]], arr : [0, 0] },
    { p : 0.85, mat : [[0.85, 0.04], [-0.04, 0.85]], arr : [0, 1.60] },
    { p : 0.07, mat : [[0.20, -0.26], [0.23, 0.22]], arr : [0, 1.60] },
    { p : 0.07, mat : [[-0.15, 0.28], [0.26, 0.24]], arr : [0, 0.44] }
];

var cyclosorus = [
    { p : 0.02, mat : [[0, 0], [0, 0.25]], arr : [0, -0.4] },
    { p : 0.84, mat : [[0.95, 0.005], [-0.005, 0.93]], arr : [-0.002, 0.5] },
    { p : 0.07, mat : [[0.035, -0.2], [0.16, 0.04]], arr : [-0.09, 0.02] },
    { p : 0.07, mat : [[-0.04, 0.2], [0.16, 0.04]], arr : [0.083, 0.12] }
];

var modified = [
    { p : 0.01, mat : [[0, 0], [0, 0.2]], arr : [0, -0.12] },
    { p : 0.85, mat : [[0.845, 0.035], [-0.035, 0.82]], arr : [0, 1.6] },
    { p : 0.07, mat : [[0.2, -0.31], [0.255, 0.245]], arr : [0, 0.29] },
    { p : 0.07, mat : [[-0.15, 0.24], [0.25, 0.20]], arr : [0, 0.68] }
];


var culcita = [[0, 0, 0, 0.25, 0, -0.14, 0.02],
		[0.85, 0.02, -0.02, 0.83, 0, 1, 0.84],
		[0.09, -0.28, 0.3, 0.11, 0, 0.6, 0.07],
		[-0.09, 0.28, 0.3, 0.09, 0, 0.7, 0.07]];

var fishbone = [[ 0,  0,  0, 0.25, 0, -0.4, 0.02],
		[0.95, 0.002, -0.002, 0.93, -0.002, 0.5, 0.84],
		[0.035, -0.11, 0.27, 0.01, -0.05, 0.005, 0.07],
		[-0.04, 0.11, 0.27, 0.01, 0.047, 0.06, 0.07]];

var tree = [[0, 0, 0, 0.5, 0, 0, 0.05],
	[0.42, -0.42, 0.42, 0.42, 0, 0.2, 0.4],
	[0.42, 0.42, -0.42, 0.42, 0, 0.2, 0.4],
	[0.1, 0, 0, 0.1, 0, 0.2, 0.15]];

var bee = [[0.6178, 0, 0, -.6178, 0, 1, 0.5],
	[0, -0.786, 0.786, 0, 0.786, 0, 0.5],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0]];

var triangle = [
	{ p : 1, cord : [200, 0]},
	{ p : 2, cord : [0, 400]},
	{ p : 3, cord : [400, 400]}
];

var point = [0, 0];
var tPoint = [200, 0];
var ctx;
var selected = barnsley;
var paramPassed = 1;
$(document).ready(function()
{
	var c = document.getElementById("mycanvas");
	ctx = c.getContext("2d");
	ctx.fillStyle = '#39ff12';
	myVar = setInterval(display, 0.00001);

	// myVar = setInterval(sierpinskiDispay, 0.001);
});
function trigger(param)
{
	// alert("Triggered"+param);
	paramPassed = parseInt(param);
	// console.log(paramPassed);
	switch(paramPassed)
	{
		case 1: selected = barnsley;
				break;
		case 2: break;
		case 3: selected = cyclosorus;
				break;
		case 4: selected = modified;
				break;
		case 5: selected = culcita;
				break;
		case 6: selected = bee;
				break;
		case 7: selected = tree;
				break;
		case 8: selected = fishbone;
				break;
	}
	// console.log(selected);
	ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
}
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
			// console.log(tPoint);
			ctx.fillRect(tPoint[0], tPoint[1], 1, 1);
			break;
		}
	}
}
function display()
{
	if(paramPassed == 2)
	{
		sierpinskiDispay();
		return;
	}
	var r = Math.random();
		// console.log(r);
	for(var it of selected)
	{
		if(r < it.p)
		{
			point = calc(it.mat, point, it.arr);
			// console.log(point);
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