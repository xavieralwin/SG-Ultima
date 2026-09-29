/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import GoldButton from '../GoldButton';
import { useTranslation} from 'react-i18next';


const LeftImage = ({pageName, imageUrl, scrollToTerms, scrollToFooter}) => { 

  const { t } = useTranslation();
    
    return (
      <div className="container mx-auto relative">                    
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-2 mx-10 md:mx-0 mb-16">
            <div className="flex justify-center items-center lg:col-span-1">
              <img src={imageUrl} alt="Left section content" className="mx-auto" />
            </div>
            <div className="flex justify-center items-center mt-10 md:mt-0 lg:col-span-2 ml-0 md:ml-16 lg:ml-16">
                <div className='text-center md:text-left'>
                    <h6 className='font-interstate font-bold text-[14px] leading-[20px] tracking-[0.1em] text-white mb-4'>{t(`${pageName}.leftImage.title`)}</h6>
                    <p className='font-interstate-extralight font-extralight text-[14px] leading-[18px] tracking-[0.1em] text-left text-white [&>a]:text-[#D4AF37] [&>a]:underline [&>ol]:list-decimal [&>ol]:pl-4 [&>ol]:space-y-2 [&>ol>li]:text-white' dangerouslySetInnerHTML={{__html: t(`${pageName}.leftImage.copy`)}}></p>
                    <GoldButton href={t(`${pageName}.leftImage.buttonLink`)} text={ t(`${pageName}.leftImage.buttonText`)} className='my-6' position="bottom"/>                                                       
                    <p className='font-interstate-extralight font-extralight text-[14px] leading-[18px] tracking-[0.1em] text-left text-white [&>a]:text-[#D4AF37] [&>a]:underline [&>ol]:list-decimal [&>ol]:pl-4 [&>ol]:space-y-2 [&>ol>li]:text-white'>
                    For full terms and conditions, please <a onClick={scrollToFooter} className='cursor-pointer' target='_blank'>click here</a>
                    <br/>View our <a onClick={scrollToTerms} className='cursor-pointer' target='_blank'>Frequently Asked Questions</a>
                    </p>
                </div>
            </div>
        </div>
      </div>  
  );
}

export default LeftImage;