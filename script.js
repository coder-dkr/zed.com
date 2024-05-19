let demonLoginBtn = document.querySelector(".demonLoginBtn")
let guestFormBtn = document.querySelector(".guestFormBtn")
let DemoLoginPop = document.getElementById("DemoLoginPop")
let crossPopBtn = document.querySelector(".crossPopBtn")

window.onload = function(){
    dateofBirth.value = '';
    nameInput.value = '';
    usernameInput.value = '';
}

//Handling Demo Login
let dateofBirth = document.getElementById('dateofBirth');
let usernameInput = document.getElementById('usernameInput');
let nameInput = document.getElementById('nameInput');
let inputEntity = document.querySelectorAll(".inputEntity");

guestFormBtn.addEventListener("click", () => {
    document.title = 'Guest Login for Z'
    document.body.style.background = "#242d34";
    DemoLoginPop.classList.remove("hidden")


    //login for guest accout active
    function loginDisb (){
        if (nameInput.value === '' || usernameInput.value === '') {
            demonLoginBtn.removeEventListener('click',switchToWeb, false);
            demonLoginBtn.classList.add("opacity-[0.5]")
            demonLoginBtn.classList.add("cursor-not-allowed")
            
        }
        else{
            demonLoginBtn.addEventListener('click',switchToWeb);
            demonLoginBtn.classList.remove("opacity-[0.5]")
            demonLoginBtn.classList.remove("cursor-not-allowed")
            
        }
    }
    setInterval(loginDisb,100);
    function switchToWeb (){
        crossPopBtn.click()
        // window.open('mainWeb.html','_self');
    }
    demonLoginBtn.addEventListener("click",switchToWeb)

    crossPopBtn.addEventListener("click", () => {
        document.title = 'Zed. It Is What Is';
        document.body.style.background = "black";
        DemoLoginPop.classList.add("hidden")
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



//#####################################################################################################################
