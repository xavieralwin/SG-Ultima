import React from 'react';
import GoldButton from '../GoldButton';
import { useTranslation} from 'react-i18next';


function ThankyouButton ({
  setShowModal,
  buttonNumber = 1
}) {

  const { t } = useTranslation();

  let btn1 = t('delights.thankyouBtn1');
  let btn1Link = t('delights.thankyouBtn1Link');
  let btn2 = t('delights.thankyouBtn2');
  let btn2Link = t('delights.thankyouBtn2Link');

  if(window.journey === 'visa') {
    btn1 = t('delights.thankyouBtn1Visa');
    btn1Link = t('delights.thankyouBtn1LinkVisa');
    btn2 = t('delights.thankyouBtn2Visa');
    btn2Link = t('delights.thankyouBtn2LinkVisa');
  }

  let btnText = btn1;
  let btnLink = btn1Link;
  let btnType = 'points';

  switch (buttonNumber) {
    case 1:
        btnText = btn1;
        btnLink = btn1Link;
        btnType = 'points';
      break;
    case 2:
        btnText = btn2;
        btnLink = btn2Link;
        btnType = 'catalogue';
    break;  
    default:
        btnText = btn1;
        btnLink = btn1Link;
        btnType = 'points';
      break;
  }

  let override = false;

  if(window.journey === 'mastercard' && buttonNumber === 2) {
    override = true;
  }

    
    return (
      <>
        <div className='block md:hidden'>
          <GoldButton href={btnLink} target="_blank" text={btnText} className='mt-5' position="bottom"/>    
        </div>
        <div className='hidden md:block'>
        {override ? (
            <GoldButton href={btnLink} target="_blank" text={btnText} className='mt-5' position="bottom"/>                                                                        
          ) : (
            <GoldButton onClick={() => setShowModal(btnType)} target="_blank" text={btnText} className='mt-5' position="bottom"/>             
          )}                                           
        </div>
      </>
  );
}

export default ThankyouButton;