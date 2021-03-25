export type TechnologiesContent = {
  id: number
  name: string
  slug: string
  href: string
  width: number
  height: number
}
export type LandingPicture = {
  imageHref: string
  width: number
  height: number
}
export type PageContent = {
  product: string
  ctaText: string
  ctaParagraph: string
  buttonText: string
  linkContent: string
  techData?: TechnologiesContent[]
  techDesktop: LandingPicture
}

export const headData: PageContent = {
  product: 'Facin Web Sales',
  ctaText: 'Seu fluxo de vendas facilitado e moderno.',
  ctaParagraph:
    'Controle o estoque de sua empresa, clientes e fluxo de mercadorias, integrado ao ERP Protheus com tecnologias modernas da Web e Mobile.',
  buttonText: 'Comece agora',
  linkContent: 'Fale com a equipe de vendas.',
  techData: [
    {
      id: 1,
      name: 'GooglePlay',
      slug: 'googleplay',
      href: '/googleplay.png',
      width: 150,
      height: 80
    }
  ],
  techDesktop: {
    imageHref: '/landingPicture.png',
    width: 1000,
    height: 1000
  }
}

export type FeatureContent = {
  id: number
  icon?: string
  title: string
  paragraph: string
}

export type MainContent = {
  title: string
  buttonText: string
  headText: string
  content?: FeatureContent[]
}

export const mainData: MainContent = {
  title: 'Vamos começar?',
  buttonText: 'Entre em contato',
  headText: 'Um pacote de controle de sistemas totalmente integrados',
  content: [
    {
      id: 1,
      icon: 'attach_money_outline',
      title: 'Força de Vendas',
      paragraph:
        'Autonomia e agilidade em seu sistema para garantir o melhor fluxo de vendas para você e o seu cliente. Saiba mais'
    },
    {
      id: 2,
      icon: 'device_hub',
      title: 'Integração ao ERP Protheus',
      paragraph:
        'Potencialize ao máximo o seu rendimento integrando de forma ágil o seu sistema em nossa plataforma.'
    },
    {
      id: 3,
      icon: 'code',
      title: 'Tecnologia Moderna',
      paragraph:
        'Experimente o que há de mais novo no mercado de tecnologia. Seu sistema integrado integralmente nas plataformas Web e Mobile.'
    },
    {
      id: 4,
      icon: 'person',
      title: 'Suporte ao Usuário',
      paragraph:
        'Contamos com um valioso time de desenvolvedores para auxiliar os nossos clientes com todas as dúvidas sobre o nosso sistema.'
    },
    {
      id: 5,
      icon: 'sell',
      title: 'Controle de clientes, estoque e produtos.',
      paragraph:
        'Tenha controle total de sua mercadoria, e também dos seus clientes! Nosso sistema facilita esse processo utilizando de criativas intefaces para visualização de dados.'
    },
    {
      id: 6,
      icon: 'attach_email',
      title:
        'Envio de e-mails e PDFs contendo todas as informações de sua venda',
      paragraph:
        'Geramos documentos contendo todos os dados sensíveis de sua venda para maior controle de saída. E também de prazos de pagamento.'
    },
    {
      id: 7,
      icon: 'phonelink_setup',
      title: 'Tecnologia Mobile e Web',
      paragraph:
        'Nosso sistema é integrado a web e também ao mobile. Contendo aplicações nativa para o seu sistema.'
    },
    {
      id: 8,
      icon: 'accessibility',
      title: 'Plataforma amigável',
      paragraph:
        'Nós prezamos por uma boa experiência de usuário. Nosso sistema é acessível e prático.'
    }
  ]
}

export type Product = {
  id: number
  href: string
  name: string
  width: number
  height: number
}

export type ProductContent = {
  desktop: Product[]
  mobile: Product[]
  sample: Product[]
}

export type ProductHead = {
  title: string
  icon?: string
}

export const productHead: ProductHead = {
  title: 'Plataforma com maior rapidez de melhorias.',
  icon: 'system_update'
}

export const productData: ProductContent = {
  desktop: [
    {
      id: 1,
      href: '/product1.png',
      name: 'Página de Produtos',
      width: 800,
      height: 600
    },
    {
      id: 2,
      href: '/product2.png',
      name: 'Página de Venda',
      width: 800,
      height: 600
    }
  ],
  mobile: [
    {
      id: 3,
      href: '/product3.gif',
      name: 'Mobile',
      width: 800,
      height: 600
    },
    {
      id: 4,
      href: '/product4.gif',
      name: 'Mobile 2',
      width: 800,
      height: 600
    }
  ],
  sample: [
    {
      id: 5,
      href: '/product5.gif',
      name: 'Mobile',
      width: 800,
      height: 600
    }
  ]
}

export type ContactTitleContent = {
  title: string
  paragraph: string
  link: string
}

export type FormularyContent = {
  id: number
  title: string
  value: string
  placeholder: string
}

export type ContactContent = {
  info: ContactTitleContent
  form: FormularyContent[]
}

export const contactData: ContactContent = {
  info: {
    title: 'Vamos começar?',
    paragraph:
      'Entre em contato agora com a nossa equipe de vendas ou preencha o  formulário e entraremos em contato com você',
    link: 'Fale com a equipe de vendas'
  },
  form: [
    {
      id: 1,
      title: 'Nome',
      value: 'name',
      placeholder: 'Digite seu nome de contato'
    },
    {
      id: 2,
      title: 'E-Mail',
      value: 'email',
      placeholder: 'Digite seu email'
    },
    {
      id: 3,
      title: 'Empresa (opcional)',
      value: 'company',
      placeholder: 'Empresa'
    },
    {
      id: 4,
      title: 'Mensagem (opcional)',
      value: 'obs',
      placeholder: 'Envie-nos uma mensagem'
    }
  ]
}

export type FooterLinks = {
  id: number
  title: string
}

export type FooterContent = {
  productName: string
  links: FooterLinks[]
}

export const footerData: FooterContent = {
  productName: 'FacIn Web Sales',
  links: [
    {
      id: 2,
      title: 'Sobre'
    },
    {
      id: 3,
      title: 'Contato'
    }
  ]
}

export type AboutProps = {
  title: string
  contact?: string
  subject: string
}

export type AboutContent = {
  Sobre: AboutProps
  Contato: AboutProps
}

export const aboutData: AboutContent = {
  Sobre: {
    subject: 'Sobre nós',
    title: 'Nós somos a Facile Sistemas',
    contact:
      'Estamos baseados na Serra ES, no centro Centro Empresarial. Atuamos ativamente com o ERP Protheus e também com tecnologias Web. Integrando sistemas completos e ágeis para o melhor controle e experiência dos nossos usuários. Hoje contamos com uma incrível equipe de desenvolvedores aptos à oferecer um suporte robusto e positivo.'
  },
  Contato: {
    subject: 'Fale Conosco!',
    contact:
      'Endereço: Av. Eldes Scherrer Souza, Centro Empresarial da Serra, Laranjeiras- Serra-ES',
    title: 'Estamos prontos para o melhor atendimento.'
  }
}
