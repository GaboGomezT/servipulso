import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Instagram } from 'lucide-react';



export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Email submitted:', email);
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-6 items-center" id='waitlist'>
      {formSubmitted ? (
        // <span className=' text-emerald-600 text-lg p-2 font-bold'>Por favor, revisa tu correo electrónico para confirmar tu registro. Si no ves nuestro mensaje, verifica en tu carpeta de spam.</span>
        <div className="flex flex-col items-center">
          <span className='text-emerald-600 text-lg p-2 font-bold'>Graciar por tu interés, pronto estaré compartiendo más información.</span>
          <span className='text-emerald-600 text-lg p-2 font-bold'>Mientras te invito a seguirme en redes.</span>
          {/* add instagram icon with lucide and make it link to my instagram account */}
          <Link href="https://www.instagram.com/gabriel.gomez.t/">
            <Instagram size={40} />
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            className='rounded-md p-4 block my-2 text-lg w-full min-w-[400px]'
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
            placeholder="Tu correo electrónico"
            required
          />
          <Button type="submit" size="tiny" variant="ghost" className='text-lg'>
            Entrar a la era de los datos
          </Button>
          <span className='block my-4'>* Al enviar tu correo aceptas recibir correos de marketing</span>
        </form>
      )}
    </div>
  );
}
