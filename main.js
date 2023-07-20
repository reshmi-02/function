	document.write("mark statement"+"<br>"+"<br>");
function sum(tam,eng,mat,sci,soc,name)
{
	document.write("name="+name+"<br>");
	let total=tam+eng+mat+sci+soc;
	let average=(total/5);
	document.write("total="+total+"<br>")
	return "average="+average+"<br>";
	
}

var a=sum(96,45,78,98,86,"Reshmi")
{
	document.write(a+"<br>"+"<br>");
}


var b=sum(78,69,90,56,89,"Preetha")
{
	document.write(b+"<br>"+"<br>");
}