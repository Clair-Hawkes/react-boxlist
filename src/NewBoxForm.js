import React, { useState } from "react";

/** Form for creating a new box to add to the BoxList component.
 *
 * Has state for the width,height,color of the box; on submission:
 * sends {width,height,color} to fn rec'd from parent.
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ /*TODO: AddBox function */ addBox}) {
  const initialState = { width:'',height:'',color:''};
  const [formData, setFormData] = useState(initialState);

  /** Send {width,height,color} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** render form */
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input
        id="width"
        type="number"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="color">Color:</label>
      <input
        type="string"
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />

      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;
