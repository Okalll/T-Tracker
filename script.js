var triangleTracker = function(){
  var first = document.getElementById("one").value;
  var second = document.getElementById("two").value;
  var third = document.getElementById("three").value;

  if (first === second && second === third && first === third){
    alert("Equilateral Triangle");
  } else if(first === second || second === third || first === third){
    alert("Isosceles Triangle");
  } else if((first + second) <= (third) || (first +third) <= (second) (second + third) <= (first)){
    alert("Scalene Triangle");
  } else {
    alert("NOT a triangle");
  }
};
