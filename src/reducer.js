const inital ={
    
}
const reducer =(state = inital,action)=>{
    switch(action.type){
        case 'ADDDISCOUNT':
            return {...state,chitietkm:action.item}
        default :
            return state;
    }
}
export default reducer