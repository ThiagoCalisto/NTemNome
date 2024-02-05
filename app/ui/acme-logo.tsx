import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { Gabarito } from 'next/font/google';

  const gabarito = Gabarito({
      subsets: ['latin'],
      display: 'swap',
    })
export default function AcmeLogo() {

  
  return (
    <div
      className={`${gabarito.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]" style={{color: '#3D00B7'}}>NtemNome</p>
    </div>
  );
}
