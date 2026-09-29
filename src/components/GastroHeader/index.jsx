import React from 'react';
import { useTranslation} from 'react-i18next';
// import logo from './assets/Resized_2024_MICHELIN_partnership_logo_lockup.svg';
import logo from './assets/Citi_Ultima_White_on_Black-preview.png';
import './styles.css';

function GastroHeader({
  varient
}) { 

  const { t } = useTranslation();

  
  let title = t('gastro.title');
  let copy = t('gastro.copy');
  


  return (
    <div className="container mx-auto relative py-20" >   
      <div className="flex justify-center" id="michelin">
          <div className="grid grid-cols-1 mx-10 md:mx-40 mt-10 md:mt-0" >
            <img src={logo} alt='MICHELIN & Citi ULTIMA' className='m-auto'/>        
            <h1 className="text-white gastro-header-title mt-6" dangerouslySetInnerHTML={{__html: title}}></h1>
            <p className="text-white text-center text-sm font-extralight leading-5 mt-8"  dangerouslySetInnerHTML={{__html: copy}}></p>
          </div>
      </div>                 
    </div>   
  );
};

  

export default GastroHeader;
