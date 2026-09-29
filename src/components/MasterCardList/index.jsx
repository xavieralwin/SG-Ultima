import React from 'react';
import { useTranslation} from 'react-i18next';
import MemberCard from '../MemberCard';


function MemberCardList({
  cardCount = 10,
  pageName = 'home',
}) {

  const { t } = useTranslation();

  var cards = [];
  for (var i = 1; i <= cardCount; i++) {

    let cardTitle = t(`${pageName}.card${i}Title`);
    let cardType = t(`${pageName}.card${i}Type`);

    let showCard = true;


    if(cardType !== `${pageName}.card${i}Type` && cardType !== ''){
      if(window.journey !== cardType) {
        showCard = false;
      }
    }

    if(cardTitle !== `${pageName}.card${i}Title` && showCard) {
      cards.push(
        <MemberCard 
          key={i}
          title={t(`${pageName}.card${i}Title`)} 
          body={t(`${pageName}.card${i}Body`)}
          link={t(`${pageName}.card${i}Link`)}
        />);
    }
  }

  cards = cards.slice(0, 3); // this limits the output to the first 3 cards as the UI is for 3.
  return cards;
}

export default MemberCardList;