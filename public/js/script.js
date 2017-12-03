function validarEmail(){  
	if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){  
		// TODO submit data
		return true;
	}  
	
	alert("O email informado é inválido!!!");  
	return false;
}