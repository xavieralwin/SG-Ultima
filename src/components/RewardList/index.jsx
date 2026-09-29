import {React} from 'react';
import { useTranslation} from 'react-i18next';
import RewardPanel from '../RewardPanel';

function RewardList({
  section
}) { 
    const { t } = useTranslation();

    let rewardCount = 40;
    let pageName = 'rewards';        

    
    var Rewards = [];
    for (var i = 1; i <= rewardCount; i++) {
  
      let rewardName = t(`${pageName}.reward${i}Title`);
      let rewardType = t(`${pageName}.reward${i}Type`);
  
      let showReward = true;
  
  
      if(rewardType !== `${pageName}.reward${i}Type` && rewardType !== ''){
        if(window.journey !== rewardType) {
          showReward = false;
        }
      }
  
      if(rewardName !== `${pageName}.reward${i}Title` && showReward) {
        Rewards.push(
          <RewardPanel 
            title={t(`${pageName}.reward${i}Title`)}
            copy1={t(`${pageName}.reward${i}Copy1`)}
            copy2={t(`${pageName}.reward${i}Copy2`) !== `${pageName}.reward${i}Copy2` ? t(`${pageName}.reward${i}Copy2`) : ''}
          />);
      }
    }
  
    return Rewards;
 
}

export default RewardList;