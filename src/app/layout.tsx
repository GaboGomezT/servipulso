import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Header } from '@/components/common/header'
import { Footer } from '@/components/common/footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:
    'ServiPulso - Encuestas de Satisfacción y Retroalimentación en Tiempo Real',
  description:
    'Envía encuestas de satisfacción y retroalimentación a tus clientes. Visualiza los resultados en tiempo real y mejora tu servicio. ¡Regístrate para un acceso anticipado!',
  twitter: {
    card: 'summary_large_image',
    title:
      'ServiPulso - Encuestas de Satisfacción y Retroalimentación en Tiempo Real',
    description:
      'Envía encuestas de satisfacción y retroalimentación a tus clientes. Visualiza los resultados en tiempo real y mejora tu servicio. ¡Regístrate para un acceso anticipado!',
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="antialiased"
    >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main
            className={`flex min-h-screen flex-col ${inter.className}`}
          >
            <Header />
            <div className="flex flex-1 justify-center w-full">
              <div className="flex w-full max-w-[1280px] h-full">
                {children}
              </div>
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  )
}
