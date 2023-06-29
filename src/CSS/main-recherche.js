                          // CALENDRIER

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  };

  
                          // CACHE DES DATES DISPARAISSANT AU CLIC



const LabelArrivee = document.querySelector(".cd1")
const LabelDepart = document.querySelector(".cd2")

LabelArrivee.addEventListener("click",()=>{
  LabelArrivee.classList.add("cd1-hidden")
});

LabelDepart.addEventListener("click",()=>{
  LabelDepart.classList.add("cd2-hidden")
});

                          // CACHE DES DATES REAPARRAISSANT AU CLIC AILLEURS

const InputArrivee = document.getElementById("arrivee");
const InputDepart = document.getElementById("depart");

InputArrivee.addEventListener("blur", () => {
  if (InputArrivee.value === "") {
    LabelArrivee.classList.remove("cd1-hidden");
  }
});

InputDepart.addEventListener("blur", () => {
  if (InputDepart.value === "") {
    LabelDepart.classList.remove("cd2-hidden");
  }
});