const fs = require('fs');

const readFile = (fileName) => {
  const file = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  return file;
};

const getMainCssFile = () => {
  const path = './build/static/css/';
  for (const file of fs.readdirSync(path)) {
    if (file.match(/^main.+.css$/)) {
      console.log('Found', file);
      return readFile(`${path}/${file}`);
    }
  }
};

const getMainJsFile = () => {
  const path = './build/static/js/';
  for (const file of fs.readdirSync(path)) {
    if (file.match(/^main.+.js$/)) {
      console.log('Found', file);
      return readFile(`${path}/${file}`).replace('</', '<\/');
    }
  }
};

fs.readFile('./build/index.html', 'utf8', (err, indexHTML) => {
  if (err) {
    console.error(err);
    return;
  }
  const regex = /<script defer="defer" src=".+"><\/script>/i;
  //data.replace(regex, '');
  console.log('print files');
  const mainJsFile = getMainJsFile();
  const mainCssFile = getMainCssFile();

  let modifiedIndexHtml = indexHTML.replace(
    /<link href=".+" rel="stylesheet"><\/link>/,
    `<style>${mainCssFile}</style>`,
  );
  modifiedIndexHtml = modifiedIndexHtml.replace(
    '<div id="root"></div>',
    `<div id="root"></div>
    <script defer="defer">
    ${mainJsFile}
    </script>`,
  );

  fs.writeFileSync('./index.html', modifiedIndexHtml);
});
