import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { MessageCircleQuestion, BarChart3, Vote } from 'lucide-react'
import Link from 'next/link'
import AnimatedLineChart from '@/components/charting/hero-line-chart'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography
          className="max-w-2xl leading-relaxed"
          variant="h1"
        >
          Convierte cada{' '}
          <span className="bg-emerald-400 px-2">
            Opinión
          </span>{' '}
          en{' '}
          <span className="bg-emerald-400 px-2">
            Oportunidades
          </span>{' '}
          de Oro
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Obtén retroalimentación directo de tus clientes
          con encuestas personalizables y visualiza los
          resultados en gráficas comprensibles para mejorar
          tu servicio.
        </Typography>
        <Link
          href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
          target="_blank"
        >
          <Button size="tiny" variant="ghost">
            Regístrate para un acceso anticipado
          </Button>
        </Link>
        <AnimatedLineChart />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl underline" variant="h2">
            ¿Cómo funciona?
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Vote size={24} />}
              headline="Encuestas personalizables"
              description="Personaliza tus encuestas con tu logo, colores para que se vean como parte de tu marca."
            />
            <Feature
              icon={<MessageCircleQuestion size={24} />}
              headline="Agrega tus propias preguntas"
              description="Personaliza tus encuestas con preguntas abiertas o cerradas para obtener la información que necesitas."
            />
            <Feature
              icon={<BarChart3 size={24} />}
              headline="Gráficas en tiempo real y personalizables"
              description="Visualiza los resultados de tus encuestas en gráficas interactivas y comprensibles. Usa las gráficas sugeridas o crea las tuyas."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Instant setup, no custom code
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Quickly link new on-call tickets to similar past
            incidents and their solutions. All directly in
            Slack the moment an incident happens.
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="Pandem.dev hero image"
            src="/hero1.png"
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Get in touch
          </Typography>
          <div>Book a demo, or hop on a call</div>
          <Link
            href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`Book now`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
