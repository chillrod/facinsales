export type TechnologiesContent = {
  id: number
  name: string
  slug: string
  href: string
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
}

export const headData: PageContent = {
  product: 'Facin Web Sales',
  ctaText: 'Seu fluxo de vendas facilitado e moderno. ',
  ctaParagraph:
    'Controle o estoque de sua empresa, clientes e fluxo de mercadorias, integrado ao ERP Protheus com tecnologias modernas da Web e Mobile.',
  buttonText: 'Comece agora',
  linkContent: 'Fale com a equipe de vendas.',
  techData: [
    {
      id: 1,
      name: 'GooglePlay',
      slug: 'googleplay',
      href: '/img/googleplay/logo.png',
      width: 150,
      height: 80
    }
  ]
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
  content?: FeatureContent[]
}

export const mainData: MainContent = {
  title: 'Vamos começar?',
  buttonText: 'Entre em contato',
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
  content?: Product[]
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
  content: [
    {
      id: 1,
      href: '/img/product1.png',
      name: 'Página de Produtos',
      width: 1000,
      height: 1400
    },
    {
      id: 2,
      href: '/img/phone.png',
      name: 'Aplicação mobile',
      width: 1300,
      height: 1400
    },
    {
      id: 3,
      href: '/img/product2.png',
      name: 'Página de Produtos',
      width: 1300,
      height: 1400
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
      id: 1,
      title: 'Produtos'
    },
    {
      id: 2,
      title: 'Sobre Nós'
    },
    {
      id: 3,
      title: 'Contato'
    }
  ]
}
