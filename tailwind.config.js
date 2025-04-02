/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        "cover-img": "url('./gym-cover-1.webp')",
        logo: "url(./gym-logo-grey.webp)",
      },
      screens: {
        xm: "480px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        // slidein500: "slidein 1s ease 500ms",
        // slidein700: "slidein 1s ease 700ms",
        // slidein900: "slidein 1s ease 1500ms",
      },
      colors: {
        "gym-gray": "#40444e",
        "gym-orange": "#f7a600",
      },
      borderColor: {
        'border-gym-orange': '#f7a600',
        'border-gym-grey': '#b2b4b8',
      }
    },
  },
  plugins: [],
};
