function b1() {
  var t1=document.getElementById("triangle1").value;
  var t2=document.getElementById("triangle2").value;
  var t3=document.getElementById("triangle3").value;

  var a = parseInt(t1);
  var b = parseInt(t2);
  var c = parseInt(t3);
if((a+b>c) && (a+c>b) && (b+c>a)){
  alert ("It is a triangle.")
if (a===b && b===c && a===c){
  alert("It is an equilateral triangle");
  }
  else if (a===b || a===c || b===c) {
  alert("It is an isosceles triangle");
  }
  else if (a!==b || a!==c || b!==c){
  alert ("It is a scalene triangle.");
  }

}
  else{
  alert("It is not a triangle at all.");
  }
}
