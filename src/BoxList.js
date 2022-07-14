import React, { useState } from "react";
import NewBoxForm from "./NewListItemForm";
import Box from './Box'
import { v4 as uuid } from 'uuid';


/** Shopping list: manages items in the list
 *
 * State:
 * - items: array like [ { id, qty, name }, ... ]
 *
 * ShoppingList -> NewListItemForm
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function renderBoxes() {
    return (
        <ul>
          {boxes.map(box => (
              <Box
              key={box.id}
              width={box.width}
              height={box.height}
              color={box.color}
              />
          ))}
        </ul>
    );
  }
  // end

  /** Add new box div to boxList. */
  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }
  // end

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
}
// end

export default BoxList;