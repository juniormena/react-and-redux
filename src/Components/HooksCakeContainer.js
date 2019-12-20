import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer() {
    //el useseslector hook sirve para hacer lo mismo que hace mapsstatetoprops
   const numOfCakes = useSelector(state=> state.numberOfCakes)
   const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes-{numOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;

//hay algunas use warnings cuando usas hooks con redux
