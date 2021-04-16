import { act } from "react-test-renderer"

const inital ={
    count :30,
    filterStatus:'Primary'
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
        case 'Primary':{
            return{
                ...state,filterStatus:'Primary'
            }
        }
        case 'Double':{
            return {
                ...state,filterStatus:'Double'
            }
        }
        case 'Family':{
            return{
                ...state,filterStatus:'Family'
            }
        }
        case 'Tour':{
            return{
                ...state,filterStatus:'Tour'
            }
        }
        case 'ADDLOCATIOON':{
            return {
                ...state,addlocation:action.item
            }
        }
        case 'ADDDESTINATION':{
            return{
                ...state,adddestination:action.adddestination
            }
        }
        case 'ADDTIME':{
            return {
                ...state,startDate:action.startDate,endDate:action.endDate
            }
        }
        
        default :
            return state;
    }
}
export default reducer;