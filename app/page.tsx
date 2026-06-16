import type { Metadata } from 'next'
import Navbar from '@/components/blocks/navbar'
import FooterColumns from '@/components/blocks/footer-columns'
import HeroSplit from '@/components/blocks/hero-split'
import ServicesGrid from '@/components/blocks/services-grid'
import GalleryBeforeAfter from '@/components/blocks/gallery-before-after'
import ReviewsCarousel from '@/components/blocks/reviews-carousel'

export const metadata: Metadata = {
  title: 'Harris Landscaping & Gardens',
  description:
    'From custom garden designs to paving, turf, and decking, Harris Landscaping & Gardens delivers premium outdoor transformations across South-West Sydney.',
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
      <HeroSplit
        cta="Get a Free Quote"
        image="/images/hero.jpg"
        ctaHref="/contact"
        headline="Transform Your Outdoor Space With South-West Sydney's Trusted Landscapers"
        imageAlt="Harris Landscaping & Gardens outdoor transformation in South-West Sydney"
        trustBadge="Trusted by 500+ South-West Sydney homeowners"
        subheadline="From custom garden designs to paving, turf, and decking, Harris Landscaping & Gardens delivers premium outdoor transformations across Campbelltown, Camden, Narellan, Picton, and beyond."
      />
      <ServicesGrid
        items={[
          'Landscaping Design — Custom outdoor designs tailored to your property and lifestyle',
          'Paving — Durable, stylish paving solutions for driveways, paths, and entertaining areas',
          'Retaining Walls — Structurally sound retaining walls built to last and enhance your land',
          'Artificial & Natural Turf — Lush, low-maintenance turf installations for any yard',
          'Decking — Premium timber and composite decking to extend your living space outdoors',
          'Garden Maintenance — Ongoing care to keep your garden looking its best year-round',
        ]}
        heading="Everything Your Outdoor Space Needs"
        subheading="We offer a complete range of landscaping and garden services — designed, built, and maintained to the highest standard."
      />
      <GalleryBeforeAfter
        pairs={[
          { after: '/images/after-1.jpg', label: 'Backyard Transformation — Campbelltown', before: '/images/before-1.jpg' },
          { after: '/images/after-2.jpg', label: 'Paving & Turf — Camden', before: '/images/before-2.jpg' },
          { after: '/images/after-3.jpg', label: 'Decking & Garden — Narellan', before: '/images/before-3.jpg' },
        ]}
        heading="Our Work Speaks for Itself"
        subheading="Browse completed landscaping projects across South-West Sydney — from full backyard transformations to paving, turf, and decking."
      />
      <ReviewsCarousel
        items={[
          { author: 'Sarah M.', review: 'Harris Landscaping completely transformed our backyard. Professional, reliable, and the quality of work is outstanding. Highly recommend!', location: 'Campbelltown' },
          { author: 'James T.', review: 'From the initial design through to completion, the team was fantastic. Our new paving and turf look incredible.', location: 'Camden' },
          { author: 'Lisa R.', review: "We've used Harris Landscaping for both our front and back yard. The attention to detail is second to none — absolute professionals.", location: 'Narellan' },
          { author: 'David K.', review: 'Exceptional work on our retaining walls and decking. The team showed up on time every day and the results exceeded our expectations.', location: 'Picton' },
        ]}
        heading="What Our Clients Are Saying"
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
