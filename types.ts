
export interface PortfolioItem {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  videoUrl?: string;
  category?: string;
  type: 'image' | 'video';
  aspectRatio?: string;
}

export interface ExperienceLogo {
  id: string;
  name: string;
  logoUrl: string;
}
