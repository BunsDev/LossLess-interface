import { Cormorant_Garamond } from 'next/font/google'
import { Caudex } from 'next/font/google'
import './globals.css'
import { Web3Modal } from '@/connection'

const cormorant_garamond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant_garamond',
})
const caudex = Caudex({
  weight: ["400", "700"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caudex',
})

export const metadata = {
  title: 'Lossless',
  description: 'Lossless is a no loss bidding platform'
}


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-img ${cormorant_garamond.variable} ${caudex.variable}`}>
        <Web3Modal>
        {children}
        </Web3Modal>
      </body>
    </html>
  )
}