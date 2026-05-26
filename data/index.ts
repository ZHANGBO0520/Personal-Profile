export const navbarData = {
  homeTitle: "Liu's Blog",
}

export const footerData = {
  author: 'Liu',
  aboutAuthor:
    '技术小学生',
  authorInterest:
    "1905321532@qq.com",
  aboutTheSite:
    "这是我在学习之余搭建的个人博客，希望能再此分享一些日常和学习心得",
}

export const homePage = {
  title: 'Welcome To My Blog Site',
  description:
    '保持热爱',
}

export const blogsPage = {
  title: 'All Blogs',
  description: '学习记录',
}

export const categoryPage = {
  title: 'Categories',
  description:
    'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'Liu',
  description: '无限进步',
  aboutMe:
    "Hello ~ \
我是小刘，在北京读研究生，学习各种计算机知识ing \
同时也是一名健身爱好者💪",
}

export const academicPage = {
  title: 'Academic Work',
  description: 'Research and coursework across sustainable marketing, consumer insight, strategy, and financial decision-making.',
  summary:
    'This section collects selected dissertation and coursework projects. Each work includes a short introduction, research outline, key methods, and a source-file area for the full paper once a public version is ready.',
  highlights: [
    'Sustainable marketing and green consumer behaviour',
    'Questionnaire design, regression analysis, and mediation testing',
    'Consumer segmentation and evidence-based marketing strategy',
    'Digital transformation, platform innovation, and financial analysis',
  ],
  works: [
    {
      slug: 'visual-green-labels',
      title: 'Visual Green Labels and Consumer Purchase Intention',
      type: 'Master dissertation',
      period: '2025',
      description:
        'An experiment-based quantitative study on how visual green labels influence food and beverage purchase intention through perceived environmental friendliness, label credibility, and brand trust.',
      outline: [
        'Introduces sustainable consumption and the role of visual green labels in food and beverage marketing.',
        'Builds a theoretical framework combining TPB and ELM to explain consumer attitude formation and information processing.',
        'Uses questionnaire-based quantitative analysis to test psychological paths from green labels to purchase intention.',
        'Examines mediating variables including perceived environmental friendliness, label credibility, and brand trust.',
        'Discusses implications for green label design, sustainable marketing communication, and consumer segmentation.',
      ],
      methods: ['Questionnaire design', 'Multiple regression', 'Mediation testing', 'Consumer segmentation'],
      tags: ['Sustainable marketing', 'Consumer behaviour', 'TPB', 'ELM', 'Quantitative analysis'],
    },
    {
      slug: 'lego-digital-marketing',
      title: 'LEGO Digital Marketing and Contemporary Brand Responsibility',
      type: 'Coursework analysis',
      period: '2025',
      description:
        'A critical analysis of LEGO consumer engagement through AR retail experience, social media, user communities, AI-driven personalisation, sustainability marketing, ethical marketing, diversity, equity, and inclusion.',
      outline: [
        'Analyses how LEGO engages consumers through offline AR experiences, retailtainment, and customised in-store interaction.',
        'Evaluates LEGO social media, UGC, LEGO Ideas, and community-based value creation.',
        'Explores how AI can support user profiling, differentiated content delivery, social media optimisation, and predictive analytics.',
        'Critically discusses sustainability marketing, ethical marketing, social marketing, diversity, equity, and inclusion.',
        'Provides recommendations on transparency, cultural sensitivity, gender equity, and authentic inclusion.',
      ],
      methods: ['Consumer engagement analysis', 'Digital marketing critique', 'Brand responsibility review'],
      tags: ['Digital marketing', 'Experiential retail', 'AI marketing', 'Sustainability', 'DEI'],
    },
    {
      slug: 'lego-digital-transformation',
      title: 'LEGO Digital Transformation: Blue Ocean Strategy and Platform Innovation',
      type: 'Group research project',
      period: '2024',
      description:
        'A strategic and financial analysis of LEGO digital transformation, covering product innovation, platform channels, user interaction, and business performance.',
      outline: [
        'Introduces LEGO transformation from traditional toy manufacturing toward digital products and platform channels.',
        'Applies Blue Ocean Strategy to analyse value innovation, cost reduction, and new user value creation.',
        'Examines LEGO digital products, programming toys, gaming collaborations, and virtual-physical interaction.',
        'Reviews platform innovation through online communities, user participation, and digital sales channels.',
        'Links strategic transformation to financial performance and long-term competitiveness.',
      ],
      methods: ['Strategy analysis', 'Financial analysis', 'Blue Ocean framework', 'Platform analysis'],
      tags: ['Digital transformation', 'Blue Ocean Strategy', 'Platform strategy', 'Financial analysis'],
    },
    {
      slug: 'shop-thursdays-beyond-budgeting',
      title: 'Shop Thursdays: Beyond Budgeting and Online Channel Transition',
      type: 'Coursework case analysis',
      period: '2024',
      description:
        'A management accounting case study evaluating how a fashion retailer can use flexible budgeting, real-time feedback, and risk management during post-COVID online transformation.',
      outline: [
        'Introduces Shop Thursdays as a family-owned fashion retailer shifting from physical stores to online channels.',
        'Explains why beyond budgeting can support flexibility, decentralised decisions, and fast adaptation.',
        'Connects rolling budgets, influencer marketing investment, and real-time performance monitoring to retail transformation.',
        'Critiques implementation risks including cultural adaptation, power distribution, and financial control.',
        'Concludes with recommendations for balancing flexibility, accountability, and risk management.',
      ],
      methods: ['Case analysis', 'Management accounting', 'Risk review', 'Retail strategy'],
      tags: ['Management accounting', 'Beyond budgeting', 'Retail strategy', 'Risk management'],
    },
  ],
}

export const seoData = {
  title: `Liu's Blog`,
  ogTitle: `Let's keep learning - Liu's Blog`,
  description: `Hi I am Liu. 一名在北京学习的研究生。`,
  twitterDescription: ` `,
  image:
    'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://blog-nurriyad.vercel.app',
  twitterHandle: '@qdnvubp',
  mailAddress: '1905321532@qq.com',
}

export const socialLinks = {
  githubLink: 'https://github.com/xiaoMing022',
  giteeLink: 'https://gitee.com/xiaoliu857',
  twitterLink: 'https://twitter.com/qdnvubp',
  stackoverflowLink: 'https://stackoverflow.com/users/16781395/nur-riyad',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
