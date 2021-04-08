const inital ={
    count :30
}
const reducer =(state = inital,action)=>{
    switch(action.type){
        case 'ADDDISCOUNT':
            return {...state,chitietkm:action.item}
        // case 'Up':
        //     return{
        //        count: state.count +1
        //     }
        // case 'Do':
        //     return {
        //        count: state.count-1
        //     }
        default :
            return state;
    }
}
export default reducer;