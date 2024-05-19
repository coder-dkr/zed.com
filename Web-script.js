let postFieldHeaders = document.querySelectorAll(".web-postFieldHeaders")

postFieldHeaders.forEach((e)=>{
    e.addEventListener("click",()=>{
        document.querySelector(".web-header-active").classList.remove("web-header-active")
        e.classList.add("web-header-active")
    })
})


//socialItem hover effect
let socialItem = document.querySelectorAll(".web-socialItem");
socialItem.forEach((e)=>{
    e.addEventListener("mouseover",()=>{
        if(e.id === 'greenItem'){
            e.classList.add("active-socialItem-special-green")
        }
        else if(e.id === 'pinkItem'){
            e.classList.add("active-socialItem-special-pink")
        }
        else{
            e.classList.add("active-socialItem")
           
        }
        
    })
    e.addEventListener("mouseout",()=>{
        if(e.id === 'greenItem'){
            e.classList.remove("active-socialItem-special-green")
        }
        else if(e.id === 'pinkItem'){
            e.classList.remove("active-socialItem-special-pink")
        }
        else{

            e.classList.remove("active-socialItem")
        }
        
    })
})