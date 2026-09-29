import React from 'react';
import { useTranslation} from 'react-i18next';
import GoldButton from '../../components/GoldButton';
import { speedBump } from '../../helpers/common.helpers';
import date from './assets/footer-date.svg';
import location from './assets/footer-location.svg';
import time from './assets/footer-time.svg';
import cost from './assets/footer-cost.svg';
import dining from './assets/footer-dining.svg';

function GastroFooter({
  varient
}) { 

  const { t } = useTranslation();


  return (
    <>
    <div className="container mx-auto relative py-20">   
      <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 mx-10 lg:mx-40 mt-10 md:mt-0">
            <div className='mx-4 mb-10 xl:mb-0'>
              <img src={date} alt='footer date' className='mx-auto mb-11'/>
              <h5 className='text-sm text-white text-center uppercase' dangerouslySetInnerHTML={{__html: t('gastro.footerDetail1')}}></h5>
            </div>
            <div className='mx-3 mb-10 xl:mb-0'>
              <img src={location} alt='footer location' className='mx-auto mb-11'/>
              <h5 className='text-sm text-white text-center uppercase' dangerouslySetInnerHTML={{__html: t('gastro.footerDetail2')}}></h5>
              <p className='text-[0.5rem] mt-2 text-white text-center' dangerouslySetInnerHTML={{__html: t('gastro.footerAddress')}}></p>
            </div>
            <div className='mx-3 mb-10 xl:mb-0'>
              <img src={time} alt='footer time' className='mx-auto mb-11'/>
              <h5 className='text-sm text-white text-center uppercase' dangerouslySetInnerHTML={{__html: t('gastro.footerDetail3')}}></h5>
            </div>
            <div className='mx-3 mb-10 xl:mb-0'>
              <img src={cost} alt='footer cost' className='mx-auto mb-11'/>
              <h5 className='text-sm text-white text-center uppercase' dangerouslySetInnerHTML={{__html: t('gastro.footerDetail4')}}></h5>
            </div>
            <div className='mx-3'>
              <img src={dining} alt='footer dining' className='mx-auto mb-11 gastro-icon'/>
              <h5 className='text-sm text-white text-center uppercase' dangerouslySetInnerHTML={{__html: t('gastro.footerDetail5')}}></h5>
              <p className=' text-xs mt-2 text-white text-center' dangerouslySetInnerHTML={{__html: t('gastro.footerAddress5')}}></p>
            </div>
          </div>
      </div>                 
    </div>   
    <div className="container mx-auto relative pb-20">   
      <div className="flex justify-center">
          <div className="grid grid-cols-1 mx-10 md:mx-30 mt-10 md:mt-0">                  
              <div className="flex justify-center flex-col">
                <div className='flex justify-center'>
                  <span className='text-white mb-2'></span>
                </div>
                <div className='flex justify-center'>
                  <GoldButton href={t('gastro.buttonLink')} target='_blank' onClick={(e) => speedBump(e, t('navigation.externalLinkText'), t('gastro.buttonLink'))} text={t('gastro.button')} />                                                                                  
                </div>
              </div>
              <div className='mt-8'>
                  <p className='text-center text-white text-sm leading-5 tracking-widest font-extralight highlight-links' dangerouslySetInnerHTML={{__html: t('gastro.chefCopy2')}}></p>                        
              </div>
          </div>
      </div>                 
    </div>   
  </>
  );
};

  

export default GastroFooter;
