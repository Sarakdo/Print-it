const slides = [
	{
		"image": "slide1.jpg" ,
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

nbSlides = slides.length;

// CREATION D'UN COMPTEUR A 0

let count = 0;

// PARTIE IMAGE ET TEXTE

let text = document.querySelector("#banner p");
text.innerHTML = slides[count].tagLine;

let image = document.querySelector(".banner-img");
image.src = './assets/images/slideshow/' + slides[count]['image'];


// PARTIE DOTS

// Boucle pour créer des dots en fonction du nbr d'objets dans le tableau slide 

for (let slide of slides) {
	let allDots = document.querySelector(".dots");
	let dot = document.createElement("div");
	dot.className = "dot";
	allDots.appendChild(dot);
}

// On crée un tableau avec toutes les divs "dot" construites précédemment

let dots = document.querySelectorAll (".dot");
let dotsArray = Array.from(dots);

// Rendre la première dot active

let dotSelected = dotsArray[count];
dotSelected.className = "dot dot_selected";

// EVENT LISTENERS SUR LES FLECHES

const Suivant = document.querySelector (".arrow_right");
Suivant.addEventListener("click", next);

const Precedent = document.querySelector (".arrow_left");
Precedent.addEventListener("click", previous);

// LES FONCTIONS ACTIVEES AU CLIC SUR LES FLECHES

	// boutton droit
function next (){

	// Cliquer monte le compteur mais reste dans le cadre du tableau
	if(count < nbSlides - 1){
		count++;
	} else{
		count = 0;
	};

	// Modification du texte et de l'image
	text.innerHTML = slides[count].tagLine;
	image.src = './assets/images/slideshow/' + slides[count]['image'];
	
	// Modification de la dot active
	dotSelected.className = "dot";
	dotSelected = dotsArray[count];
	dotSelected.className = "dot dot_selected";
}

	//boutton gauche
function previous (){

	// Cliquer baisse le compteur mais reste dans le cadre des tableaux
	if(count > 0){
		count--;
	} else{
		count = nbSlides - 1;
	};

	// Modification du texte et de l'image
	text.innerHTML = slides[count].tagLine;
	image.src = './assets/images/slideshow/' + slides[count]['image'];

	// Modification de la dot active
	dotSelected.className = "dot";
	dotSelected = dotsArray[count];
	dotSelected.className = "dot dot_selected";
}