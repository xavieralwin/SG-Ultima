import React from 'react';

const Feature = ({icon, text}) => { 
    
    return (
      <div className="flex flex-col items-center text-center">
        <img src={icon} alt={text} className="mb-4" />
        <p className="text-white font-interstate-extralight font-extralight text-[14px] leading-[20px] tracking-[0.03em] text-center" 
        dangerouslySetInnerHTML={{__html: text}}></p>
      </div>
  );
}

export default Feature;