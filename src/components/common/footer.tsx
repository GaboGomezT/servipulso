'use client'
import Link from 'next/link'
import Typography from '@components/ui/typography'
import { Activity } from 'lucide-react'

export function Footer() {
  return (
    <footer className="flex h-12 items-center justify-center w-full border-t">
      <div className="w-full max-w-[1280px] md:px-8 px-4 flex place-content-center">
        <div className="gap-x-11 md:flex flex-1">
          <Link
            href="/"
            className="pointer flex items-center justify-center"
          >
            <div className="py-2 px-2 rounded-md border max-w-fit bg-emerald-400 text-white self-center mx-4">
              <Activity  size={20}/>
            </div>
            <Typography className="!text-black !text-base font-medium ">
              ServiPulso
            </Typography>
          </Link>
        </div>
        <div className="flex max-w-fit items-center gap-x-4 mx-4">
          
          {/* <Link
            href="/terms-of-service"
            className="pointer block w-fit flex-1"
          >
            <Typography variant="p" className="w-max">
              Terms of service
            </Typography>
          </Link>
          <Link
            href="/privacy-policy"
            className="pointer block w-fit"
          >
            <Typography variant="p">
              Privacy Policy
            </Typography>
          </Link> */}
        </div>
      </div>
    </footer>
  )
}
