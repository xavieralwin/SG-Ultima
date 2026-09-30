
// import { React, useEffect } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import { useLocomotiveScroll } from "react-locomotive-scroll";
// import { useTranslation} from 'react-i18next';
// import PrivilegeList from '../../components/PrivilegeList';
// import PrivilegeButtonList from '../../components/PrivilegeButtonList';
// import headerImage from "../../assets/images/tastemakers_header.jpg";
// import Footer from "../../components/Footer";
// import StarField from '../../components/StarField';
// import NavBar from "../../components/NavBar";
// import Header from "../../components/Header";
// import Concierge from '../../components/Concierge';
// import Gastro from '../../components/Gastro';
// import GastroHeader from '../../components/GastroHeader';
// import GastroFooter from '../../components/GastroFooter';

// const TastemakerPage = () => { 
//     const { scroll } = useLocomotiveScroll();
//     const location = useLocation(); 
//     let { section } = useParams();    

//     const goToPrivilege = (element) => {        
//         const sectionSelector = document.getElementById(element); 
//         scroll && scroll.scrollTo(sectionSelector, {disableLerp: true, offset: -100});
//     }   
    
//     const scrollToTop = () => {
//         scroll.scrollTo(0, { disableLerp: true })  
//     }

//     useEffect(() => {
//         if(scroll && !section){
//             scroll.scrollTo(0, { disableLerp: true })
//         }
//     }, [location, scroll, section]);


//     if(section) {
//         const headingId = `michelin`;
//         const target = document.querySelector(`#${headingId}`);
        
//         if(target){
//             console.log('scroll to: ', headingId, target);
//             if(scroll){
//                 scroll.scrollTo(target, { disableLerp: true, offset: -100 })
//             }
//         }
//     }
//     if(section) {
//         const headingId = `bg-gastro`;
//         const target = document.querySelector(`#${headingId}`);
        
//         if(target){
//             console.log('scroll to: ', headingId, target);
//             if(scroll){
//                 scroll.scrollTo(target, { disableLerp: true, offset: -100 })
//             }
//         }
//     }

//     const { t } = useTranslation();

//     const showGastro = t('tastemakers.gastroShow');

//     return (
//         <>
//             <NavBar />            
//             <section className='flex bg-black' data-scroll-section>
//                 <Header imageUrl={headerImage} type="image" title={t('tastemakers.header')} subTitle={t('tastemakers.subCopy')}  preTitle={t('tastemakers.preTitle') !== 'tastemakers.preTitle' ? t('tastemakers.preTitle') : ''} />
//             </section>  
//             <section className='bg-black'  data-scroll-section>
//                 <div className="container m-auto relative py-16">                    
//                     <div className="grid grid-cols-1">
//                         <div className='mx-4 md:mx-0'>
//                             <h2 className='text-2xl text-left tracking-custom leading-10 text-light-grey mb-4'>JUMP TO</h2>
//                             <PrivilegeButtonList pageName='tastemakers' goToPrivilege={goToPrivilege} />  
//                         </div>
//                     </div>
//                 </div>  
//             </section>
//             <section className='bg-gastro' id="bg-gastro"  data-scroll-section>
//                 <GastroHeader varient='primary'/>                
//             </section> 
//             {showGastro && (   
//                 <section  data-scroll-section>
//                     <StarField  />
//                     <Gastro/>                
//                 </section>                  
//             )}
//             {!showGastro && (   
//                 <section className='bg-gastro'  data-scroll-section>
//                     <div className="container mx-auto relative py-16">   
//                     <div className="flex justify-center">
//                         <div className="grid grid-cols-1 mx-10 mt-10 md:mt-0 md:mx-20 lg:mx-48">
//                             <div>
//                                 <h2 className='text-2xl text-center tracking-custom leading-10 text-light-grey' dangerouslySetInnerHTML={{__html: t('gastro.comingSoon')}}></h2>
//                             </div>
//                         </div>
//                     </div>                 
//                 </div>                
//                 </section>                  
//             )}           
//             <section className='bg-gastro'  data-scroll-section>
//                 <GastroFooter varient='secondary' />               
//             </section>
//             <section className='bg-black mt-20'  data-scroll-section>
//                 <PrivilegeList pageName='tastemakers' scrollToTop={scrollToTop} />                
//             </section> 
//             <section className='bg-black pt-10 md:pt-52 pb-10 md:pb-52' data-scroll-section>
//                 <StarField  />
//                 <Concierge />
//             </section> 
//             <section className='bg-black'  data-scroll-section>
//                 <Footer/>
//             </section>   
//         </>            
//     );
// };

// export default TastemakerPage;

import { React, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useTranslation} from 'react-i18next';
import PrivilegeList from '../../components/PrivilegeList';
import PrivilegeButtonList from '../../components/PrivilegeButtonList';
import headerImage from "../../assets/images/tastemakers_header.jpg";
import Footer from "../../components/Footer";
import StarField from '../../components/StarField';
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Concierge from '../../components/Concierge';
import Gastro from '../../components/Gastro';
import GastroHeader from '../../components/GastroHeader';
import GastroFooter from '../../components/GastroFooter';
import CitiworldNotice from'../../components/CitiworldNotice';

const TastemakerPage = () => { 
    const { scroll } = useLocomotiveScroll();
    const location = useLocation(); 
    let { section } = useParams();    

    const goToPrivilege = (element) => {        
        const sectionSelector = document.getElementById(element); 
        scroll && scroll.scrollTo(sectionSelector, {disableLerp: true, offset: -100});
    }   
    
    const scrollToTop = () => {
        scroll.scrollTo(0, { disableLerp: true })  
    }

    useEffect(() => {
        if(scroll && !section){
            scroll.scrollTo(0, { disableLerp: true })
        }
    }, [location, scroll, section]);


    if(section) {
        const headingId = `michelin`;
        const target = document.querySelector(`#${headingId}`);
        
        if(target){
            console.log('scroll to: ', headingId, target);
            if(scroll){
                scroll.scrollTo(target, { disableLerp: true, offset: -100 })
            }
        }
    }

    const { t } = useTranslation();

    const showGastro = t('tastemakers.gastroShow');

    return (
        <>
            <NavBar />            
            <section className='flex bg-black' data-scroll-section>
                <Header imageUrl={headerImage} type="image" title={t('tastemakers.header')} subTitle={t('tastemakers.subCopy')}  preTitle={t('tastemakers.preTitle') !== 'tastemakers.preTitle' ? t('tastemakers.preTitle') : ''} />
            </section>  
            <section className='bg-black'  data-scroll-section>
                <div className="container m-auto relative py-16">                    
                    <div className="grid grid-cols-1">
                        <div className='mx-4 md:mx-0'>
                            <h2 className='text-2xl text-left tracking-custom leading-10 text-light-grey mb-4'>JUMP TO</h2>
                            <PrivilegeButtonList pageName='tastemakers' goToPrivilege={goToPrivilege} />  
                        </div>
                    </div>
                </div>  
            </section>
            <section className='bg-gastro'  data-scroll-section>
                <GastroHeader varient='primary'/>                
            </section> 
            {showGastro && (   
                <section  data-scroll-section>
                    <StarField  />
                    <Gastro/>                
                </section>                  
            )}
            {!showGastro && (   
                <section className='bg-gastro'  data-scroll-section>
                    <div className="container mx-auto relative py-16">   
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 mx-10 mt-10 md:mt-0 md:mx-20 lg:mx-48">
                            <div>
                                <h2 className='text-2xl text-center tracking-custom leading-10 text-light-grey' dangerouslySetInnerHTML={{__html: t('gastro.comingSoon')}}></h2>
                            </div>
                        </div>
                    </div>                 
                </div>                
                </section>                  
            )}           
            <section className='bg-gastro'  data-scroll-section>
                <GastroFooter varient='secondary' />               
            </section>
            <section className='bg-black mt-20'  data-scroll-section>
                <PrivilegeList pageName='tastemakers' scrollToTop={scrollToTop} />                
            </section> 
            <section className='bg-black mt-10 pb-10' data-scroll-section>
                <StarField  />
               <CitiworldNotice />
            </section> 
            <section className='bg-black pt-10 md:pt-20 pb-10 md:pb-52' data-scroll-section>
                <StarField  />
                <Concierge />
            </section> 
            
            <section className='bg-black'  data-scroll-section>
                <Footer/>
            </section>   
        </>            
    );
};

export default TastemakerPage;