import React from 'react';
import { useTranslation} from 'react-i18next';


function ContactTable({
  region
}) { 

  const { t } = useTranslation();

  const list = [
    { 
      asia: ['Australia','Brunei*','China','Guam','Hong Kong', 'India*', 'Indonesia', 'Japan', 'Malaysia', 'New Zealand', 'Pakistan*', 'Philippines', 'South Korea', 'Taiwan', 'Thailand', 'UAE'], 
      northAmerica: ['Canada','USA'], 
      europe: ['Belgium','Finland','France','Germany','Hungary', 'Italy', 'Ireland', 'Luxembourg', 'Netherland', 'Norway', 'Sweden', 'Switzerland', 'Turkey', 'UK'], 
      southAmerica: ['Chile'], 
    }];
    
  let output;

  if(t('phoneNumbers') === 'phoneNumbers') return output;

  switch (region){
    default:
      output = '';
      break;
    case "asia":
      output = (
        <div className="container relative mt-4">                    
          <table className="table-fixed">            
            <tbody>
              {list[0].asia.map(item => {
                let number = t(`phoneNumbers.${item}`);
                let call = `tel:${number}`;
                return (
                <tr key={item}>
                  <td className='pr-10 lg:pr-4 xl:pr-10'>&#x2022; {item}</td>
                  <td><a className='text-gold underline' href={call}>{number}</a></td>
                </tr>
                );
              })}              
            </tbody>
          </table>
        </div>  
      );
      break;
    case "northAmerica":
      output = (
        <div className="container relative mt-4">                    
          <table className="table-fixed">            
            <tbody>
              {list[0].northAmerica.map(item => {
                let number = t(`phoneNumbers.${item}`);
                let call = `tel:${number}`;
                return (
                <tr key={item}>
                  <td className='pr-10 lg:pr-4 xl:pr-10'>&#x2022; {item}</td>
                  <td><a className='text-gold underline' href={call}>{number}</a></td>
                </tr>
                );
              })}              
            </tbody>
          </table>
        </div>  
      );
      break;
    case "europe":
      output = (
        <div className="container relative mt-4">                    
          <table className="table-fixed">            
            <tbody>
              {list[0].europe.map(item => {
                let number = t(`phoneNumbers.${item}`);
                let call = `tel:${number}`;
                return (
                <tr key={item}>
                  <td className='pr-10 lg:pr-4 xl:pr-10'>&#x2022; {item}</td>
                  <td><a className='text-gold underline' href={call}>{number}</a></td>
                </tr>
                );
              })}              
            </tbody>
          </table>
        </div>  
      );
      break;
    case "southAmerica":
      output = (
        <div className="container relative mt-4">                    
          <table className="table-fixed">            
            <tbody>
              {list[0].southAmerica.map(item => {
                let number = t(`phoneNumbers.${item}`);
                let call = `tel:${number}`;
                return (
                <tr key={item}>
                  <td className='pr-10  lg:pr-4 xl:pr-10'>&#x2022; {item}</td>
                  <td><a className='text-gold underline' href={call}>{number}</a></td>
                </tr>
                );
              })}              
            </tbody>
          </table>
        </div>  
      );
      break;
  }

  return output;
    
}

export default ContactTable;