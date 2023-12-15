import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      screens:{
        'ipad':'769px'
      },
      colors: {
        color: '#9f9f9f',
        cardText: '#BCBCBC',
        cardDescription: '#ffff',
        iconColor:'#323232',
        textDes:'#424241'
      },
      borderRadius: {
        mainradius: '30px',
        
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, #1f1f1f 0%, #171717 100%)',
      },
      spacing:{
        '1/2':'21px',
        'mobilem':'20px',
        'mobilepa':'100px'

      }
    },
  },
  plugins: [],
};

export default config;
