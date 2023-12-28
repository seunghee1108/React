const stringExample = "참깨빵 위에 순쇠고기 패티 두 장 특별한 소스 양상추 치즈 피클 양파까지";

function splitString(stringParms) {
  let result = stringParms.split('');
  return result;
}

function appendString(stringArray, callback) {
  let body = "";

  stringArray.forEach((Element) => {
    body = body + Element;
  });
  callback(body);
};

console.log(appendString(splitString(stringExample), (body) => {
  console.log(body);
  console.log(body.length);
}))