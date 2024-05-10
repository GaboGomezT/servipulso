import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function WaitlistConfirmation() {
  return (
    // <span className=' text-emerald-600 text-lg p-2 font-bold'>Por favor, revisa tu correo electrónico para confirmar tu registro. Si no ves nuestro mensaje, verifica en tu carpeta de spam.</span>
    <div className="flex flex-col items-center justify-center h-screen w-full text-center">
      <span className='text-emerald-600 text-lg p-2 font-bold'>Graciar por tu interés, pronto estaré compartiendo más información.</span>
      <span className='text-emerald-600 text-lg p-2 font-bold'>Mientras te invito a seguirme en redes.</span>
      <Link href="https://www.instagram.com/gabriel.gomez.t/">
        <Instagram size={40} />
      </Link>
    </div>
  );
}