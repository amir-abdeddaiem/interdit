'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import IdentitySection from '@/components/IdentitySection';
import MessageCardsSection from '@/components/MessageCardsSection';
import RelationshipSection from '@/components/RelationshipSection';
import MoonSection from '@/components/MoonSection';
import SurpriseSection from '@/components/SurpriseSection';
import BirthdayModal from '@/components/BirthdayModal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <IdentitySection />
      <MessageCardsSection />
      <RelationshipSection />
      <MoonSection />
      <SurpriseSection onOpen={() => setShowModal(true)} />
      {showModal && <BirthdayModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
