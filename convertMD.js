const widdershins = require('widdershins');
const fs = require('fs');

// data
const fetch = require('node-fetch');
let url = "https://oapi-latest.continu.co/docs/v1/doc.json";
let settings = { method: "Get" };

// const getData = ()=>{
//   fetch(url, settings)
//     .then(res => res.json())
//     .then((json) => {
//       // do something with JSON
//       console.log(json);
//
//       //create file
//       fs.writeFile('testConvert.json', JSON.stringify(json), function (err) {
//         if (err) return console.log(err);
//         console.log('Written ');
//         convertFile();
//       });
//     });
// };
// getData();

// conversion
const convertFile = ()=>{

  const options = {
    language_tabs: [{ 'go': 'Go' }, { 'http': 'HTTP' }, { 'javascript': 'JavaScript' }, { 'javascript--node': 'Node.JS' }, { 'python': 'Python' }, { 'ruby': 'Ruby' }],
    httpsnippet: true,
    expandBody: true,
    includes: ['testing.erb'],
    user_templates: './widdershins/openapi3'
  };

  const fileData = fs.readFileSync('testConvert.json', 'utf8');
  const swaggerFile = JSON.parse(fileData);

  widdershins.convert(swaggerFile, options)
    .then(markdownOutput => {
      // markdownOutput contains the converted markdown
      console.log('writing output');
      fs.writeFileSync('source/index.html.md', markdownOutput, 'utf8');
    })
    .catch(err => {
      // handle errors
    });

};

convertFile();
