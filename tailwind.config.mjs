/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#faf9f6',
        surface: '#ffffff',
        ink: '#1a1a1a',
        'ink-muted': '#6b6b6b',
        accent: '#8b2635',
        'accent-dark': '#6a1d28',
        border: '#e5e3dd',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-bold': theme('colors.ink'),
            '--tw-prose-quotes': theme('colors.ink'),
            '--tw-prose-quote-borders': theme('colors.accent'),
            '--tw-prose-counters': theme('colors.ink-muted'),
            '--tw-prose-bullets': theme('colors.ink-muted'),
            maxWidth: '42rem',
            fontFamily: theme('fontFamily.serif').join(', '),
            fontSize: '1.075rem',
            lineHeight: '1.7',
            h1: { fontFamily: theme('fontFamily.sans').join(', '), fontWeight: 700 },
            h2: { fontFamily: theme('fontFamily.sans').join(', '), fontWeight: 700 },
            h3: { fontFamily: theme('fontFamily.sans').join(', '), fontWeight: 600 },
            a: { textDecorationThickness: '1px', textUnderlineOffset: '2px' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
