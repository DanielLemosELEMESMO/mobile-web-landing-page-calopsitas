
import React from 'react';

type TitleProps = {
  text: string;
};

const Title = ({ text }:TitleProps) => {
  return <h1>{text}</h1>;
};

type SubtitleProps = {
  text: string;
};

const Subtitle = ({ text }:SubtitleProps) => {
  return <h2>{text}</h2>;
};

type CTAButtonProps = {
  text: string;
  link: string;
  className?: string;
};

const CTAButton = ({ text, link, className }:CTAButtonProps) => {
  return <a className={className + " banner-cta text-white bg-blue-500 hover:bg-blue-600 font-bold py-3 px-4 rounded z-10"} href={link}>{text}</a>;
};

export { Title, Subtitle, CTAButton };
