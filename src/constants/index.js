const items = [
    {
        id: 1,
        title: "LLama3 - 8B",
        description: "Meta's latest opensource LLama3 8B model.",
        image: 'https://afw-live.s3.amazonaws.com/model/model_97/Can_3.png?w=384&q=75',
        about: `LLaMA-3 8B is a cutting-edge language model that has been trained on a massive dataset of text from the internet, books, and other sources. With its 8 billion parameters, this model is capable of understanding and generating human-like text with unprecedented accuracy and nuance. LLaMA-3 8B is particularly well-suited for applications that require advanced language understanding and generation capabilities, such as chatbots, virtual assistants, and natural language processing pipelines. Some potential use cases for LLaMA-3 8B include:

        * Building conversational AI systems that can engage in natural-sounding conversations with humans 
        * Generating high-quality content, such as articles, blog posts, and social media updates
        * Improving language translation and localization capabilities for global businesses
        * Enhancing customer service and support systems with more accurate and empathetic responses
        * Developing personalized recommendation systems that can understand and respond to user preferences
      
        Overall, LLaMA-3 8B is an incredibly powerful tool that has the potential to transform the way we interact with language and technology. Its advanced capabilities make it an ideal choice for a wide range of applications, from customer service and content generation to language translation and more.`
      },
    {
      id: 2,
      title: "Zephyr - 7B",
      description: "Zephyr is a series of language models that are trained to act as helpful assistants.",
      image: 'https://afw-live.s3.amazonaws.com/model/model_291/Image_models_705x268.png?w=384&q=75',
      tag: 'Text'
    },
    {
      id: 3,
      title: "effi - 13b",
      description: "This model is an instruction finetuned model. It provides reasoning behind the response.",
      image: 'https://afw-live.s3.amazonaws.com/model/model_278/Can_4.png?w=384&q=75'
    },
    {
      id: 4,
      title: "Medical Agent",
      description: "This model helps to answer basic medical queries.",
      image: 'https://afw-live.s3.amazonaws.com/model/model_236/Image_models_37.png?w=384&q=75'
    },
    {
      id: 5,
      title: "Text to Image Diffusion AI Model",
      description: "Join the quest for understanding and enlightenment.",
      image: 'https://afw-live.s3.amazonaws.com/model/model_225/Image_models_20.png?w=384&q=75',
      tag: 'Text'
    },
    {
      id: 6,
      title: "Multilingual-Text-To-Speech",
      description: "Experience the thrill of bringing ideas to life.",
      image: 'https://afw-live.s3.amazonaws.com/model/model_198/Canva_Image_Models_1.png?w=384&q=75'
    },
    {
      id: 7,
      title: "Essay Evalautor with Specific Grading Criteria",
      description: "Embark on exciting journeys and thrilling discoveries.",
      image: 'https://afw-live.s3.amazonaws.com/model/model_155/Image_models_705x268_3.png?w=384&q=75'
    },
    {
        id: 8,
        title: "Essay Evalautor with Specific Grading Criteria",
        description: "Embark on exciting journeys and thrilling discoveries.",
        image: 'https://afw-live.s3.amazonaws.com/model/model_155/Image_models_705x268_3.png?w=384&q=75'
    },
    {
        id: 9,
        title: "Essay Evalautor with Specific Grading Criteria",
        description: "Embark on exciting journeys and thrilling discoveries.",
        image: 'https://afw-live.s3.amazonaws.com/model/model_155/Image_models_705x268_3.png?w=384&q=75'
    },
    {
        id: 10,
        title: "Essay Evalautor with Specific Grading Criteria",
        description: "Embark on exciting journeys and thrilling discoveries.",
        image: 'https://afw-live.s3.amazonaws.com/model/model_155/Image_models_705x268_3.png?w=384&q=75'
    },
    {
        id: 11,
        title: "Essay Evalautor with Specific Grading Criteria",
        description: "Embark on exciting journeys and thrilling discoveries.",
        image: 'https://afw-live.s3.amazonaws.com/model/model_155/Image_models_705x268_3.png?w=384&q=75'
    },
    {
        id: 12,
        title: "Essay Evalautor with Specific Grading Criteria",
        description: "Embark on exciting journeys and thrilling discoveries.",
        image: 'https://afw-live.s3.amazonaws.com/model/model_155/Image_models_705x268_3.png?w=384&q=75'
    },
    {
        id: 13,
        title: "Essay Evalautor with Specific Grading Criteria",
        description: "Embark on exciting journeys and thrilling discoveries.",
        image: 'https://afw-live.s3.amazonaws.com/model/model_155/Image_models_705x268_3.png?w=384&q=75'
    },
    {
        id: 14,
        title: "Essay Evalautor with Specific Grading Criteria",
        description: "Embark on exciting journeys and thrilling discoveries.",
        image: 'https://afw-live.s3.amazonaws.com/model/model_155/Image_models_705x268_3.png?w=384&q=75'
    },
    {
        id: 15,
        title: "Essay Evalautor with Specific Grading Criteria",
        description: "Embark on exciting journeys and thrilling discoveries.",
        image: 'https://afw-live.s3.amazonaws.com/model/model_155/Image_models_705x268_3.png?w=384&q=75'
    },
    {
        id: 16,
        title: "Essay Evalautor with Specific Grading Criteria",
        description: "Embark on exciting journeys and thrilling discoveries.",
        image: 'https://afw-live.s3.amazonaws.com/model/model_155/Image_models_705x268_3.png?w=384&q=75'
    },
    {
        id: 17,
        title: "Essay Evalautor with Specific Grading Criteria",
        description: "Embark on exciting journeys and thrilling discoveries.",
        image: 'https://afw-live.s3.amazonaws.com/model/model_155/Image_models_705x268_3.png?w=384&q=75'
    },
    {
        id: 18,
        title: "Essay Evalautor with Specific Grading Criteria",
        description: "Embark on exciting journeys and thrilling discoveries.",
        image: 'https://afw-live.s3.amazonaws.com/model/model_155/Image_models_705x268_3.png?w=384&q=75'
    },
      
  ];


const sidebarLists = [
    {
        name: '🔍 Discover AI Tools',
        path: '/discover'
    },
    {
        name: '🧠 Machine Learning',
        path: '/machine-learning'
    },
    {
        name: '🌟 Content Generation',
        path: '/content-generation'
    },
    {
        name: '🖼️ Image Recognition',
        path: '/image-recognition'
    },
    {
        name: '💬 Speech Recognition',
        path: '/speech-recognition'
    },
    {
        name: '🎨 Image Diffusion',
        path: '/image-diffusion'
    },
    {
        name: '🤖 Robotics',
        path: '/robotics'
    },
    {
        name: '📒 Blockchain & Cryptocurrency',
        path: '/blockchain'
    },
    {
        name: '🧰 Dev Tools',
        path: '/dev-tools'
    },
    {
        name: '📈 Data Visualtization',
        path: '/data-visualtzation'
    },
    {
        name: '📊 Data',
        path: '/data'
    },
    {
        name: '📄 CMS',
        path: '/cms'
    },
    {
        name: '📇 CRM',
        path: '/crm'
    },
    {
        name: '</> Code Generators',
        path: '/code-generators'
    },
    {
        name: '🧑‍💻 Software Development',
        path: '/software-development'
    },
    {
        name: '🔍 Search',
        path: '/search'
    },
    {
        name: '🕶️ VR/AR',
        path: '/vr-ar'
    },
    {
        name: '🔩 Engineering',
        path: '/engineering'
    },
    {
        name: '🏭 Manufacturing',
        path: '/manufacturing'
    },
    {
        name: '📈 Enterprise Resource Planning',
        path: '/enterprise-resource-planning'
    },
    {
        name: '📄 Resume Generation',
        path: '/resume-generation'
    },
    {
        name: '🤝 Recruiting',
        path: '/recruiting'
    },
    {
        name: '📈 Trading',
        path: '/trading'
    },
    {
        name: '🏡 Real State',
        path: '/real state'
    },
    {
        name: '💼 Investment Management',
        path: '/investment-management'
    },
    {
        name: '💳 Financial Technology',
        path: '/financial-technology'
    },
    {
        name: '💰 Accounting',
        path: '/accounting'
    },
    {
        name: '🪙 Finance',
        path: '/finance'
    },
    {
        name: '💳 Payments',
        path: '/payments'
    },
    {
        name: '⚖️ Legal',
        path: '/legal'
    },

];

const plans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "/month",
      features: [
        "Access to basic models",
        "Limited API calls",
        "Email support",
        "Basic analytics"
      ],
      cta: "Get Started"
    },
    {
      name: "Pro",
      price: "$29.99",
      period: "/month",
      features: [
        "Access to all models",
        "Unlimited API calls",
        "Priority email support",
        "Advanced analytics",
        "Custom integrations"
      ],
      cta: "Upgrade to Pro",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "All Pro features",
        "Dedicated account manager",
        "24/7 phone support",
        "On-premise deployment options",
        "Custom model training"
      ],
      cta: "Contact Sales"
    }
  ];


  export {items, sidebarLists, plans};
  