// For HeadSEO.astro
export interface HeadSEOProps {
  title?: string | undefined;
  description?: string | undefined;
  ogImage?: URL | undefined;
}

// For BaseLayout.astro
export interface BaseLayoutProps extends HeadSEOProps {
  class?: string;
}

// For Experience.astro
export interface ExperienceProps {
  company: string;
  location?: string;
  duration?: string;
}

// For Button.astro
export type Variant = "primary" | "secondary";

export interface ButtonProps {
  class?: string;
  icon?: boolean;
  variant?: Variant;
}
