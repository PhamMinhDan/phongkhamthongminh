import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CoreValues from '../components/CoreValues';
import ServicesSection from '../components/ServicesSection';
import DoctorsSection from '../components/DoctorsSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="pt-20">
      <Hero />
      <CoreValues />
      <ServicesSection />
      <DoctorsSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
