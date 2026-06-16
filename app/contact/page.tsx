import type { Metadata } from "next";
import Navbar from "@/components/blocks/navbar";
import ContactForm from "@/components/blocks/contact-form";
import ContactMap from "@/components/blocks/contact-map";
import FooterColumns from "@/components/blocks/footer-columns";

export const metadata: Metadata = {
  title: "Contact Us | Harris Landscaping & Gardens",
  description:
    "Get in touch with Harris Landscaping & Gardens for a free, no-obligation quote. Call, email, or fill in our contact form and we'll get back to you within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar
        cta="Get a Free Quote"
        logo="Harris Landscaping & Gardens"
        links={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/services", label: "Services" },
          { href: "/gallery", label: "Gallery" },
          { href: "/service-areas", label: "Service Areas" },
          { href: "/contact", label: "Contact" },
        ]}
        ctaHref="/contact"
        logoHref="/"
      />
      <ContactForm
        formCta="Send My Quote Request"
        heading="Get in Touch With Harris Landscaping & Gardens"
        subheading="Ready to transform your outdoor space? Call us, send an email, or fill in the form below and we'll get back to you within one business day."
      />
      <ContactMap
        email="info@harrislandscaping.com.au"
        hours="Mon–Fri: 6:30am–4:30pm | Sat: By appointment | Sun: Closed"
        phone="02 XXXX XXXX"
        address="South-West Sydney, NSW 2560"
        heading="Find Us"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106550.123!2d150.7!3d-34.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b8a0!2sCampbelltown+NSW!5e0!3m2!1sen!2sau!4v1"
      />
      <FooterColumns
        logo="Harris Landscaping & Gardens"
        blurb="Harris Landscaping & Gardens delivers premium landscaping, paving, turf, decking, and garden maintenance across South-West Sydney. Quality craftsmanship, reliable service, and complete outdoor transformations."
        email="info@harrislandscaping.com.au"
        phone="02 XXXX XXXX"
        columns={[
          {
            links: [
              { href: "/services", label: "Landscaping Design" },
              { href: "/services", label: "Paving" },
              { href: "/services", label: "Retaining Walls" },
              { href: "/services", label: "Artificial Turf" },
              { href: "/services", label: "Decking" },
              { href: "/services", label: "Garden Maintenance" },
            ],
            heading: "Services",
          },
          {
            links: [
              { href: "/service-areas/campbelltown", label: "Campbelltown" },
              { href: "/service-areas/camden", label: "Camden" },
              { href: "/service-areas/narellan", label: "Narellan" },
              { href: "/service-areas/picton", label: "Picton" },
              { href: "/service-areas/macarthur", label: "Macarthur Region" },
              { href: "/service-areas/wollondilly", label: "Wollondilly" },
            ],
            heading: "Service Areas",
          },
          {
            links: [
              { href: "/about", label: "About Us" },
              { href: "/gallery", label: "Gallery" },
              { href: "/contact", label: "Contact" },
              { href: "/contact", label: "Get a Free Quote" },
            ],
            heading: "Company",
          },
        ]}
        copyright="© 2026 Harris Landscaping & Gardens. All rights reserved."
      />
    </>
  );
}
