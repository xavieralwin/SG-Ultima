import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useTranslation} from 'react-i18next';
import headerImage from "../../assets/images/rewards_header.jpg";
import Footer from "../../components/Footer";
import StarField from '../../components/StarField';
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import './styles.css';
import RewardList from '../../components/RewardList';

const RewardsPage = () => { 
    const { scroll } = useLocomotiveScroll();
    const location = useLocation();  

    useEffect(() => {
        if(scroll){
            scroll.scrollTo(0, { disableLerp: true })
        }
    }, [location, scroll]);

    const { t } = useTranslation();

    return (
        <>
            <NavBar />            
            <section className='flex bg-black' data-scroll-section>
                <Header imageUrl={headerImage} type="image" title={t('rewards.header')} subTitle={t('rewards.subCopy')} preTitle={t('rewards.preTitle') !== 'rewards.preTitle' ? t('rewards.preTitle') : ''} />
            </section>   
            <section className='bg-black pt-10 md:pt-52 pb-10 md:pb-52 relative' data-scroll-section>
                <StarField stars={30}  />
                <RewardList />                 
            </section>                     
            <section className='bg-black'  data-scroll-section>
                <Footer/>
            </section>   
        </>            
    );
};

export default RewardsPage;