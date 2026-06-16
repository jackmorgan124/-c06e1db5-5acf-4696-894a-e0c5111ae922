import type { Metadata } from "next";
import Navbar from "@/components/blocks/navbar";
import AboutSplit from "@/components/blocks/about-split";
import AboutValues from "@/components/blocks/about-values";
import StatsCounter from "@/components/blocks/stats-counter";
import FooterColumns from "@/components/blocks/footer-columns";

export const metadata: Metadata = {
  title: "About Us | Harris Landscaping & Gardens",
  description:
    "With 15+ years of experience, Harris Landscaping & Gardens is South-West Sydney's trusted team for quality landscaping, paving, turf, decking, and garden maintenance. Fully insured, reliable, and detail-focused.",
};

export default function AboutPage() {
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
      <AboutSplit
        body="Harris Landscaping & Gardens has been transforming properties across South-West Sydney for over 15 years. Our fully insured, detail-focused team brings skill, reliability, and genuine care to every project — from initial design through to final installation. We take pride in delivering complete outdoor transformations that add lasting value to your home."
        image="/images/about-team.jpg"
        stats={[
          { label: "Years Experience", value: "15+" },
          { label: "Projects Completed", value: "500+" },
          { label: "Fully Insured", value: "100%" },
        ]}
        heading="15+ Years of Crafting Exceptional Outdoor Spaces"
        imageAlt="Harris Landscaping & Gardens team working on a South-West Sydney property"
      />
      <AboutValues
        items={[
          {
            title: "Quality Craftsmanship",
            description:
              "Every project is completed to the highest standard, using premium materials and proven techniques that stand the test of time.",
          },
          {
            title: "Reliable & Professional",
            description:
              "We show up on time, communicate clearly, and follow through on every commitment — so you can trust the process from start to finish.",
          },
          {
            title: "Full-Project Approach",
            description:
              "From design concept to final clean-up, we manage your entire landscaping project so you get a seamless, stress-free experience.",
          },
        ]}
        heading="Why Homeowners Choose Harris Landscaping & Gardens"
        subheading="We combine local knowledge, quality materials, and expert craftsmanship to deliver results you'll love for years to come."
      />
      <StatsCounter
        items={[
          { label: "Years in Business", value: "15", suffix: "+" },
          { label: "Projects Completed", value: "500", suffix: "+" },
          { label: "Fully Insured", value: "100", suffix: "%" },
          { label: "Suburbs Serviced", value: "4", suffix: "+" },
        ]}
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
