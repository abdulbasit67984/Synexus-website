export type ProductPlan = {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
};

export type ProductFAQ = {
  question: string;
  answer: string;
};

export type Product = {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  modules: string[];
  benefits: string[];
  plans: ProductPlan[];
  faqs: ProductFAQ[];
};