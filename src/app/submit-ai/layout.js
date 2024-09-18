import React from 'react';

export default function DealsLayout({
  children,
}) {
  return (
    <div className="w-full px-2 lg:px-0">
      {/* <StepNavigator /> */}
     <div className='w-full'>
        {children}
     </div>
    </div>
  );
}