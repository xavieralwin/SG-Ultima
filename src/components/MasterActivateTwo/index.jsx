import React from 'react';
import { useTranslation} from 'react-i18next';
import one from './assets/1.png';
import two from './assets/2.png';
import three from './assets/3.png';
import suplimentaryImage from './assets/activate-supplementary.png';

const MasterActivateTwo = () => { 
  const { t } = useTranslation();
    
  return (
    <div className="container mx-auto relative">                    
      <div className="mx-10 md:mx-0 mb-16">
        <div>
          <div className="flex flex-col items-center">
            <h6 className="font-interstate text-white font-bold text-[16px] leading-[20px] tracking-[0.1em] text-center mb-10">{t('master.activateTwo.title')}</h6>
            <img src={suplimentaryImage} alt="suplimentary" />
          </div>  
          <div className="flex flex-col items-center mt-10">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              <div className="flex flex-col justify-center">
                <h6 className="font-interstate text-[#D4AF37] font-bold text-[16px] leading-[20px] tracking-[0.1em] text-center mb-6">{t('master.activateTwo.column1Title')}</h6>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img src={one} alt="1" className="w-6 h-6" />
                    <p className="text-white font-interstate-extralight font-extralight text-[14px] leading-[20px] tracking-[0.03em]" dangerouslySetInnerHTML={{__html: t('master.activateTwo.column1Text1')}}></p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={two} alt="2" className="w-6 h-6" />
                    <p className="text-white font-interstate-extralight font-extralight text-[14px] leading-[20px] tracking-[0.03em]" dangerouslySetInnerHTML={{__html: t('master.activateTwo.column1Text2')}}></p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={three} alt="3" className="w-6 h-6" />
                    <p className="text-white font-interstate-extralight font-extralight text-[14px] leading-[20px] tracking-[0.03em]" dangerouslySetInnerHTML={{__html: t('master.activateTwo.column1Text3')}}></p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h6 className="font-interstate text-[#D4AF37] font-bold text-[16px] leading-[20px] tracking-[0.1em] text-center mb-6">{t('master.activateTwo.column2Title')}</h6>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img src={one} alt="1" className="w-6 h-6" />
                    <p className="text-white font-interstate-extralight font-extralight text-[14px] leading-[20px] tracking-[0.03em]" dangerouslySetInnerHTML={{__html: t('master.activateTwo.column2Text1')}}></p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={two} alt="2" className="w-6 h-6" />
                    <p className="text-white font-interstate-extralight font-extralight text-[14px] leading-[20px] tracking-[0.03em]" dangerouslySetInnerHTML={{__html: t('master.activateTwo.column2Text2')}}></p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={three} alt="3" className="w-6 h-6" />
                    <p className="text-white font-interstate-extralight font-extralight text-[14px] leading-[20px] tracking-[0.03em]" dangerouslySetInnerHTML={{__html: t('master.activateTwo.column2Text3')}}></p>
                  </div>
                </div>
              </div>
            </div>
          </div>        
        </div>
      </div>
    </div>  
  );
}

export default MasterActivateTwo;