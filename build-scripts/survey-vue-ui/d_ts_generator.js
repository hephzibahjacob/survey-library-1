var doc = require("surveyjs-doc-generator");

doc.generateDts({ 
  entries: ["./src/entries/vue-ui.ts"],
  out: "./build/survey-vue-ui/survey-vue-ui.d.ts",
  name: "Type definition for Survey JavaScript library for Vue (without core)",
  license: "MIT (http://www.opensource.org/licenses/mit-license.php)",
  excludeImports: true,
  paths: {
    "survey-core": ["./build/survey-core/survey.core.d.ts"],
  }    
});
