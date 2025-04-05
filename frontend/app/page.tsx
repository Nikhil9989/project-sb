import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import HeroImproved from '@/components/home/HeroImproved';
import ProblemStatement from '@/components/home/ProblemStatement';
import DomainApproach from '@/components/home/DomainApproach';
import KeyFeatures from '@/components/home/KeyFeatures';
import MissionVision from '@/components/home/MissionVision';
import ContactSectionImproved from '@/components/home/ContactSectionImproved';
import CallToAction from '@/components/home/CallToAction';
import Testimonials from '@/components/home/Testimonials';
import CohortAdvantageCarousel from '@/components/home/CohortAdvantageCarousel';

export default function HomePage() {
  return (
    <PageLayout>
      <HeroImproved />
      <ProblemStatement />
      <DomainApproach />
      <CohortAdvantageCarousel />
      <KeyFeatures />
      <MissionVision />
      <Testimonials />
      <ContactSectionImproved />
      <CallToAction />
    </PageLayout>
  );
}