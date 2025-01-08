import React from 'react';

const ToothIllustration = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="transform scale-90">
    <path d="M50 15C65 15 75 25 75 40C75 65 65 85 50 85C35 85 25 65 25 40C25 25 35 15 50 15Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 40C40 35 45 30 50 30C55 30 60 35 60 40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M35 50C35 45 42 40 50 40C58 40 65 45 65 50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M38 60L50 65L62 60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FaceIllustration = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="transform scale-90">
    <path d="M30 35C30 20 70 20 70 35C70 60 60 80 50 80C40 80 30 60 30 35Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 45C40 45 45 55 50 55C55 55 60 45 60 45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M35 35C35 35 40 30 45 30M65 35C65 35 60 30 55 30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 65C45 70 55 70 60 65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DocumentIllustration = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="transform scale-90">
    <path d="M30 15H60L70 25V85H30V15Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M60 15V25H70" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 40H60M40 50H55M40 60H58M40 70H52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MicroscopeIllustration = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="transform scale-90">
    <path d="M45 15V35M55 15V35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 35H60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 35L35 85H65L55 35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 20H58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45 25H55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export { ToothIllustration, FaceIllustration, DocumentIllustration, MicroscopeIllustration };