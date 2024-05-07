import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { MessageCircleQuestion, BarChart3, Vote, FlaskConical, BrainCircuit, Rocket } from 'lucide-react'
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
        {/* Benefits */}
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl underline" variant="h2">
            ¿Por qué deberías usarlo?
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Rocket size={24} />}
              headline="Lo que no se mide, no se mejora"
              description="Cuando obtienes retroalimentación directa de tus clientes, puedes identificar áreas de mejora y tomar decisiones informadas."
            />
            <Feature
              icon={<BrainCircuit size={24} />}
              headline="Encuentra tendencias y patrones"
              description="Encuentra patrones que te dan una nueva perspectiva sobre tu servicio y toma decisiones basadas en datos."
            />
            <Feature
              icon={<FlaskConical size={24} />}
              headline="Mide la eficacia de tus experimentos"
              description="¿Estás probando una nueva promoción o un cambio en tu servicio? Mide la eficacia de tus experimentos con datos reales."
            />
          </div>
        </div>
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
