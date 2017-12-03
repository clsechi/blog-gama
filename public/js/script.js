function validarDados(){  
	if((document.getElementById("nome").value.length >= 3)) {
		if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){  
			
			sendData(nome.value, email.value);	
			return true;
		}
		else {
			alert("Informe um e-mail válido!!!"); 
			return false;					
		}
	}
	else {
		alert("O campo nome deve ser preenchido!!!"); 
		return false;
	}
	return false;
}

function sendData(nome, email) {
	
	var data = {name: nome, email: email};

	var dados = new XMLHttpRequest();

	var url = location.origin + "/saveInfo";

	dados.open("POST" , url);

	dados.setRequestHeader("Content-Type", "application/json");

	dados.onreadystatechange = function (){
		if (this.readyState == 4 && this.status == 200) {
			alert('done');
		}
	}

	dados.send(JSON.stringify(data));
}