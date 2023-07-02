
function highlight() {
	let boldElements = document.getElementByTagName("strong");
	
    for(let i=0; i<boldElements.length; i++){
		boldElements[i].style.color = "green";
	}


}


function return_normal() {
	let boldElements = document.getElementByTagName("strong");
    for(let i=0; i<boldElements.length; i++){
		boldElements[i].style.color = "black";
	}

    
}
