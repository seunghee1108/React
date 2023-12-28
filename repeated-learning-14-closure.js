const stringExample = "참깨빵 위에 순쉬고기 패티 두 장 특별한 소스 양상추 치즈 피클 양파까지";

function createStringAppender() {
  let body = "";
  return function(stringArray, callback) {
    stringArray.forEach((elemnet) => {
      body += elemnet;
    });
    callback(body);
  };
}

const appendString = createStringAppender();

function splitString(stringParms) {
  return stringParms.split(' ');
}

appendString(splitString(stringExample), (body) => {
  console.log(body);
  console.log(body.length);
});