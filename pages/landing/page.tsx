// src/app/landing/page.tsx

import React from 'react';
import HeroSection from '../sections/HeroSection';
import FreshRecipeSection from '../sections/FreshRecipeSection';
import CategoriesSection from '../sections/CategoriesSection';
import CollectionSection from '../sections/CollectionSection';

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FreshRecipeSection />
      <CategoriesSection />
      <CollectionSection />
    </>
  );
}
