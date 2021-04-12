const inital ={
    count :30
}
const reducer =(state = inital,action)=>{
    switch(action.type){
        case 'ADDDISCOUNT':
            return {...state,chitietkm:action.item}
        case 'PassBanner':
            return{...state,banner:action.banner}
        case 'LocationPopular':{
            return{
                ...state,locationpopular : action.locationpopular
            }
        }
        case 'SelectRoom':{
            return {
                ...state,select:action.select
            }
        }
        case 'Discovery':{
            return {
                ...state,discovery:action.discovery
            }
        }
        case 'CheckHotel':{
            return{
                ...state,hotel:action.hotel
            }
        }
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