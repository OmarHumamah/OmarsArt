var modal = document.getElementById("myModal"); 
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function popup(x,){
var img =  document.getElementById(x);
img.onclick = function (){
  modal.style.display ="block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
}

popup("l01");
popup("l02");
popup("l03");
popup("l04");
popup("l05");
popup("l06");
popup("l07");

// .........................................................

popup("d01");
popup("d02");
popup("d03");
popup("d04");
popup("d05");
popup("d06");
popup("d07");

// .........................................................

popup("p01");
popup("p02");
popup("p03");
popup("p04");
popup("p05");
popup("p06");
popup("p07");

// .........................................................

popup("a01");
popup("a02");
popup("a03");
popup("a04");
popup("a05");
popup("a06");

// .........................................................

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
modal.style.display = "none";
}