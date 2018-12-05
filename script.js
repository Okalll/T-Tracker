var triangleTracker = function(){
  var first = parseInt(document.getElementById("one").value);
  var second = parseInt(document.getElementById("two").value);
  var third = parseInt(document.getElementById("three").value);
if (first+second>third && second+third>first && first+third>second){
  if (first === second && second === third && first === third){
    alert("Equilateral Triangle");
  }else if(first == second || second == third || first == third){
    alert("Isosceles Triangle");
  }else{
    alert("Scalene Triangle");
  }
}else if((first + second) <= (third) || (first +third) <= (second) || (second + third) <= (first)){
  alert("Not a Triangle");
}else if(isNaN(first) || isNaN(second) || isNaN(third)){
  alert("Not a Number");
}
};
