import { document } from 'postcss'
import React ,{ useRef , useState , useEffect }from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import ReactTimeAgo from 'react-time-ago'
import Post from './Post';
const WebUserHome = () => {

document.title = 'Home / Z'


const {user, logout , isAuthenticated } = useAuth0()

//leave guest mode
const LeaveGuestMode = ()=>{
    let leaveConfirm =  confirm("leaving already?");
    if(leaveConfirm === true){
        if(localStorage.getItem("userDetails") === null){
            localStorage.removeItem("PostStreamArr")
        }
        navigate("/")
        document.title = 'Zed - It is What Is'
        {isAuthenticated && logout()}}
       
    
    }

var userDetailList = JSON.parse(localStorage.getItem("userDetails"))
const [guestnameState,setguestname] = useState("Guest User")
const [guestUsernameState,setguestUsernameState] = useState("@username")
const [userPfp,setuserPfp] = useState("img/defaultUserImg.jpg")

useEffect(() => {
    function SetUserDetails(){
        if(userDetailList !== null){
            setuserPfp(userDetailList[0].userpfpUrl)
            setguestname(userDetailList[0].guestName)
            setguestUsernameState(userDetailList[0].guestUserName.charAt(0) === '@' ? `${userDetailList[0].guestUserName}`: `@${userDetailList[0].guestUserName}`)   
        }
    }
    SetUserDetails()
}, [])

const postFieldHeadersStyle = (e) =>{
    
    if(e.currentTarget.id === "forYou"){
        e.currentTarget.classList.add("web-header-active")
        e.currentTarget.nextElementSibling.classList.remove("web-header-active")
        }

    if(e.currentTarget.id === "followwingWHO"){ 
        e.currentTarget.classList.add("web-header-active")
        e.currentTarget.previousElementSibling.classList.remove("web-header-active")
    } 
} 


const thirdSection = useRef();
const writtenPostSepratorRef = useRef();
const userPostBtnnnRef = useRef();
const guestUserPostAreaRef = useRef();
const followwingWHOref = useRef();
const forYouref = useRef();
const bottomNavBarRef = useRef();

const UserPostFieldUserImgref = useRef();
const VerticalNavUserImgref = useRef();
const middleStreamUserImgref = useRef();
const userPostImgLinkRef = useRef();
const justforstoring = useRef();




let navigate = useNavigate()
//local onscroll funct
window.onscrollend = ()=>{
    setTimeout(()=>{
        bottomNavBarRef.current.classList.replace("bg-[rgba(0,0,0,0.4)]","bg-black")
    },4000)  
}
window.onscroll = ()=>{
    thirdSection.current.scrollTop += 5;
    bottomNavBarRef.current.classList.replace("bg-black","bg-[rgba(0,0,0,0.4)]")
    }

//user post func
const ActiveUserPostInputArea = (e)=>{
            e.target.classList.replace('h-16','h-40');
            writtenPostSepratorRef.current.classList.remove('hidden')
        }
const DeactiveUserPostInputArea = (e)=>{
    if(guestUserPostAreaRef.current.value === ''){
            e.target.classList.replace('h-40','h-16');
            e.target.value = ''
            userPostBtnnnRef.current.classList.replace("bg-[#1d9bf0]","bg-[#0e4e78]")
            writtenPostSepratorRef.current.classList.add('hidden')
        }
}
const ActiveUserPostBtn =()=>{
    if(guestUserPostAreaRef.current.value === ''){
        userPostBtnnnRef.current.classList.replace("bg-[#1d9bf0]","bg-[#0e4e78]")
    }
    else{
        userPostBtnnnRef.current.classList.replace("bg-[#0e4e78]","bg-[#1d9bf0]")
    }
}
//user post func END

const autoActivePostArea=(e)=>{
    guestUserPostAreaRef.current.focus()
 
}

//search bar func
const ActivewebSearchBarStyle = (e)=>{
    e.target.parentElement.classList.add("searchBarStylingWeb")
}
const DeactivewebSearchBarStyle = (e)=>{
    e.target.parentElement.classList.remove("searchBarStylingWeb")
}
//search bar func END



//social item style
const socialItemStyleOn = (e)=>{
   if(e.currentTarget.id === 'pinkItem' || e.currentTarget.id === 'greenItem'){}
   else{ e.currentTarget.classList.add("active-socialItem")}
  
}

const socialItemStyleOff =(e)=>{
    if(e.currentTarget.id === 'pinkItem' || e.currentTarget.id === 'greenItem'){}  
    else{e.currentTarget.classList.remove("active-socialItem")}
}

//social item style END


const HostThePost = () =>{
    if(userPostBtnnnRef.current.classList.contains("bg-[#1d9bf0]")){
        guestUserPostAreaRef.current.classList.replace('h-40','h-16');
        writtenPostSepratorRef.current.classList.add('hidden')
        userPostBtnnnRef.current.classList.replace("bg-[#1d9bf0]","bg-[#0e4e78]")

        // console.log(userPostBtnnnRef.current.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling)
        addpost()



    }
    else{
        console.log("you cannot post nigga")
    }

}
function getFormattedDate() {
    const date = new Date();
  
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero indexed
    let year = date.getFullYear();
  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
  
    // Pad with zero if needed
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    return `${month}-${day}-${year} ${hours}:${minutes} ${ampm}`;
  }
  
  
  
const [generatedPosts, setgeneratedPosts ] = useState([])
const [posts, setPosts] = useState([]);
useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('PostStreamArr'));
    if (storedPosts) {
      setPosts(...posts,storedPosts);
    }

  }, []);
  
    const ActualPostStreamRef = useRef();
    function addpost(){

        if(userPostImgLinkRef.current.files[0] !==  undefined){
            if(userPostImgLinkRef.current.files[0] !==  null){
                justforstoring.current.src = URL.createObjectURL(userPostImgLinkRef.current.files[0])
            }
        }
        else{
            justforstoring.current.src = null
        }
        
       
        var userDetailData = JSON.parse(localStorage.getItem("userDetails"))
        if(userDetailData === null){
            var Apost ={
                "accName" : "Guest User",
                "accUsername" : "@username",
                "accPfp" : "img/defaultUserImg.jpg",
                "TimeagoPost" : `${getFormattedDate()}`,
                "PostCaption" : `${guestUserPostAreaRef.current.value}`,
                "AttachedPostImg" : `${justforstoring.current.src}`,
                "HasTick": false,
                "isLiked": false,
                "id": `${Number.parseInt(Math.random() * 999).toString()}`
            }
            setgeneratedPosts([...generatedPosts,Apost])

        }
        else{
           
            var Apost ={
                "accName" : `${userDetailData[0].guestName}`,
                "accUsername" : `@${userDetailData[0].guestUserName}`,
                "accPfp" : `${userDetailData[0].userpfpUrl}`,
                "TimeagoPost" : `${getFormattedDate()}`,
                "PostCaption" : `${guestUserPostAreaRef.current.value}`,
                "AttachedPostImg" :  `${justforstoring.current.src}`,
                "HasTick": false,
                "isLiked": false,
                "id": `${Number.parseInt(Math.random() * 999).toString()}`
            }
            setgeneratedPosts([...generatedPosts,Apost])
        }

            if(localStorage.getItem("PostStreamArr") == null){
                localStorage.setItem("PostStreamArr",JSON.stringify([Apost]))
            }
            else{
                var templist = JSON.parse(localStorage.getItem("PostStreamArr"))
                templist.push(Apost)
                localStorage.setItem("PostStreamArr",JSON.stringify(templist))
            }

            guestUserPostAreaRef.current.value = ''
            
    }

    const loadDefaultImgforPostEntry = ()=>{
        UserPostFieldUserImgref.current.src = "img/defaultonerror.png"
    }
    const loadDefaultImgforNavProfile = ()=>{
        VerticalNavUserImgref.current.src = "img/defaultonerror.png"
    }

const { isLoading } = useAuth0();

    if (isLoading) {
        return <div className='min-w-[100vw] min-h-[100vh] flex justify-center items-center text-white text-2xl bg-black'><img src="img/loader.gif" alt="Loading...." className='w-24' /></div>
    }

  
  return (
    <>

 <div className="bg-black text-white flex justify-center">
 <div className="container mx-auto lg:mx-[9vw] flex xl:ml-[8vw]">

    <section id="web-firstzone"  className="web-nav starter sm:flex sm:w-[11%] md:w-[21%] lg:w-[25%] hidden sticky top-0 bottom-0  h-[100vh] mr-1 lg:justify-start xl:pr-0" >
            <div className="web-navVassal  flex  flex-col justify-between items-center lg:pb-0 w-fit ">
                <div className="SuperIconHolder flex pt-[1px] flex-col justify-start items-center gap-y-[0.4rem] lg:gap-y-0 w-fit lg:items-start ">

    
                <div className="web-navZedLogoBox mb-2">
                    <div className="web-NavLogoBg w-14 h-14 rounded-full flex justify-center items-center"> 
                        <img src="img/zitter-com.png" alt="" className="web-NavLogo w-8 "/>
                    </div>
                </div>

    {/* <!-- NAVITEM -> HOME --> */}
                <div className="web-NavLogoBg w-14 h-14 rounded-full flex justify-center items-center lg:w-full lg:h-fit lg:py-2 lg:px-4 lg:pr-10 lg:gap-x-4  lg:justify-start lg:mt-1">
                    <span className="web-navItemIcon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="min-w-7 invert r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path></g></svg>
                    </span>
                    <span className="web-navItemTxt hidden lg:inline-flex text-xl font-bold ">
                        Home
                    </span>
                </div>
    {/* <!-- NAVITEM -> EXPLORE --> */}
                 <div className="web-NavLogoBg w-14 h-14 rounded-full flex justify-center items-center lg:w-full lg:h-fit lg:py-2 lg:px-4 lg:pr-10 lg:gap-x-4  lg:justify-start lg:mt-1">
                    <span className="web-navItemIcon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="min-w-7 invert r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
                    </span>
                    <span className="web-navItemTxt hidden lg:inline-flex text-xl font-semibold ">
                        Explore
                    </span>
                </div>
    {/* <!-- NAVITEM -> NOTIFICATION --> */}
                 <div className="web-NavLogoBg w-14 h-14 rounded-full flex justify-center items-center lg:w-full lg:h-fit lg:py-2 lg:px-4 lg:pr-10 lg:gap-x-4  lg:justify-start lg:mt-1">
                    <span className="web-navItemIcon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="min-w-7 invert r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path></g></svg>
                    </span>
                    <span className="web-navItemTxt hidden lg:inline-flex text-xl font-semibold ">
                        Notifications
                    </span>
                </div>
    {/* <!-- NAVITEM -> MESAAGE --> */}
                 <div className="web-NavLogoBg w-14 h-14 rounded-full flex justify-center items-center lg:w-full lg:h-fit lg:py-2 lg:px-4 lg:pr-10 lg:gap-x-4  lg:justify-start lg:mt-1">
                    <span className="web-navItemIcon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="min-w-7 invert r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></g></svg>
                    </span>
                    <span className="web-navItemTxt hidden lg:inline-flex text-xl font-semibold ">
                        Messages
                    </span>
                </div>
    {/* <!-- NAVITEM -> GROK --> */}
                 <div className="web-NavLogoBg w-14 h-14 rounded-full flex justify-center items-center lg:w-full lg:h-fit lg:py-2 lg:px-4 lg:pr-10 lg:gap-x-4  lg:justify-start lg:mt-1">
                    <span className="web-navItemIcon">
                       <svg viewBox="0 0 24 24" aria-hidden="true" className=" min-w-7 invert r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><g clipPath="url(#14-clip0_2592_269)" clipRule="evenodd"><path d="M18 4.1H6c-1.05 0-1.9.85-1.9 1.9v12c0 1.05.85 1.9 1.9 1.9h12c1.05 0 1.9-.85 1.9-1.9V6c0-1.05-.85-1.9-1.9-1.9zM6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4z"></path><path d="M6.68 17.8l8.108-11.58h2.532L9.21 17.8H6.68z"></path></g><defs><clipPath id="14-clip0_2592_269"><rect height="20" rx="1" width="20" x="2" y="2"></rect></clipPath></defs></g></svg>
                    </span>
                    <span className="web-navItemTxt hidden lg:inline-flex text-xl font-semibold ">
                        Grok
                    </span>
                </div>
    {/* <!-- NAVITEM -> BOOKMARKS --> */}
                 <div className="web-NavLogoBg w-14 h-14 rounded-full flex justify-center items-center lg:w-full lg:h-fit lg:py-2 lg:px-4 lg:pr-10 lg:gap-x-4  lg:justify-start lg:mt-1">
                    <span className="web-navItemIcon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="min-w-7 invert r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>
                    </span>
                    <span className="web-navItemTxt hidden lg:inline-flex text-xl font-semibold ">
                        Bookmarks
                    </span>
                </div>
    {/* <!-- NAVITEM -> COMMUNITY --> */}
                 <div className="web-NavLogoBg w-14 h-14 rounded-full flex justify-center items-center lg:w-full lg:h-fit lg:py-2 lg:px-4 lg:pr-10 lg:gap-x-4  lg:justify-start lg:mt-1">
                    <span className="web-navItemIcon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className=" min-w-7 invert r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path></g></svg>
                    </span>
                    <span className="web-navItemTxt hidden lg:inline-flex text-xl font-semibold ">
                        Communities
                    </span>
                </div>
    {/* <!-- NAVITEM -> Premium --> */}
                 <div className="web-NavLogoBg w-14 h-14 rounded-full flex justify-center items-center lg:w-full lg:h-fit lg:py-2 lg:px-4 lg:pr-10 lg:gap-x-4  lg:justify-start lg:mt-1">
                    <span className="web-navItemIcon">
                        <img src="img/zitter-com.png" className="w-7" alt=""/>
                    </span>
                    <span className="web-navItemTxt hidden lg:inline-flex text-xl font-semibold ">
                        Premium
                    </span>
                </div>
    {/* <!-- NAVITEM -> PROFILE --> */}
                 <div className="web-NavLogoBg w-14 h-14 rounded-full flex justify-center items-center lg:w-full lg:h-fit lg:py-2 lg:px-4 lg:pr-10 lg:gap-x-4  lg:justify-start lg:mt-1">
                    <span className="web-navItemIcon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="min-w-7 invert r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path></g></svg>
                    </span>
                    <span className="web-navItemTxt hidden lg:inline-flex text-xl font-semibold ">
                        Profile
                    </span>
                </div>
    {/* <!-- NAVITEM -> MORE --> */}
                 <div className="web-NavLogoBg w-14 h-14 rounded-full flex justify-center items-center lg:w-full lg:h-fit lg:py-2 lg:px-4 lg:pr-10 lg:gap-x-4  lg:justify-start lg:mt-1">
                    <span className="web-navItemIcon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="min-w-7 invert r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></g></svg>
                    </span>
                    <span className="web-navItemTxt hidden lg:inline-flex text-xl font-semibold ">
                        More
                    </span>
                </div>
    {/* <!-- NAVITEM -> POST --> */}
                <div className="web-NavLPostIconBg w-14 h-14 rounded-full flex justify-center items-center bg-[#1d9bf0] mt-4 lg:w-full lg:h-fit lg:py-2 lg:px-4 lg:pr-10 lg:gap-x-4 cursor-pointer">
                    <span className="web-navItemIcon">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="min-w-7 lg:min-w-0 lg:w-0 lg:hidden invert r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1472mwg r-lrsllp" style={{color : 'white'}}><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg>
                    </span>
                    <button className="web-navItemTxtBtn hidden lg:inline-flex text-xl font-semibold lg:w-full lg:h-fit lg:px-4 lg:gap-x-4 justify-center">
                        Post
                    </button>

                </div>

            </div>

{/* <!-- User INFO -> Panel --> */}

        <div className="web-NavLogoBg relative w-14 h-14 rounded-full flex justify-start items-center lg:w-fit lg:h-fit lg:py-2 lg:px-4 lg:pr-7 lg:gap-x-4  lg:mt-1 mb-4 lg:min-w-[230.5px] lg:max-w-[230.5px] lg:overflow-x-hidden">
                    <div className="web-UserImgHolder  w-14 h-14 rounded-full flex justify-center items-center overflow-hidden  lg:min-w-10 lg:min-h-10 lg:max-w-10 lg:max-h-10">
                        <img src={userPfp} onError={loadDefaultImgforNavProfile}  id="VerticalNavUserImg" ref={VerticalNavUserImgref} />
                    </div>
                    


                    <div className="web-UserSettedDetails hidden lg:flex flex-col justify-center items-start leading-0">
                            <span id="" className="userSettedName hidden lg:inline-flex text-sm font-bold ">{guestnameState} </span>    
                            <span id="" className="userSettedUserName text-[#70757a] text-base font-[500]">{guestUsernameState}</span>    
                    </div>
                    <div className="web-3dotnav absolute  w-7 h-7 rounded-full hidden  lg:flex justify-center items-center right-5 top-[6px] ">
                      <i className="fa-solid fa-ellipsis text-[#71767b]  cursor-pointer"></i>
                    </div>

        </div>

             

            </div>

        </section>

    <section id="web-scndZone" className="web-postCont middlerr pt-2 md:pt-0 w-full lg:w-6/12 border-[1px] border-solid border-[#2f3336] border-y-black">
            <div
                className="web-middleHeader border-[1px] border-solid border-y-[#2f3336] border-x-0 border-t-0 md:bg-[rgba(0,0,0,0.5)] md:sticky md:top-0 md:backdrop-blur-2xl z-[1000]">
                <div className="web-iconBox flex py-1 px-4 justify-center md:pt-3 items-center lg:hidden">
                    
                    <div className="web-UserImgHolder w-full flex ">
                    <div className="web-secondImgholder min-w-10 min-h-10 flex justify-center items-start mr-2 overflow-hidden">
                        <img src={userPfp} className="w-10 h-10  rounded-full" alt="" id='UserPostFieldUserImg'ref={middleStreamUserImgref} />
                    </div>
                    </div>


                    <div className="web-ZLogoHolder">
                        <img src="img/zitter-com.png" className="w-14" alt=""/>
                    </div>
                    <div className="web-settingHolder w-full flex justify-end">
                        <img src="img/logout.svg" className="pr-1 w-6 cursor-pointer" alt="" onClick={LeaveGuestMode}  />
                    </div>
                </div>

                <div className="web-displayMiddleHeading text-[#71767b] flex justify-center items-center">
                    <div
                        className="web-postFieldHeaders web-forYou px-4 h-[55px] w-1/2 flex justify-center text-base cursor-pointer web-header-active" onClick={postFieldHeadersStyle} id="forYou" >
                        <span className="flex items-center" ref={forYouref}>For you</span>
                    </div>
                    <div
                        className="web-postFieldHeaders web-following px-4 h-[55px] w-1/2 flex justify-center text-base cursor-pointer" onClick={postFieldHeadersStyle}  id="followwingWHO" >
                        <span className="flex items-center" ref={followwingWHOref} >Following</span>
                    </div>
                </div>
            </div>
{/* <!--USER POST ENTRY--> */} 
        <div className="web-Userpost border-[1px] border-solid border-[#2f3336] border-x-0 px-4  ">
                <div className="web-UserpostVassal  py-3 flex justify-center">
                    <div className="web-UserpostAccountImgHolder min-w-10 flex justify-center items-start mr-2">
                    <div className="web-secondImgholder min-w-12 min-h-12 flex justify-center items-start mr-2 overflow-hidden">
                        <img src={userPfp} onError={loadDefaultImgforPostEntry} className="w-12 h-12  rounded-full" alt="" id='UserPostFieldUserImg'ref={UserPostFieldUserImgref} />
                    </div>
                    </div>

                    <div className="web-UserpostContent w-full flex flex-col gap-y-[2.5px]">

                    <span className="web-UserPostInputArea mt-2 pl-1">
                            <textarea  onFocus={ActiveUserPostInputArea} onBlur={DeactiveUserPostInputArea} onInput={ActiveUserPostBtn}  className="w-full resize-none h-16 bg-black outline-none border-none placeholder:text-[#6f7479] text-xl"
                                placeholder="What is happening?!" name="" id="guestUserPostArea"ref={guestUserPostAreaRef} ></textarea>
                        </span>

                        <hr ref={writtenPostSepratorRef} className="hidden written-post-seprator border-[1.5px] border-solid border-[#292b2e]"/>

                    <div className="web-UserPostTools mt-2 flex gap-x-4 justify-between items-center w-full max-w-lg xl:max-w-2xl">
                 <div className="web-PostToolIcons flex justify-start items-center gap-x-2 md:gap-x-[1.8rem] ">      
                            <span  onMouseOut={socialItemStyleOff}   onMouseOver={socialItemStyleOn}  className="web-socialItem text-[#6e7378] flex items-center justify-center w-fit cursor-pointer">
                                <input type="file"  id="userPostImgLink" className='hidden' ref={userPostImgLinkRef}  accept="image/jpeg, image/jpg, image/png, image/gif" />
                                <input type="file" src="" className='hidden' ref={justforstoring}  accept="image/jpeg, image/jpg, image/png, image/gif" />
                                <label htmlFor="userPostImgLink" className='cursor-pointer' >
                                    <span className="siBg w-7 h-7  flex justify-center items-center rounded-full">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 fill-[#1b92e3] r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"><g><path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path></g></svg>
                                    </span></label>
                                </span>

                            <span  onMouseOut={socialItemStyleOff}   onMouseOver={socialItemStyleOn}  className="web-socialItem text-[#6e7378] flex items-center justify-center w-fit cursor-pointer">
                                    <span className="siBg w-7 h-7  flex justify-center items-center rounded-full">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 disabled fill-[#0b4267] cursor-not-allowed r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03" style={{color: 'rgb(29, 155, 240)'}}><g><path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path></g></svg>
                                    </span>
                                </span>

                            <span onMouseOut={socialItemStyleOff}   onMouseOver={socialItemStyleOn}  className="web-socialItem text-[#6e7378] flex items-center justify-center w-fit cursor-pointer">
                                    <span className="siBg w-7 h-7  flex justify-center items-center rounded-full">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 fill-[#0b4267] cursor-not-allowed r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03" style={{color: 'rgb(29, 155, 240)'}}><g><path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"></path></g></svg>
                                    </span>
                                </span>
                                
                            <span onMouseOut={socialItemStyleOff}   onMouseOver={socialItemStyleOn}  className="web-socialItem text-[#6e7378] flex items-center justify-center w-fit cursor-pointer">
                                    <span className="siBg w-7 h-7  flex justify-center items-center rounded-full">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 fill-[#0b4267] cursor-not-allowed r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03" style={{color: 'rgb(29, 155, 240)'}}><g><path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path></g></svg>
                                    </span>
                                </span>

                            <span  onMouseOut={socialItemStyleOff}   onMouseOver={socialItemStyleOn}  className="web-socialItem text-[#6e7378] flex items-center justify-center w-fit cursor-pointer">
                                    <span className="siBg w-7 h-7  flex justify-center items-center rounded-full">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 fill-[#0b4267]  cursor-not-allowed r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03" style={{color: 'rgb(29, 155, 240)'}}><g><path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path></g></svg>
                                    </span>
                                </span>


                            </div>


                            <div className="web-userPostBtnHolder  gap-x-3 pr-2 ">
                                <button onClick={HostThePost} ref={userPostBtnnnRef} id='userPostBtnnn' className="bg-[#0e4e78] px-5 py-1 rounded-3xl w-16 flex items-center justify-center font-semibold">
                                    <span className="inline-block w-fit h-fit relative bottom-[1.2px]">Post</span></button>
 
                            </div>
                        </div>

                    </div>
                </div>
            </div>

 {/* <!-- ACTUAL POST STREAM --> */}
 <div className="web-ActualPostStream flex   flex-col overflow-x-hidden" ref={ActualPostStreamRef} >


 {generatedPosts && generatedPosts.length > 0 ?
 [...generatedPosts].reverse().map((post, index) => (
  <Post key={post.id} accountPfp={post.accPfp} accountName={post.accName} accountUsername={post.accUsername} postTime={<ReactTimeAgo date={Date.parse(post.TimeagoPost)} locale='en-US' />} tick={post.HasTick}  postText={post.PostCaption} postimgageurl={post.AttachedPostImg} isLiked={post.isLiked} />
)) : <div className="w-full text-center text-blue-400 my-5 font-semibold cursor-pointer" onClick={autoActivePostArea}>  Try posting now!!</div>}

    {posts && posts.length > 0 ? 
    [...posts].reverse().map((post, index) => (
        <Post
          key={index}
          accountPfp={post.accPfp}
          accountName={post.accName}
          accountUsername={post.accUsername}
          postTime={<ReactTimeAgo date={Date.parse(post.TimeagoPost)} locale='en-US' />}
          tick={post.HasTick} postText={post.PostCaption}
          postimgageurl={post.AttachedPostImg} isLiked={post.isLiked}
        />
      )) : <div className="w-full text-center text-white my-5">No post yet</div>}

  
   <Post accountPfp="img/accountImg6.jpg" accountName="Developer kun" accountUsername="@creator" postTime={<ReactTimeAgo date={Date.parse("04-21-2020 8:30 PM")} locale='en-US' />} postText="no coffee no work" postimgageurl="img/postImg8.gif" tick={true}  isLiked={true}/>

  {/*<Post accountPfp="img/accountImg7.jpg" accountName="uWu" accountUsername="@daddyROY1010" postTime={`${new Date().getMinutes()}mins ago`} postText="hello heavenely" postimgageurl="img/postImg6.jpg" tick={true} />

  <Post accountPfp="img/accountImg1.jpg" accountName="One Piece Daily" accountUsername="@opdaily" postTime={`${new Date().getMinutes()}mins ago`} postText="The Great King of the Pirates" postimgageurl="img/postImg2.jpg" tick={true} />

  <Post accountPfp="img/accountImg2.jpg" accountName="Strawhats" accountUsername="@realpiece" postTime={<ReactTimeAgo date={time2} locale='en-US' />} postText="black leg of the pirates" postimgageurl="img/postImg1.jpg" tick={true} />

    <Post accountPfp="img/accountImg4.jpg" accountName="shinobi98" accountUsername="@whiteassanruto" postTime={`${new Date().getMinutes()}mins ago`} postText="Naruto stretching that white...." postimgageurl="img/postImg4.gif" tick={true} />

  <Post accountPfp="img/accountImg5.jpg" accountName="Anime Theory" accountUsername="@jjkmania" postTime={<ReactTimeAgo date={time3} locale='en-US' />} postText="What if Jujutsu kaisen was made in 90's? Lets Explore the Anime and mang industry of the last decade." postimgageurl="img/postImg5.jpg" tick={true} />
     
  <Post accountPfp="img/accountImg3.jpg" accountName="Demons" accountUsername="@demonslayer" postTime={<ReactTimeAgo date={time1} locale='en-US' />} postText="Destruction of W" postimgageurl="img/postImg3.jpg" tick={true} /> */}
    

    

   

  </div>

            <div className="web-bottomNavBar md:hidden sticky bottom-0 border-[1px] border-solid border-[#2f3336] border-x-0 h-[3.3rem] bg-black flex items-center justify-evenly bg" ref={bottomNavBarRef} >
                <span className="web-BottomNavItem"><img src="img/hut.svg" className="w-7 invert" alt=""/></span>
                <span className="web-BottomNavItem"><svg viewBox="0 0 24 24" aria-hidden="true"
                        className="w-7 invert r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e">
                        <g>
                            <path
                                d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z">
                            </path>
                        </g>
                    </svg>

                </span>
                <span className="web-BottomBottomNavItem"><img src="img/grok.svg" className="w-7 invert" alt=""/></span>
                <span className="web-BottomNavItem"><svg viewBox="0 0 24 24" aria-hidden="true"
                        className="w-7 invert r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e">
                        <g>
                            <path
                                d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z">
                            </path>
                        </g>
                    </svg></span>
                <span className="web-BottomNavItem"><svg viewBox="0 0 24 24" aria-hidden="true"
                        className="w-7 invert r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e">
                        <g>
                            <path
                                d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z">
                            </path>
                        </g>
                    </svg></span>
                <span className="web-BottomNavItem">
                    <svg viewBox="0 0 24 24" aria-hidden="true"
                        className="w-7 invert r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e">
                        <g>
                            <path
                                d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z">
                            </path>
                        </g>
                    </svg>
                </span>
            </div>

        </section>


    <section className="web-UpdatesEnderCont ender lg:w-4/12 hidden lg:flex sticky bottom-0 top-0 bg-black h-[100vh]  flex-col items-center pt-2 pl-5 gap-y-4 overflow-y-scroll " ref={thirdSection} id="web-ThirdZone">

        <div className="web-searchBar  w-full sticky top-0 z-[999]">
            <input onFocus={ActivewebSearchBarStyle} onBlur={DeactivewebSearchBarStyle} className="outline-none bg-[#202327] w-full py-[0.68rem] pl-11 border-[1px] border-solid border-black rounded-3xl placeholder:text-[#808285]" type="search" name="" id="webSearchBar" placeholder="Search"/>
            <span className="web-searchIcon z-[2] cursor-pointer">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 fill-[#808285] absolute top-[0.85rem] left-4 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
            </span>
        </div>

        <div className="web-LogoutBox flex flex-col items-start gap-y-2 border-[1px] border-solid border-[#2f3336] rounded-2xl px-4 py-4 pt-2 w-full">
            <span className="logOutHeader text-lg font-bold">
                Leave Guest Mode
            </span>
            <span className="logoutTxt text-sm">
               Do you know that luffy will become the great king of the pirates after 800 years
            </span>
          <button className="web-logoutBtn py-2 pt-1 px-7  rounded-3xl bg-[#1d9bf0] font-bold mt-2" onClick={LeaveGuestMode}>Logout</button>
        </div>

        <div className="web-HappeningNewBox flex flex-col items-start border-[1px] border-solid border-[#2f3336] rounded-2xl px-4 py-4 pt-2 w-full gap-y-5">
            <span className="web-newBoxHeader text-lg font-bold">
                whats happening?
            </span>

            <div className="web-happenContent relative w-full flex flex-col">
                <div className="web-happenTopic flex items-center">
                    <span className="text-[#70757a] text-xs">Trending in India</span>
                    <div className="web-post3dot absolute w-7 h-7 rounded-full hover:bg-[#1c99ec33] right-0 flex justify-center items-center">
                    <i className="fa-solid fa-ellipsis text-[#71767b] hover:text-[#1c98ec] cursor-pointer"></i>
                    </div>
                </div>
                <span className="web-hashTopic font-bold ">#Cricket</span>
                <div className="web-happenPostNumber flex items-center">
                    <span className="text-[#70757a] text-xs">23.5K posts</span>
                </div>
            </div>

            <div className="web-happenContent relative w-full flex flex-col">
                <div className="web-happenTopic flex items-center">
                    <span className="text-[#70757a] text-xs">Entertainment · Trending</span>
                    <div className="web-post3dot absolute w-7 h-7 rounded-full hover:bg-[#1c99ec33] right-0 flex justify-center items-center">
                    <i className="fa-solid fa-ellipsis text-[#71767b] hover:text-[#1c98ec] cursor-pointer"></i>
                    </div>
                </div>
                <span className="web-hashTopic font-bold ">#ANIME</span>
                <div className="web-happenPostNumber flex items-center">
                    <span className="text-[#70757a] text-xs">533K posts</span>
                </div>
            </div>

            <div className="web-happenContent relative w-full flex flex-col">
                <div className="web-happenTopic flex items-center">
                    <span className="text-[#70757a] text-xs">Padhle · bhai</span>
                    <div className="web-post3dot absolute w-7 h-7 rounded-full hover:bg-[#1c99ec33] right-0 flex justify-center items-center">
                    <i className="fa-solid fa-ellipsis text-[#71767b] hover:text-[#1c98ec] cursor-pointer"></i>
                    </div>
                </div>
                <span className="web-hashTopic font-bold ">#EXAMS AAGYE LADLE</span>
                <div className="web-happenPostNumber flex items-center">
                    <span className="text-[#70757a] text-xs">Trending with <span className="text-[#1886cf] text-sm">
                        #STARTbhiNHIkra
                    </span></span>
                </div>
            </div>

            <div className="web-happenContent relative w-full flex flex-col">
                <div className="web-happenTopic flex items-center">
                    <span className="text-[#70757a] text-xs">Entertainment · Trending</span>
                    <div className="web-post3dot absolute w-7 h-7 rounded-full hover:bg-[#1c99ec33] right-0 flex justify-center items-center">
                    <i className="fa-solid fa-ellipsis text-[#71767b] hover:text-[#1c98ec] cursor-pointer"></i>
                    </div>
                </div>
                <span className="web-hashTopic font-bold ">#Lungi</span>
                <div className="web-happenPostNumber flex items-center">
                    <span className="text-[#70757a] text-xs">2000 posts</span>
                </div>
            </div>

            <div className="web-happenContent relative w-full flex flex-col">
                <div className="web-happenTopic flex items-center">
                    <span className="text-[#70757a] text-xs">Politics · Trending</span>
                    <div className="web-post3dot absolute w-7 h-7 rounded-full hover:bg-[#1c99ec33] right-0 flex justify-center items-center">
                    <i className="fa-solid fa-ellipsis text-[#71767b] hover:text-[#1c98ec] cursor-pointer"></i>
                    </div>
                </div>
                <span className="web-hashTopic font-bold ">#kisne-kisko-dhoya?</span>
                <div className="web-happenPostNumber flex items-center">
                    <span className="text-[#70757a] text-xs">2M posts</span>
                </div>
            </div>

            <span className="web-showMoretag text-[#1886cf] cursor-pointer">
                Show more
            </span>
   
        </div>

        <div className="web-WhoToFollowBox flex flex-col items-start border-[1px] border-solid border-[#2f3336] rounded-2xl px-4 py-4 pt-2 w-full gap-y-4 pr-2">
            <span className="web-newBoxHeader text-lg font-bold">
                Who to follow
            </span>

            <div className="web-whotoFollowContent relative w-full flex gap-x-2 xl:justify-evenly">
                <div className="web-FollowAccImg flex items-center w-10 h-10 overflow-hidden rounded-sm">
                    <img src="img/folllowRec/followImg1.jpg" alt=""/>
                </div>

                <div className="web-followAccDetail flex flex-col items-start justify-center min-w-[7.4rem]">
                    <span className="flex items-start justify-center gap-[3px] "> 
                        <span className="web-followAccName font-bold text-sm text-nowrap w-[6.2rem] overflow-hidden ">MY HERO ACADEMIA
                        </span>
                        <svg viewBox="0 0 22 22" aria-label="Verified account" role="img"
                                            className="w-4 fill-[gold] r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i"
                                            data-testid="icon-verified">
                                            <g>
                                                <path
                                                    d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z">
                                                </path>
                                            </g>
                        </svg>
                        
                    </span>
                    <span className="web-FollowAccusername text-[#70757a] text-sm">
                        @DEKUSMASHERS
                    </span>
                </div>

                <div className="web-FollowAccFollow flex items-center ">
                    <button className="web-followExtraBtn text-black font-semibold bg-white rounded-3xl py-1 px-4">Follow</button>
                </div>

            </div>

            <div className="web-whotoFollowContent relative w-full flex gap-x-2 xl:justify-evenly">
                <div className="web-FollowAccImg flex items-center w-10 h-10 overflow-hidden rounded-sm">
                    <img src="img/folllowRec/followImg1-5.jpg" alt=""/>
                </div>

                <div className="web-followAccDetail flex flex-col items-start justify-center min-w-[7.4rem]">
                    <span className="flex items-center justify-center gap-[3px]"> 
                        <span className="web-followAccName font-bold text-sm text-nowrap w-full overflow-hidden ">Robin
                            &#128156;
                        </span>
                        
                    </span>
                    <span className="web-FollowAccusername text-[#70757a] text-sm">
                        @robinchwaaan~
                    </span>
                </div>

                <div className="web-FollowAccFollow flex items-center ">
                    <button className="web-followExtraBtn text-black font-semibold bg-white rounded-3xl py-1 px-4">Follow</button>
                </div>

            </div>

            <div className="web-whotoFollowContent relative w-full flex gap-x-2 xl:justify-evenly">
                <div className="web-FollowAccImg flex items-center w-10 h-10 overflow-hidden rounded-sm">
                    <img src="img/folllowRec/followImg2.jpg" alt=""/>
                </div>

                <div className="web-followAccDetal flex flex-col items-center justify-center">
                    <span className="flex items-start justify-center gap-[3px]"> 
                        <span className="web-followAccName font-bold text-sm text-nowrap w-[6.2rem] overflow-hidden flex gap-[2px]">CrunchyRoll
                            <svg viewBox="0 0 22 22" aria-label="Verified account" role="img"
                            className="w-4 fill-[#c10dc1] r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i"
                            data-testid="icon-verified">
                            <g>
                                <path
                                    d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z">
                                </path>
                            </g>
        </svg>
                        </span>
                    
                        
                    </span>
                    <span className="web-FollowAccusername text-[#70757a] text-sm">
                        @offcialcrunchyroll
                    </span>
                </div>

                <div className="web-FollowAccFollow flex items-center ">
                    <button className="web-followExtraBtn text-black font-semibold bg-white rounded-3xl py-1 px-4">Follow</button>
                </div>

            </div>


            <span className="web-showMoretag text-[#1886cf] mt-3 cursor-pointer">
                Show more
            </span>
   
        </div>


    </section>

    
    </div>




    <script src="Web-script.js" type="module"></script>
</div>
    </>
  )
}

export default WebUserHome
