var contador = 0;

function incrementar() {
   contador++;
   document.getElementById("contador").innerHTML = contador;
   if (contador > 0) {
       document.body.style.backgroundColor = "green";
   } else {
       document.body.style.backgroundColor = "red";
   }
}

function decrementar() {
   contador--;
   document.getElementById("contador").innerHTML = contador;
   if (contador > 0) {
       document.body.style.backgroundColor = "green";
   } else {
       document.body.style.backgroundColor = "red";
   }
}
