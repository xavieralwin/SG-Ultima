import {React, useState} from 'react';
import Term from '../Term';
import { useTranslation} from 'react-i18next';

function MasterTermsList({
  section,
  pageName,
  openId = 0
}) { 
    if(openId !== 0) {
      console.log('term list openId: ', openId, section);
    }
    const { t } = useTranslation();
    const [openTerm, setOpenTerm] = useState(openId);

    const handleOpen = (value) => {
      setOpenTerm(openTerm === value ? 0 : value);
    };
    
    // Get the terms list from translations
    const termsList = t(`${pageName}.termsList`, { returnObjects: true });
    
    // If termsList is not an object or is empty, return empty array
    if (!termsList || typeof termsList !== 'object') {
      return [];
    }

    // Map through the terms and create Term components
    const Terms = Object.entries(termsList).map(([key, term]) => (
      <Term 
        key={key}
        index={key}
        section={section}
        openTerm={openTerm}
        handleOpen={handleOpen}
        title={term.title}
        subTitle={term.subTitle}
        copy={term.copy}
        table={term.table || ''}
      />
    ));
  
    return Terms;
}

export default MasterTermsList;