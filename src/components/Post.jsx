import React from 'react'

const Post = (props) => {

//social item style
var likeButtonClick = false;
var updateLikeClick = false;
var postImgClickLiked = false;
const LikeThePostClick = (e)=>{

    if(e.currentTarget.id === 'pinkItem'){

        if(updateLikeClick === true){
            e.currentTarget.classList.remove("active-socialItem-special-pink")
            likeButtonClick = false;
            updateLikeClick = false;
            postImgClickLiked = false;
        }
        else{
            e.currentTarget.classList.add("active-socialItem-special-pink")
            likeButtonClick = true;
            updateLikeClick = true;
            postImgClickLiked = true;
        }

       
       }

}


const socialItemStyleOn = (e)=>{
   if(e.currentTarget.id === 'pinkItem'){

    e.currentTarget.classList.add("active-socialItem-special-pink")

   }
   else if(e.currentTarget.id === 'greenItem'){
    e.currentTarget.classList.add("active-socialItem-special-green")
}
else{
       e.currentTarget.classList.add("active-socialItem")
   }
  
}

const socialItemStyleOff =(e)=>{
    if(e.currentTarget.id === 'pinkItem'){
        if(!likeButtonClick){
            e.currentTarget.classList.remove("active-socialItem-special-pink")

        }
       }
       else if(e.currentTarget.id === 'greenItem'){
        e.currentTarget.classList.remove("active-socialItem-special-green")
    }
    else{
           e.currentTarget.classList.remove("active-socialItem")
       }
}

const userDoubleClickLikePost = (e)=>{

     if(postImgClickLiked === true){
       e.currentTarget.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.classList.remove("active-socialItem-special-pink")
        postImgClickLiked = false;
        likeButtonClick = false;
        updateLikeClick = false;
    }
    else{
        e.currentTarget.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.classList.add("active-socialItem-special-pink")
        postImgClickLiked = true;
        likeButtonClick = true;
        updateLikeClick = true;
    }


}
//social item style END

  return (
    <>
      <article className="web-post border-[1px] border-solid border-[#2f3336] border-x-0 px-4 ">
                    <div className="web-postVassal py-2 pt-3 flex justify-center">
                        <div className="web-postAccountImgHolder min-w-10 flex justify-center items-start mr-2">
                            <img src={props.accountPfp} className="w-10  rounded-full" alt=""/>
                        </div>

                        <div className="web-postContent w-full flex flex-col gap-y-[2.5px]">
                            <div className="web-postAccountDetail w-full flex justify-between relative">
                                <div className="flex gap-x-2 items-center">
                                    <span className="acc-name font-bold text-[0.94rem] flex gap-x-[3px] items-center">{props.accountName} {props.tick ? <svg viewBox="0 0 22 22" aria-label="Verified account" role="img"
                                            className={`w-4 fill-[#1d9bf0] r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i`}
                                            data-testid="icon-verified">
                                            <g>
                                                <path
                                                    d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z">
                                                </path>
                                            </g>
                                        </svg> : '' }
                                        </span>
                                    <span
                                        className="acc-username font-semibold tracking-wide text-[0.9rem] text-[#71767b]">{props.accountUsername}</span>
                                    <span className="acc-post-time text-[0.9rem] text-[#71767b]">{props.postTime}</span>
                                </div>

                                <div
                                    className="web-post3dot absolute w-7 h-7 rounded-full hover:bg-[#1c99ec33] right-0 -top-1 flex justify-center items-center">
                                    <i
                                        className="fa-solid fa-ellipsis text-[#71767b] hover:text-[#1c98ec] cursor-pointer"></i>
                                </div>

                            </div>
                            <span className="web-postTextContent text-[0.9rem] text-wrap w-80 xl:w-[540px] ">{props.postText}
                                </span>
                            <div  onDoubleClick={userDoubleClickLikePost}    className="web-postImgCard w-11/12 md:w-full max-w-md xl:max-w-[34.5rem]  object-cover overflow-hidden rounded-2xl mt-2">  
                                <img src={props.postimgageurl} alt="Post Image" className="xl:w-[39rem] " />
                            </div>

                            <div className="web-analytical mt-2 flex gap-x-4 justify-between items-center w-full max-w-md xl:max-w-2xl">
                                <div className="flex justify-start items-center gap-x-[1.6rem] md:gap-x-[1.8rem] lg:gap-x-11 xl:gap-x-16 ">
                                    <span
                                           onClick={LikeThePostClick}  onMouseOut={socialItemStyleOff}   onMouseOver={socialItemStyleOn}  className="web-socialItem text-[#6e7378] flex items-center justify-center w-fit cursor-pointer">
                                        <span className="siBg w-6 h-6  flex justify-center items-center rounded-full">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="w-4 fill-[#6e7378] r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                                                <g>
                                                    <path
                                                        d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="text-[0.75rem] relative bottom-[1px]">1.9K</span>
                                    </span>

                                    <span id="greenItem"
                                           onClick={LikeThePostClick}  onMouseOut={socialItemStyleOff}   onMouseOver={socialItemStyleOn}  className="web-socialItem text-[#6e7378] flex items-center justify-center w-fit cursor-pointer">
                                        <span className="siBg w-6 h-6  flex justify-center items-center rounded-full">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="w-4 fill-[#6e7378] r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                                                <g>
                                                    <path
                                                        d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="text-[0.75rem] relative bottom-[0.5px]">6.9K</span>
                                    </span>

                                    <span id="pinkItem"
                                           onClick={LikeThePostClick}  onMouseOut={socialItemStyleOff}   onMouseOver={socialItemStyleOn}  className="web-socialItem text-[#6e7378] flex items-center justify-center w-fit cursor-pointer">
                                        <span className="siBg w-6 h-6  flex justify-center items-center rounded-full">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="w-4 fill-[#6e7378] r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                                                <g>
                                                    <path
                                                        d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="text-[0.75rem] relative bottom-[0.5px]">6.9K</span>
                                    </span>

                                    <span
                                           onClick={LikeThePostClick}  onMouseOut={socialItemStyleOff}   onMouseOver={socialItemStyleOn}  className="web-socialItem text-[#6e7378] flex items-center justify-center w-fit cursor-pointer">
                                        <span className="siBg w-6 h-6  flex justify-center items-center rounded-full">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="w-4 fill-[#6e7378] r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                                                <g>
                                                    <path
                                                        d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="text-[0.75rem]">280K</span>
                                    </span>
                                </div>
                                <div className="flex justify-start items-center gap-x-3">
                                    <span
                                           onClick={LikeThePostClick}  onMouseOut={socialItemStyleOff}   onMouseOver={socialItemStyleOn}  className="web-socialItem text-[#6e7378] flex items-center justify-center w-fit cursor-pointer">
                                        <span className="siBg w-6 h-6  flex justify-center items-center rounded-full">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="w-4 fill-[#6e7378] r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                                                <g>
                                                    <path
                                                        d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </span>
                                    </span>
                                    <span
                                           onClick={LikeThePostClick}  onMouseOut={socialItemStyleOff}   onMouseOver={socialItemStyleOn}  className="web-socialItem text-[#6e7378] flex items-center justify-center w-fit cursor-pointer">
                                        <span className="siBg w-6 h-6  flex justify-center items-center rounded-full">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="w-4 fill-[#6e7378] r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
                                                <g>
                                                    <path
                                                        d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                            </div>

                        </div>


                    </div>
                </article>
    </>
  )
}

export default Post
