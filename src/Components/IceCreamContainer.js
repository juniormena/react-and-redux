import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import  {buyIceCream } from '../redux';

const IceCreamContainer =(props)=>{
    return(
        <div>
            <h2>Number of Ice Creams-{props.numOfIceCreams}</h2>
            <Button onClick={props.buyIceCream}>Buy an Ice Cream</Button>
        </div>
    )
}   

const mapStateToProps = state=>{
    return{
        numOfIceCreams:state.iceCream2.numOfIceCreams
    }
}

const mapDispatchToProps =dispatch => {
    return {
        buyIceCream: () => {
            dispatch(buyIceCream())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);