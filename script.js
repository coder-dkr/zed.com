let demonLoginBtn = document.querySelector(".demonLoginBtn")
let guestFormBtn = document.querySelector(".guestFormBtn")
let DemoLoginPop = document.getElementById("DemoLoginPop")
let crossPopBtn = document.querySelector(".crossPopBtn")


demonLoginBtn.addEventListener("click",(e)=>{
    e.preventDefault;
    document.body.style.background = "black";
    document.body.style.color = "white";
    document.body.innerHTML = `<h1 class="text-5xl">HEllO WORLD</h1>`
})

//Handling Demo Login
let dateofBirth = document.getElementById('dateofBirth');
let usernameInput = document.getElementById('usernameInput');
let nameInput = document.getElementById('nameInput');
let inputEntity = document.querySelectorAll(".inputEntity");

guestFormBtn.addEventListener("click", () => {
    document.body.style.background = "#242d34";
    DemoLoginPop.classList.toggle("hidden")
    document.title = 'Guest Login for Z'

})
crossPopBtn.addEventListener("click", () => {
    document.body.style.background = "black";
    DemoLoginPop.classList.toggle("hidden")
    document.title = 'Zed. It Is What Is';
    dateofBirth.value = '';
    nameInput.value = '';
    usernameInput.value = '';

    inputEntity.forEach((e) => {
        if (e.id == 'dateofBirth') {
            e.classList.remove("activeForInput"); 
        }
        else {

            e.nextElementSibling.classList.remove("activeForLabel");
            e.parentElement.classList.remove("activeForInput");
        }
    })
})

// Demo LOGIN Pop up Logic Js
inputEntity.forEach((e) => {
    e.addEventListener("focus", () => {

        if (e.id == 'dateofBirth') {
            e.classList.add("activeForInput");
        }
        else {
            e.nextElementSibling.classList.add("activeForLabel");
            e.parentElement.classList.add("activeForInput");
        }

    })
    e.addEventListener("blur", () => {

        if (e.value === '') {
            if (e.id == 'dateofBirth') {
                e.classList.remove("activeForInput");
            }
            else {
                e.nextElementSibling.classList.remove("activeForLabel");
                e.parentElement.classList.remove("activeForInput");
            }
        }
    })

})

