
var a = prompt("Enter your first side:")
var b = prompt("Enter your second side:")
var c = prompt("Enter your third side:")

if (a==b && b==c && a==c){
alert("It is an equilateral triangle")
}else if (a==b && b!=c || a==c && a!=b){
  alert("It is an isosceles triangle")
}else if (a!=b!=c || a+b>c || c+b>a || c+a>b){
  alert ("It is a scalene triangle.")
}else {
  alert("It is not a triangle at all.")
}
