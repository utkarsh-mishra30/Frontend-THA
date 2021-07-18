import Tile from "./Tile";

const array = [1,2,3,4,5,6,7,8];

const Board = () => {

    const boardStyle = {
        "display" : "grid",
        "gridTemplateColumns" : "repeat(8, 8vh)",
        "gridTemplateRows" : "repeat(8, 8vh)",
        "border" : "3vh solid #080152"
    }

    return (
        <div style = {boardStyle}>
            {array.map(row => 
                (array.map(column => 
                    <Tile sum = {row + column} key = {row + "," +  column}/>)
                )
            )}
        </div>
    )
}

export default Board