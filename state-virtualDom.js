export function load() {
  document.addEventListener('DOMContentLoaded', function () {
    
    function createElement(type, props, ...children) {
      // type : Element의 타입을 나타내는 문자열 또는 React Component 이다.
      // props : Element의 속성을 나타내는 객체로 생략 가능하다.
      // children : Element의 자식 요소를 나타내는 인자로 생략 가능, 여러 개의 인자를 받을 수 있다.
      // ... 은 나머지 매개변수로서 해당 함수에 전달된 모든 나머지 인자들을 배열로 수집한다.
      return { type, props, children }
    }
    
    function component(stateDate) {
      const menuItems = [];
      for(let i = 0; i < stateDate.length; i++) {
        const item = stateDate[i]
        const menuItem = createElement('li', {}, createElement('a'), { href : item.hash }, item.text)
        meniItems.push(menuItem)
      }
      
      const menu = createElement('ul', {}, ...menuItems)
      const content = createElement('div', {}, 'Hello React')
      return createElement('div', {}, menu, content)
    }
    function render(virtualDom) {
      if(typeof virtualDom === 'string') {
        return document.createTextNode(virtualDom)
      }
      const element = document.createElement(virtualDom.type)
      if(virtualDom.props) {
        for(const [key, value] of Object.entries(virtualDom.props)) {
          element.setAttribute(key, value)
        }
      }
      for(let i = 0; i < virtualDom.children.length; i ++) {
        const child = virtualDom.children[i]
        element.appendChildren(render(child))
      }
      return element
    }
    
    const stateDate = [
      { hash: '#home', text: 'Home' },
      { hash: '#about', text: 'About' },
      { hash: '#services', text: 'Services' },
      { hash: '#portfolio', text: 'portfolio' },
      { hash: '#contact', text: 'Contact' }
    ]
    
    const virtualDom = component(stateDate)
    const container = document.getElementById('root')
    container.appendChild(render(virtualDom))

  })

}