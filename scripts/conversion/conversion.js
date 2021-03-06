//bundle exec middleman server
//bundle exec middleman build

const widdershins = require('widdershins');
const fs = require('fs');
const paths = {
  source: './scripts/conversion/swagger.json',
  dest: './source/index.html.md',
  url: 'https://oapi-latest.continu.co/docs/v1/doc.json'
};
// data
const fetch = require('node-fetch');
let url = paths.url;
let settings = { method: "Get" };
const getData = ()=>{
  fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
      // do something with JSON
      console.log('gotten data:');
      console.log(json);
      //create file
      fs.writeFile(paths.source, JSON.stringify(json), function (err) {
        if (err) return console.log(err);
        console.log('Written ');
        convertFile();
      });
    });
};
getData();
// conversion
const convertFile = ()=>{
  const options = {
    language_tabs: [{'shell': 'curl'}],
    httpSnippet: true,
    expandBody: true,
    user_templates: './scripts/conversion/templates',
    tocSummary: true,
    codeSamples: true,
    sample: true,
    loadedFrom: "https://usw2-oapi.continu.co/api/v1",
    version: false,
    toc_footers: [
      {
        url: "mailto:api@continu.co",
        description: "Contact Us"
      },
      {
        url: "https://continu.co/terms",
        description: "Terms of Service"
      }
    ]
  };
  const fileData = fs.readFileSync(paths.source, 'utf8');
  const swaggerFile = JSON.parse(fileData);
  widdershins.convert(swaggerFile, options)
    .then(markdownOutput => {
      // markdownOutput contains the converted markdown
      console.log('writing output');
      fs.writeFileSync(paths.dest, markdownOutput, 'utf8');
    })
    .catch(err => {
      // handle errors
    });
};

