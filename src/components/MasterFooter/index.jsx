import React from 'react';
import { useTranslation} from 'react-i18next';


const MasterFooter = ({pageName}) => { 

  const { t } = useTranslation();
    
    return (
      <div className="container mx-auto relative">                    
        <div className="mx-10 md:mx-0 mb-16 border-t border-white pt-16">
            <div className="">
              <h6 className='font-interstate font-bold text-[14px] leading-[20px] tracking-[0.1em] text-white mb-4'>{t(`${pageName}.footer.title1`)}</h6>
              <p className='font-interstate-extralight font-extralight text-[14px] leading-[18px] tracking-[0.1em] text-left text-white [&_a]:text-[#D4AF37] [&_a]:underline [&>ol]:list-decimal [&>ol]:pl-4 [&>ol]:space-y-2 [&>ol>li]:text-white' dangerouslySetInnerHTML={{__html: t(`${pageName}.footer.copy1`)}}></p>
              <h6 className='font-interstate font-bold text-[14px] leading-[20px] tracking-[0.1em] text-white mb-4 mt-10'>{t(`${pageName}.footer.title2`)}</h6>
              <p className='font-interstate-extralight font-extralight text-[14px] leading-[18px] tracking-[0.1em] text-left text-white [&_a]:text-[#D4AF37] [&_a]:underline [&>ol]:list-decimal [&>ol]:pl-4 [&>ol]:space-y-2 [&>ol>li]:text-white' dangerouslySetInnerHTML={{__html: t(`${pageName}.footer.copy2`)}}></p>
            </div>
        </div>
      </div>  
  );
}

export default MasterFooter;