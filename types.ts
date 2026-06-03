export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

export interface NewsItem {
  category: string;
  title: string;
  image: string;
}

export enum MembershipTier {
  PREMIUM = 'Premium',
  ELITE = 'Elite'
}