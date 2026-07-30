const radioInputColon=document.querySelectorAll('.coloana input')
const links=document.querySelectorAll(".poezievolum");



radioInputColon.forEach(input => {

    input.addEventListener('click', function () {

        if(this.wasChecked){
            this.checked = false;
        }

        radioInputColon.forEach(i => i.wasChecked = false);

        this.wasChecked = this.checked;

    });

});


const liste = document.querySelectorAll(".coloana ul");

liste.forEach(lista => {

    lista.addEventListener("mouseenter", () => {
        lista.classList.add("hovering");
    });

    lista.addEventListener("mouseleave", () => {
        lista.classList.remove("hovering");
    });

});
 



const rusticBtn = document.getElementById("rusticBtn");
const modernBtn = document.getElementById("modernBtn");

rusticBtn.addEventListener("click", () => {

    document.body.classList.remove("modern");
    localStorage.setItem("theme", "rustic");

    rusticBtn.classList.add("active");
    modernBtn.classList.remove("active");

});

modernBtn.addEventListener("click", () => {

    document.body.classList.add("modern");
    localStorage.setItem("theme", "modern");

    modernBtn.classList.add("active");
    rusticBtn.classList.remove("active");

});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "modern") {
    document.body.classList.add("modern");

    modernBtn.classList.add("active");
    rusticBtn.classList.remove("active");
} else {
    document.body.classList.remove("modern");

    rusticBtn.classList.add("active");
    modernBtn.classList.remove("active");
}