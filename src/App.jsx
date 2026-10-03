import { useCallback, useState } from 'react';
import { AnimatePresence, MotionConfig, useReducedMotion } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { leaders, personalities, reviews } from './data/tisData';
import CustomCursor from './components/animation/CustomCursor';
import ScrollProgress from './components/animation/ScrollProgress';
import Preloader from './components/animation/Preloader';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SportsSection from './components/sections/SportsSection';
import SecretSection from './components/sections/SecretSection';
import StatsSection from './components/sections/StatsSection';
import RankingsSection from './components/sections/RankingsSection';
import PersonalitiesSection from './components/sections/PersonalitiesSection';
import AwardsSection from './components/sections/AwardsSection';
import WhyTisSection from './components/sections/WhyTisSection';
import ParentsSection from './components/sections/ParentsSection';
import ReviewsSection from './components/sections/ReviewsSection';
import CollaborationsSection from './components/sections/CollaborationsSection';
import EnquirySection from './components/sections/EnquirySection';

const SEEN_KEY = 'tis-preloader-seen';
const alreadySeen = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return false;
  }
};

export default function App() {
  const { theme, toggle } = useTheme();
  const reduced = useReducedMotion();
  const [loaded, setLoaded] = useState(() => alreadySeen());
  const ready = loaded || Boolean(reduced);

  const finishLoading = useCallback(() => {
    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* ignore */
    }
    setLoaded(true);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{!ready && <Preloader onDone={finishLoading} />}</AnimatePresence>
      <CustomCursor />
      <ScrollProgress />
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10001] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-bold focus:text-crimson">
        Skip to content
      </a>
      <TopBar />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <HeroSection ready={ready} />
        <AboutSection />
        <SportsSection />
        <SecretSection />
        <StatsSection />
        <RankingsSection />
        <PersonalitiesSection personalities={personalities} leaders={leaders} />
        <AwardsSection />
        <WhyTisSection />
        <ParentsSection />
        <ReviewsSection reviews={reviews} />
        <CollaborationsSection />
        <EnquirySection />
      </main>
      <Footer />
    </MotionConfig>
  );
}
