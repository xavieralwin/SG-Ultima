import { React, useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useTranslation} from 'react-i18next';
import {
    Accordion,
    AccordionHeader,
    AccordionBody, } from "@material-tailwind/react";
import { Icon } from '../../helpers/common.helpers';
import TermsList from '../../components/TermsList';
import headerImage from "../../assets/images/terms_header.png";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import './styles.css';


const TermsAndConditionsPage = () => {

    let { section, id } = useParams();
    const { scroll } = useLocomotiveScroll();
    const location = useLocation();  

    useEffect(() => {
        if(scroll && !section){
            scroll.scrollTo(0, { disableLerp: true })
        }
    }, [location, scroll, section]);

    const { t } = useTranslation(); 
    

    let sectionId = 0;
    let openId = 0;
    switch (section) {
        case 'memberPrivileges':
            sectionId = 1;
            openId = parseInt(id);
            break;
        case 'horizons':    
            sectionId = 2;
            openId = parseInt(id);
            break;         
        case 'indulgence':        
            sectionId = 3;
            openId = parseInt(id);
            break;
        case 'balance':        
            sectionId = 4;
            openId = parseInt(id);
            break;
        case 'delights':        
            sectionId = 5;
            openId = parseInt(id);
            break; 
        case 'moments':        
            sectionId = 6;
            openId = parseInt(id);
            break; 
        default:
            break;
    }

    if(section) {
        const buttonId = `button_${section}_${openId}`;
        const target = document.querySelector(`#${buttonId}`);
        
        if(target){
            console.log('scroll to: ', buttonId, target);
            if(scroll){
                scroll.scrollTo(target, { disableLerp: true, offset: -200 })
            }
        }
    }

    const [open, setOpen] = useState(sectionId);
 
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    
    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    }; 


    return (
        <>
            <NavBar />            
            <section className='flex bg-black' data-scroll-section>
                <Header imageUrl={headerImage} type="footerimage" title={t('termsandconditions.header')} />
            </section>   
            <section className='bg-black pt-10 pb-10 mx-10 md:mx-0' data-scroll-section>
                <div className="container mx-auto relative">  
                    <div className="pb-9 mb-9">
                        <h2 className='text-2xl text-left tracking-custom leading-10 uppercase text-white mb-4'>{t('termsandconditions.importantNoteTitle')}</h2>
                        <p className='text-left text-white text-sm leading-5 tracking-widest font-extralight privilege-text' dangerouslySetInnerHTML={{__html: t('termsandconditions.importantNoteCopy')}}></p>
                    </div>
                    <div className="border-white border-b pb-9 mb-9">
                    <Accordion open={open === 1} icon={<Icon id={1} open={open} />} animate={customAnimation} className='mt-10'>                    
                        <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm uppercase' onClick={() => handleOpen(1)}>                        
                            <h2 className='text-2xl text-left tracking-custom leading-10 uppercase text-white mb-4' dangerouslySetInnerHTML={{__html:t('termsandconditions.memberPrivilegesTitle')}}></h2>                                                    
                        </AccordionHeader>
                        <AccordionBody>
                             <TermsList section='memberPrivileges' openId={sectionId === 1 ? openId: 0}/> 
                        </AccordionBody>
                    </Accordion>   
                    </div> 
                    <div className="border-white border-b pb-9 mb-9">
                    <Accordion open={open === 2} icon={<Icon id={2} open={open} />} animate={customAnimation} className='mt-10'>                    
                        <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm uppercase' onClick={() => handleOpen(2)}>                        
                            <h2 className='text-2xl text-left tracking-custom leading-10 uppercase text-white mb-4' dangerouslySetInnerHTML={{__html:t('termsandconditions.journeysTitle')}}></h2>                                                    
                        </AccordionHeader>
                        <AccordionBody>
                             <TermsList section='horizons' openId={sectionId === 2 ? openId: 0}/> 
                        </AccordionBody>
                    </Accordion>   
                    </div>  
                    <div className="border-white border-b pb-9 mb-9">                        
                    <Accordion open={open === 3} icon={<Icon id={3} open={open} />}  animate={customAnimation}>
                        <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm uppercase' onClick={() => handleOpen(3)}>                        
                            <h2 className='text-2xl text-left tracking-custom leading-10 uppercase text-white mb-4' dangerouslySetInnerHTML={{__html:t('termsandconditions.tastemakersTitle')}}></h2>                                                    
                        </AccordionHeader>
                        <AccordionBody>
                             <TermsList section='indulgence' openId={sectionId === 3 ? openId: 0}/> 
                        </AccordionBody>
                    </Accordion>   
                    </div>  
                    <div className="border-white border-b pb-9 mb-9">
                    <Accordion open={open ===4} icon={<Icon id={4} open={open} />} animate={customAnimation}>
                        <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm uppercase' onClick={() => handleOpen(4)}>                        
                            <h2 className='text-2xl text-left tracking-custom leading-10 uppercase text-white mb-4' dangerouslySetInnerHTML={{__html:t('termsandconditions.balanceTitle')}}></h2>                                                    
                        </AccordionHeader>
                        <AccordionBody>
                             <TermsList section='balance' openId={sectionId === 4 ? openId: 0}/> 
                        </AccordionBody>
                    </Accordion>   
                    </div>  
                    <div className="border-white border-b pb-9 mb-9">              
                    <Accordion open={open === 5} icon={<Icon id={5} open={open} />}  animate={customAnimation}>
                        <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm uppercase' onClick={() => handleOpen(5)}>                        
                            <h2 className='text-2xl text-left tracking-custom leading-10 uppercase text-white mb-4' dangerouslySetInnerHTML={{__html:t('termsandconditions.delightsTitle')}}></h2>                                                  
                        </AccordionHeader>
                        <AccordionBody>
                             <TermsList section='delights' openId={sectionId === 5 ? openId: 0}/> 
                        </AccordionBody>
                    </Accordion>  
                    </div>  
                    <div className="border-white border-b pb-9 mb-9"> 
                    <Accordion open={open === 6} icon={<Icon id={6} open={open} />}  animate={customAnimation}>
                        <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm uppercase' onClick={() => handleOpen(6)}>                        
                            <h2 className='text-2xl text-left tracking-custom leading-10 uppercase text-white mb-4' dangerouslySetInnerHTML={{__html:t('termsandconditions.momentsTitle')}}></h2>                                               
                        </AccordionHeader>
                        <AccordionBody>
                             <TermsList section='moments' openId={sectionId === 6 ? openId: 0}/> 
                        </AccordionBody>
                    </Accordion>  
                    </div>                    
                </div>        
            </section>             
            <section className='bg-black'  data-scroll-section>
                <Footer/>
            </section>   
        </>            
    );
};

export default TermsAndConditionsPage;