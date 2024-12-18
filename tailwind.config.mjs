import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        darkest: "var(--darkest)",
        darker: "var(--darker)",
        dark: "var(--dark)",
        light: "var(--light)",
        lighter: "var(--lighter)",
        lightest: "var(--lightest)",
        white: "var(--white)",
        blurred: "var(--blurred)",
        accenttransparent: "var(--accent-transparent)",
      },
    },
    fontFamily: {
      mono: ["'JetBrains Mono'", ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [],
};
