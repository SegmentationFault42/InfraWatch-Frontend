export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3C2E6C",
        secondary: "#60A5FA",
        success: "#10B981",
        warning: "#FACC15",
        error: "#EF4444",
        background: "#F9FAFB",
        text: "#1F2937",
        "text-secondary": "#6B7280",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
}