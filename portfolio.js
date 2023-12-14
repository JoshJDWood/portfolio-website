// initial set up for the main swappable section
let projectsDiv  = document.getElementById("projects-div");
let skillsDiv  = document.getElementById("skills-div");
let educationDiv  = document.getElementById("education-div");
let experienceDiv  = document.getElementById("experience-div");
let swappableDivs = [projectsDiv, skillsDiv, educationDiv, experienceDiv];
for (div of swappableDivs){
    div.style.display = "none"; //This is so that all divs are set to display none by default       
}
document.getElementById('projects-button').addEventListener('click', () => { displayDiv(0, swappableDivs) });
document.getElementById('skills-button').addEventListener('click', () => { displayDiv(1, swappableDivs) });
document.getElementById('education-button').addEventListener('click', () => { displayDiv(2, swappableDivs) });
document.getElementById('experience-button').addEventListener('click', () => { displayDiv(3, swappableDivs) });

// initial set up for the swappable projects section
let lightBoxDiv  = document.getElementById("light-box-div");
let wordleDiv  = document.getElementById("wordle-div");
let watchlistDiv  = document.getElementById("watchlist-div");
let jumblesDiv  = document.getElementById("jumbles-div");
let arDiv  = document.getElementById("ar-div");
let cloudDiv  = document.getElementById("cloud-div");
let swappableProjects = [lightBoxDiv, wordleDiv, watchlistDiv, jumblesDiv, arDiv, cloudDiv]
for (div of swappableProjects){
    div.style.display = "none"; //This is so that all divs are set to display none by default       
}
document.getElementById('light-box-button').addEventListener('click', () => { displayDiv(0, swappableProjects) });
document.getElementById('wordle-button').addEventListener('click', () => { displayDiv(1, swappableProjects) });
document.getElementById('watchlist-button').addEventListener('click', () => { displayDiv(2, swappableProjects) });
document.getElementById('jumbles-button').addEventListener('click', () => { displayDiv(3, swappableProjects) });
document.getElementById('ar-button').addEventListener('click', () => { displayDiv(4, swappableProjects) });
document.getElementById('cloud-button').addEventListener('click', () => { displayDiv(5, swappableProjects) });

function displayDiv(i, swappable) {    
    if (swappable[i].style.display === "none") {
        for (div of swappable){
            div.style.display = "none";            
        }
        swappable[i].style.display = "block";
    } else {
        swappable[i].style.display = "none";
    }
}