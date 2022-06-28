
function validar(){
	var nome = formUser.nome.value;
	var email = formUser.email.value;
	var telefone = formUser.telefone.value;
	var endereco = formUser.endereco.value;
	var cpf = formUser.cpf.value;
	var cnpj= formUser.cnpj.value;
	var senha = formUser.senha.value;
	
	if(nome == "" || nome.length <=5){
		alert("Informe o nome completo!");
		formUser.nome.focus();
		return false;
	}
	if(email == "" || email.lenght <= 10){
		alert("E-mail não atende os requisitos!");
		formUser.email.focus();
		return false;
	}
	
	if(telefone == "" || telefone.length <=5){
		alert("Informe o telefone com DDD!");
		formUser.telefone.focus();
		return false;
	}
	
	if(endereco == "" || endereco.length <= 6){
		alert("Informe o endereço completo!");
		formUser.endereco.focus();
		return false;
	}
	
	if(senha == "" || senha.length <=5){
		alert("Informe uma senha valida!");
		formUser.senha.focus();
		return false;
	}
	
	if(cpf == "" && cnpj == ""){
		alert("informe o CPF ou CNPJ");
		formUser.cpf.focus();
		return false;
	}
	
	if(cpf != "" && cnpj != ""){
		alert("Escolha o CPF ou CNPJ");
		formUser.cpf.focus();
		return false;
	}
	
	if(cpf == "" && cnpj != ""){
		if(cnpj.length !=18 ){
		alert("CNPJ inválido");
		formUser.cnpj.focus();
		return false;
	 }else if(cpf.length != 14){
		alert("CPF inválido'!");
		formUser.cpf.focus();
		return false;
	 }
	}
	
	
}