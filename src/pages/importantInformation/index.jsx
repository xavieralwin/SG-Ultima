import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useTranslation} from 'react-i18next';
import {
    Accordion,
    AccordionHeader,
    AccordionBody, } from "@material-tailwind/react";
import { Icon } from '../../helpers/common.helpers';
import TermsList from '../../components/TermsList';
import LinkList from '../../components/LinkList';
import headerImage from "../../assets/images/terms_header.png";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import './styles.css';


const ImportantInformationPage = () => {

    const { scroll } = useLocomotiveScroll();
    const location = useLocation();  

    useEffect(() => {
        if(scroll){
            scroll.scrollTo(0, { disableLerp: true })
        }
    }, [location, scroll]);

    const { t } = useTranslation();
    const [open, setOpen] = useState(0);
 
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
                <Header imageUrl={headerImage} type="footerimage" title={t('importantinformation.header')} />
            </section>   
            <section className='bg-black pt-10 pb-10  mx-10 md:mx-' data-scroll-section>
                <div className="container mx-auto relative">  
                    <div className="border-white border-b pb-9 mb-9">
                        <h2 className='text-2xl text-left tracking-custom leading-10 uppercase text-white'>{t('importantinformation.title3')}</h2>
                        <div>
                            <LinkList section='importantInfo3'/> 
                        </div>
                    </div>
                    <div className="border-white border-b pb-9 mb-9">
                    <Accordion open={open === 1} icon={<Icon id={1} open={open} />} animate={customAnimation} className='mt-10'>                    
                        <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm uppercase' onClick={() => handleOpen(1)}>                        
                            <h2 className='text-2xl text-left tracking-custom leading-10 uppercase text-white' dangerouslySetInnerHTML={{__html:t('importantinformation.title1')}}></h2>                                                    
                        </AccordionHeader>
                        <AccordionBody>
                             <TermsList section='importantInfo1'/> 
                        </AccordionBody>
                    </Accordion>   
                    </div>  
                    <div className=" pb-9 mb-9">                        
                    <Accordion open={open === 2} icon={<Icon id={2} open={open} />}  animate={customAnimation}>
                        <AccordionHeader className='border-b-0 text-white hover:text-gold text-sm uppercase' onClick={() => handleOpen(2)}>                        
                            <h2 className='text-2xl text-left tracking-custom leading-10 uppercase text-white' dangerouslySetInnerHTML={{__html:t('importantinformation.title2')}}></h2>                                                    
                        </AccordionHeader>
                        <AccordionBody>
                             <TermsList section='importantInfo2'/> 
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

export default ImportantInformationPage;