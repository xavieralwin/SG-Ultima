// import React, { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import Privilege from '../Privilege';
// import { useLocation, useParams } from 'react-router-dom';
// import { useLocomotiveScroll } from "react-locomotive-scroll";

// function PrivilegeList({
//   offerCount = 20,
//   pageName = 'moments',
//   scrollToTop,
//   scrollToOfferId
// }) {
//   const { t } = useTranslation();
//   const { scroll } = useLocomotiveScroll();
//   const location = useLocation(); 
//   let { section } = useParams();    

//   useEffect(() => {
//     if (scrollToOfferId) {
//       const target = document.getElementById(scrollToOfferId);
//       if (target && scrollToTop) {
//         scrollToTop.scrollTo(target, { disableLerp: true, offset: -100 });
//       }
//     }
//   }, [scrollToOfferId, scrollToTop]);
//   useEffect(() => {
//     if(scroll && !section){
//         scroll.scrollTo(0, { disableLerp: true })
//     }
// }, [location, scroll, section]);

// if(section) {
//   const divId = `offer7`;
//   const target = document.querySelector(`#${divId}`);
  
//   if(target){
//       //console.log('scroll to: ', headingId, target);
//       if(scroll){
//           scroll.scrollTo(target, { disableLerp: true, offset: -100 })
//       }
//   }
// }

//   const offers = [];
//   for (let i = 1; i <= offerCount; i++) {
//     const offerName = t(`${pageName}.offer${i}Title`);
//     const offerType = t(`${pageName}.offer${i}Type`);
//     let showOffer = true;

//     if (offerType !== `${pageName}.offer${i}Type` && offerType !== '') {
//       if (window.journey !== offerType) {
//         showOffer = false;
//       }
//     }

//     if (offerName !== `${pageName}.offer${i}Title` && showOffer) {
//       offers.push(
//         <Privilege
//           key={i}
//           id={`offer_${i}`}
//           pageName={pageName}
//           scrollToTop={scrollToTop}
//           topText={t('navigation.backToTop')}
//           privilege={`offer${i}`}
//           title={t(`${pageName}.offer${i}Title`)}
//           subCopy={t(`${pageName}.offer${i}Copy`)}
//           section1Title={t(`${pageName}.offer${i}IncludedTitle`)}
//           section1SubTitle={t(`${pageName}.offer${i}IncludedSubTitle`)}
//           section1Copy={t(`${pageName}.offer${i}IncludedCopy`)}
//           section1Copy2={t(`${pageName}.offer${i}IncludedCopy2`) !== `${pageName}.offer${i}IncludedCopy2` ? t(`${pageName}.offer${i}IncludedCopy2`) : ''}
//           section1Table={t(`${pageName}.offer${i}IncludedTable`) !== `${pageName}.offer${i}IncludedTable` ? t(`${pageName}.offer${i}IncludedTable`) : ''}
//           section1Table2={t(`${pageName}.offer${i}IncludedTable2`) !== `${pageName}.offer${i}IncludedTable2` ? t(`${pageName}.offer${i}IncludedTable2`) : ''}
//           section2Title={t(`${pageName}.offer${i}DetailsTitle`)}
//           section2SubTitle={t(`${pageName}.offer${i}DetailsSubTitle`)}
//           section2Copy={t(`${pageName}.offer${i}DetailsCopy`)}
//           section3Title={t(`${pageName}.offer${i}AccessTitle`)}
//           section3SubTitle={t(`${pageName}.offer${i}AccessSubTitle`)}
//           section3Copy={t(`${pageName}.offer${i}AccessCopy`)}
//         />
//       );
//     }
//   }

//   return offers;
// }

// export default PrivilegeList;
import React from 'react';
import { useTranslation} from 'react-i18next';
import Privilege from '../Privilege';


function PrivilegeList({
  offerCount = 20,
  pageName = 'moments',
  scrollToTop,
  setShowModal
}) {

  const { t } = useTranslation();

  var offers = [];
  for (var i = 1; i <= offerCount; i++) {

    let offerName = t(`${pageName}.offer${i}Title`);
    let offerType = t(`${pageName}.offer${i}Type`);
    let offerShowButtons = t(`${pageName}.offer${i}ShowButtons`);

    let showOffer = true;
    let showButtons = false;

    if(offerShowButtons !== `${pageName}.offer${i}ShowButtons` && offerShowButtons !== ''){
      showButtons = offerShowButtons;
    }


    if(offerType !== `${pageName}.offer${i}Type` && offerType !== ''){
      if(window.journey !== offerType) {
        showOffer = false;
      }
    }

    if(offerName !== `${pageName}.offer${i}Title` && showOffer) {
      offers.push(
        <Privilege 
          key={i}
          pageName = {pageName}
          scrollToTop = {scrollToTop}
          setShowModal = {setShowModal}
          showButtons = {showButtons}
          topText={t('navigation.backToTop')}
          privilege = {`offer${i}`}
          title={t(`${pageName}.offer${i}Title`)} 
          subCopy={t(`${pageName}.offer${i}Copy`)} 
          section1Title={t(`${pageName}.offer${i}IncludedTitle`)}
          section1SubTitle={t(`${pageName}.offer${i}IncludedSubTitle`)}
          section1Copy={t(`${pageName}.offer${i}IncludedCopy`)}  
          section1Copy2={t(`${pageName}.offer${i}IncludedCopy2`) !== `${pageName}.offer${i}IncludedCopy2` ? t(`${pageName}.offer${i}IncludedCopy2`) : ''}                  
          section1Table={t(`${pageName}.offer${i}IncludedTable`) !== `${pageName}.offer${i}IncludedTable` ? t(`${pageName}.offer${i}IncludedTable`) : ''}                  
          section1Table2={t(`${pageName}.offer${i}IncludedTable2`) !== `${pageName}.offer${i}IncludedTable2` ? t(`${pageName}.offer${i}IncludedTable2`) : ''}                  
          section2Title={t(`${pageName}.offer${i}DetailsTitle`)}
          section2SubTitle={t(`${pageName}.offer${i}DetailsSubTitle`)}
          section2Copy={t(`${pageName}.offer${i}DetailsCopy`)}
          section3Title={t(`${pageName}.offer${i}AccessTitle`)}
          section3SubTitle={t(`${pageName}.offer${i}AccessSubTitle`)}
          section3Copy={t(`${pageName}.offer${i}AccessCopy`)}
        />);
    }
  }

  return offers;
}

export default PrivilegeList;