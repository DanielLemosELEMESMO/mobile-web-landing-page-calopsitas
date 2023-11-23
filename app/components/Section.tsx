import React from 'react';

const Section = ({ children }: { children: React.ReactNode }) => {
  return <section style={{ padding: '20px' }} className='flex flex-col items-center justify-center'>{children}</section>;
};

export default Section;
