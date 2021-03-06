const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
        "./resources/js/**/*.{jsx,js,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                thePrimary: "#B42318",
                gray: {
                    25: "#fcfcfd",
                    50: "#f9fafb",
                    100: "#f4f5f7",
                    200: "#eaecf0",
                    300: "#d0d5dd",
                    400: "#98a2b3",
                    500: "#667085",
                    600: "#475467",
                    700: "#344054",
                    800: "#1d2939",
                    900: "#101828",
                },
                primary: {
                    25: "#fcfaff",
                    50: "#f9f5ff",
                    100: "#f4ebff",
                    200: "#e9d7fe",
                    300: "#d6bbfb",
                    400: "#b692f6",
                    500: "#9e77ed",
                    600: "#7f56d9",
                    700: "#6941c6",
                    800: "#53389e",
                    900: "#42307d",
                },
                error: {
                    25: "#fffbfa",
                    50: "#fef3f2",
                    100: "#fee4e2",
                    200: "#fecdca",
                    300: "#fda29b",
                    400: "#f97066",
                    500: "#f04438",
                    600: "#d92d20",
                    700: "#b32318",
                    800: "#912018",
                    900: "#7a271a",
                },
                success: {
                    25: "#f6fef9",
                    50: "#ecfdf3",
                    100: "#d1fadf",
                    200: "#a6f4c5",
                    300: "#6ce9a6",
                    400: "#32d583",
                    500: "#12b76a",
                    600: "#039855",
                    700: "#027a48",
                    800: "#05603a",
                    900: "#054f31",
                },
                warning: {
                    25: "#fffcf5",
                    50: "#fffaeb",
                    100: "#fef0c7",
                    200: "#fedf89",
                    300: "#fec848",
                    400: "#fdb022",
                    500: "#f79009",
                    600: "#dc6803",
                    700: "#b54708",
                    800: "#93370d",
                    900: "#7a2e0e",
                },
                blueGray: {
                    25: "#fcfcfd",
                    50: "#f9f8fc",
                    100: "#eaecf5",
                    200: "#d5d9eb",
                    300: "#afb5d9",
                    400: "#717bbc",
                    500: "#4e5ba6",
                    600: "#3e4784",
                    700: "#363f72",
                    800: "#293056",
                    900: "#101223",
                },
                blue: {
                    25: "#f5faff",
                    50: "#eff8ff",
                    100: "#d1e9ff",
                    200: "#b2ddff",
                    300: "#84caff",
                    400: "#53b1fd",
                    500: "#2e9afa",
                    600: "#1570ef",
                    700: "#175cd3",
                    800: "#1849a9",
                    900: "#194185",
                },
            },
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/aspect-ratio"),
    ],
};
