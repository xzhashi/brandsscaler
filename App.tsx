
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import InsightsPage from './pages/InsightsPage';
import ContactPage from './pages/ContactPage';
import PageContainer from './components/PageContainer';
import ServiceOverviewPage from './pages/ServiceOverviewPage'; 
import ServiceGeoPage from './pages/ServiceGeoPage'; 
import { CityData, SimulatedCountry } from './types'; // Import CityData and SimulatedCountry

// Updated CITIES_DATA with country information
export const CITIES_DATA: CityData[] = [
  // US Cities
  { name: "Dallas", path: "dallas", countryCode: "US", countryName: "United States", keyIndustries: "Tech, Finance, Logistics", marketNuance: "a rapidly growing business hub with a diverse economy" },
  { name: "New York", path: "new-york", countryCode: "US", countryName: "United States", keyIndustries: "Finance, Fashion, Media, Tech", marketNuance: "a global center of commerce demanding cutting-edge and impactful strategies" },
  { name: "Los Angeles", path: "los-angeles", countryCode: "US", countryName: "United States", keyIndustries: "Entertainment, Tech, Fashion, Tourism", marketNuance: "a trend-setting city where visual branding and digital presence are paramount" },
  { name: "Austin", path: "austin", countryCode: "US", countryName: "United States", keyIndustries: "Tech, Startups, Music, Education", marketNuance: "a vibrant and innovative city known for its entrepreneurial spirit" },
  { name: "Chicago", path: "chicago", countryCode: "US", countryName: "United States", keyIndustries: "Finance, Manufacturing, Tech, Healthcare", marketNuance: "a major economic powerhouse with a strong industrial and corporate base" },
  { name: "San Francisco", path: "san-francisco", countryCode: "US", countryName: "United States", keyIndustries: "Tech, Startups, Biotech, Tourism", marketNuance: "the heart of global tech innovation, requiring forward-thinking solutions" },
  { name: "Miami", path: "miami", countryCode: "US", countryName: "United States", keyIndustries: "Tourism, Real Estate, International Trade, Arts", marketNuance: "a multicultural gateway city with a booming luxury and creative market" },
  { name: "Seattle", path: "seattle", countryCode: "US", countryName: "United States", keyIndustries: "Tech, Aerospace, E-commerce, Coffee", marketNuance: "an innovative tech hub with a strong focus on sustainability and global brands" },
  { name: "Houston", path: "houston", countryCode: "US", countryName: "United States", keyIndustries: "Energy, Healthcare, Aerospace, Manufacturing", marketNuance: "a diverse industrial and port city with a significant global economic impact" },
  
  // India
  { name: "Mumbai", path: "mumbai", countryCode: "IN", countryName: "India", keyIndustries: "Finance, Entertainment (Bollywood), Tech, Trade", marketNuance: "a bustling financial capital and entertainment hub with a rapidly digitizing population" },
  { name: "Bangalore", path: "bangalore", countryCode: "IN", countryName: "India", keyIndustries: "IT, Startups, R&D, Biotechnology", marketNuance: "India's Silicon Valley, known for its innovation, tech talent, and dynamic startup culture" },
  { name: "Delhi", path: "delhi", countryCode: "IN", countryName: "India", keyIndustries: "Government, IT, Manufacturing, Services", marketNuance: "the national capital, a vast metropolis with diverse economic sectors and a large consumer base" },
  { name: "Chennai", path: "chennai", countryCode: "IN", countryName: "India", keyIndustries: "Automotive, IT, Healthcare, Manufacturing", marketNuance: "a major industrial, cultural, and educational center in South India, known for its automotive and tech industries" },
  { name: "Hyderabad", path: "hyderabad", countryCode: "IN", countryName: "India", keyIndustries: "IT, Pharmaceuticals, Biotechnology, Real Estate", marketNuance: "a growing tech and life sciences hub with a rich history and a burgeoning startup scene" },
  { name: "Pune", path: "pune", countryCode: "IN", countryName: "India", keyIndustries: "IT, Automotive, Education, Manufacturing", marketNuance: "an educational and industrial hub, known for its automotive sector and rapidly expanding IT industry" },

  // Dubai (UAE)
  { name: "Dubai", path: "dubai", countryCode: "AE", countryName: "United Arab Emirates", keyIndustries: "Tourism, Real Estate, Finance, Logistics, Luxury Retail", marketNuance: "a global hub for business and luxury, characterized by rapid development and a cosmopolitan population" },

  // Canada
  { name: "Toronto", path: "toronto", countryCode: "CA", countryName: "Canada", keyIndustries: "Finance, Tech, Film, Media, Real Estate", marketNuance: "Canada's largest city, a multicultural economic powerhouse with a thriving startup scene" },
  { name: "Vancouver", path: "vancouver", countryCode: "CA", countryName: "Canada", keyIndustries: "Tech, Film, Tourism, Trade (Asia-Pacific Gateway)", marketNuance: "a scenic coastal city with a strong focus on innovation, sustainability, and international trade" },
  
  // Australia
  { name: "Sydney", path: "sydney", countryCode: "AU", countryName: "Australia", keyIndustries: "Finance, Tech, Tourism, Creative Industries, Real Estate", marketNuance: "Australia's largest city, a vibrant financial and cultural center with a global outlook" },
  { name: "Melbourne", path: "melbourne", countryCode: "AU", countryName: "Australia", keyIndustries: "Tech, Arts & Culture, Education, Sports, Healthcare", marketNuance: "known for its creative spirit, strong coffee culture, and thriving tech and arts scenes" },

  // Switzerland
  { name: "Zurich", path: "zurich", countryCode: "CH", countryName: "Switzerland", keyIndustries: "Finance, Banking, Tech, Pharmaceuticals, Insurance", marketNuance: "a global financial center renowned for its stability, innovation, and high quality of life" },
  { name: "Geneva", path: "geneva", countryCode: "CH", countryName: "Switzerland", keyIndustries: "International Diplomacy, Finance, Luxury Goods, Watchmaking, NGOs", marketNuance: "a hub for international organizations and diplomacy, with a sophisticated and global business environment" }
];

// Generate list of available countries for the dropdown
const AVAILABLE_COUNTRIES: SimulatedCountry[] = Array.from(new Set(CITIES_DATA.map(city => city.countryCode)))
  .map(code => {
    const cityInCountry = CITIES_DATA.find(city => city.countryCode === code);
    return {
      code: code,
      name: cityInCountry ? cityInCountry.countryName : code // Fallback to code if name not found (should not happen)
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name)); 

// Add "United States" to the beginning if it's not there or make it default
const usCountry = AVAILABLE_COUNTRIES.find(c => c.code === 'US');
let sortedAvailableCountries = AVAILABLE_COUNTRIES.filter(c => c.code !== 'US');

if (usCountry) {
  sortedAvailableCountries = [usCountry, ...sortedAvailableCountries];
}


const App: React.FC = () => {
  // Simulate detected user country. In a real app, this would come from an IP geolocation service.
  const [simulatedUserCountry, setSimulatedUserCountry] = useState<SimulatedCountry>({ code: 'US', name: 'United States' });
  
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text-primary">
        <Navbar 
          simulatedUserCountry={simulatedUserCountry}
          onCountryChange={setSimulatedUserCountry}
          availableCountries={sortedAvailableCountries}
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<PageContainer><AboutPage /></PageContainer>} />
            <Route path="/services" element={<PageContainer><ServicesPage /></PageContainer>} />
            
            <Route
              path="/services/:serviceSlug" 
              element={
                <PageContainer>
                  <ServiceOverviewPage simulatedUserCountry={simulatedUserCountry} />
                </PageContainer>
              }
            />

            <Route
              path="/services/:serviceSlug/:cityPath"
              element={
                <PageContainer>
                  <ServiceGeoPage />
                </PageContainer>
              }
            />

            <Route path="/insights" element={<PageContainer><InsightsPage /></PageContainer>} />
            <Route path="/contact" element={<PageContainer><ContactPage /></PageContainer>} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
