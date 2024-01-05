import _ from 'lodash';   // package.json 에 설치 완료된 상태여야 한다.

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['hello','webpack'], ' ');   // locash  _를 통해 접근 가능
  
  return element;
}

document.body.appendChild(component());