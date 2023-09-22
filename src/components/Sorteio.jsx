import Card from './Card'
import './Intervalo.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export default props => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

      const min = useSelector((state)=> parseInt(state.number.min))
      const max = useSelector((state)=> parseInt(state.number.max))



    return(
      
        <Card title='Sorteio de número' red>
           <div>
                <span>
                    <strong>Resultado</strong>
                    <strong>{getRandomInt(min + max)}</strong>
                </span>
           </div>
        </Card>
    )
}