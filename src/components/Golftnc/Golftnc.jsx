import React from 'react';
import { useTranslation} from 'react-i18next';


const Golftnc = () => { 

  const { t } = useTranslation();
    
    return (
      <div className="mx-auto w-full px-12 py-12">                 
      <div>
      <p className='pb-2' dangerouslySetInnerHTML={{__html: t('GolfTnc.paragraph1')}}></p>
      <p className='pb-2' dangerouslySetInnerHTML={{__html: t('GolfTnc.paragraph2')}}></p>
             
      </div>
      </div>  
  );
}

export default Golftnc;