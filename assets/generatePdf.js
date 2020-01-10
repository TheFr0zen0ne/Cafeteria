function genPDF(){
var doc = new jsPDF()
	//document.getElementsByTagName(td).innerHTML
	
	objectToArray(document.getElementsByTagName("td"));
	

	doc.text(document.getElementsByTagName("td"), 10, 10);
	doc.save('a4.pdf');
}

function objectToArray(obj){
	arr = [];
	
	Object.keys(obj).forEach(function(key, index) {
		arr[index] = obj.key;
	});
	
	for (var prop in obj) {
		if(Object.prototype.hasOwnProperty.call(obj, prop)) {
			console.log(prop);
		}
	}
}
