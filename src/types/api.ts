export type techIcons = {
  title: string
  icon: {
    url: string
  }
}

export type concepts = {
  title: string
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type Reviews = {
  name: string
  text: string
  photo: {
    url: string
  }
}

export type Image = {
  alternativeText: string
  url: string
}

export type SocialLinks = {
  title: string
  url: string
}

export type Question = {
  question: string
  answer: string
}

export type Author = {
  photo: Image
  name: string
  role: string
  socialLinks: SocialLinks[]
  description: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  imagem: {
    url: string
    alternativeText: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: techIcons[]
}

export type sectionConceptsProps = {
  title: string
  concepts: concepts[]
}

export type sectionModulesProps = {
  title: string
  modules: Modules[]
}

export type sectionReviewsProps = {
  title: string
  reviews: Reviews[]
}

export type sectionScheduleProps = {
  title: string
  description: string
}

export type sectionPriceBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type sectionsAboutUsProps = {
  title: string
  authors: Author[]
}

export type sectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: Image
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: sectionConceptsProps
  sectionModules: sectionModulesProps
  sectionReviews: sectionReviewsProps
  sectionSchedule: sectionScheduleProps
  sectionPriceBox: sectionPriceBoxProps
  sectionsAboutUs: sectionsAboutUsProps
  sectionFaq: sectionFaqProps
}
