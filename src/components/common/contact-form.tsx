'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button'

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email); // replace this with your email sending logic
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      {formSubmitted ? (
        <span className=' text-emerald-600 text-lg p-2 font-bold'>Por favor, revisa tu correo electrónico para confirmar tu registro. Si no ves nuestro mensaje, verifica en tu carpeta de spam.</span>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            className='rounded-md p-4 block my-2 text-lg w-full min-w-[400px]'
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
            required
          />
          <Button type="submit" size="tiny" variant="ghost" className='text-lg'>
            Entrar a la era de los datos
          </Button>
        </form>
      )}
    </div>
  );
}
