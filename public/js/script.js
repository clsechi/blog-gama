var btnConfirmar = document.getElementById('confirmar');
var msgSucess = document.getElementById('sucess');
var radioAll = document.getElementsByName('tipo');

function validarDados(){

	if(!radioAll[0].checked && !radioAll[1].checked){
		alert('O campo pessoa física/jurídica deve ser preenchido');
		return false;
	} else if((document.getElementById('nome').value.length < 3)) {
		alert("O campo nome deve ser preenchido!");
		return false;
	} else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))){
		alert("Informe um e-mail válido!");
		return false;
	} else {

		btnConfirmar.classList.add('invisible');
		msgSucess.classList.remove('invisible');

		sendData(nome.value, email.value);
	}
}

function sendData(nome, email) {
	
	var clientInfo = {name: nome, email: email, type: getRadio(), pathname: location.pathname};

	var dados = new XMLHttpRequest();

	var url = location.origin + "/saveInfo";

	dados.open("POST" , url);

	dados.setRequestHeader("Content-Type", "application/json");

	dados.responseType = 'blob';

	dados.onreadystatechange = function (){
		if (this.readyState == 4 && this.status == 200) {
			// Create a new Blob object using the 
			//response data of the onload object
			var blob = new Blob([this.response], {type: 'image/pdf'});
			//Create a link element, hide it, direct 
			//it towards the blob, and then 'click' it programatically
			let a = document.createElement("a");
			a.style = "display: none";
			document.body.appendChild(a);
			//Create a DOMString representing the blob 
			//and point the link element towards it
			let url = window.URL.createObjectURL(blob);
			a.href = url;

			if (location.pathname == "/interviews" ) {
				a.download = 'Entrevista Exclusiva com Thaís Nobre.pdf';
			} else {
				a.download = 'Dicas para seu negócio.pdf';	
			}			
			//programatically click the link to trigger the download
			a.click();
			//release the reference to the file by revoking the Object URL
			window.URL.revokeObjectURL(url);
		}
	}

	dados.send(JSON.stringify(clientInfo));
}

//checa se selecionou PJ ou PF
function getRadio() {
	if(radioAll[0].checked){
		return "PF";
	} else {
		return "PJ";
	}
}