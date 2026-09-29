import React from 'react';


function RewardPanel({
  title,
  copy1,
  copy2
}) {

  return (
    <div className="container mx-auto relative my-20 md:my-36">                    
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2 mx-10 mt-10 md:mt-0 md:mx-0">
            <div className="flex justify-start md:justify-center items-center">
                <h2 className='text-2xl text-left md:text-center tracking-custom leading-10 reward-title max-w-sm' dangerouslySetInnerHTML={{__html: title}}></h2>
            </div>
            <div className="flex justify-center items-center">
                <div className='text-center md:text-left'>
                    <p className='text-left text-white text-sm leading-5 tracking-widest font-semibold mb-4' dangerouslySetInnerHTML={{__html: copy1}}></p>                                                                  
                    {copy2 && (<p className='text-left reward-text text-white text-sm leading-5 tracking-widest font-extralight' dangerouslySetInnerHTML={{__html: copy2}}></p>)}                                                                  
                </div>
            </div>
        </div>
    </div>
  );
}

export default RewardPanel;