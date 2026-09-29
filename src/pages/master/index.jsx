import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useTranslation} from 'react-i18next';
import headerImage from "../../assets/images/master_header.jpg";
import MasterTermsList from "../../components/MasterTermsList";
import MasterFooter from "../../components/MasterFooter";
import MasterFeatures from "../../components/MasterFeatures";
import MasterActivate from "../../components/MasterActivate";
import StarField from '../../components/StarField';
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import masterCard from "./assets/mastercard.png";
import line from "./assets/line.png";
import plane from "./assets/plane-great.png";
import LeftImage from '../../components/LeftImage';
import Footer from '../../components/Footer';

const MasterPage = () => { 
    const { scroll } = useLocomotiveScroll();
    const location = useLocation();  
     
    const scrollToTerms = () => {
        if(scroll) {
            const termsSection = document.getElementById('terms-and-conditions');
            if(termsSection) {
                scroll.scrollTo(termsSection, { offset: -100 });
            }
        }
    };

    const scrollToFooter = () => {
        if(scroll) {
            const footerSection = document.getElementById('footer');
            if(footerSection) {
                scroll.scrollTo(footerSection, { offset: -100 });
            }
        }
    };

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
                <Header imageUrl={headerImage} type="image" title={""} subTitle={""}  preTitle={t('master.preTitle') !== 'master.preTitle' ? t('master.preTitle') : ''} />
            </section>  
            <section className='bg-black pt-10  pb-10 md:pb-16' data-scroll-section>
                <div className="container mx-auto relative">  
                    <div className='mx-10 lg:mx-40'>
                        <div className='text-center flex justify-center items-center mb-10'>
                            <img src={masterCard} alt="masterCard" className="mx-auto" />
                        </div>
                        <div className='text-center'>
                            <h1 className="font-interstate-light font-light text-[30px] leading-[36px] tracking-[0.2em] text-center uppercase text-[#AB9834]" dangerouslySetInnerHTML={{__html: t('master.header')}}></h1>
                        </div> 
                        <div className='text-center flex justify-center items-center mb-10 mt-2'>
                            <img src={line} alt="line" className="mx-auto" />
                        </div>   
                        <div className='text-center'>
                            <p className='font-interstate-extralight font-extralight text-[14px] leading-[18px] tracking-[0.1em] text-center text-white' dangerouslySetInnerHTML={{__html: t('master.subCopy')}}></p>
                        </div>
                    </div>
                </div>
                <StarField  />
            </section> 
            <section className='bg-[#121212] my-16' data-scroll-section>
                <MasterFeatures scrollToTerms={scrollToTerms} />  
            </section>  
            <section className='bg-black' data-scroll-section>
                <MasterActivate pageName='master' />
            </section>   
            <section className='bg-black' data-scroll-section>
                <LeftImage pageName='master' imageUrl={plane} scrollToTerms={scrollToTerms} scrollToFooter={scrollToFooter} />  
            </section>   
            <section className='bg-black' data-scroll-section>
                <div className="container mx-auto relative">  
                    <div className="mx-10 md:mx-0 pb-9 mb-9 border-t border-white pt-16">
                        <h2 id='terms-and-conditions' className='text-2xl text-left tracking-custom leading-10 uppercase text-white'>{t('master.faqTitle')}</h2>
                        <div>
                        <MasterTermsList pageName='master' /> 
                        </div>
                    </div>                                
                </div>
            </section>
            <section className='bg-black' id='footer'  data-scroll-section>
                <MasterFooter pageName='master' />
                <Footer/>
            </section>
        </>            
    );
};

export default MasterPage;