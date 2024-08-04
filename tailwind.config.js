/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "15px",
                sm: "2rem",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
            },
        },
        screens: { sm: "480px", md: "768px", lg: "1160px", xl: "1440px" },
        fontFamily: {
            inter: ["Inter Tight", "sans-serif"],
        },
        extend: {
            borderColor: {
                "custom-gray": "#E9EAED",
            },
            boxShadow: {
                btn: "0px 4px 10px 0px rgba(124, 132, 148, 0.40)",
            },
            backgroundImage: {
                "custom-gradient":
                    "linear-gradient(224deg, #A5FECA 3.65%, #3EDCEB 31.56%, #2594FF 65.16%, #53F 102.22%)",
                "custom-gradient-124deg":
                    "linear-gradient(124deg, #A5FECA 3.65%, #3EDCEB 31.56%, #2594FF 65.16%, #53F 102.22%)",
                "gradient-green":
                    "linear-gradient(224deg, #80F1A6 0%, #EFD000 100%)",
                "gradient-green-135":
                    "linear-gradient(135deg, #80F1A6 0%, #EFD000 100%)",
                "gradient-red-135":
                    "linear-gradient(135deg, #FF5F6D 2.88%, #FFC371 100%)",
                "gradient-ip14":
                    "linear-gradient(182deg, rgba(0, 0, 0, 0.00) 2%, rgba(0, 0, 0, 0.62) 26.7%, #000 58.05%)",
            },
            colors: {
                primary: "#000",
                secondary: "#fff",
                gray: "#BCBCBC",
            },
        },
    },
    variants: {},
    plugins: [
        require("@tailwindcss/forms"),
        function ({ addUtilities }) {
            const newUtilities = {
                ".backgroundClip": {
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                },
                ".text-btn": {
                    color: "#fff",
                    textAlign: "center",
                    fontFamily: "Inter Tight",
                    fontSize: "16px",
                    fontWeight: "700",
                    lineHeight: "normal",
                },
                ".text-h1": {
                    color: "#fff",
                    textAlign: "center",
                    fontFamily: "Inter Tight",
                    fontSize: "58px",
                    fontStyle: "normal",
                    fontWeight: "900",
                    lineHeight: "normal",
                },
                ".text-desc": {
                    color: "#BCBCBC",
                    textAlign: "center",
                    fontFamily: "Inter Tight",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "150%",
                },
                ".text-nav": {
                    fontFamily: "Inter Tight",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                },
                ".title-h2-gradient": {
                    fontFamily: "Inter Tight",
                    fontSize: "42px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                    background:
                        "linear-gradient(224deg, #A5FECA 3.65%, #3EDCEB 31.56%, #2594FF 65.16%, #53F 102.22%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                },
                ".title-h2": {
                    fontFamily: "Inter Tight",
                    fontSize: "42px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                },
                ".text-desc-page": {
                    color: "#878787",
                    fontFamily: "Inter Tight",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "150%",
                    letterSpacing: "0.48px",
                },
                ".text-title-32": {
                    fontFamily: "Inter Tight",
                    fontSize: "32px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                },
                ".text-48": {
                    fontFamily: "Inter Tight",
                    fontSize: "48px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                },
                ".text-48-600": {
                    fontFamily: "Inter Tight",
                    fontSize: "48px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                    textTransform: "capitalize",
                },
                ".text-20": {
                    fontFamily: "Inter Tight",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                },
                ".text-20-footer": {
                    fontFamily: "Inter Tight",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "130%",
                    letterSpacing: "-0.2px",
                },
                ".text-36": {
                    fontFamily: "Inter Tight",
                    fontSize: "36px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                },
                ".text-28": {
                    fontFamily: "Inter Tight",
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "130%",
                },
                ".text-16": {
                    fontFamily: "Inter Tight",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "140%",
                },
                ".text-16-category": {
                    fontFamily: "Inter Tight",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "130%",
                    letterSpacing: "-0.16px",
                },
                ".text-14": {
                    fontFamily: "Inter Tight",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "130%",
                    letterSpacing: "-0.14px",
                },
            };

            addUtilities(newUtilities, ["responsive", "hover"]);
        },
    ],
};
