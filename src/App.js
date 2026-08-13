import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';

// Products
import ConnectPage from './pages/products/ConnectPage';
import PhoneSystemPage from './pages/products/PhoneSystemPage';
import AppointmentsProPage from './pages/products/AppointmentsProPage';
import WorkOrderPage from './pages/products/WorkOrderPage';
import MailInRepairProductPage from './pages/products/MailInRepairProductPage';
import PaymentsProductPage from './pages/products/PaymentsProductPage';
import ReviewsManagementPage from './pages/products/ReviewsManagementPage';
import FranchiseManagementPage from './pages/products/FranchiseManagementPage';

// Features
import PointOfSalePage from './pages/features/PointOfSalePage';
import InventoryPage from './pages/features/InventoryPage';
import RepairTicketPage from './pages/features/RepairTicketPage';
import MarketingPage from './pages/features/MarketingPage';
import BillingInvoicingPage from './pages/features/BillingInvoicingPage';
import EmployeeManagementPage from './pages/features/EmployeeManagementPage';
import LoyaltyProgramPage from './pages/features/LoyaltyProgramPage';
import StoreCreditsPage from './pages/features/StoreCreditsPage';
import GiftCardsPage from './pages/features/GiftCardsPage';
import ReportingPage from './pages/features/ReportingPage';
import CustomerFacingDisplayPage from './pages/features/CustomerFacingDisplayPage';
import MultiLocationPage from './pages/features/MultiLocationPage';
import SelfCheckInPage from './pages/features/SelfCheckInPage';

// Industries
import CellPhoneRepairPage from './pages/industries/CellPhoneRepairPage';
import ComputerRepairPage from './pages/industries/ComputerRepairPage';
import JewelryRepairPage from './pages/industries/JewelryRepairPage';
import WatchRepairPage from './pages/industries/WatchRepairPage';
import DroneRepairPage from './pages/industries/DroneRepairPage';
import MailInRepairPage from './pages/industries/MailInRepairPage';
import CameraRepairPage from './pages/industries/CameraRepairPage';
import SmallEngineRepairPage from './pages/industries/SmallEngineRepairPage';
import HeavyDutyRepairPage from './pages/industries/HeavyDutyRepairPage';
import PowerToolsPage from './pages/industries/PowerToolsPage';
import ShoeRepairPage from './pages/industries/ShoeRepairPage';
import TailorShopPage from './pages/industries/TailorShopPage';

// Main pages
import PricingPage from './pages/PricingPage';
import IntegrationsPage from './pages/IntegrationsPage';
import OurStoryPage from './pages/OurStoryPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import GDPRPage from './pages/GDPRPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Products */}
        <Route path="/products/connect" element={<ConnectPage />} />
        <Route path="/products/phone-system" element={<PhoneSystemPage />} />
        <Route path="/products/appointments-pro" element={<AppointmentsProPage />} />
        <Route path="/products/work-order-management" element={<WorkOrderPage />} />
        <Route path="/products/mail-in-repair" element={<MailInRepairProductPage />} />
        <Route path="/products/payments" element={<PaymentsProductPage />} />
        <Route path="/products/reviews-management" element={<ReviewsManagementPage />} />
        <Route path="/products/franchise-management" element={<FranchiseManagementPage />} />

        {/* Features */}
        <Route path="/features/point-of-sale" element={<PointOfSalePage />} />
        <Route path="/features/inventory-management" element={<InventoryPage />} />
        <Route path="/features/repair-ticket-management" element={<RepairTicketPage />} />
        <Route path="/features/marketing" element={<MarketingPage />} />
        <Route path="/features/billing-invoicing" element={<BillingInvoicingPage />} />
        <Route path="/features/employee-management" element={<EmployeeManagementPage />} />
        <Route path="/features/loyalty-program" element={<LoyaltyProgramPage />} />
        <Route path="/features/store-credits" element={<StoreCreditsPage />} />
        <Route path="/features/gift-cards" element={<GiftCardsPage />} />
        <Route path="/features/reporting" element={<ReportingPage />} />
        <Route path="/features/customer-facing-display" element={<CustomerFacingDisplayPage />} />
        <Route path="/features/multi-location" element={<MultiLocationPage />} />
        <Route path="/features/self-check-in" element={<SelfCheckInPage />} />

        {/* Industries */}
        <Route path="/industries/cell-phone-repair" element={<CellPhoneRepairPage />} />
        <Route path="/industries/computer-repair" element={<ComputerRepairPage />} />
        <Route path="/industries/jewelry-repair" element={<JewelryRepairPage />} />
        <Route path="/industries/watch-repair" element={<WatchRepairPage />} />
        <Route path="/industries/drone-repair" element={<DroneRepairPage />} />
        <Route path="/industries/mail-in-repair" element={<MailInRepairPage />} />
        <Route path="/industries/camera-repair" element={<CameraRepairPage />} />
        <Route path="/industries/small-engine-repair" element={<SmallEngineRepairPage />} />
        <Route path="/industries/heavy-duty-repair" element={<HeavyDutyRepairPage />} />
        <Route path="/industries/power-tools" element={<PowerToolsPage />} />
        <Route path="/industries/shoe-repair" element={<ShoeRepairPage />} />
        <Route path="/industries/tailor-shop" element={<TailorShopPage />} />

        {/* Main */}
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsPage />} />
        <Route path="/gdpr" element={<GDPRPage />} />
      </Routes>
    </BrowserRouter>
  );
}
