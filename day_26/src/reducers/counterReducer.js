// const initialCounter = 0

const counterReducer = (state=0, action) => {
    
        if(action.type === "INC_NUMBER"){
            // console.log("Pressed  + ")
            return state+1;
        }
        else if(action.type === "DEC_NUMBER"){
            // console.log("Pressed  -")
            return state-1;
        }
        return state;
    
}

export default counterReducer;
    
