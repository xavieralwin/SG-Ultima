import React from 'react';
import './styles.css';


function Table({
  tableType
}) { 
    
  let output;

  switch (tableType){
    default:
      output = '';
      break;
    case "ultimagolf":
      output = (
        <div className="container relative my-4">                    
          {/* <table className="table-fixed border-collapse border border-slate-400 w-full terms-table">
            <thead>
              <tr>
                <th width="30%" className='text-left border border-slate-400 bg-gray-900'><b>Singapore Golf Clubs</b></th>
                <th width="30%" className='text-left border border-slate-400 bg-gray-900'><b>Weekday Booking Submission</b></th>
                <th width="40%" className='text-left border border-slate-400 bg-gray-900'><b>Weekend Booking Submission<br/>(tee times available for Sun PM only)</b> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td width="30%" className='border border-slate-400'>Sembawang Country Club</td>
                <td width="30%" className='border border-slate-400'>Maximum 7 days in advance</td>
                <td width="40%" className='border border-slate-400'>Maximum 5 days in advance</td>
              </tr>
              <tr>
                <td width="30%" className='border border-slate-400'>Marina Bay Golf Course</td>
                <td width="30%" className='border border-slate-400'>Maximum 7 days in advance</td>
                <td width="40%" className='border border-slate-400'>Maximum 5 days in advance</td>
              </tr>
            </tbody>
          </table> */}
        </div>  
      );
      break;
    case "airports":
      output = (
        <>
        <div className='table-min-show'>Please turn your deivce on its site to view.</div>
        <div className="container relative my-4 table-min">
          <table className="table-fixed border-collapse border border-slate-400 w-full terms-table">
            <thead>
              <tr>
                  <th rowSpan="3" className='text-left border border-slate-400 bg-gray-900'>Country / Region</th>
                  <th width="30%" rowSpan="3" className='text-left border border-slate-400 bg-gray-900'>Airport</th>
                  <th colSpan="4" className='text-left border border-slate-400 bg-gray-900'>Service Available</th>
              </tr>
              <tr>
                  <th colSpan="3" className='text-left border border-slate-400 bg-gray-900'>Meet & Assist Service</th>
                  <th rowSpan="2" className='text-left border border-slate-400 bg-gray-900'>Fast Track</th>
              </tr>
              <tr>
                  <th className='text-left border border-slate-400 bg-gray-900'>Airside</th>
                  <th className='text-left border border-slate-400 bg-gray-900'>Landside</th>
                  <th className='text-left border border-slate-400 bg-gray-900'>Fast Track</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="4" className='border border-slate-400'>Australia</td>
                <td width="30%" className='border border-slate-400'>Sydney Kingsford-Smith Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Brisbane Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Melbourne Tullamarine Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>
            <tr>
                <td className='border border-slate-400'>Perth Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>
            <tr>
                <td className='border border-slate-400'>Cambodia</td>
                <td className='border border-slate-400'>Phnom Penh Airport</td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'><span>✔</span></td>
            </tr>
            <tr>
                <td rowSpan="5" className='border border-slate-400'>Mainland China</td>
                <td className='border border-slate-400'>Beijing Capital International Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>
            <tr>
                <td className='border border-slate-400'>Guangzhou Baiyun International Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>
            <tr>
                <td className='border border-slate-400'>Hangzhou Xiaoshan International Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>
            <tr>
                <td className='border border-slate-400'>Shanghai Pudong International Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>
            <tr>
                <td className='border border-slate-400'>Shanghai Hongqiao International Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>
            <tr>
                <td rowSpan="3" className='border border-slate-400'>India</td>
                <td className='border border-slate-400'>Bangalore Kempegowda International Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>
            <tr>
                <td className='border border-slate-400'>Mumbai Chatrapati Shivaji International Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>
            <tr>
                <td className='border border-slate-400'>Delhi Indira Gandhi International Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>
            <tr>
                <td rowSpan="2" className='border border-slate-400'>Indonesia</td>
                <td className='border border-slate-400'>Jakarta Soekarno–Hatta International Airport</td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'><span>✔</span></td>
            </tr>
            <tr>
                <td className='border border-slate-400'>Denpasar Bali Ngurah Rai International Airport</td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'><span>✔</span></td>
            </tr>
            <tr>
                <td className='border border-slate-400'>Hong Kong</td>
                <td className='border border-slate-400'>Hong Kong Chek Lap Kok Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>
            <tr>
                <td rowSpan="3" className='border border-slate-400'>Japan</td>
                <td className='border border-slate-400'>Osaka Kansai International Airport</td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>
            <tr>
                <td className='border border-slate-400'>Tokyo Narita Airport</td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>
            <tr>
                <td className='border border-slate-400'>Tokyo Haneda Airport</td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>
            <tr>
                <td rowSpan="2" className='border border-slate-400'>Korea</td>
                <td className='border border-slate-400'>Seoul Gimpo International Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>
            <tr>
                <td className='border border-slate-400'> Seoul Incheon International Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>
            <tr>
                <td className='border border-slate-400'>Macau</td>
                <td className='border border-slate-400'>Macau International Airport</td>
                <td colSpan='3' className='border border-slate-400'>N/A</td>
                <td className='border border-slate-400'><span>✔</span></td>
            </tr>
            <tr>
                <td className='border border-slate-400'>Malaysia</td>
                <td className='border border-slate-400'>Kuala Lumpur International Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'>N/A</td>
            </tr>
            <tr>
                <td className='border border-slate-400'>New Zealand</td>
                <td className='border border-slate-400'>Auckland Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>

            <tr>
                <td className='border border-slate-400'>Philippines</td>
                <td className='border border-slate-400'>Manila Ninoy Aquino International Airport </td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'><span>✔</span></td>
            </tr>
            <tr>
                <td className='border border-slate-400'>Singapore</td>
                <td className='border border-slate-400'>Singapore Changi Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
            </tr>
            <tr>
                <td rowSpan="2" className='border border-slate-400'>Thailand</td>
                <td className='border border-slate-400'>Bangkok Suvarnabhumi Airport</td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>                
                <td className='border border-slate-400'><span>✔</span></td>
            </tr>
            <tr>
                <td className='border border-slate-400'>Phuket International Airport</td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>                
                <td className='border border-slate-400'><span>✔</span></td>
            </tr>
            <tr>
                <td rowSpan="2" className='border border-slate-400'>Vietnam</td>
                <td className='border border-slate-400'>Hanoi Noi Bai International Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>                
                <td className='border border-slate-400'><span>✔</span></td>
            </tr>
            <tr>
                <td className='border border-slate-400'>Ho Chi Minh City Tan Son Nhat International Airport</td>
                <td className='border border-slate-400'><span>✔</span></td>
                <td className='border border-slate-400'></td>
                <td className='border border-slate-400'><span>✔</span></td>                
                <td className='border border-slate-400'><span>✔</span></td>
            </tr>
            </tbody>
          </table>                   
          <table className="table-fixed border-collapse border border-slate-400 mt-10 w-full">
            <thead>
              <tr>
                  <th className='text-left border border-slate-400 bg-gray-900'>Service Descriptions</th>
                  <th className='text-left border border-slate-400 bg-gray-900'>
                      <center>Arrival</center>
                  </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-slate-400'>Fast Track</td>
                <td className='border border-slate-400'>
                    Met with name board at the designated point (at the end of the air-bridge or entrance of the arrivals hall) Expedited through immigration and security check point. May be expedited through
                    Customs if the local Customs authorities permit it but it cannot be guaranteed. Assisted with Baggage if prebooked as an additional product and at an additional charge Handover to
                    meeting party/Driver
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Meet and Assist - Airside prior to immigration</td>
                <td className='border border-slate-400'>
                    Met with name board at the designated point (at the end of the air-bridge or entrance of the arrivals hall) Assisted through immigration and security check point. May be assisted through
                    Customs if the local Customs authorities permit it but it cannot be guaranteed. Assisted with Baggage if prebooked as an additional product and at an additional charge Handover to
                    meeting party/Driver
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Meet and Assist - Landside after immigration</td>
                <td className='border border-slate-400'>
                    Met with name board at the designated point (after immigration &amp; customs in the baggage hall or in the public arrival hall) Assisted with Baggage if prebooked as an additional product
                    and at an additional charge Handover to meeting party/Driver
                </td>
              </tr>
              </tbody>
              <thead>
              <tr>
                <th className='text-left border border-slate-400 bg-gray-900'>Service Description</th>
                <th className='border border-slate-400 bg-gray-900'>
                    <center>Departure</center>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td className='border border-slate-400'>Fast Track</td>
                <td className='border border-slate-400'>
                    Met with name board at the designated point (kerbside directly outside the terminal or a meeting point) Assisted with Baggage if prebooked as an additional product and at an additional
                    charge Expedited through airline check in formalities, immigration and security check point May be expedited through Customs if the local Customs authorities permit it but it cannot
                    be guaranteed. Delivered to Flight Departure Gate or lounge (if the passenger's airline ticket is entitling the lounge access)
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Meet and Assist - Airside Up to Departure Gate</td>
                <td className='border border-slate-400'>
                    Met with name board at the designated point (kerbside directly outside the terminal or a meeting point) Assisted with Baggage if prebooked as an additional product and at an additional
                    charge Assisted with airline check in formalities, immigration and security check point May be assisted through Customs if the local Customs authorities permit it but it cannot be
                    guaranteed. Delivered to Flight Departure Gate or lounge (if the passenger's airline ticket is entitling the lounge access)
                </td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Meet and Assist - Landside Up to Passport Control</td>
                <td className='border border-slate-400'>
                    Met with name board at the designated point (kerbside directly outside the terminal or a meeting point) Assisted with Baggage if prebooked as an additional product and at an additional
                    charge Assisted through airline check in formalities Guided to the security check point/Passport Control
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th className='text-left border border-slate-400 bg-gray-900'>Service Description</th>
                <th className='text-left border border-slate-400 bg-gray-900'>
                    <center>Transit</center>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-slate-400'>Transit Meet and Assist</td>
                <td className='border border-slate-400'>
                    Met with name board at the designated point (at the end of the air-bridge or entrance of the arrivals hall) Assisted through immigration and security check point. May be assisted through
                    Customs if the local Customs authorities permit it but it cannot be guaranteed. Assisted with Departure formalities Delivered to Flight Departure Gate or lounge (if the passenger's
                    airline ticket is entitling the lounge access)
                </td>
              </tr>
            </tbody>
          </table>
        </div>  
        </>
      );
      break;
    case "sg-companionairfare":
      output = (
        <div className="container relative my-4">                    
          <table className="table-fixed border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className='text-left border border-slate-400 bg-gray-900'>Singapore to New York (Business Class Return)</th>
                <th className='text-left border border-slate-400 bg-gray-900'>ULTIMA Main Cardholder</th>
                <th className='text-left border border-slate-400 bg-gray-900'>Your Travel Companion</th>
                <th className='text-left border border-slate-400 bg-gray-900'>Final Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td className='border border-slate-400'>Airfare</td>
                  <td className='border border-slate-400'>S$9,800</td>
                  <td className='border border-slate-400'>S$0</td>
                  <td className='border border-slate-400'>S$9,800</td>
              </tr>
              <tr>
                  <td className='border border-slate-400'>Tax &amp; Airline Surcharge</td>
                  <td className='border border-slate-400'>S$1,579</td>
                  <td className='border border-slate-400'>S$1,579</td>
                  <td className='border border-slate-400'>S$3,158</td>
              </tr>
              <tr>
                  <td className='border border-slate-400'>Ticket Issuance Fee</td>
                  <td className='border border-slate-400'>S$80</td>
                  <td className='border border-slate-400'>S$80</td>
                  <td className='border border-slate-400'>S$160</td>
              </tr>
              <tr>
                  <td className='border border-slate-400'>Price</td>
                  <td className='border border-slate-400'>S$11,459</td>
                  <td className='border border-slate-400'>S$1,659</td>
                  <td className='border border-slate-400'>S$13,118</td>
              </tr>
            </tbody>
          </table>
        </div>  
      );
      break;
    case "sg-individualairfare":
      output = (
        <div className="container relative my-4">                    
          <table className="table-fixed border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className='text-left border border-slate-400 bg-gray-900'>Singapore to New York (Business Class Return)</th>
                <th className='text-left border border-slate-400 bg-gray-900'>ULTIMA Main Cardholder</th>
                <th className='text-left border border-slate-400 bg-gray-900'>Final Cost <br/>(after 15% discount)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td className='border border-slate-400'>Airfare</td>
                  <td className='border border-slate-400'>S$9,800</td>
                  <td className='border border-slate-400'>S$8,330</td>
              </tr>
              <tr>
                  <td className='border border-slate-400'>Tax &amp; Airline Surcharge</td>
                  <td className='border border-slate-400'>S$1,579</td>
                  <td className='border border-slate-400'>S$1,579</td>
              </tr>
              <tr>
                  <td className='border border-slate-400'>Ticket Issuance Fee</td>
                  <td className='border border-slate-400'>S$80</td>
                  <td className='border border-slate-400'>S$80</td>
              </tr>
              <tr>
                  <td className='border border-slate-400'>Price</td>
                  <td className='border border-slate-400'>S$11,459</td>
                  <td className='border border-slate-400'>S$9,989</td>
              </tr>
            </tbody>
          </table>
        </div>  
      );
      break;
    case "sg-airportassist":
      output = (
        <div className="container relative my-4">                    
          <table className="table-fixed border-collapse border border-slate-400">
            <tbody>
              <tr>
                <th className='border border-slate-400'>
                  <p>Meet &amp; Assist</p></th>
                <td className='border border-slate-400'><p>Be assisted by an appointed agent who will assist you at every step of the way through the airport, from removing language barriers to skipping long queues at customs or immigration.</p></td>
              </tr>
              <tr>
                 <th className='border border-slate-400'>Luxury Airport Transfer</th>
                 <td className='border border-slate-400'><p>Relax on your way to your destination with our one-way luxury airport transfer service.</p></td>
              </tr>
            </tbody>
          </table>
        </div>  
      );
      break;
    case "companionairfare":
      output = (
        <div className="container relative my-4">                    
          <table className="table-fixed border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className='text-left border border-slate-400'>Hong Kong to London (Business Class Round Trip)</th>
                <th className='text-left border border-slate-400'>Cost of Your Ticket</th>
                <th className='text-left border border-slate-400'>Cost of Your Companion's Ticket</th>
                <th className='text-left border border-slate-400'>Cost for Two Tickets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-slate-400'>Airfare</td>
                <td className='border border-slate-400'>$92,310</td>
                <td className='border border-slate-400'>$0</td>
                <td className='border border-slate-400'>$92,310</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Taxes & Surcharges</td>
                <td className='border border-slate-400'>$2,692</td>
                <td className='border border-slate-400'>$2,692</td>
                <td className='border border-slate-400'>$5,384</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Ticket Issuance Fee</td>
                <td className='border border-slate-400'>$490</td>
                <td className='border border-slate-400'>$490</td>
                <td className='border border-slate-400'>$980</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Price</td>
                <td className='border border-slate-400'>$95,492</td>
                <td className='border border-slate-400'>$3,182</td>
                <td className='border border-slate-400'>$98,674</td>
              </tr>
            </tbody>
          </table>
        </div>  
      );
      break;
    case "individualairfare":
      output = (
        <div className="container relative my-4">                    
          <table className="table-fixed border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className='text-left border border-slate-400'>Hong Kong to London (Business Class Round Trip)</th>
                <th className='text-left border border-slate-400'>Cost of Your Ticket</th>
                <th className='text-left border border-slate-400'>Cost og Your Tickets After 15% Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-slate-400'>Airfare</td>
                <td className='border border-slate-400'>$92,310</td>
                <td className='border border-slate-400'>$78,464</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Taxes & Surcharges</td>
                <td className='border border-slate-400'>$2,692</td>
                <td className='border border-slate-400'>$2,692</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Ticket Issuance Fee</td>
                <td className='border border-slate-400'>$490</td>
                <td className='border border-slate-400'>$490</td>
              </tr>
              <tr>
                <td className='border border-slate-400'>Price</td>
                <td className='border border-slate-400'>$95,492</td>
                <td className='border border-slate-400'>$81,646</td>
              </tr>
            </tbody>
          </table>
        </div>  
      );
      break;
  }

  return output;
    
}

export default Table;