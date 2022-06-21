import React from "react";
import {ShareSocial} from 'react-share-social'; 
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon} from "react-share";



export function SocialMedia(){
    let url = window.location.href;
  return (
    <div className="social">
        <FacebookShareButton url={url} title="Share Riddled on Facebook!" ><FacebookIcon style={{margin:"10px"}}/></FacebookShareButton>
        <TwitterShareButton url={url} title="Share Riddled on Twitter!"><TwitterIcon/></TwitterShareButton>
    </div>
  )
}
export default SocialMedia;