import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import Header from './components/Header'
const inter = Inter({ subsets: ['latin'] })
const popins = Poppins({
  weight: ['400','700'],
  subsets:['latin']
})
export const metadata = {
  title: 'My Github',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <Header/>
        <main className="container">
        {children}
        </main>
      </body>
    </html>
  )
}