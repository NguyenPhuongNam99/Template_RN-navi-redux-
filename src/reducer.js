const inital ={
    count :0
}
const reducer =(state = inital,action)=>{
    switch(action.type){
        case 'ADDDISCOUNT':
            return {...state,chitietkm:action.Item}
        case 'Up':
            return{
                ...state,count:state.count +1
            }
        case 'Do':
            return {
                ...state,count:state.count-1
            }
        default :
            return state;
    }
}
export default reducer;