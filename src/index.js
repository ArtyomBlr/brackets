module.exports = function check(str, bracketsConfig) {

  let pattern = bracketsConfig.map(el => el.join(''));

  for(let i = 0; i < pattern.length; i++){
    while(str.includes(pattern[i])){
      str = str.replace(pattern[i], '');
      i = -1;
    }
  }
  return str.length == 0 ? true : false;
}
