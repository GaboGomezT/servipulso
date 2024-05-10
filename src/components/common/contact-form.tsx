import { Button } from '@/components/ui/button';
import { createWaitlistSignup } from '@/lib/actions';

export default function ContactForm() {

  return (
    <div className="flex flex-col gap-6 items-center" id='waitlist'>
      <form action={createWaitlistSignup} >
        <input
          className='rounded-md p-4 block my-2 text-lg w-full min-w-[400px]'
          type="email"
          placeholder="Tu correo electrónico"
          name="waitlistEmail"
          required
        />
        <Button type="submit" size="tiny" variant="ghost" className='text-lg'>
          Entrar a la era de los datos
        </Button>
        <span className='block my-4'>* Al enviar tu correo aceptas recibir correos de marketing</span>
      </form>
    </div>
  );
}
