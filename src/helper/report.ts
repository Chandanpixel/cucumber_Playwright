const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-result",
  reportPath: "./",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "CHANDASA",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Let's shop" },
      { label: "Release", value: "1.2.1" },
      { label: "Cycle", value: "Smoke-1" },
     
    ],
  },
});