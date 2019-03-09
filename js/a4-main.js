var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload = loadTableWithFilters;
function loadTableWithFilters(){
	var tbl = document.querySelector("#main-table-body");
	tbl.innerHTML = "";

	for(var i =0; i < petData.length; i++){
		if((filterType == petData[i].type || filterType == "") && petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax){
			var tr = document.createElement("tr");
			var td = document.createElement("td");
			var img = document.createElement("img");

			img.setAttribute("src", petData[i].image.src);
			img.setAttribute("alt", petData[i].image.alt);
			img.setAttribute("width", petData[i].image.width);
			img.setAttribute("height", petData[i].image.height);
			td.appendChild(img);
			tr.appendChild(td);

			var td2 = document.createElement("td");
			var h4 = document.createElement("h4");
			var name = document.createTextNode(petData[i].name);
			h4.appendChild(name);
			td2.appendChild(h4);

			var p = document.createElement("p");
			p.innerHTML = petData[i].description;
			td2.appendChild(p);

			var span = document.createElement("span");
			var age = document.createTextNode("Age: " + petData[i].age + " years old.");
			span.appendChild(age);
			td2.appendChild(span);
			tr.appendChild(td2);

			document.querySelector("#main-table-body").appendChild(tr);
		}
	}
};

function filterDog(){
	filterType = "dog";
	loadTableWithFilters();
}

function filterCat(){
	filterType = "cat";
	loadTableWithFilters();
}

function filterBird(){
	filterType = "bird"
	loadTableWithFilters();
}

function filter_zero_1(){
	filterType = "";
	filterAgeMin = 0;
	filterAgeMax = 1;
	loadTableWithFilters();
}

function filter_1_3(){
	filterType = "";
	filterAgeMin = 0;
	filterAgeMax = 3;
	loadTableWithFilters();
}

function filter_4_plus(){
	filterType = "";
	filterAgeMin = 4;
	filterAgeMax = Number.MAX_VALUE;
	loadTableWithFilters();
}

function filterAllPets(){
	filterType = "";
	filterAgeMin = 0;
	filterAgeMax = Number.MAX_VALUE;
	loadTableWithFilters();
}
