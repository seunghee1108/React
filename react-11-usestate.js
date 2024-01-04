const makeReact = function () {
  const global = {};
  let index = 0;

  function useState(initialState) {
    if(global.states === undefined) {
      global.states = [];
    }

    const currentState = global.states[index] || initialState;
    global.states[index] = currentState;
    
    const setState = (function () {
      let currentIndex = index;
      return function (value) {
        global.states[currentIndex] = value;
      }
    })();
    index = index + 1;
    return [currentState, setState];
  }
  return useState;
}

function MakeComponent() {
  const useState = makeReact();
  const [states, setState] = useState(true);

  return (
    <>
      <div>{states.ioStirng()}</div>
      <button onClick={() => setState(!state)}>토글</button>
    </>
  )
}

console.log(MakeComponent);