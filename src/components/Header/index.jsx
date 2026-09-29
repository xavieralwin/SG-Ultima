import React, { useState } from 'react';
import Video from "../Video";
import GoldButton from '../../components/GoldButton';
import muteButton from '../../assets/images/button_mute.svg';
import unmuteButton from '../../assets/images/button_unmute.svg';
import { classNames } from '../../helpers/common.helpers';
// import MCBanner from './assets/MC-Banner.jpg';
// import VisaBanner from './assets/MC-Banner.jpg';
import './styles.css';
function Header({
  type = 'image',
  imagePos = 'bg-left-top',
  imageUrl,
  title, 
  subTitle, 
  preTitle, 
  }) { 
  const [finished, setFinished] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoFinished = () => (setFinished(1));
  const handleToggleMuted = () => {
    setMuted(!muted)
    if (ctaBtnName === 'Unmute') {
      setButtonText('Mute');
    } else {
      setButtonText('Unmute');
    }
  }



  const [ctaBtnName, setButtonText] = useState('Unmute');


const header_video = 'https://www.findmyciti.com/my/Ultima_Product_MC_16x9.mp4';
  const mobile_video = 'https://www.findmyciti.com/my/Ultima_Product_MC_9x16.mp4';
  
  const header_video_visa = 'https://www.findmyciti.com/my/Ultima_Product_VISA_16x9.mp4';
  const mobile_video_visa = 'https://www.findmyciti.com/my/Ultima_Product_VISA_9x16.mp4';
  
  // Set the default video URLs
  let videoUrl = header_video;
  let videoMobileUrl = mobile_video;
  
  // Check if the journey is 'visa' and update the URLs accordingly
  if (window.journey === 'visa') {
    videoUrl = header_video_visa;
    videoMobileUrl = mobile_video_visa;
  }
  return (
    <div>
    {type === 'image' && (
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className={classNames(
            imagePos,
            `w-screen h-screen inline-block bg-no-repeat bg-cover`
            )}          
        >
          <div className='z-10 absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-3/4 text-center'>
            {preTitle && (<div className=' text-base font-extralight text-white uppercase' dangerouslySetInnerHTML={{__html: preTitle}}></div>)}
            <h1 className="text-white header-title" dangerouslySetInnerHTML={{__html: title}}></h1>
            <h3 className="text-white text-base font-light mt-8"  dangerouslySetInnerHTML={{__html: subTitle}}></h3>
          </div>          
        </div>          
    )}
    {type === 'footerimage' && (
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className={`w-screen terms-header inline-block bg-no-repeat bg-bottom`}   
        >
          <div className='z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
            <h1 className="text-white header-title gradient-title-text" dangerouslySetInnerHTML={{__html: title}}></h1>
            <h3 className="text-white text-md font-light mt-8"  dangerouslySetInnerHTML={{__html: subTitle}}></h3>
          </div>          
        </div>          
    )}
    {type === 'video' && (
      <div className='pb-20 relative'>
        <div className="z-10 absolute left-1/2 bottom-0 -translate-x-1/2 flex flex-col items-center">                    
          <GoldButton href='#/luxuries' text='Explore Privileges' position='top' className={classNames(
          finished===0 ? 'invisible' : 'visible',
          "mb-4" 
          )}  />         
          <button data-ctaposition='Header' data-ctatype='button' data-ctaname={ctaBtnName}  className='w-14 h-14 rounded-full bg-yellow-gold/20 hover:bg-yellow-gold/5 round-gradient-border' onClick={() => handleToggleMuted()} >
            {muted ? <img src={muteButton} alt='Mute' /> : <img src={unmuteButton} alt='Unmute' /> }
          </button>
        </div>   
        <div className='hidden md:inline-block'>          
          <Video videoUrl={videoUrl} muted={muted} autoPlay={true} onEnded={videoFinished}/> 
        </div>               
        <div className='md:hidden'>
          <Video videoUrl={videoMobileUrl} muted={muted} autoPlay={true} onEnded={videoFinished} /> 
        </div>
      </div>          
    )}  
    </div> 
  );
};
  
export default Header;


// import React from 'react';
// import GoldButton from '../../components/GoldButton';
// import { classNames } from '../../helpers/common.helpers';

// import MCBanner from './assets/MC-Banner.jpg';
// import VisaBanner from './assets/Visa-Banner.jpg';

// import MCmob from './assets/MC-Mob-Banner.jpg';
// import VisaMob from './assets/Visa-Mob-Banner.jpg';

// import './styles.css';

// function Header({
//   type = 'image',
//   imagePos = 'bg-left-top',
//   imageUrl,
//   title,
//   subTitle,
//   preTitle,
// }) {
//   // ✅ No video now, so make CTA visible by default
//   //const [finished, setFinished] = useState(0);

//   // ✅ Desktop banner based on journey
//   const desktopBanner = window.journey === 'visa' ? VisaBanner : MCBanner;

//   // ✅ Mobile banner based on journey
//   const mobileBanner = window.journey === 'visa' ? VisaMob : MCmob;

//   return (
//     <div>
//       {type === 'image' && (
//         <div
//           style={{ '--image-url': `url(${imageUrl})` }}
//           className={classNames(
//             imagePos,
//             `w-screen h-screen inline-block bg-[image:var(--image-url)] bg-no-repeat bg-cover`
//           )}
//         >
//           <div className='z-10 absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-3/4 text-center'>
//             {preTitle && (
//               <div
//                 className='text-base font-extralight text-white uppercase'
//                 dangerouslySetInnerHTML={{ __html: preTitle }}
//               ></div>
//             )}
//             <h1 className="text-white header-title" dangerouslySetInnerHTML={{ __html: title }}></h1>
//             <h3 className="text-white text-base font-light mt-8" dangerouslySetInnerHTML={{ __html: subTitle }}></h3>
//           </div>
//         </div>
//       )}

//       {type === 'footerimage' && (
//         <div
//           style={{ '--image-url': `url(${imageUrl})` }}
//           className={`w-screen terms-header inline-block bg-[image:var(--image-url)] bg-no-repeat bg-bottom`}
//         >
//           <div className='z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
//             <h1
//               className="text-white header-title gradient-title-text"
//               dangerouslySetInnerHTML={{ __html: title }}
//             ></h1>
//             <h3
//               className="text-white text-md font-light mt-8"
//               dangerouslySetInnerHTML={{ __html: subTitle }}
//             ></h3>
//           </div>
//         </div>
//       )}

//       {type === 'video' && (
//         <div className='pb-20 relative'>
//           <div className="z-10 absolute left-1/2 bottom-0 -translate-x-1/2 flex flex-col items-center">
//             <GoldButton
//               href='#/luxuries'
//               text='Explore Privileges'
//               position='top'
//               className={classNames(
//                  'visible',
//                 "mb-4"
//               )}
//             /> 
//           </div>

//           {/* ✅ Desktop banner */}
//           <div className='hidden md:inline-block w-full'>
//             <img
//               src={desktopBanner}
//               alt={window.journey === 'visa' ? 'Visa Desktop Banner' : 'MC Desktop Banner'}
//               className='w-full h-auto object-cover'
//             />
//           </div>

//           {/* ✅ Mobile banner */}
//           <div className='md:hidden w-full'>
//             <img
//               src={mobileBanner}
//               alt={window.journey === 'visa' ? 'Visa Mobile Banner' : 'MC Mobile Banner'}
//               className='w-full h-auto object-cover'
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Header;
