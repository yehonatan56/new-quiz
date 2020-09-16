function answer(button , val , next) {
var nextId;

if (val == 'yes'){
    console.log('work');
  button.setAttribute("class", "shadow yes");

  var counter = 0;
        //setinterval
   var interval = setInterval(function(){
        //next clinte
    nextId =  document.getElementById("quiz-"+next);
    console.log(nextId);

    nextId.scrollIntoView({behavior: "smooth" , block: "end"});
    counter++;
    if (counter >= 1) {
      clearInterval(interval);
    }
    } , 1000);
    } else{
    button.setAttribute("class", "shadow no");
    var countertow = 0;
    var intervaltow = setInterval(function(){
    button.setAttribute("class", "shadow");
    countertow++;
    if (countertow >= 1) {
            clearInterval(intervaltow);
    }
  } , 1000);
}
}