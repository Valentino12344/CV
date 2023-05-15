
const formelement = document.getElementById("savetansaccion");

formelement.addEventListener("submit", (event) => {
  event.preventDefault();
  let transaccionusuario = document.getElementById("transaccionusuario").Value;
  let transaccionclave = document.getElementById("transaccionclave").Value;
  let transaccionclave = {transaccionusuario : transaccionusuario, transaccionclave : transaccionclave};
  let tansaccionjson = JSON.stringfly(transaccion);
  console.log(transaccionjson);
})