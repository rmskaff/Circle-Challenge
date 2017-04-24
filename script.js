
function calculateArea(){
    var newElement=document.createElement('p');
    newElement.style.textAlign = "center";
    var radius=document.getElementById("radius").value;
    var areaCalc= radius * radius * Math.PI;
    if (radius<0){
      newElement.innerText="Silly goose, there's no such thing as a negative circle!";
      radius=0;
    } else{
      newElement.innerText="The area of the circle with a radius of " + radius + " is " + areaCalc.toFixed(3) + ".";
    }
    document.getElementById('circle').style.width=(radius*2)+"px";
    document.getElementById('circle').style.height=(radius*2)+"px";
      document.body.appendChild(newElement);
}
