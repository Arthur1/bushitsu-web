module.exports = {
  semi: false,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  arrowParens: "avoid",
  importOrder: ["^@/(components|layouts|libs|pages|img)/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: "**/*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
