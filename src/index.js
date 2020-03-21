module.exports = function check(str, bracketsConfig) {
  let pattern = bracketsConfig.map(el => {
    el.join('')
  });

  for(let i = 0; i < pattern.length; i++){
    if(str.includes(pattern[i])){
      str = str.replace(pattern[i], '');

    }
  }

  return str.length == 0 ? true : false;

  //return pattern
}
