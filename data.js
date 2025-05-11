// This file contains all content for the portfolio website
// Edit this file to update the website without touching the code

export const siteConfig = {
  title: "Jane Smith • Graphic Design Portfolio",
  name: "Vrit Studio.",
  role: "Graphic Designer",
  location: "India, IN",
  email: "vritstudio@gmail.com",
  phone: "+91 8668608778",
  social: {
    instagram: "https://instagram.com/janesmith.design",
    behance: "https://behance.net/janesmith",
    twitter: "https://dribbble.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith"
  }
};

export const navigation = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

export const hero = {
  heading: "Creating visual identities for brands that want to stand out",
  subheading: "Brand designer with 7+ years of experience specializing in visual identity design and editorial layouts",
  cta: "View Projects",
  ctaLink: "/projects",
  image: "https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
};

export const featuredProjects = [
  {
    id: "01",
    title: "Modern Art Gallery Rebrand",
    category: "Brand Identity",
    description: "Complete rebrand for a contemporary art gallery, including logo design, typography system, and environmental graphics.",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
  },
  {
    id: "02",
    title: "NOVO Coffee Packaging",
    category: "Packaging Design",
    description: "Sustainable packaging design for a specialty coffee brand, featuring custom illustrations and a modular system.",
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
  },
  {
    id: "03",
    title: "Wavelength Music Festival",
    category: "Event Branding",
    description: "Full identity and collateral design for an annual music festival, including posters, signage, digital assets, and merch.",
    image: "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
  },
    {
    id: "04",
    title: "Botanica Skincare",
    category: "Packaging Design",
    shortDescription: "Packaging system for a natural skincare line",
    fullDescription: "A minimalist and elegant packaging system for Botanica, a plant-based skincare brand. The design emphasizes the natural ingredients through subtle botanical illustrations and a clean, clinical aesthetic. The system includes primary and secondary packaging, shipping materials, and in-store display units.",
    image: "https://images.unsplash.com/photo-1570654621852-9dd25b76b38d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2185&q=80",
    featured: true
  },
  {
    id: "05",
    title: "Ember Literary Magazine",
    category: "Editorial Design",
    shortDescription: "Editorial design for a quarterly literary publication",
    fullDescription: "A sophisticated editorial design for Ember, a quarterly literary magazine featuring poetry, short fiction, and essays. The design establishes a distinctive grid system, typography hierarchy, and visual language that elevates the written content while providing visual interest. Each issue features custom illustrations and photography art directed to complement the written pieces.",
    image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80",
    featured: true
  },
  {
    id: "06",
    title: "Kinetic Running App",
    category: "Digital Design",
    shortDescription: "UI/UX design for a fitness tracking application",
    fullDescription: "A complete user interface design for Kinetic, a running and fitness tracking app. The design includes user flow mapping, wireframing, UI component design, and a comprehensive design system for future expansion. The interface features data visualization of workout metrics, social sharing capabilities, and customizable goal tracking dashboards.",
    image: "https://images.unsplash.com/photo-1610000679834-e231a2fda7cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    featured: true
  }
];

export const projects = [
  {
    id: "01",
    title: "Modern Art Gallery Rebrand",
    category: "Brand Identity",
    shortDescription: "Brand identity design for a contemporary art gallery",
    fullDescription: "A complete visual identity redesign for a contemporary art gallery, featuring a dynamic and flexible logo system that responds to the art being displayed. The system includes custom typography, color palette, grid system, and a range of applications from stationery to environmental graphics and digital platforms.",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    featured: true
  },
  {
    id: "02",
    title: "NOVO Coffee Packaging",
    category: "Packaging Design",
    shortDescription: "Sustainable packaging for a specialty coffee brand",
    fullDescription: "A comprehensive packaging system for NOVO, a specialty coffee roaster focused on sustainability. The design features recyclable materials, a color-coding system for different coffee origins, and custom illustrations for each blend. The modular system allows for easy updates and seasonal variations while maintaining brand consistency.",
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    featured: true
  },
  {
    id: "03",
    title: "Wavelength Music Festival",
    category: "Event Branding",
    shortDescription: "Identity design for an annual music festival",
    fullDescription: "A vibrant and energetic identity for Wavelength, an annual 3-day music festival celebrating independent artists. The design system features a sound-wave inspired visual language that adapts across all touchpoints including posters, wristbands, stage designs, app interface, and merchandise. The flexible system allows for yearly evolution while maintaining recognition.",
    image: "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    featured: true
  },
  {
    id: "04",
    title: "Botanica Skincare",
    category: "Packaging Design",
    shortDescription: "Packaging system for a natural skincare line",
    fullDescription: "A minimalist and elegant packaging system for Botanica, a plant-based skincare brand. The design emphasizes the natural ingredients through subtle botanical illustrations and a clean, clinical aesthetic. The system includes primary and secondary packaging, shipping materials, and in-store display units.",
    image: "https://images.unsplash.com/photo-1570654621852-9dd25b76b38d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2185&q=80",
    featured: true
  },
  {
    id: "05",
    title: "Ember Literary Magazine",
    category: "Editorial Design",
    shortDescription: "Editorial design for a quarterly literary publication",
    fullDescription: "A sophisticated editorial design for Ember, a quarterly literary magazine featuring poetry, short fiction, and essays. The design establishes a distinctive grid system, typography hierarchy, and visual language that elevates the written content while providing visual interest. Each issue features custom illustrations and photography art directed to complement the written pieces.",
    image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80",
    featured: true
  },
  {
    id: "06",
    title: "Kinetic Running App",
    category: "Digital Design",
    shortDescription: "UI/UX design for a fitness tracking application",
    fullDescription: "A complete user interface design for Kinetic, a running and fitness tracking app. The design includes user flow mapping, wireframing, UI component design, and a comprehensive design system for future expansion. The interface features data visualization of workout metrics, social sharing capabilities, and customizable goal tracking dashboards.",
    image: "https://images.unsplash.com/photo-1610000679834-e231a2fda7cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    featured: true
  }
];

export const about = {
  heading: "Creating meaningful design that connects brands with people",
  bio: "We are a multidisciplinary graphic design agency built on years of collaborative experience across branding, editorial, and packaging design.\n\n Formed by a network of designers, strategists, and creative partners from diverse backgrounds, we bring a flexible, freelance-rooted approach to every project—adapting to unique client needs and industries.\n\nOver the years, we’ve worked with startups, established brands, publishers, and agencies—translating their stories into thoughtful, impactful visuals.\n\nOur strength lies in blending design thinking with clear communication, helping our clients stand out and connect meaningfully with their audiences.\n\nOur collaborative ethos and design-led mindset continue to shape the way we approach each project—with curiosity, craft, and clarity.",
  experience: [
    {
      position: "Senior Designer",
      company: "Studio Dash",
      period: "2019 - Present",
      description: "Lead designer for key client accounts including retail, cultural, and technology brands."
    },
    {
      position: "Designer",
      company: "Pentagram",
      period: "2016 - 2019",
      description: "Worked with partners on a wide range of identity, editorial, and environmental design projects."
    },
    {
      position: "Junior Designer",
      company: "The Design Office",
      period: "2014 - 2016",
      description: "Assisted senior designers on various branding and packaging projects."
    }
  ],
  education: [
    {
      degree: "MFA, Graphic Design",
      school: "Rhode Island School of Design",
      year: "2014"
    },
    {
      degree: "BFA, Visual Communication",
      school: "Maryland Institute College of Art",
      year: "2012"
    }
  ],
  skills: ["Brand Strategy", "Logo Design", "Typography", "Editorial Design", "Packaging", "Art Direction", "Digital Design", "Copywriting"]
};

export const contact = {
  heading: "Let's create something together",
  description: "I'm currently available for select freelance projects. If you'd like to discuss a project or just say hello, get in touch and I'll get back to you soon.",
  formLabels: {
    name: "Name",
    email: "Email",
    message: "Message",
    subject: "Subject",
    submit: "Send Message"
  },
  thankYouMessage: "Thank you for your message. I'll get back to you within 1-2 business days."
};