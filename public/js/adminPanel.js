var infoLead = document.getElementById('info-lead');
var update = document.getElementById('update');

function getLeads() {

	var dados = new XMLHttpRequest();

	var url = location.origin + "/infoLeads";

	dados.open("GET" , url);

	dados.responseType = '';

	dados.onreadystatechange = function (){
		if (this.readyState == 4 && this.status == 200) {
			var leads = JSON.parse(this.responseText);
			updateLeads(leads);
		}
	}

	dados.send();
}

function updateLeads(leads) {

	update.classList.remove('invisible');

	setTimeout(function(){
		update.classList.add('invisible');
	}, 3000);

	infoLead.textContent = leads[0].leads; //define numero de leads.
}

getLeads();