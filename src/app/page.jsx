import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Header />
      <></>
      <Script id='hotjarScript' strategy='afterInteractive'>
        {(function (h, o, t, j, a, r) {
          h.hj =
            h.hj ||
            function () {
              ;(h.hj.q = h.hj.q || []).push(arguments)
            }
          h._hjSettings = { hjid: 3765283, hjsv: 6 }
          a = o.getElementsByTagName('head')[0]
          r = o.createElement('script')
          r.async = 1
          r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
          a.appendChild(r)
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')}
      </Script>
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        {/* <Testimonials /> */}
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
