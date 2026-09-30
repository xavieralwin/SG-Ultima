import React from 'react';
import { useTranslation} from 'react-i18next';


const CitiworldNotice = () => { 

  const { t } = useTranslation();
    
    return (
      <div className="container mx-auto relative ">                    
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2 mx-10 md:mx-0">
            <div className="flex justify-center items-center">
            </div>
            <div className="flex mt-10 md:mt-0 ">
                <div className='text-center md:text-left'>
                    <p className='text-2xl text-left tracking-custom leading-10 text-white mb-8 uppercase' dangerouslySetInnerHTML={{__html: t('CitiworldNotice.title')}}></p>
                    <p className='text-left text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{__html: t('CitiworldNotice.body')}}></p>
                                                 
                </div>
            </div>
        </div>
      </div>  
  );
}

export default CitiworldNotice;