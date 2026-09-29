import { React } from 'react';
import {
    Card,
    CardBody,
  } from "@material-tailwind/react";
import GoldButton from '../../components/GoldButton';
  

function MemberCard({
  title,
  body,
  link,
}) {
  return (
    <Card className='border-2 bg-black gradient-border'>
        <CardBody className="text-center lg:px-10 lg:py-20 md:px-10 md:py-40">
            <h2 className='text-xl text-center tracking-custom leading-10 text-light-grey mb-20' dangerouslySetInnerHTML={{__html: title}}></h2>
            <p className='text-center text-white text-sm leading-5 tracking-widest font-extralight mb-20' dangerouslySetInnerHTML={{__html: body}}></p>
            <GoldButton href={link} text='Learn more' position='middle' />                                
        </CardBody>                                
    </Card>
  );
}

export default MemberCard;