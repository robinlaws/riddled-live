import React from "react";
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon} from "react-share";



export function SocialMedia(){
    let url = 'https://riddled.ca';
  return (
    <div className="social">
        <FacebookShareButton url={url} title="Share Riddled on Facebook!" ><FacebookIcon style={{margin:"10px"}}/></FacebookShareButton>
        <TwitterShareButton url={url} title="Share Riddled on Twitter!"><TwitterIcon/></TwitterShareButton>
    </div>
  )
}
export default SocialMedia;