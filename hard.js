function stringEditor (str) {
  if (typeof str !== 'string') {
    console.log('Переданный аргумент не является строкой!')
  }
  let trimmedStr = str.trim();
  if (str.length > 30) {
    let cuttedStr = trimmedStr.slice(0, 30);
    console.log(cuttedStr + '...');
  }
  else {
    console.log(trimmedStr);
  }
}

stringEditor('  hghdkkfjfhdjkfk  ')