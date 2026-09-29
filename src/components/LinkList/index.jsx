import {React} from 'react';
import { useTranslation} from 'react-i18next';
import { speedBump } from '../../helpers/common.helpers';

function LinkList({
  section
}) { 
    const { t } = useTranslation();

    let linkCount = 40;
    let pageName = 'importantinformationTitle2';
    switch (section) {
      case 'importantInfo3':
        pageName = 'importantinformationTitle3';
        break;
      default:
        pageName = 'importantinformationTitle2';
        break;
    }     
    
    var Links = [];
    for (var i = 1; i <= linkCount; i++) {
  
      let linkName = t(`${pageName}.link${i}Title`);
      let linkType = t(`${pageName}.link${i}Type`);
  
      let showLink = true;
  
  
      if(linkType !== `${pageName}.link${i}Type` && linkType !== ''){
        if(window.journey !== linkType) {
          showLink = false;
        }
      }

      let linkURL = t(`${pageName}.link${i}URL`);
  
      if(linkName !== `${pageName}.link${i}Title` && showLink) {
        Links.push(
          <li className='my-4'><a className='underline text-gold' href={linkURL} onClick={(e) => speedBump(e, t('navigation.externalLinkText'), linkURL)}>{t(`${pageName}.link${i}Title`)}</a></li>
          );
      }
    }
  
    return (<ul>{Links}</ul>);
 
}


export default LinkList;
