import React from 'react';
import { useTranslation} from 'react-i18next';
import phoneSMS from './assets/Phone-SMS.png';
import phoneCall from './assets/Phone-call.png';

const MasterActivateThree = () => { 
  const { t } = useTranslation();
    
  return (
    <div className="container mx-auto relative">                    
      <div className="mx-10 md:mx-0 mb-16">
        <div>
          <div className="flex flex-col items-center">
            <h6 className="font-interstate text-white font-bold text-[16px] leading-[20px] tracking-[0.1em] text-center mb-10">{t('master.activateThree.title')}</h6>            
          </div>  
          <div className="flex flex-col items-center mt-10">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              <div className="flex flex-col items-center">
                <img 
                  src={phoneSMS} 
                  alt="phone-sms" 
                  className='mb-10' 
                  style={{ 
                    width: '130px',
                    height: 'auto',
                    display: 'inline-block',
                    verticalAlign: 'middle'
                  }} 
                />
                <h6 className='font-interstate text-[#D4AF37] font-bold text-[16px] leading-[20px] tracking-[0.1em] text-center'>Main Cardmember:</h6>
                <p className='text-white font-interstate-extralight font-extralight text-[14px] leading-[20px] tracking-[0.03em] text-center mb-10'>{t('master.activateThree.column1Main')}</p>
                <h6 className='font-interstate text-[#D4AF37] font-bold text-[16px] leading-[20px] tracking-[0.1em] text-center'>Supplementary Cardmember:</h6>
                <p className='text-white font-interstate-extralight font-extralight text-[14px] leading-[20px] tracking-[0.03em] text-center'>{t('master.activateThree.column1Supplementary')}</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={phoneCall} 
                  alt="phone-call" 
                  className='mb-10' 
                  style={{ 
                    width: '130px',
                    height: 'auto',
                    display: 'inline-block',
                    verticalAlign: 'middle'
                  }} 
                />
                <p className='text-white font-interstate-extralight font-extralight text-[14px] leading-[20px] tracking-[0.03em] text-center'>Contact our Citiphone hotline</p>
                <p className='text-white font-interstate-extralight font-bold text-[14px] leading-[20px] tracking-[0.03em] text-center'>{t('master.activateThree.column2Phone')}</p>
              </div>
            </div>
          </div>        
        </div>
      </div>
    </div> 
  );
}

export default MasterActivateThree;