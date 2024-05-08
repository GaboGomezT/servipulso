import { useState } from 'react';
import { Button } from '@/components/ui/button';

// import 'dotenv/config';
// import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

// const mailerSend = new MailerSend({
//   apiKey: process.env.API_KEY || '',
// });

// const sentFrom = new Sender("gabriel@servipulso.com", "Gabriel Gómez");


export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void (async () => {
      // const recipients = [
      //   new Recipient(email)
      // ];

      // const emailParams = new EmailParams()
      //   .setFrom(sentFrom)
      //   .setTo(recipients)
      //   .setReplyTo(sentFrom)
      //   .setSubject("Confirmación de lista de espera")
      //   .setTemplateId('3z0vklo08y7l7qrx');

      // await mailerSend.email.send(emailParams);
    })();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col gap-6 items-center" id='waitlist'>
      {formSubmitted ? (
        <span className=' text-emerald-600 text-lg p-2 font-bold'>Por favor, revisa tu correo electrónico para confirmar tu registro. Si no ves nuestro mensaje, verifica en tu carpeta de spam.</span>
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
          <span className='block my-4'>* Al enviar tu correo aceptas recibir nuestros correos de marketing</span>
        </form>
      )}
    </div>
  );
}
