setInterval(myFun , 1000);
 function myFun (){
    let date = new date();
    let time = date.toLocaleTimeString();
      document.getElementById("time").innerHTML = time; 
 }