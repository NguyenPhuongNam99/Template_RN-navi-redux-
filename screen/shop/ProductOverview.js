import React,{useState} from 'react';
import {View,Text} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const ProductOverview= ()=>{
    const labels = ["Cart","Delivery Address","Order Summary","Payment Method"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}
const [currentPosition,setCurrentPosition] =useState(0);
    return(
<StepIndicator
         customStyles={customStyles}
         currentPosition={currentPosition}
         labels={labels} direction='vertical'stepCount={4}
    />
    )
}
export default ProductOverview;