import type {Config} from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "3vw",
                sm: "3vw",
                lg: "3vw",
                // xl: "5rem",
                // "2xl": "6rem",
            },
        },
        extend: {
            colors: {},
            fontSize: {
                xxs: "10px"
            }
        },
    },
    plugins: [
        plugin(function ({addUtilities, addComponents, e, config}) {
            addUtilities({
                ".fs-17-20": {
                    fontSize: "clamp(1.0625rem, 1.0147rem + 0.1961vw, 1.25rem)",
                },
                ".fs-25-43": {
                    fontSize:
                        "clamp(1.5625rem, 1.2757rem + 1.1765vw, 2.6875rem)",
                },
                ".fs-38-56": {
                    fontSize: "clamp(2.375rem, 2.0882rem + 1.1765vw, 3.5rem)",
                },
                ".fs-40-85": {
                    fontSize: "clamp(2.5rem, 1.8627rem + 2.6144vw, 5rem)",
                },
            });
        }),
    ],
};
export default config;
