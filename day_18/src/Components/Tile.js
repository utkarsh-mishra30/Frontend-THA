const Tile = (props) => {
  if (props.sum % 2) {
      return (
          <div style = { {backgroundColor: "#0011c9"} } />
      )
  }
  else {
      return (
          <div style = { {backgroundColor: "#7c87fc"} } />
      )
  }
}

export default Tile