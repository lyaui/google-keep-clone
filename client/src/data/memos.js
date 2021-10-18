const memos = [
  {
    author: 'Iris',
    createdTime: Date.now(),
    updateTime: null,
    _id: 'c1',
    color: 'DEFAULT',
    title: '',
    content:
      // 'Default (law), the failure to do something required by lawDefault (finance), failure to satisfy the terms of a loan obligation or failure to pay back a loanDefault judgment, a binding judgment in favor of either party based on some failure to take action by the other partyDefault rule, a rule of law that can be overridden by a contract, trust, will, or other legally effective agreement',
      '',
    images: [{ image: 'https://pbs.twimg.com/media/E_FqeewWYAEu8ci?format=jpg&name=medium' }],
    labels: [
      // { labelId: 'test', name: 'moremoremoremoremoremoremoremoremoremoremoremoremoremoremore' },
      // { labelId: 'l1', name: 'cyan' },
      // { labelId: 'l2', name: 'teal' },
      // { labelId: 'l3', name: 'magenta' },
      // { labelId: 'l4', name: 'teal' },
      // { labelId: 'l5', name: 'coral' },
      // { labelId: 'l6', name: 'salmon' },
      // { labelId: 'l7', name: 'olive' },
      // { labelId: 'l8', name: 'aqua' },
      // { labelId: 'l9', name: 'coral' },
    ],
    links: [],
  },
  {
    author: 'Iris',
    createdTime: Date.now(),
    updateTime: null,
    _id: 'c2',
    color: 'RED',
    title: '',
    content: '',
    // 'Red is a 2010 American action comedy film loosely inspired by the Homage Comics limited series of the same name.',
    images: [
      { image: 'https://imgur.com/nbMcwxu.jpg' },
      {
        image:
          'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
    ],
    labels: [],
    links: [
      {
        title: 'iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天',
        url: 'www.ithelp.ithome.com.tw',
        image: 'https://ithelp.ithome.com.tw/storage/image/fbpic.jpg',
      },
      {
        title: 'React – 用來實作使用者介面的 JavaScript 函式庫',
        url: 'www.zh-hant.reactjs.org',
        image: 'https://reactjs.org/logo-og.png',
      },
      {
        title: 'NIPPON COLORS - 日本の伝統色',
        url: 'www.nipponcolors.com/',
        image: 'https://nipponcolors.com/images/site_thumb.jpg',
      },
      {
        title: 'Google',
        url: 'www.google.com.tw/',
        image:
          'https://lh4.googleusercontent.com/proxy/9lfpyk2O4JaM9aNQ_rO1gMFKxuTtUfJxR6z08uW0bAemMZu2wQN1CYxcCDOSUOUY3356f8xZ75GbRtimxZNARMCgoLxgL4I38cL21ty6r29JLBQICJR3cZ52xvpO67hrJng7yikhDPU',
      },
      {
        title: 'Google',
        url: 'www.google.com.tw/',
        image:
          'https://lh4.googleusercontent.com/proxy/9lfpyk2O4JaM9aNQ_rO1gMFKxuTtUfJxR6z08uW0bAemMZu2wQN1CYxcCDOSUOUY3356f8xZ75GbRtimxZNARMCgoLxgL4I38cL21ty6r29JLBQICJR3cZ52xvpO67hrJng7yikhDPU',
      },
    ],
  },
  {
    author: 'Iris',
    createdTime: Date.now(),
    updateTime: null,
    _id: 'c3',
    color: 'ORANGE',
    title: '',
    content: '',
    images: [
      {
        image:
          'https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
    ],
    labels: [],
    links: [],
  },
  {
    author: 'Iris',
    createdTime: Date.now(),
    updateTime: null,
    _id: 'c4',
    color: '#fff475',
    title: '',
    content: '',
    // 'Look at the stars Look how they shine for you And everything you do Yeah, they were all yellow I came along I wrote a song for you And all the things you do  ',
    images: [
      { image: 'https://imgur.com/fnoh1rB.jpg' },
      {
        image:
          'https://images.unsplash.com/photo-1506095619733-3c3ea98fb968?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://media.istockphoto.com/photos/cheesecake-with-caramel-sauce-picture-id1225491381?b=1&k=20&m=1225491381&s=170667a&w=0&h=Op_e8QZYkn5GmbNSs_dtBmGT4lqLn0fu-ZqfaXYY_y4=',
      },
      {
        image:
          'https://media.istockphoto.com/photos/crystal-jar-full-of-hazelnut-and-chocolate-spread-picture-id1254528529?b=1&k=20&m=1254528529&s=170667a&w=0&h=WVnzrA62FiWh5q4Ew8l3N46n-WTGTf3c_brB90Tb7Zc=',
      },
    ],
    labels: [
      // { labelId: 'test', name: 'moremoremoremoremoremoremoremoremoremoremoremoremoremoremore' },
      // { labelId: 'l1', name: 'cyan' },
      // { labelId: 'l2', name: 'teal' },
      // { labelId: 'l3', name: 'magenta' },
      // { labelId: 'l4', name: 'teal' },
      // { labelId: 'l5', name: 'coral' },
      // { labelId: 'l6', name: 'salmon' },
      // { labelId: 'l7', name: 'olive' },
      // { labelId: 'l8', name: 'aqua' },
      // { labelId: 'l9', name: 'coral' },
    ],
    links: [],
  },
  {
    author: 'Iris',
    createdTime: Date.now(),
    updateTime: null,
    _id: 'c5',
    color: 'YELLOW',
    title: '',
    content: '',
    // 'Green is the color between blue and yellow on the visible spectrum. It is evoked by light which has a dominant wavelength of roughly 495–570 nm. In subtractive color systems, used in painting and color printing, it is created by a combination of yellow and cyan; in the RGB color model, used on television and computer screens, it is one of the additive primary colors, along with red and blue, which are mixed in different combinations to create all other colors. By far the largest contributor to green in nature is chlorophyll, the chemical by which plants photosynthesize and convert sunlight into chemical energy. Many creatures have adapted to their green environments by taking on a green hue themselves as camouflage. Several minerals have a green color, including the emerald, which is colored green by its chromium content.',
    images: [
      {
        image:
          'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1597895139322-0a1ef77b3c30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1578775887804-699de7086ff9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1622448849336-d3151a4b5e21?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
    ],
    labels: [
      // { labelId: 'test', name: 'moremoremoremoremoremoremoremoremoremoremoremoremoremoremore' },
      // { labelId: 'l1', name: 'cyan' },
      // { labelId: 'l2', name: 'teal' },
      // { labelId: 'l3', name: 'magenta' },
      // { labelId: 'l4', name: 'teal' },
      // { labelId: 'l5', name: 'coral' },
      // { labelId: 'l6', name: 'salmon' },
      // { labelId: 'l7', name: 'olive' },
      // { labelId: 'l8', name: 'aqua' },
      // { labelId: 'l9', name: 'coral' },
    ],
    links: [],
  },
  {
    author: 'Iris',
    createdTime: Date.now(),
    updateTime: null,
    _id: 'c6',
    color: 'GREEN',
    title: '',
    content: '',
    // 'Teal is a cyan-green color. Its name comes from that of a bird — the Eurasian teal (Anas crecca) — which presents a similarly colored stripe on its head. The word is often used colloquially to refer to shades of cyan in general.',
    images: [
      {
        image:
          'https://images.unsplash.com/photo-1560106952-abd9130296c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1587314155426-a8dec71712b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1567327613485-fbc7bf196198?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1472555950005-7fa40ece7f6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1563778084459-859099e48677?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
    ],
    labels: [
      // { labelId: 'test', name: 'moremoremoremoremoremoremoremoremoremoremoremoremoremoremore' },
      // { labelId: 'l1', name: 'cyan' },
      // { labelId: 'l2', name: 'teal' },
      // { labelId: 'l3', name: 'magenta' },
      // { labelId: 'l4', name: 'teal' },
      // { labelId: 'l5', name: 'coral' },
      // { labelId: 'l6', name: 'salmon' },
      // { labelId: 'l7', name: 'olive' },
      // { labelId: 'l8', name: 'aqua' },
      // { labelId: 'l9', name: 'coral' },
    ],
    links: [
      {
        title: 'NIPPON COLORS - 日本の伝統色',
        url: 'www.nipponcolors.com/',
        image: 'https://nipponcolors.com/images/site_thumb.jpg',
      },
      {
        title: 'Vue.js',
        url: 'www.vuejs.org',
        image: 'https://vuejs.org/images/logo.png',
      },
      {
        title: 'Google',
        url: 'www.google.com.tw/',
        image:
          'https://lh4.googleusercontent.com/proxy/9lfpyk2O4JaM9aNQ_rO1gMFKxuTtUfJxR6z08uW0bAemMZu2wQN1CYxcCDOSUOUY3356f8xZ75GbRtimxZNARMCgoLxgL4I38cL21ty6r29JLBQICJR3cZ52xvpO67hrJng7yikhDPU',
      },
      {
        title: 'Google',
        url: 'www.google.com.tw/',
        image:
          'https://lh4.googleusercontent.com/proxy/9lfpyk2O4JaM9aNQ_rO1gMFKxuTtUfJxR6z08uW0bAemMZu2wQN1CYxcCDOSUOUY3356f8xZ75GbRtimxZNARMCgoLxgL4I38cL21ty6r29JLBQICJR3cZ52xvpO67hrJng7yikhDPU',
      },
    ],
  },
  {
    author: 'Iris',
    createdTime: Date.now(),
    updateTime: null,
    _id: 'c7',
    color: 'TEAL',
    title: 'blue',
    content:
      'Blue is one of the three primary colours of pigments in painting and traditional colour theory, as well as in the RGB colour model. It lies between violet and green on the spectrum of visible light. The eye perceives blue when observing light with a dominant wavelength between approximately 450 and 495 nanometres. Most blues contain a slight mixture of other colours; azure contains some green, while ultramarine contains some violet. The clear daytime sky and the deep sea appear blue because of an optical effect known as Rayleigh scattering. An optical effect called Tyndall effect explains blue eyes. Distant objects appear more blue because of another optical effect called aerial perspective.',
    images: [
      {
        image:
          'https://images.unsplash.com/photo-1596223575327-99a5be4faf1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
    ],
    labels: [
      { labelId: 'test', name: 'moremoremoremoremoremoremoremoremoremoremoremoremoremoremore' },
      { labelId: 'l1', name: 'cyan' },
      { labelId: 'l2', name: 'teal' },
      { labelId: 'l3', name: 'magenta' },
      { labelId: 'l4', name: 'teal' },
      { labelId: 'l5', name: 'coral' },
      { labelId: 'l6', name: 'salmon' },
      { labelId: 'l7', name: 'olive' },
      { labelId: 'l8', name: 'aqua' },
      { labelId: 'l9', name: 'coral' },
    ],
    links: [],
  },
  {
    author: 'Iris',
    createdTime: Date.now(),
    updateTime: null,
    _id: 'c8',
    color: 'BLUE',
    title: 'dark-blue',
    content:
      "Los Angeles, 1992. The film opens in medias res to LAPD Sergeant Eldon Perry, who is pacing in a motel room with a shotgun and pistol. Five days earlier, four people are killed and one wounded when two men, Darryl Orchard and Gary Sidwell, rob a convenience store in order to gain access to a safe in the office. Meanwhile, Perry defends his partner, Detective Bobby Keough, before an internal hearing concerning Keough's use of deadly force in a previous case; Keough is later exonerated.",
    images: [
      {
        image:
          'https://images.unsplash.com/photo-1563589173312-476d8c36b242?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM4fHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
    ],
    labels: [
      { labelId: 'test', name: 'moremoremoremoremoremoremoremoremoremoremoremoremoremoremore' },
      { labelId: 'l1', name: 'cyan' },
      { labelId: 'l2', name: 'teal' },
      { labelId: 'l3', name: 'magenta' },
      { labelId: 'l4', name: 'teal' },
      { labelId: 'l5', name: 'coral' },
      { labelId: 'l6', name: 'salmon' },
      { labelId: 'l7', name: 'olive' },
      { labelId: 'l8', name: 'aqua' },
      { labelId: 'l9', name: 'coral' },
    ],
    links: [],
  },
  {
    author: 'Iris',
    createdTime: Date.now(),
    updateTime: null,
    _id: 'c9',
    color: 'DARK_BLUE',
    title: 'purple',
    content:
      'Purple is, generally, any color with hue between red and blue.[1][2] Blue-dominated hues may be classed as violet instead, especially in the United Kingdom.',
    images: [
      {
        image:
          'https://images.unsplash.com/photo-1569197341600-ed69ff90dad9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1585588845684-05b44a1fc85a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1592382419665-40ded771c471?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM1fHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
    ],
    labels: [
      { labelId: 'test', name: 'moremoremoremoremoremoremoremoremoremoremoremoremoremoremore' },
      { labelId: 'l1', name: 'cyan' },
      { labelId: 'l2', name: 'teal' },
      { labelId: 'l3', name: 'magenta' },
      { labelId: 'l4', name: 'teal' },
      { labelId: 'l5', name: 'coral' },
      { labelId: 'l6', name: 'salmon' },
      { labelId: 'l7', name: 'olive' },
      { labelId: 'l8', name: 'aqua' },
      { labelId: 'l9', name: 'coral' },
    ],
    links: [],
  },
  {
    author: 'Iris',
    createdTime: Date.now(),
    updateTime: null,
    _id: 'c10',
    color: 'PURPLE',
    title: 'pink',
    content:
      'Pink is a color that is a pale tint of red and is named after a flower of the same name.[2][3] It was first used as a color name in the late 17th century.[4] According to surveys in Europe and the United States, pink is the color most often associated with charm, politeness, sensitivity, tenderness, sweetness, childhood, femininity and romance. A combination of pink and white is associated with chastity and innocence, whereas a combination of pink and black links to eroticism and seduction.',
    images: [
      {
        image:
          'https://images.unsplash.com/photo-1583528225108-295481722b35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQwfHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1505253599537-305b179737ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUzfHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1562022791-1ee0dc5f8b1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1573595561175-3047155b891e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTczfHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
    ],
    labels: [
      { labelId: 'test', name: 'moremoremoremoremoremoremoremoremoremoremoremoremoremoremore' },
      { labelId: 'l1', name: 'cyan' },
      { labelId: 'l2', name: 'teal' },
      { labelId: 'l3', name: 'magenta' },
      { labelId: 'l4', name: 'teal' },
      { labelId: 'l5', name: 'coral' },
      { labelId: 'l6', name: 'salmon' },
      { labelId: 'l7', name: 'olive' },
      { labelId: 'l8', name: 'aqua' },
      { labelId: 'l9', name: 'coral' },
    ],
    links: [],
  },
  {
    author: 'Iris',
    createdTime: Date.now(),
    updateTime: null,
    _id: 'c11',
    color: 'PINK',
    title: 'brown',
    content:
      'Brown is a composite color. In the CMYK color model used in printing or painting, brown is made by combining red, black, and yellow,[1][2] or red, yellow, and blue.[3] In the RGB color model used to project colors onto television screens and computer monitors, brown is made by combining red and green, in specific proportions. In painting, brown is generally made by adding black to orange. The brown color is seen widely in nature, wood, soil, human hair color, eye color and skin pigmentation. Brown is the color of dark wood or rich soil.[4] According to public opinion surveys in Europe and the United States, brown is the least favorite color of the public; it is often associated with plainness, the rustic, feces, and poverty.[5] More positive associations include baking, warmth, wildlife and the autumn',
    images: [
      {
        image:
          'https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE2fHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1610450949065-1f2841536c88?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjUzfHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1612886621865-47cd0e961fac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU5fHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1571741443170-97e080e5b808?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjc1fHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1614707269211-474b2510b3ad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjc0fHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
    ],
    labels: [
      { labelId: 'test', name: 'moremoremoremoremoremoremoremoremoremoremoremoremoremoremore' },
      { labelId: 'l1', name: 'cyan' },
      { labelId: 'l2', name: 'teal' },
      { labelId: 'l3', name: 'magenta' },
      { labelId: 'l4', name: 'teal' },
      { labelId: 'l5', name: 'coral' },
      { labelId: 'l6', name: 'salmon' },
      { labelId: 'l7', name: 'olive' },
      { labelId: 'l8', name: 'aqua' },
      { labelId: 'l9', name: 'coral' },
    ],
    links: [],
  },
  {
    author: 'Iris',
    createdTime: Date.now(),
    updateTime: null,
    _id: 'c12',
    color: 'BROWN',
    title: 'gray',
    content: 'gray',
    images: [
      {
        image:
          'https://images.unsplash.com/photo-1505976378723-9726b54e9bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc2fHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1582683740035-92658ae5ed5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc3fHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1615707547992-93435f1e7f13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc4fHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1558303420-f814d8a590f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkwfHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA4fHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
      {
        image:
          'https://images.unsplash.com/photo-1499635842761-4f1f28fafcff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjEyfHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      },
    ],
    labels: [
      { labelId: 'test', name: 'moremoremoremoremoremoremoremoremoremoremoremoremoremoremore' },
      { labelId: 'l1', name: 'cyan' },
      { labelId: 'l2', name: 'teal' },
      { labelId: 'l3', name: 'magenta' },
      { labelId: 'l4', name: 'teal' },
      { labelId: 'l5', name: 'coral' },
      { labelId: 'l6', name: 'salmon' },
      { labelId: 'l7', name: 'olive' },
      { labelId: 'l8', name: 'aqua' },
      { labelId: 'l9', name: 'coral' },
    ],
    links: [
      {
        title: 'Google',
        url: 'www.google.com.tw/',
        image:
          'https://lh4.googleusercontent.com/proxy/9lfpyk2O4JaM9aNQ_rO1gMFKxuTtUfJxR6z08uW0bAemMZu2wQN1CYxcCDOSUOUY3356f8xZ75GbRtimxZNARMCgoLxgL4I38cL21ty6r29JLBQICJR3cZ52xvpO67hrJng7yikhDPU',
      },
      {
        title: 'Google',
        url: 'www.google.com.tw/',
        image:
          'https://lh4.googleusercontent.com/proxy/9lfpyk2O4JaM9aNQ_rO1gMFKxuTtUfJxR6z08uW0bAemMZu2wQN1CYxcCDOSUOUY3356f8xZ75GbRtimxZNARMCgoLxgL4I38cL21ty6r29JLBQICJR3cZ52xvpO67hrJng7yikhDPU',
      },
    ],
  },

  {
    author: 'Iris',
    createdTime: Date.now(),
    updateTime: null,
    _id: 'c13',
    color: 'GRAY',
    title: '',
    content: '',
    images: [
      // 'https://imgur.com/gPVa9yq.jpg',
      // 'https://imgur.com/gPVa9yq.jpg',
      // 'https://imgur.com/gPVa9yq.jpg',
      // 'https://imgur.com/gPVa9yq.jpg',
      // 'https://imgur.com/gPVa9yq.jpg',
      // 'https://imgur.com/gPVa9yq.jpg',
    ],
    labels: [
      // { labelId: 'test', name: 'moremoremoremoremoremoremoremoremoremoremoremoremoremoremore' },
      // { labelId: 'l1', name: 'cyan' },
      // { labelId: 'l2', name: 'teal' },
      // { labelId: 'l3', name: 'magenta' },
      // { labelId: 'l4', name: 'teal' },
      // { labelId: 'l5', name: 'coral' },
      // { labelId: 'l6', name: 'salmon' },
      // { labelId: 'l7', name: 'olive' },
      // { labelId: 'l8', name: 'aqua' },
      // { labelId: 'l9', name: 'coral' },
    ],
    links: [
      {
        title: 'iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天',
        url: 'www.ithelp.ithome.com.tw',
        image: 'https://ithelp.ithome.com.tw/storage/image/fbpic.jpg',
      },
      {
        title: 'Google',
        url: 'www.google.com.tw/',
        image:
          'https://lh4.googleusercontent.com/proxy/9lfpyk2O4JaM9aNQ_rO1gMFKxuTtUfJxR6z08uW0bAemMZu2wQN1CYxcCDOSUOUY3356f8xZ75GbRtimxZNARMCgoLxgL4I38cL21ty6r29JLBQICJR3cZ52xvpO67hrJng7yikhDPU',
      },
    ],
  },
];

export default memos;
