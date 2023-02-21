/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        screens: {
            sm: "480px",
            tablet: "768px",
            laptop1: "976px",
            laptop2: "1280px",
            desktop: "1440px",
        },
        extend: {
            colors: {
                SEPurple: "#8F40DE",
                SESky: "#05D6D9",
                SEBlue: "#6B68FA",
                SEDarkBlue: "#210042",
                SELightPink: "#FF96F8",
                SEAmber: "#F44E4E",
                SEYellow: "#FF9743",
                SEGreen: "#51AB46",
            },
        },
    },
    plugins: [],
};
