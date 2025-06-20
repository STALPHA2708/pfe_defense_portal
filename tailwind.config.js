module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B365D", // slate-800
          50: "#F0F4F8", // slate-50
          100: "#D9E2EC", // slate-100
          200: "#BCCCDC", // slate-200
          300: "#9FB3C8", // slate-300
          400: "#829AB1", // slate-400
          500: "#627D98", // slate-500
          600: "#486581", // slate-600
          700: "#334E68", // slate-700
          800: "#243B53", // slate-800
          900: "#1B365D", // slate-900
        },
        secondary: {
          DEFAULT: "#D4AF37", // yellow-600
          50: "#FEFCF0", // yellow-50
          100: "#FDF6D3", // yellow-100
          200: "#FBEAA6", // yellow-200
          300: "#F7DD79", // yellow-300
          400: "#F3D04C", // yellow-400
          500: "#EFC319", // yellow-500
          600: "#D4AF37", // yellow-600
          700: "#B8942F", // yellow-700
          800: "#9C7A27", // yellow-800
          900: "#80601F", // yellow-900
        },
        accent: {
          DEFAULT: "#8B4513", // amber-800
          50: "#F7F3F0", // amber-50
          100: "#EDE2D6", // amber-100
          200: "#DBC5AD", // amber-200
          300: "#C9A884", // amber-300
          400: "#B78B5B", // amber-400
          500: "#A56E32", // amber-500
          600: "#8B4513", // amber-600
          700: "#7A3D11", // amber-700
          800: "#69350F", // amber-800
          900: "#582D0D", // amber-900
        },
        background: "#FFFFFF", // white
        surface: "#F8F9FA", // gray-50
        text: {
          primary: "#2C3E50", // slate-700
          secondary: "#6C757D", // gray-600
        },
        success: "#28A745", // green-600
        warning: "#FFC107", // yellow-500
        error: "#DC3545", // red-600
        border: {
          DEFAULT: "#E9ECEF", // gray-200
          light: "#F1F3F4", // gray-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Crimson Text', 'serif'],
        crimson: ['Crimson Text', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(27, 54, 93, 0.1)',
        'elevated': '0 8px 24px rgba(27, 54, 93, 0.15)',
      },
      animation: {
        'gentle': 'gentle 300ms ease-out',
        'celebration': 'celebration 400ms ease-out',
      },
      keyframes: {
        gentle: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(-2px)', opacity: '0.9' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        celebration: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}