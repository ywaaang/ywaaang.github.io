module.exports = {
  content: ["./src/**/*.{html,js,ts,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["sans-serif"]
    },
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
}
