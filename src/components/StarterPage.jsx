import { document } from 'postcss'
import react, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const StarterPage = () => {

const usernameInputref = useRef();
const nameInputref = useRef();
const DemoLoginPopref = useRef();
const demonLoginBtnref = useRef();
const StarterPagePgref = useRef();
const guestUserProfilePicref = useRef();
const UserPostFieldUserImgref = useRef();


    let Navigater = useNavigate()

   
    

    const ActiveGuestLoginBtn = () => {

        if (nameInputref.current.value === "" || usernameInputref.current.value === "") {
            demonLoginBtnref.current.classList.add("opacity-[0.5]")
            demonLoginBtnref.current.classList.add("cursor-not-allowed")

        }
        else {
            demonLoginBtnref.current.classList.remove("opacity-[0.5]")
            demonLoginBtnref.current.classList.remove("cursor-not-allowed")

        }

    }
const updatePreviewUserImg =()=>{
    UserPostFieldUserImgref.current.src = URL.createObjectURL(guestUserProfilePicref.current.files[0])

}
    const guestVisitLogin = () => {
        DemoLoginPopref.current.classList.remove("hidden");
        demonLoginBtnref.current.classList.add("cursor-not-allowed")
        demonLoginBtnref.current.classList.add("opacity-[0.5]")
        document.title = 'Guest Login for Z'
        StarterPagePgref.current.style.background = "#242d34";



    }
    const TelePortToUserHome = () => {
        const containsWhitespace = str => /\s/.test(str);
        if (demonLoginBtnref.current.classList.contains("opacity-[0.5]")) {

        }
        else {
            if (usernameInputref.current.value.charAt(0) !== '@') {
                alert("Username must start with '@'")
            }
            else if(containsWhitespace(usernameInputref.current.value) === true){
                alert("Username cannot have space")
            }
            else {
            
                // let guestPfp =  document.getElementById("guestUserProfilePic").files[0];
        //   let reader = new FileReader();
        //   reader.onloadend = function() {
        //       let base64data = reader.result;
        //       localStorage.setItem('userPfpImage', base64data);
        //   }
        //   reader.readAsDataURL(guestPfp);
          


                var userData = {
                    "guestName" : `${nameInputref.current.value}`,
                    "guestUserName" : `${usernameInputref.current.value}`,
                }

                if(localStorage.getItem("userDetails") == null){
                    localStorage.setItem("userDetails",JSON.stringify([userData]));
                }
                else{
                    var temp = JSON.parse(localStorage.getItem("userDetails"))
                    temp.splice(0,1,userData);
                    localStorage.setItem("userDetails",JSON.stringify(temp))

                }

                Navigater("/guest_user_home")
                document.title = 'Home / Z'
            }

        }
    }
    const guestPopUpClose = () => {
        document.title = 'Zed - It is What Is'
        DemoLoginPopref.current.classList.add("hidden");
        StarterPagePgref.current.style.background = "black";


        usernameInputref.current.value = "";
        nameInputref.current.value = "";

        usernameInputref.current.classList.remove("activeForInput")
        nameInputref.current.classList.remove("activeForInput")

        usernameInputref.current.nextElementSibling.classList.remove("activeForLabel")
        nameInputref.current.nextElementSibling.classList.remove("activeForLabel")

    }
    const ActiveInputLabelStyle = (e) => {
        e.target.classList.add("activeForInput")
        e.target.nextElementSibling.classList.add("activeForLabel")
    }
    const DeActiveInputLabelStyle = (e) => {
        if (e.target.value === '') {
            e.target.classList.remove("activeForInput")
            e.target.nextElementSibling.classList.remove("activeForLabel")
        }
    }


    return (
        <>

            <div ref={StarterPagePgref} id="StarterPagePg" className="bg-black mx-auto max-w-[100vw] max-h-[100vh] sm:overflow-hidden">
                <main className="wholeContainer text-white w-[100vw] h-[100vh] flex flex-col gap-8
      md:gap-0 md:justify-around">
                    <div className="zonebox py-10 px-10 flex flex-col gap-14  lg:flex-row md:justify-around lg:items-center ">

                        <div className="zedImgCont md:w-1/2 md:flex md:justify-center relative">
                            <div className="zedImgShell">
                                <img src="img/zitter-com.png" alt="" className="w-11 md:w-24 lg:w-[19.9rem]" />
                            </div>
                        </div>



                        <div className="entryFormCont md:w-1/2 md:flex md:justify-center">
                            <div className="formBox flex flex-col gap-10 md:gap-16">
                                <div className="boxhead">
                                    <h1 className=" text-[2.6rem] tracking-wider md:text-6xl lg:text-7xl md:relative md:top-5">Happening now</h1>
                                </div>
                                <div className="entryForm flex flex-col gap-5">
                                    <h2 className="text-2xl font-bold">Explore today.</h2>

                                    <div className="loginOpts flex flex-col gap-2 max-w-fit duration-[300ms]">
                                        <div
                                            className="continueWith Google bg-white text-black rounded-3xl flex justify-center items-center  py-2 w-[300px] h-[40px] cursor-pointer 
                                  hover:bg-yellow-200 lg:h-[43px]">
                                            <span><img src="img/google.webp" alt="" className="w-[1.3rem] ml-2.5" /></span>
                                            <span className="text-base font-sans pl-3">Sign up with Google</span>
                                        </div>
                                        <div
                                            className="continueWith Apple bg-white text-black rounded-3xl flex justify-center items-center gap-x-3 py-2 w-[300px] h-[40px] cursor-pointer hover:bg-yellow-200 lg:h-[43px]">
                                            <span><img src="img/apple.webp" alt="" className="w-[1.3rem]" /></span>
                                            <span className="text-base tracking-wider">Sign up with Apple</span>
                                        </div>

                                        <div className="hrcont relative my-3 w-[300px]">
                                            <hr className="Options-div border-[1px]" />
                                            <span className="absolute -top-3.5 left-[8.5rem] px-2 bg-black">or</span>
                                        </div>
                                        <Link to="/guest_login"><button className="guestFormBtn bg-[#1d9bf0] rounded-3xl font-semibold text-lg hover:bg-sky-700 w-[300px] py-2 outline-none border-none" onClick={guestVisitLogin}>Guest Visit</button></Link>

                                        <p className="text-[0.725rem] leading-none text-[#6c7176] w-[332px]">By signing up, you agree to
                                            the <span className="imp-text hover:underline">Terms of Service</span> and <span
                                                className="imp-text hover:underline">Privacy Policy</span>, including <span
                                                    className="imp-text hover:underline">Cookie Use.</span></p>


                                    </div>
                                </div>
                                <div className="formFooter">
                                    <div className="randomEntry flex flex-col gap-3">
                                        <div className="RandomHead font-semibold text-xl">Too Lazy to set up?</div>
                                        <button
                                            className="text-[#1d9bf0] border-2 border-[#485762] w-[300px] py-2 rounded-3xl font-semibold text-base duration-[100ms] hover:shadow-[0_0_15px_0.2rem_rgba(255,255,255,0.3)]">Hold
                                            Up I got you</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer>
                        <ul className="footerList flex flex-wrap w-[100vw] text-sm justify-center items-center gap-x-4 px-4 py-3">
                            <li className="text-[#676b70]">About</li>
                            <li className="text-[#676b70] hover:underline cursor-pointer">Download the Z app</li>
                            <li className="text-[#676b70] hover:underline cursor-pointer">Help Center</li>
                            <li className="text-[#676b70] hover:underline cursor-pointer">Terms of Service</li>
                            <li className="text-[#676b70] hover:underline cursor-pointer">Privacy Policy</li>
                            <li className="text-[#676b70] hover:underline cursor-pointer">Cookie Policy</li>
                            <li className="text-[#676b70] hover:underline cursor-pointer">Accessibility</li>
                            <li className="text-[#676b70] hover:underline cursor-pointer">Ads info</li>
                            <li className="text-[#676b70] hover:underline cursor-pointer">Blog</li>
                            <li className="text-[#676b70] hover:underline cursor-pointer">Careers</li>
                            <li className="text-[#676b70] hover:underline cursor-pointer">Brand Resources</li>
                            <li className="text-[#676b70] hover:underline cursor-pointer">Advertising</li>
                            <li className="text-[#676b70] hover:underline cursor-pointer">Marketing</li>
                            <li className="text-[#676b70] hover:underline cursor-pointer">Z for Business</li>
                            <li className="text-[#676b70] hover:underline cursor-pointer">Developers</li>
                            <li className="text-[#676b70] hover:underline cursor-pointer">Directory</li>
                            <li className="text-[#676b70] hover:underline cursor-pointer">Settings</li>
                            <li className="text-[#676b70] ">© 2024 Z Corp.</li>

                        </ul>
                    </footer>
                </main>

                <section ref={DemoLoginPopref} id="DemoLoginPop" className="popUpCont hidden absolute z-[998] min-w-[100%] min-h-[100%] bg-black md:bg-[rgba(0,0,0,0.2)]">

                    <div className="popUpcontents absolute z-[999] flex flex-col justify-between gap-10 w-[100vw] h-[100vh] mx-auto text-white  px-4 py-3 md:w-[600px] md:h-fit md:rounded-xl md:pb-3 bg-black md:top-1/2 md:left-1/2 md:-translate-x-[50%] md:-translate-y-[50%]">
                        <div className="formBtndiv flex flex-col gap-7">


                            <div className="popHeader flex relative justify-center items-center">
                                <div id='crossPopButton' className="crossPopBtn  px-2 rounded-full hover:bg-[rgba(255,255,255,0.15)] absolute text-white -left-1 text-3xl -top-1 flex justify-center items-center" onClick={guestPopUpClose}>
                                    <Link to="/"><button>&times;</button></Link></div>
                                <span><img src="img/zitter-com.png" alt="" width="32px" /></span>
                            </div>
                            {/* <!-- INPUT AREA FOR ENTRY --> */}
                            <div className=" px-4 flex flex-col gap-6 relative md:px-10">
                                <span className="peFhead text-[1.65rem] font-semibold">Create guest account</span>
                                <div className="nameINpBox relative h-fit w-[100%]">
                                    <input onFocus={ActiveInputLabelStyle} onBlur={DeActiveInputLabelStyle} onInput={ActiveGuestLoginBtn} className="inputEntity py-4 w-[100%] outline-none bg-transparent border-[1px] border-solid border-[#2c2f31] rounded-lg px-3 duration-[400ms]" type="text" name="" id="nameInput" ref={nameInputref} />
                                    <label htmlFor="nameInput" id="nameLabel" className="absolute left-0 my-4 mx-4 text-[#6e7378] z-[-1] duration-[400ms] px-1">Name</label>
                                </div>

                                <div className="nameINpBox relative h-fit w-[100%]">
                                    <input onFocus={ActiveInputLabelStyle} onBlur={DeActiveInputLabelStyle} onInput={ActiveGuestLoginBtn} className="inputEntity py-4 w-[100%] outline-none  bg-transparent border-[1px] border-[#2c2f31] rounded-lg px-3 duration-[400ms]" type="text" name="" id="usernameInput" ref={usernameInputref} />
                                    <label htmlFor="usernameInput" className="absolute left-0 my-4 mx-4 text-[#6e7378] z-[-1] duration-[400ms] px-1">Username</label>
                                </div>
                                <span className="useEmailTxt absolute text-[0.9rem] text-blue-400 font-semibold tracking-wide right-4 -bottom-8 md:right-10">Add @ in username</span>
                            </div>

                            <div className="profilePicInputBox px-4 flex flex-col mt-5 gap-1 md:px-10 ">
                                <h2 className="font-semibold text-xl tracking-wide">Profile picture</h2>
                                <p className="text-[0.8rem] text-[#71767b] max-w-[440px]">A picture helps people recognize you and lets you know when you’re signed in to your account</p>
                                
                                <div className="holderofPickedImg flex justify-between items-center gap-x-2">
                                <div className="picInputBox w-2/3 bg-transparent px-5 py-6 pt-5 border-[2px] border-[#2c2f31] border-dashed rounded-lg  flex justify-center items-center">
                                    <input className="outline-none hidden " type="file" accept="image/jpeg, image/jpg, imgage/png" id="guestUserProfilePic" ref={guestUserProfilePicref} onChange={updatePreviewUserImg} />
                                    <label htmlFor="guestUserProfilePic" className="text-[1.115rem] md:text-xl font-mono cursor-pointer">Upload A picture</label>
                                </div>
                                <div className="web-USERimgPreview min-w-20 h-20 max-h-[80px] flex justify-center items-start mr-2 md:pr-5 ">
                                        <img src="img/defaultUserImg.jpg" className="w-[4.9rem] h-20  rounded-full" alt="" id='UserPostFieldUserImg' ref={UserPostFieldUserImgref} />
                                 </div>

                                 {/* <div className="web-USERimgPreview min-w-20 max-w-20  max-h-20 rounded-full flex justify-center  items-start mr-2 md:pr-5 overflow-hidden object-cover">
                                        <img src="img/defaultUserImg.jpg" className="w-20 max-w-20 overflow-hidden" alt="" id='UserPostFieldUserImg' ref={UserPostFieldUserImgref} />
                                 </div> */}
                                 </div>
                            </div>

                        </div>
                        <button ref={demonLoginBtnref} className="demonLoginBtn flex items-center justify-center bg-white text-black mx-8 mt-5 mb-1 py-2 rounded-3xl text-lg font-semibold relative" onClick={TelePortToUserHome}>Login</button>

                    </div>
                </section>
                <script src="script.js" type="module"></script>
            </div>

        </>
    )
}

export default StarterPage

