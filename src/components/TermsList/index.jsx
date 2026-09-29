import {React, useState} from 'react';
import Term from '../Term';
import { useTranslation} from 'react-i18next';

function TermsList({
  section,
  openId = 0
}) { 
    if(openId !== 0) {
      console.log('term list openId: ', openId, section);
    }
    const { t } = useTranslation();
    const [openTerm, setOpenTerm] = useState(openId);

    let conditionCount = 40;
    let pageName = 'termsandconditions';
    switch (section) {
      case 'memberPrivileges':
        pageName = 'termsandconditionsMemberPrivileges';
        break;
      case 'horizons':
        pageName = 'termsandconditionsJourneys';
        break;
      case 'indulgence':
        pageName = 'termsandconditionsTastemakers';
        break;
      case 'balance':
        pageName = 'termsandconditionsBalance';
        break;
      case 'delights':
        pageName = 'termsandconditionsDelights';
        break;
      case 'moments':
        pageName = 'termsandconditionsMoments';
        break;
      case 'importantInfo1':
        pageName = 'importantinformationTitle1';
        break;
      case 'importantInfo2':
        pageName = 'importantinformationTitle2';
        break;
      default:
        pageName = 'termsandconditionsJourneys';
        break;
    }
    
 
    const handleOpen = (value) => {
      setOpenTerm(openTerm === value ? 0 : value);
    };
    
    var Terms = [];
    for (var i = 1; i <= conditionCount; i++) {
  
      let conditionName = t(`${pageName}.condition${i}Title`);
      let conditionType = t(`${pageName}.condition${i}Type`);
  
      let showCondition = true;
  
  
      if(conditionType !== `${pageName}.condition${i}Type` && conditionType !== ''){
        if(window.journey !== conditionType) {
            showCondition = false;
        }
      }
  
      if(conditionName !== `${pageName}.condition${i}Title` && showCondition) {
        Terms.push(
          <Term 
            key={i}
            index={i}
            section={section}
            openTerm={openTerm}
            handleOpen={handleOpen}
            title={t(`${pageName}.condition${i}Title`)} 
            subTitle={t(`${pageName}.condition${i}SubTitle`)} 
            copy={t(`${pageName}.condition${i}Copy`)} 
            table={t(`${pageName}.condition${i}Table`) !== `${pageName}.condition${i}Table` ? t(`${pageName}.condition${i}Table`) : ''}            
          />);
      }
    }
  
    return Terms;
 
}

export default TermsList;