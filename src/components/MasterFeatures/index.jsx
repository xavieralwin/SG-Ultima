import React from 'react';
import { useTranslation} from 'react-i18next';
import GoldButton from '../GoldButton';
import Feature from '../Feature';
import iconNumber from './assets/icon_number.png';
import iconCredit from './assets/icon_credit.png';
import iconBalance from './assets/icon_balance.png';
import iconDiscount from './assets/icon_discount.png';
import iconInfinite from './assets/icon_infinite.png';
import iconLux from './assets/icon_lux.png';
import iconPass from './assets/icon_pass.png';
import iconRecur from './assets/icon_recur.png';
import iconSpend from './assets/icon_spend.png';

const MasterFeatures = ({scrollToTerms}) => { 

  const { t } = useTranslation();
    
    return (
      <div className="container mx-auto relative py-20">                    
        <div className="mx-10 md:mx-0 mb-10">
            <h2 className='font-interstate-light font-light text-[30px] leading-[36px] tracking-[0.2em] text-center uppercase text-white mb-10'>{t('master.features.title')}</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-28 mb-16'>
              <div className='hidden lg:block'>&nbsp;</div>
              <Feature icon={iconNumber} text={t('master.features.number')} />
              <Feature icon={iconRecur} text={t('master.features.recur')} />
              <div className='hidden lg:block'>&nbsp;</div>
            </div>
            <h2 className='font-interstate-light font-light text-[30px] leading-[36px] tracking-[0.2em] text-center uppercase text-white mb-10'>{t('master.features.title2')}</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-28 mb-16'>
              <Feature icon={iconDiscount} text={t('master.features.discount')} />
              <Feature icon={iconPass} text={t('master.features.pass')} />              
              <Feature icon={iconBalance} text={t('master.features.balance')} />
              <Feature icon={iconSpend} text={t('master.features.spend')} />              
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-28 mb-16'>
              <Feature icon={iconLux} text={t('master.features.lux')} />
              <Feature icon={iconInfinite} text={t('master.features.infinite')} />
              <div className="col-span-2 lg:col-span-1 flex justify-center">
                <Feature icon={iconCredit} text={t('master.features.credit')} />
              </div>
            </div>
        </div>
        <div className="mx-10 md:mx-0 flex justify-center">
            <GoldButton text={t('master.features.buttonText')} onClick={scrollToTerms} />
        </div>
      </div>  
  );
}

export default MasterFeatures;