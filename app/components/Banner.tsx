import Image from 'next/image'
import React from 'react';
import { CTAButton } from './CommonComponents';

interface BannerProps {
  title: string;
  subtitle: string | (() => React.ReactNode);
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  className?: any;
}


const Banner = ({ title, subtitle, ctaText, backgroundImage, className, ctaLink} : BannerProps) => {
  const renderSubtitle = () => {
    if (typeof subtitle === 'function') {
      return subtitle();
    }
    return subtitle;
  };
  return (
    <div
      className={className+" banner relative flex flex-col items-center justify-center text-center text-white px-4"}
      style={{ backgroundImage: `url(${backgroundImage})`, width: '100%', minHeight: '50vh', backgroundSize: 'cover', backgroundPosition: 'top'}}
    >
      <h1 className="banner-title font-semibold text-3xl mb-4 z-10"
      >{title}</h1>
      <h2 className="banner-subtitle mb-4 z-10">{renderSubtitle()}</h2>
      <CTAButton text={ctaText} link={ctaLink} />
      <div className='absolute w-full h-full bg-black opacity-30'></div>
    </div>
  );
};

export default Banner;
