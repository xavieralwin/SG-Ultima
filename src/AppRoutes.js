import React from 'react';
// import { Route, Routes, useLocation  } from 'react-router-dom';
import { Route, Routes  } from 'react-router-dom';
import Page404 from "./pages/404Page";
import HomePage from './pages/homePage';
import LuxuriesPage from './pages/luxuries';
import JourneysPage from './pages/journeys';
import TastemakerPage from './pages/tastemaker';
import BalancePage from './pages/balance';
import MomentsPage from './pages/moments';
import DelightsPage from './pages/delights';
import RewardsPage from './pages/rewards';
import DedicationPage from './pages/dedication';
import MasterPage from './pages/master';
import TermsAndConditionsPage from './pages/termsandconditions';
import ImportantInformationPage from './pages/importantInformation';

/**
 * Routes component containing routes for the whole application
 * @returns {JSX}
 */
// const HomeRouter = () => {
//   const location = useLocation();

//   // If hash is "#horizons", show JourneysPage instead of HomePage
//   if (location.hash === '#horizons') {
//     return <JourneysPage />;
//   }

//   return <HomePage />;
// };

const AppRoutes = () => (

  
    <Routes basename={'/microsite/credit-cards/rewards/ultima-card-byinviteonly'}>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/luxuries' element={<LuxuriesPage />} />
        <Route exact path='/horizons' element={<JourneysPage />} />
        <Route exact path='/indulgence' element={<TastemakerPage />} />
        <Route exact path='/indulgence/:section' element={<TastemakerPage />} />
        <Route exact path='/balance' element={<BalancePage />} />
        <Route exact path='/moments' element={<MomentsPage />} />
        <Route exact path='/mastercard' element={<MasterPage />} />
        <Route exact path='/delights' element={<DelightsPage />} />
        <Route exact path='/rewards' element={<RewardsPage />} />
        <Route exact path='/dedication' element={<DedicationPage />} />
        <Route exact path='/terms-and-conditions' element={<TermsAndConditionsPage />} />
        <Route exact path='/terms-and-conditions/:section' element={<TermsAndConditionsPage />} />
        <Route exact path='/terms-and-conditions/:section/:id' element={<TermsAndConditionsPage />} />
        <Route exact path='/important-information' element={<ImportantInformationPage />} />
        <Route path="*"  component={<Page404 />} />
    </Routes>
);

export default AppRoutes;