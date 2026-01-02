export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  tags: string[]; // Keeping 'tags' as requested
}

export const projects: Project[] = [
  {
    id: "saferoom",
    title: "SafeRoom UI/UX",
    description: "A comprehensive security dashboard designed for high-stakes environments. SafeRoom focuses on minimizing cognitive load for security personnel through intuitive data visualization, real-time alert systems, and a sleek, low-light optimized interface that reduces eye strain during long shifts.",
    images: [
      "/images/projects/saferoom/1.png",
      "/images/projects/saferoom/2.png",
      "/images/projects/saferoom/3.png",
      "/images/projects/saferoom/4.png",
      "/images/projects/saferoom/5.png",
    ],
    tags: ["UI/UX Design", "Figma", "Next.js"],
  },
  {
    id: "equipx",
    title: "EquipX Platform",
    description: "An industrial equipment management solution that streamlines procurement and maintenance tracking. EquipX provides a centralized hub for tracking heavy machinery lifecycles, integrating IoT health data with a user-friendly frontend to prevent costly downtime and optimize asset allocation.",
    images: [
      "/images/projects/equipx/1.png",
      "/images/projects/equipx/2.png",
      "/images/projects/equipx/3.png",
    ],
    tags: ["React", "Inventory Management", "PostgreSQL"],
  },
  {
    id: "pos-system",
    title: "Modern POS System",
    description: "A lightning-fast Point of Sale system built for the modern retail landscape. Featuring offline-first capabilities, seamless inventory synchronization, and a highly customizable checkout flow, this system bridges the gap between physical storefronts and digital backend management.",
    images: [
      "/images/projects/pos system/1.png",
      "/images/projects/pos system/2.png",
      "/images/projects/pos system/3.png",
      "/images/projects/pos system/4.png",
      "/images/projects/pos system/5.png",
    ],
    tags: ["Tailwind CSS", "Redux", "Node.js"],
  },
];