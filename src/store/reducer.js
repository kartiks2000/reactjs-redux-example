const initialstate = {
    text : []
}

const myreducer = (state = initialstate , action) => {
    if(action.type == "ADD")
    {
        var x = [...state.text,action.payload];
        return{
            text : x
        };
    }
    if(action.type == "DEL")
    {
        var x = [...state.text];
        x.map((i,idx) => {
            if(idx==action.payload)
            {
                x.splice(idx,1);
            }
        });
        // console.log("deleted..",state.text);
        return{
            text : x
        };
    }
    return state;
}

export default myreducer;