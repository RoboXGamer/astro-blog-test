module.exports = {
  tabWidth: 2,
  useTabs: false,
  astroAllowShorthand: false,
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
