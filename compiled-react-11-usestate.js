const makeReact = function () {
  const global = {};
  let index = 0;
  function useState(initialState) {
    if (global.states === undefined) {
      global.states = [];
    }
    const currentState = global.states[index] || initialState;
    global.states[index] = currentState;
    const setState = function () {
      let currentIndex = index;
      return function (value) {
        global.states[currentIndex] = value;
      };
    }();
    index = index + 1;
    return [currentState, setState];
  }
  return useState;
};
function MakeComponent() {
  const useState = makeReact();
  const [states, setState] = useState(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, states.ioStirng()), /*#__PURE__*/React.createElement("button", {
    onClick: () => setState(!state)
  }, "\uD1A0\uAE00"));
}
console.log(MakeComponent); 
