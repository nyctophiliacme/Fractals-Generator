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

var culcita = [
    { p : 0.02, mat : [[0, 0], [0, 0.25]], arr : [0, -0.14] },
    { p : 0.84, mat : [[0.85, 0.02], [-0.02, 0.83]], arr : [0, 1] },
    { p : 0.07, mat : [[0.09, -0.28], [0.3, 0.11]], arr : [0, 0.6] },
    { p : 0.07, mat : [[-0.09, 0.28], [0.3, 0.09]], arr : [0, 0.7] }
];

var bee = [
    { p : 0.5, mat : [[0.6178, 0], [0, -0.6178]], arr : [0, 1] },
    { p : 0.5, mat : [[0, -0.786], [0.786, 0]], arr : [0.786, 0] },
    { p : 0, mat : [[0, 0], [0, 0]], arr : [0, 0] },
    { p : 0, mat : [[0, 0], [0, 0]], arr : [0, 0] }
];

var tree = [
    { p : 0.05, mat : [[0, 0], [0, 0.5]], arr : [0, 0] },
    { p : 0.4, mat : [[0.42, -0.42], [0.42, 0.42]], arr : [0, 0.2] },
    { p : 0.4, mat : [[0.42, 0.42], [-0.42, 0.42]], arr : [0, 0.2] },
    { p : 0.15, mat : [[0.1, 0], [0, 0.1]], arr : [0, 0.2] }
];

var fishbone = [
    { p : 0.02, mat : [[0, 0], [0, 0.25]], arr : [0, -0.4] },
    { p : 0.84, mat : [[0.95, 0.002], [-0.002, 0.93]], arr : [-0.002, 0.5] },
    { p : 0.07, mat : [[0.035, -0.11], [0.27, 0.01]], arr : [-0.05, 0.005] },
    { p : 0.07, mat : [[-0.04, 0.11], [0.27, 0.01]], arr : [0.047, 0.06] }
];

var triangle;

var point = [0, 0];
var tPoint = [200, 0];
var ctx;
var selected = barnsley;
var paramPassed = 1;
var height, width;
const widthGenRatio = 5.333, widthVar1Ratio = 0.784, widthVar2Ratio = 0.571;
var widthGenVal, widthVar1Val, widthVar2Val, widthHalf;

var heightCorr1, heightCorr2, heightCorr3, heightCorr4;
const heightCorrRatio1 = 1.066, heightCorrRatio2 = 1.0256, heightCorrRatio3 = 1.081, heightCorrRatio4 = 1.038;

const heightVar1Ratio = 10, heightVar2Ratio = 7.547, heightVar3Ratio = 8.888;
const heightVar4Ratio = 6.153, heightVar5Ratio = 0.571, heightVar6Ratio = 6.896;

var heightVar1Val, heightVar2Val, heightVar3Val;
var heightVar4Val, heightVar5Val, heightVar6Val;

$(document).ready(function()
{
	var c = document.getElementById("mycanvas");
	ctx = c.getContext("2d");
	ctx.fillStyle = '#39ff12';
	// ctx.fillStyle = '#27ae60';
	// ctx.fillStyle = '#2ecc71';
	myVar = setInterval(display, 0.01);
	
	height = c.height;
	width = c.width;

	widthGenVal = width / widthGenRatio;
	widthVar1Val = width / widthVar1Ratio;
	widthVar2Val = width / widthVar2Ratio;
	widthHalf = width / 2;

	heightVar1Val = height / heightVar1Ratio;
	heightVar2Val = height / heightVar2Ratio;
	heightVar3Val = height / heightVar3Ratio;
	heightVar4Val = height / heightVar4Ratio;
	heightVar5Val = height / heightVar5Ratio;
	heightVar6Val = height / heightVar6Ratio;

	heightCorr1 = height / heightCorrRatio1;
	heightCorr2 = height / heightCorrRatio2;
	heightCorr3 = height / heightCorrRatio3;
	heightCorr4 = height / heightCorrRatio4;

	triangle= [
	{ p : 1, cord : [width/2, 0]},
	{ p : 2, cord : [0, height]},
	{ p : 3, cord : [width, height]}
];
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
			switch(paramPassed)
			{
				case 1: ctx.fillRect(point[0]*widthGenVal + widthHalf, height-(point[1]*heightVar1Val), 1, 1);
						break;
				case 3: ctx.fillRect(point[0]*widthGenVal + widthHalf, heightCorr1-(point[1]*heightVar2Val), 1, 1);
						break;
				case 4: ctx.fillRect(point[0]*widthGenVal + widthHalf, heightCorr2-(point[1]*heightVar3Val), 1, 1);
						break;
				case 5: ctx.fillRect(point[0]*widthGenVal + widthHalf, heightCorr2-(point[1]*heightVar4Val), 1, 1);
						break;
				case 6: ctx.fillRect(point[0]*widthVar1Val, height-(point[1]*height), 1, 1);
						break;
				case 7: ctx.fillRect(point[0]*widthVar2Val + widthHalf, heightCorr3-(point[1]*heightVar5Val), 1, 1);
						break;
				case 8: ctx.fillRect(point[0]*widthGenVal + widthHalf, heightCorr4-(point[1]*heightVar6Val), 1, 1);
						break;
			}
			break;
		}
		else
		{
			r -= it.p;
		}
	}
}