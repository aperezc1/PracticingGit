module.exports = {
    default: {
      require: ['steps/**/*.js'],
      format: ['progress', 'json:reports/cucumber_report.json'],
      publishQuiet: true,
    },
  };
  