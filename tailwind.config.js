/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
        extend: {
                fontFamily: {
                        serif: ['Lora', 'serif'],
                        sans: ['DM Sans', 'sans-serif'],
                },
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)',
                        'card': '14px',
                        'pill': '9999px',
                },
                colors: {
                        // Lotus Care Custom Colors
                        sage: {
                                DEFAULT: '#4a7c59',
                                dark: '#2d5038',
                                light: '#d4e8da',
                                pale: '#f0f7f2',
                                hover: '#3e694a',
                        },
                        cream: '#faf8f4',
                        'warm-white': '#fffef9',
                        blush: {
                                DEFAULT: '#e8c4b0',
                                light: '#fdf5f0',
                                hover: '#dcb29a',
                        },
                        gold: '#c9975a',
                        'lotus-text': {
                                dark: '#1a1a1a',
                                mid: '#4a4a4a',
                                muted: '#8a8a8a',
                        },
                        'lotus-border': '#e8e4dd',
                        // Shadcn defaults
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        }
                },
                boxShadow: {
                        'card': '0 2px 20px rgba(74,124,89,0.08)',
                        'card-hover': '0 8px 32px rgba(74,124,89,0.14)',
                        'cta': '0 4px 16px rgba(74,124,89,0.3)',
                },
                keyframes: {
                        'accordion-down': {
                                from: {
                                        height: '0'
                                },
                                to: {
                                        height: 'var(--radix-accordion-content-height)'
                                }
                        },
                        'accordion-up': {
                                from: {
                                        height: 'var(--radix-accordion-content-height)'
                                },
                                to: {
                                        height: '0'
                                }
                        }
                },
                animation: {
                        'accordion-down': 'accordion-down 0.2s ease-out',
                        'accordion-up': 'accordion-up 0.2s ease-out'
                },
                spacing: {
                        'navbar-offset-mobile': 'var(--navbar-height-mobile)',
                        'navbar-offset-sm': 'var(--navbar-height-sm)',
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};
