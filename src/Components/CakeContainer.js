import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import  {buyCake } from '../redux';

const CakeContainer =(props)=>{
    return(
        <div>
            <h2>Number of Cakes-{props.numberOfCakes}</h2>
            <Button onClick={props.buyCake2}>Buy a Cake</Button>
        </div>
    )
}   

const mapStateToProps = state=>{
    return{
        numberOfCakes:state.numberOfCakes
    }
}

const mapDispatchToProps =dispatch => {
    return {
        buyCake2: () => {
            dispatch(buyCake())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);