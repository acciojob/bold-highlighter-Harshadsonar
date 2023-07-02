let bold_Items;
window.onload = getBold_Items();

function getBold_Items() {
	bold_Items = document.getElementByTagName('strong');
}
function highlight() {
    for(let i=0; i<bold_Items.length; i++){
		bold_items[i].style.color = "green";
	}


}


function return_normal() {
    for(let i=0; i<bold_Items.length; i++){
		bold_Items[i].style.color = "black";
	}

    
}
