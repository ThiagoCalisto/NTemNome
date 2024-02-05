import AcmeLogo from '@/app/ui/acme-logo';
import { DM_Sans } from 'next/font/google';
import SearchImage from '../../../src/assets/images/search-normal.png';

const dm = DM_Sans({
  subsets: ['latin-ext'],
  weight: ['400', '1000'],
  style: ['normal'],
})

export default function Footer() {
  return (
    <div className="flex h-12 shrink-0 items-end p-4 md:h-20" style={{ backgroundColor: '#fffff', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
      <AcmeLogo />
      <div className="h-full mx-4" style={{ borderRight: '1px solid rgba(0, 0, 0, 0.1)', marginLeft: '36px', marginRight: '36px' }}></div>
      <nav className={`${dm.className}`} style={{ marginBottom: '7px' }}>
        <ul className={`${dm.className} flex gap-4`}>
          <li className='font-bold'>Menu</li>
          <li className='ml-10 font-bold'>Combos</li>
          <li className='ml-10 font-bold'>Sobre</li>
        </ul>
      </nav>
      <div className="ml-4 mb-1 border rounded-full px-6 py-1" style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Pesquisar Item"
          style={{ width: '200px', border: 'none' }}
        />
        <img src={SearchImage.src} alt="Search Icon" style={{ width: '23px', height: '23px' }} />
      </div>
    </div>
  )
}
