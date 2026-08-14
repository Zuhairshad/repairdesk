import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Products
import ConnectPage from './pages/products/ConnectPage';
import PhoneSystemPage from './pages/products/PhoneSystemPage';
import ProductAppointmentsProPage from './pages/products/AppointmentsProPage';
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
import ClockInOutPage from './pages/features/ClockInOutPage';
import RepairHubSMSPage from './pages/features/RepairHubSMSPage';
import JobNotificationsPage from './pages/features/JobNotificationsPage';
import FeatureAppointmentsProPage from './pages/features/AppointmentsProPage';
import GoogleReviewsPage from './pages/features/GoogleReviewsPage';
import PaymentsPage from './pages/features/PaymentsPage';
import PhoneProPage from './pages/features/PhoneProPage';
import RepairHubConnectPage from './pages/features/RepairHubConnectPage';

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
import WirelessRepairPage from './pages/industries/WirelessRepairPage';
import BicycleRepairPage from './pages/industries/BicycleRepairPage';

// Compare
import VsRepairShoprPage from './pages/compare/VsRepairShoprPage';
import VsRepairqPage from './pages/compare/VsRepairqPage';

// Main pages
import PricingPage from './pages/PricingPage';
import IntegrationsPage from './pages/IntegrationsPage';
import OurStoryPage from './pages/OurStoryPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import GDPRPage from './pages/GDPRPage';
import BlogPage from './pages/BlogPage';
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import RecommendedHardwarePage from './pages/RecommendedHardwarePage';
import WebinarPage from './pages/WebinarPage';
import CustomerStoriesPage from './pages/CustomerStoriesPage';
import ReferAFriendPage from './pages/ReferAFriendPage';
import PartnerPage from './pages/PartnerPage';

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Products */}
        <Route path="/products/connect" element={<ConnectPage />} />
        <Route path="/products/phone-system" element={<PhoneSystemPage />} />
        <Route path="/products/appointments-pro" element={<ProductAppointmentsProPage />} />
        <Route path="/products/work-order-management" element={<WorkOrderPage />} />
        <Route path="/products/mail-in-repair" element={<MailInRepairProductPage />} />
        <Route path="/products/payments" element={<PaymentsProductPage />} />
        <Route path="/products/reviews-management" element={<ReviewsManagementPage />} />
        <Route path="/products/franchise-management" element={<FranchiseManagementPage />} />

        {/* Features */}
        <Route path="/features/point-of-sale" element={<PointOfSalePage />} />
        <Route path="/features/point-of-sale-software" element={<PointOfSalePage />} />
        <Route path="/features/inventory-management" element={<InventoryPage />} />
        <Route path="/features/inventory-management-software" element={<InventoryPage />} />
        <Route path="/features/repair-ticket-management" element={<RepairTicketPage />} />
        <Route path="/features/repair-ticket-management-software" element={<RepairTicketPage />} />
        <Route path="/features/marketing" element={<MarketingPage />} />
        <Route path="/features/marketing-automation-tool" element={<MarketingPage />} />
        <Route path="/features/billing-invoicing" element={<BillingInvoicingPage />} />
        <Route path="/features/billing-and-invoicing-software" element={<BillingInvoicingPage />} />
        <Route path="/features/employee-management" element={<EmployeeManagementPage />} />
        <Route path="/features/employee-management-software" element={<EmployeeManagementPage />} />
        <Route path="/features/loyalty-program" element={<LoyaltyProgramPage />} />
        <Route path="/features/store-credits" element={<StoreCreditsPage />} />
        <Route path="/features/gift-cards" element={<GiftCardsPage />} />
        <Route path="/features/gift-cards-program" element={<GiftCardsPage />} />
        <Route path="/features/reporting" element={<ReportingPage />} />
        <Route path="/features/customer-facing-display" element={<CustomerFacingDisplayPage />} />
        <Route path="/features/multi-location" element={<MultiLocationPage />} />
        <Route path="/features/self-check-in" element={<SelfCheckInPage />} />
        <Route path="/features/clock-in-out" element={<ClockInOutPage />} />
        <Route path="/features/repairhub-sms" element={<RepairHubSMSPage />} />
        <Route path="/features/job-notifications" element={<JobNotificationsPage />} />
        <Route path="/features/appointments-pro" element={<FeatureAppointmentsProPage />} />
        <Route path="/features/google-reviews" element={<GoogleReviewsPage />} />
        <Route path="/features/repairhub-payments" element={<PaymentsPage />} />
        <Route path="/features/phone-pro" element={<PhoneProPage />} />
        <Route path="/features/repairhub-connect" element={<RepairHubConnectPage />} />

        {/* Industries */}
        <Route path="/industries/cell-phone-repair" element={<CellPhoneRepairPage />} />
        <Route path="/cell-phone-repair-shop-software" element={<CellPhoneRepairPage />} />
        <Route path="/industries/computer-repair" element={<ComputerRepairPage />} />
        <Route path="/computer-repair-shop-software" element={<ComputerRepairPage />} />
        <Route path="/industries/jewelry-repair" element={<JewelryRepairPage />} />
        <Route path="/jewelry-repair-shop-software" element={<JewelryRepairPage />} />
        <Route path="/industries/watch-repair" element={<WatchRepairPage />} />
        <Route path="/watch-repair-shop-software" element={<WatchRepairPage />} />
        <Route path="/industries/drone-repair" element={<DroneRepairPage />} />
        <Route path="/drone-repair-management-software" element={<DroneRepairPage />} />
        <Route path="/industries/mail-in-repair" element={<MailInRepairPage />} />
        <Route path="/industries/camera-repair" element={<CameraRepairPage />} />
        <Route path="/industries/small-engine-repair" element={<SmallEngineRepairPage />} />
        <Route path="/industries/heavy-duty-repair" element={<HeavyDutyRepairPage />} />
        <Route path="/industries/power-tools" element={<PowerToolsPage />} />
        <Route path="/industries/shoe-repair" element={<ShoeRepairPage />} />
        <Route path="/industries/tailor-shop" element={<TailorShopPage />} />
        <Route path="/industries/wireless-repair" element={<WirelessRepairPage />} />
        <Route path="/industries/bicycle-repair" element={<BicycleRepairPage />} />

        {/* Compare */}
        <Route path="/compare/repairhub-vs-repairshopr" element={<VsRepairShoprPage />} />
        <Route path="/compare/repairhub-vs-repairq" element={<VsRepairqPage />} />

        {/* Main */}
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsPage />} />
        <Route path="/gdpr" element={<GDPRPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
        <Route path="/recommended-hardware" element={<RecommendedHardwarePage />} />
        <Route path="/webinar" element={<WebinarPage />} />
        <Route path="/customer-stories" element={<CustomerStoriesPage />} />
        <Route path="/refer-a-friend" element={<ReferAFriendPage />} />
        <Route path="/partner-with-us" element={<PartnerPage />} />
      </Routes>
    </BrowserRouter>
  );
}
