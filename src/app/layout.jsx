'use client'

import '@fontsource-variable/montserrat'
import CartProvider from '@/components/CartProvider'
import 'the-new-css-reset'
import '@/style/app.css'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
