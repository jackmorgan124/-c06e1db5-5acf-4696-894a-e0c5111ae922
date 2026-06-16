import type { Metadata } from 'next'
import Navbar from '@/components/blocks/navbar'
import FooterColumns from '@/components/blocks/footer-columns'
import GalleryBeforeAfter from '@/components/blocks/gallery-before-after'
import Gallery from '@/components/blocks/gallery'
import CtaSplit from '@/components/blocks/cta-split'

export const metadata: Metadata = {
  title: 'Gallery | Harris Landscaping & Gardens',
  description:
    'Browse completed landscaping projects across Campbelltown, Camden, Narellan, Picton, and surrounding suburbs — see the Harris Landscaping difference.',
}

export default function Page() {
  return (
    <>
      <Navbar
        cta="Get a Free Quote"
        logo="Harris Landscaping & Gardens"
        links={[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
          { href: '/services', label: 'Services' },
          { href: '/gallery', label: 'Gallery' },
          { href: '/service-areas', label: 'Service Areas' },
          { href: '/contact', label: 'Contact' },
        ]}
        ctaHref="/contact"
        logoHref="/"
      />
      <GalleryBeforeAfter
        pairs={[
          { after: '/images/after-1.jpg', label: 'Full Backyard Transformation — Campbelltown', before: '/images/before-1.jpg' },
          { after: '/images/after-2.jpg', label: 'Paving & Turf Installation — Camden', before: '/images/before-2.jpg' },
          { after: '/images/after-3.jpg', label: 'Retaining Wall & Garden — Narellan', before: '/images/before-3.jpg' },
          { after: '/images/after-4.jpg', label: 'Decking & Landscaping — Picton', before: '/images/before-4.jpg' },
        ]}
        heading="Before & After Transformations"
        subheading="See the Harris Landscaping difference — dramatic outdoor transformations across Campbelltown, Camden, Narellan, Picton, and surrounding suburbs."
      />
      <Gallery
        images={[
          { alt: 'Landscaping design project in Campbelltown', src: '/images/gallery-1.jpg' },
          { alt: 'Paving installation in Camden', src: '/images/gallery-2.jpg' },
          { alt: 'Artificial turf in Narellan', src: '/images/gallery-3.jpg' },
          { alt: 'Timber decking in Picton', src: '/images/gallery-4.jpg' },
          { alt: 'Retaining wall construction in South-West Sydney', src: '/images/gallery-5.jpg' },
          { alt: 'Garden maintenance project in Campbelltown', src: '/images/gallery-6.jpg' },
          { alt: 'Natural turf laying in Camden', src: '/images/gallery-7.jpg' },
          { alt: 'Irrigation system installation in Narellan', src: '/images/gallery-8.jpg' },
        ]}
        heading="Our Work Speaks for Itself"
        subheading="Browse completed landscaping projects across Campbelltown, Camden, Narellan, Picton, and surrounding suburbs. From full backyard transformations to paving, turf, and decking — see the Harris Landscaping difference."
      />
      <CtaSplit
        cta="Start Your Own Transformation"
        image="/images/cta-split.jpg"
        ctaHref="/contact"
        heading="Ready to Transform Your Outdoor Space?"
        imageAlt="Beautiful landscaped backyard completed by Harris Landscaping & Gardens"
        subheading="Get in touch with Harris Landscaping & Gardens today for a free, no-obligation quote on your next project."
      />
      <FooterColumns
        logo="Harris Landscaping & Gardens"
        blurb="Harris Landscaping & Gardens delivers premium landscaping, paving, turf, decking, and garden maintenance across South-West Sydney. Quality craftsmanship, reliable service, and complete outdoor transformations."
        email="info@harrislandscaping.com.au"
        phone="02 XXXX XXXX"
        columns={[
          { links: [
            { href: '/services', label: 'Landscaping Design' },
            { href: '/services', label: 'Paving' },
            { href: '/services', label: 'Retaining Walls' },
            { href: '/services', label: 'Artificial Turf' },
            { href: '/services', label: 'Decking' },
            { href: '/services', label: 'Garden Maintenance' },
          ], heading: 'Services' },
          { links: [
            { href: '/service-areas/campbelltown', label: 'Campbelltown' },
            { href: '/service-areas/camden', label: 'Camden' },
            { href: '/service-areas/narellan', label: 'Narellan' },
            { href: '/service-areas/picton', label: 'Picton' },
            { href: '/service-areas/macarthur', label: 'Macarthur Region' },
            { href: '/service-areas/wollondilly', label: 'Wollondilly' },
          ], heading: 'Service Areas' },
          { links: [
            { href: '/about', label: 'About Us' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/contact', label: 'Contact' },
            { href: '/contact', label: 'Get a Free Quote' },
          ], heading: 'Company' },
        ]}
        copyright="© 2026 Harris Landscaping & Gardens. All rights reserved."
      />
    </>
  )
}
