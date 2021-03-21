function test() {
	let code = document.getElementById('im').value;
	if (code == "hello") {
		console.log("gg")
		document.location.href= "code2.html";
	}

	else {
		console.log("faux")	
		document.location.href= "codefail.html";
	}
}
