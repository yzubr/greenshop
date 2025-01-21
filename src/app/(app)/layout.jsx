import '@fontsource-variable/montserrat'
import Footer from '@/components/footer/Footer'
import 'the-new-css-reset'
import '@/style/app.css'
import Header from '../../components/Header'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
