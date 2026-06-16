import type { Metadata } from 'next'
import Navbar from '@/components/blocks/navbar'
import FooterColumns from '@/components/blocks/footer-columns'
import ServicesAlternating from '@/components/blocks/services-alternating'
import TrustBadges from '@/components/blocks/trust-badges'
import CtaBanner from '@/components/blocks/cta-banner'

export const metadata: Metadata = {
  title: 'Services | Harris Landscaping & Gardens',
  description:
    'Explore the full range of landscaping services from Harris Landscaping & Gardens — design, paving, retaining walls, turf, decking, irrigation, and maintenance.',
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
      <ServicesAlternating
        items={[
          { image: '/images/service-design.jpg', title: 'Landscaping Design', imageAlt: 'Landscaping design and planning in South-West Sydney', description: 'Bespoke outdoor design plans that bring your vision to life — from concept sketches to full property transformations tailored to South-West Sydney conditions.' },
          { image: '/images/service-retaining.jpg', title: 'Retaining Walls', imageAlt: 'Retaining wall construction in South-West Sydney', description: 'Expertly engineered retaining walls that manage your land, prevent erosion, and add defined, attractive structure to your outdoor space.' },
          { image: '/images/service-paving.jpg', title: 'Paving', imageAlt: 'Paving installation for driveways and paths in South-West Sydney', description: 'Precision-laid paving for driveways, pathways, courtyards, and entertaining areas using premium materials built to withstand daily use.' },
          { image: '/images/service-artificial-turf.jpg', title: 'Artificial Turf', imageAlt: 'Artificial turf installation in South-West Sydney', description: 'High-quality artificial turf installations that deliver a lush, green yard all year round — with minimal upkeep and maximum kerb appeal.' },
          { image: '/images/service-natural-turf.jpg', title: 'Natural Turf', imageAlt: 'Natural turf laying in South-West Sydney', description: "Professional natural turf laying for a classic, soft finish that enhances your lawn and boosts your property's value." },
          { image: '/images/service-decking.jpg', title: 'Decking', imageAlt: 'Timber and composite decking in South-West Sydney', description: 'Custom timber and composite decking that seamlessly connects your indoor and outdoor living spaces for year-round enjoyment.' },
          { image: '/images/service-irrigation.jpg', title: 'Irrigation Systems', imageAlt: 'Irrigation system installation in South-West Sydney', description: 'Smart, efficient irrigation systems designed to keep your garden healthy while saving water and reducing your maintenance workload.' },
          { image: '/images/service-maintenance.jpg', title: 'Garden Maintenance', imageAlt: 'Garden maintenance service in South-West Sydney', description: 'Scheduled maintenance programs to keep your garden, lawn, and landscaping features looking pristine throughout every season.' },
        ]}
        heading="Our Landscaping Services"
      />
      <TrustBadges
        items={[
          { icon: '/icons/experience.svg', label: '15+ Years Experience' },
          { icon: '/icons/insured.svg', label: 'Fully Insured' },
          { icon: '/icons/projects.svg', label: '500+ Projects Completed' },
          { icon: '/icons/quote.svg', label: 'Free Quotes' },
          { icon: '/icons/local.svg', label: 'Local South-West Sydney Team' },
          { icon: '/icons/materials.svg', label: 'Premium Materials' },
        ]}
      />
      <CtaBanner
        cta="Request a Free Quote"
        ctaHref="/contact"
        heading="Ready to Get Started on Your Dream Outdoor Space?"
        subheading="Contact Harris Landscaping & Gardens today for a free, no-obligation quote. We'll get back to you within one business day."
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
