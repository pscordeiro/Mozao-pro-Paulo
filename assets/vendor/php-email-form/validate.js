function validateForm() {
  var x = document.forms["Participe"]["name"].value;
  if (x == "") {
    alert("Preencha o nome.");
    return false;
  }

  var x = document.forms["Participe"]["email"].value;
  if (x == "") {
    alert("Coloque seu email.");
    return false;
  }

  var x = document.forms["Participe"]["subject"].value;
  if (x == "") {
    alert("Preencha o assunto.");
    return false;
  }

  var x = document.forms["Participe"]["message"].value;
  if (x == "") {
    alert("Escreve alguma mensagem ai po.");
    return false;
  }


}
