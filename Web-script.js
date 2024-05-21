let postFieldHeaders = document.querySelectorAll(".web-postFieldHeaders")

postFieldHeaders.forEach((e)=>{
    e.addEventListener("click",()=>{
        document.querySelector(".web-header-active").classList.remove("web-header-active")
        e.classList.add("web-header-active")
    })
})

//user post box logic
let UserPostInputArea = document.querySelector(".web-UserPostInputArea").firstElementChild
let userPostBtnHolder = document.querySelector(".web-userPostBtnHolder").firstElementChild

UserPostInputArea.addEventListener("focus",()=>{
    UserPostInputArea.classList.replace("h-16","h-40")
    document.querySelector(".written-post-seprator").classList.remove("hidden")
    
    UserPostInputArea.addEventListener("blur",()=>{
        UserPostInputArea.classList.replace("h-40","h-16")
        document.querySelector(".written-post-seprator").classList.add("hidden")

        userPostBtnHolder.classList.replace("bg-[#1d9bf0]","bg-[#0e4e78]")
    })


})
UserPostInputArea.addEventListener("input",()=>{
    if(UserPostInputArea.value === ''){
        userPostBtnHolder.classList.replace("bg-[#1d9bf0]","bg-[#0e4e78]")
    }
    else{
        userPostBtnHolder.classList.replace("bg-[#0e4e78]","bg-[#1d9bf0]")
        
    }
})


//socialItem hover effect
let socialItem = document.querySelectorAll(".web-socialItem");

socialItem.forEach((e)=>{
var postImgClickLiked = false;
e.parentElement.parentElement.previousElementSibling.addEventListener("dblclick",(pr)=>{
            pr.preventDefault()
            if(e.id === 'pinkItem'){
                
                if(postImgClickLiked === true){
                    e.classList.remove("active-socialItem-special-pink")
                    postImgClickLiked = false;
                }
                else{
                    e.classList.add("active-socialItem-special-pink")
                    postImgClickLiked = true;
                }

            }
    })





var likeButtonClick = false;
var updateClick = false;
    e.addEventListener("mouseover",()=>{
        
        if(e.id === 'greenItem'){
            e.classList.add("active-socialItem-special-green")
        }
        else if(e.id === 'pinkItem'){
            e.classList.add("active-socialItem-special-pink")

            e.addEventListener("click",(p)=>{
                p.preventDefault()
                if(updateClick === true){
                    e.classList.remove("active-socialItem-special-pink");
                    likeButtonClick = false;
                    updateClick = false;
                   
                }
                else{
                    e.classList.add("active-socialItem-special-pink")
                    likeButtonClick = true;
                    updateClick = true;
                    
                }
            })

        }
        else{
            e.classList.add("active-socialItem")
           
        }

        e.addEventListener("mouseout",()=>{
            if(e.id === 'greenItem'){
                e.classList.remove("active-socialItem-special-green")
            }
            else if(e.id === 'pinkItem'){
                if(likeButtonClick === true){
                  
                }
                else{
                    updateClick = false;
                    e.classList.remove("active-socialItem-special-pink")
                }
                
            }
            else{
    
                e.classList.remove("active-socialItem")
            }
            
        })
        
    })
   
})



//bottom nav logic
setInterval(function(){
    document.querySelector(".web-bottomNavBar").classList.replace("bg-[rgba(0,0,0,0.4)]","bg-black")
},2000);
window.onscroll = function(){
    document.querySelector(".web-bottomNavBar").classList.replace("bg-black","bg-[rgba(0,0,0,0.4)]")  
}



//Ender Part web logic
window.onscroll = function(){    
        document.getElementById("web-ThirdZone").scrollTop += 5;  
    }



let searchBar = document.querySelector(".web-searchBar")
searchBar.firstElementChild.addEventListener("focus",()=>{
    searchBar.classList.add("searchBarStylingWeb")

    searchBar.firstElementChild.addEventListener("blur",()=>{
        searchBar.classList.remove("searchBarStylingWeb")
        
    })

})