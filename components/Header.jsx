import React from 'react';
import Image from 'next/image';

export default function Header({children}) {
  return (
    <div className='header'>
        <img src='/logo.png' width={150} height={100} alt='logo' />
<div>
{children}
</div>
    </div>
  )
}
