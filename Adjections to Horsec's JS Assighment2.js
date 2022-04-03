alert(new Date());

function change(){
	var x = document.getElementById('par').style;
	x.color = 'darkorange';
	x.backgroundColor = 'black';
	x.fontFamily = 'Arial';
	x.textAlign = 'center';
	x.fontSize = '3em';
}

function FtoC(){
 var x = (20-32)*5/9
 document.getElementById('res').innerHTML = 'The result is '+x+'celsius';
}

function sum(){
 var a = parseFloat(prompt('enter the first number'))
 var b = parseFloat(prompt('enter the second number'))
 alert(a+b)
}

function fal(){
 var a = parseFloat(prompt('enter the first name'))
 var b = parseFloat(prompt('enter the last name'))
 alert(Nice to meet you '+a+' '+b+')
 
}