import Card from './Card'
import './Intervalo.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateMin, updateMax } from '../store/action/numberReducer'  


export default props => {

    const min = useSelector((state)=> parseInt(state.number.min))
    const max = useSelector((state)=> parseInt(state.number.max))
    const dispatch = useDispatch()


    return(
      
        <Card title='Intervalo de número' red>
           <div className="Intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={min} onChange={(e)=> {dispatch(updateMin(e.target.value))}}/>
                </span>
                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={max} onChange={(e)=> {dispatch(updateMax(e.target.value))}}/>
                </span>
           </div>
        </Card>
    )
}