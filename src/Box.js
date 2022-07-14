/**
function Box takes 3 properties as string.
Returns a div with a background color, width, and height
based on the props passed to it.
*/
function Box({width,height,color}){
  const boxStyle = {
    width,
    height,
    color
  }

  return (
    <div style={boxStyle}>
    </div>
  )

}

export default Box;