import AcmeLogo from '@/app/ui/acme-logo';

export default function Footer(){
  return(
        <div className="flex h-12 shrink-0 items-end p-4 md:h-20" style={{backgroundColor: '#fffff', borderBottom: '1px solid rgba(0, 0, 0, 0.5)'}}>
           <AcmeLogo />
            <nav className="ml-4" style={{left:'500px'}}>
                <ul className="flex gap-4">
                  <li>Opção 1</li>
                  <li>Opção 2</li>
                  <li>Opção 3</li>
                </ul>
              </nav>
                <button>Botão</button>
        </div>
  )
}
