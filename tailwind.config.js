module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Graphik', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
                joan: ['Joan', 'serif'],
                dancingScript: ['Dancing Script', 'cursive'],
                patrickHand: ['Patrick Hand', 'cursive']
            },
        },
    },
    plugins: [require("daisyui")],
}