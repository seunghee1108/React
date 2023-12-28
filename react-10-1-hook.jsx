import { useState } from "react";

function ReactTenDashOne() {
  const stateWork = [];
  stateWork.length = 10;
  stateWork.fill(false);
  console.log(stateWork);
  const [packs, setPacks] = useState(stateWork);

  const togglePack = (index) => {
    const newPacks = [...packs];
    console.log(newPacks);
    if (newPacks[index]) {
      newPacks[index] = false;
    } else {
      newPacks[index] = true;
    }
    setPacks(newPacks);
  };

  const addPack = () => {
    setPacks([...packs, false]);
  };
  return (
    <div>
      <button onClick={addPack}>Open!</button>
      <div>
        {packs.map((isOpen, index) => (
          <div
           key={index}
           style={{ cursor: "pointer", backgroundColor: isOpen ? "salmon" : "white" }}
           onClick={() => togglePack(index)}
           >
            Pack {index + 1}
            </div>
        ))}
      </div>
    </div>
  );
}

export default ReactTenDashOne;