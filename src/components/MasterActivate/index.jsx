import React, { useState } from 'react';
import { useTranslation} from 'react-i18next';
import GoldButton from '../GoldButton';
import MasterActivateOne from '../MasterActivateOne';
import MasterActivateTwo from '../MasterActivateTwo';
import MasterActivateThree from '../MasterActivateThree';

const MasterActivate = ({pageName}) => { 
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('tab1');
    
  const renderContent = () => {
    switch(activeTab) {
      case 'tab1':
        return <MasterActivateOne />;
      case 'tab2':
        return <MasterActivateTwo />;
      case 'tab3':
        return <MasterActivateThree />;
      default:
        return null;
    }
  };

  const handleSelectChange = (e) => {
    setActiveTab(e.target.value);
  };
    
  return (
    <div className="container mx-auto relative">                    
      <div className="mx-10 md:mx-0 mb-16">
        <h2 className='font-interstate-light font-light text-[30px] leading-[36px] tracking-[0.2em] text-center uppercase text-white mb-10'>{t('master.activate.title')}</h2>
        
        {/* Mobile Dropdown */}
        <div className="md:hidden mb-10">
          <select 
            value={activeTab}
            onChange={handleSelectChange}
            className="w-full bg-transparent border border-[#D4AF37] text-[#D4AF37] font-interstate-extralight font-extralight text-[14px] leading-[20px] tracking-[0.03em] p-2 rounded-none focus:outline-none focus:ring-0 appearance-none [&>option]:bg-black [&>option]:text-[#D4AF37] [&>option]:border-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20d%3D%22M1%201L6%206L11%201%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_8px_center] pr-8"
            style={{
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              appearance: 'none',
            }}
          >
            <option value="tab1">{t('master.activate.button1')}</option>
            <option value="tab2">{t('master.activate.button2')}</option>
            <option value="tab3">{t('master.activate.button3')}</option>
          </select>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex justify-center gap-4 mb-10">
          <GoldButton 
            text={t('master.activate.button1')} 
            onClick={() => setActiveTab('tab1')}
            className={activeTab === 'tab1' ? 'opacity-100' : 'opacity-50'}
          />
          <GoldButton 
            text={t('master.activate.button2')} 
            onClick={() => setActiveTab('tab2')}
            className={activeTab === 'tab2' ? 'opacity-100' : 'opacity-50'}
          />
          <GoldButton 
            text={t('master.activate.button3')} 
            onClick={() => setActiveTab('tab3')}
            className={activeTab === 'tab3' ? 'opacity-100' : 'opacity-50'}
          />
        </div>

        <div className="mt-16 mb-28">
          {renderContent()}
        </div>
      </div>
    </div>  
  );
}

export default MasterActivate;