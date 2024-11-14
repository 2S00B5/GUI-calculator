var a="";
var c="";
function copy(x)
{
	c=c+x
	if (x=='÷') {
		a=a+'/';
	}
	else if (x=='x'){
		a=a+'*'
	}
	else{
		a=a+x;
	}
	document.getElementById("num").value=c;
}

function clr()
{

	a="0"
	
	document.getElementById("num").value=a;
	c="";

}

function result()
{
	document.getElementById("num").value=eval(a);
}