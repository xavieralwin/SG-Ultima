import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import chefOne from './assets/chef.jpg';
import chefTwo from './assets/chef-1.jpg';
// import line from '../../assets/images/sectionLine.svg';
import { classNames } from '../../helpers/common.helpers';
// import imageUrl from './assets/gastro-korea-new.jpg';
import imageUrl from './assets/Citi_ULTIMA-Michelin-Saint.jpg';
import star from './assets/star.svg';
//import greenStar from './assets/MICHELIN-Green-Star.png';
// import hk from './assets/JP.png';
import korea from './assets/southkorea.png';
import singapore from './assets/singapore.png';
//import japan from './assets/Flags-Japan.svg';
// import thai from './assets/thai.png';
// import italy from './assets/FlagsItaly.svg';
import './styles.css';

function Gastro() {

  const { t } = useTranslation();

  let headerImage = imageUrl;
  let odeTitle = t('gastro.odeTitle');

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${headerImage})` }}
        className={classNames(
          `w-screen md:h-screen inline-block bg-no-repeat bg-cover relative bg-center h-[60vh]`
        )}
      >
        <div className='z-10 absolute left-1/2 -top-10 -translate-x-1/2 -translate-y-1/2 text-center'>
          <h1 className="text-4xl md:text-5xl text-center tracking-custom leading-10 text-gold uppercase" dangerouslySetInnerHTML={{ __html: odeTitle }}></h1>
        </div>
      </div>
      <div className="container mx-auto relative py-10 md:py-20">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 mx-10 md:mx-40 mt-10 md:mt-0">
            <div>
              <h2 className='text-3xl text-center tracking-custom leading-10 text-gold uppercase' dangerouslySetInnerHTML={{ __html: t('gastro.chefTitle') }}></h2>
            </div>
            <div className='mt-8'>
              <div className='text-center text-white text-sm leading-5 tracking-widest font-extralight highlight-links last-para' dangerouslySetInnerHTML={{ __html: t('gastro.chefCopy') }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='flex justify-center'>
            <img src={line} alt='divider' />
          </div>  */}
      <div className="container mx-auto relative">
        <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-20 mx-2 md:mx-20">
          <Card className='bg-black'>
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <div className='mb-6'>
                <div className='flex justify-center '>
                  <img src={star} alt='MICHELIN Star' className='float-left ' />
                  <img src={star} alt='MICHELIN Star' className='float-left ' />
                  <h4 className='text-lg text-gold uppercase leading-10'>2 MICHELIN STAR</h4>
                </div>
              </div>
              <img
                className='w-full chef-image'
                src={chefOne}
                alt={t('home.cardOneTitle')}
              />
            </CardHeader>
            <CardBody className="text-center lg:px-12 lg:py-10 md:px-20 md:py-10 py-10 pb-20 md:pb-20 lg:pb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img src={singapore} alt="MICHELIN & Citi ULTIMA" className="chef-flag object-cover m-0 flex-shrink-0" />

                <div className="text-left">
                  <h2 className="text-left leading-tight mb-0" dangerouslySetInnerHTML={{ __html: t("gastro.chef1Title") }} />
                </div>
              </div>

              {/* <img src={singapore} alt='MICHELIN & Citi ULTIMA' className='m-auto mb-6 chef-flag' />
              <h2 className='text-xl text-center tracking-normal leading-8 uppercase font-semibold text-light-grey mb-8' dangerouslySetInnerHTML={{ __html: t('gastro.chef1Title') }}></h2> */}
              <p className='text-center text-white text-sm leading-5 tracking-widest font-extralight highlight-links' dangerouslySetInnerHTML={{ __html: t('gastro.chef1Copy') }}></p>
            </CardBody>
          </Card>
          <Card className='bg-black'>
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <div className='mb-6'>
                <div className='flex justify-center '>
                  <img src={star} alt='MICHELIN Star' className='float-left ' />
                  {/*<img src={star} alt='MICHELIN Star' className='float-left ' />*/}
                  <h4 className='text-lg text-gold uppercase leading-10'>2 MICHELIN STAR</h4>
                </div>
              </div>
              <img
                className='w-full chef-image mx-auto'
                src={chefTwo}
                alt={t('home.cardTwoTitle')}
              />
            </CardHeader>
            <CardBody className="text-center lg:px-12 lg:py-10 md:px-20 md:py-10 py-10 pb-20 md:pb-20 lg:pb-20">
              {/* <div className='mb-6'>
                    <div>
                      <img src={star} alt='MICHELIN Star' className='float-left ' />
                      <img src={star} alt='MICHELIN Star' className='float-left ' />
                      <h4 className='text-lg text-gold uppercase leading-10'>2 MICHELIN STAR</h4>
                    </div>                    
                  </div> */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <img src={korea} alt="MICHELIN & Citi ULTIMA" className="chef-flag object-cover m-0 flex-shrink-0" />

                <div className="text-left">
                  <h2 className="text-left leading-tight mb-0" dangerouslySetInnerHTML={{ __html: t("gastro.chef2Title") }} />
                </div>
              </div>

              <p className='text-center text-white text-sm leading-5 tracking-widest font-extralight highlight-links' dangerouslySetInnerHTML={{ __html: t('gastro.chef2Copy') }}></p>
            </CardBody>
          </Card>
        </div>
      </div>

    </div>
  );
};


export default Gastro;
