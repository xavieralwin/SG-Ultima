import React, { useState, useEffect } from 'react';
import { useTranslation} from 'react-i18next';
import ActivateOne from './assets/activate1.png';
import ActivateTwo from './assets/activate2.png';
import ActivateThree from './assets/activate3.png';
import one from './assets/1.png';
import two from './assets/2.png';
import three from './assets/3.png';

const MasterActivateOne = () => { 
  const { t } = useTranslation();
  const [currentFrame, setCurrentFrame] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev % 3) + 1);
    }, 3000); // Change frame every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const getFrameContent = () => {
    switch(currentFrame) {
      case 1:
        return {
          activate: ActivateOne,
          number: one,
          text: t('master.activate.frame1')
        };
      case 2:
        return {
          activate: ActivateTwo,
          number: two,
          text: t('master.activate.frame2')
        };
      case 3:
        return {
          activate: ActivateThree,
          number: three,
          text: t('master.activate.frame3')
        };
      default:
        return {
          activate: ActivateOne,
          number: one,
          text: t('master.activate.frame1')
        };
    }
  };

  const frame = getFrameContent();
    
  return (
    <div className="container mx-auto relative">                    
      <div className="mx-10 md:mx-0 mb-16">
        <div className="flex flex-col items-center">
          <h6 className="font-interstate text-white font-bold text-[16px] leading-[20px] tracking-[0.1em] text-center mb-10">{t('master.activate.subtitle')}</h6>
        </div>
        <div id="activate1" className="transition-opacity duration-500">
          <div className="flex flex-col items-center">
            <img src={frame.activate} alt={`Activate ${currentFrame}`} />
            <img src={frame.number} alt={`${currentFrame}`} className='mt-10' />
          </div>
          <div className="text-center text-white font-interstate-extralight font-extralight text-[14px] leading-[20px] tracking-[0.03em] mt-4" dangerouslySetInnerHTML={{__html: frame.text}}></div>
        </div>
      </div>
    </div>  
  );
}

export default MasterActivateOne;