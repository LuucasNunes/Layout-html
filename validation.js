
function validar(){
	var nome = formUser.nome.value;
	var email = formUser.email.value;
	var telefone = formUser.telefone.value;
	var endereco = formUser.endereco.value;
	var senha = formUser.senha.value;
	
	if(nome =="" || nome.length <=5){
		alert("Informe o nome completo!");
		formUser.nome.focus();
		return false;
	}
}