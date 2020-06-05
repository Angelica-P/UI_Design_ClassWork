// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

var perferences = [];
var selected_products = [];

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	document.getElementById(tabName+"Step").className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct2) {
	console.log("hello world");
    /*var s1 = document.getElementById(slct1);*/
    var options = perferences;
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    //s2.innerHTML = "";
    var panels = document.getElementsByClassName("panel");
    for (let p = 0; p < panels.length; p++) {
    	panels[p].innerHTML = "This section is empty.";
    }

    console.log(options);
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, options);

    optionArray.sort(function(a, b) { return a.price - b.price; });

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var product = optionArray[i];

		var div = document.createElement("div");
		div.className = "product";

		//create image
		var image = document.createElement('IMG');
		image.src = product.image;
		div.appendChild(image);

		// create a breakline node and add in HTML DOM
		div.appendChild(document.createElement("br"));

		// create the button and add the event listener
		var button = document.createElement("button");
		button.class = "product";
		button.innerHTML = "Select";
		button.name = product.name;
		button.addEventListener("click", function() {
			if (selected_products.includes(this.name)) {
				//remove the product
				for (let s = 0; s < selected_products.length; s++) {
					if (selected_products[s].localeCompare(this.name) == 0) {
						selected_products.splice(s, 1);
						break;
					}
				}
				this.innerHTML = "Select";
			} else {
				//add the product
				selected_products.push(this.name);
				this.innerHTML = "Unselect";
			}
		});
		div.appendChild(button);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = product.name;
		label.appendChild(document.createTextNode(product.name + " : $" + product.price));
		div.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		div.appendChild(document.createElement("br"));    

		if (document.getElementById(product.category).innerHTML == "This section is empty.") {
			document.getElementById(product.category).innerHTML = "";
		}
		document.getElementById(product.category).appendChild(div);
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	//var ele = document.getElementsByName("product");
	//var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You have selected to buy: ";
	para.appendChild(document.createElement("br"));
	/*for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}*/
	for (i = 0; i < selected_products.length; i++) { 
		para.appendChild(document.createTextNode(selected_products[i]));
		para.appendChild(document.createElement("br"));
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is: $" + getTotalPrice(selected_products)));
		
}

function selectPreference(pref, value) {
	p = document.getElementById("pref_list");

	if (p.innerHTML.includes(pref)) {
		p.innerHTML = p.innerHTML.replace(pref+",	", "");
		for (let p = 0; p < perferences.length; p++) {
			if (perferences[p].localeCompare(value) == 0) {
				perferences.splice(p, 1);
				break;
			}
		}
	} else {
		p.innerHTML += pref+",	";
		perferences.push(value);
	}
}

/* This is modified from: https://www.w3schools.com/howto/howto_js_accordion.asp */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    var panels = document.getElementsByClassName("panel");
    for (let p = 0; p < panels.length; p++) {
    	panels[p].style.display = "none";
    	panels[p].className.replace(" active", "");	
	}
	var panel_btns = document.getElementsByClassName("accordion");
	for (let a = 0; a < panel_btns.length; a++) {
    	panel_btns[a].className = panel_btns[a].className.replace(" active", "");
	}

	//this.classList.toggle("active");
	this.className += " active";
	//console.log(this.classList);
    var panel = this.nextElementSibling;
	if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
  });
}