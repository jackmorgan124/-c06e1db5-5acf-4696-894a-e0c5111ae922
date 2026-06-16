import type { Metadata } from 'next'
import Navbar from '@/components/blocks/navbar'
import FooterColumns from '@/components/blocks/footer-columns'
import ServiceAreaGrid from '@/components/blocks/service-area-grid'
import ImageTextSplit from '@/components/blocks/image-text-split'
import CtaBanner from '@/components/blocks/cta-banner'

export const metadata: Metadata = {
  title: 'Service Areas | Harris Landscaping & Gardens',
  description:
    'Harris Landscaping & Gardens proudly serves homeowners across South-West Sydney including Campbelltown, Camden, Narellan, Picton, and beyond.',
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
      <ServiceAreaGrid
        areas={[
          { href: '/service-areas/campbelltown', name: 'Campbelltown' },
          { href: '/service-areas/camden', name: 'Camden' },
          { href: '/service-areas/narellan', name: 'Narellan' },
          { href: '/service-areas/picton', name: 'Picton' },
          { href: '/service-areas/macarthur', name: 'Macarthur Region' },
          { href: '/service-areas/wollondilly', name: 'Wollondilly' },
        ]}
        heading="Landscaping Services Across South-West Sydney"
        subheading="Harris Landscaping & Gardens proudly serves homeowners and property owners throughout South-West Sydney. Select your suburb below to learn more about our local services."
      />
      <ImageTextSplit
        cta="Get a Free Quote in Your Area"
        body="With over 15 years working across South-West Sydney, we understand the local terrain, climate, and council requirements that affect your landscaping project. Whether you're in Campbelltown, Camden, Narellan, or Picton, Harris Landscaping & Gardens is your trusted local team for quality outdoor design and construction."
        image="/images/service-areas-local.jpg"
        ctaHref="/contact"
        heading="Local Expertise You Can Count On"
        imageAlt="Harris Landscaping & Gardens team working on a local South-West Sydney property"
        imagePosition="right"
      />
      <CtaBanner
        cta="Get a Free Quote in Your Area"
        ctaHref="/contact"
        heading="Serving Your Suburb — Get a Free Local Quote"
        subheading="No matter where you are in South-West Sydney, Harris Landscaping & Gardens is ready to transform your outdoor space. Contact us today."
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
