import Card from './Card'
import './Intervalo.css'
import React from 'react'
import { useSelector } from 'react-redux'

export default props => {

    const min = useSelector((state)=> parseInt(state.number.min))
    const max = useSelector((state)=> parseInt(state.number.max))

    return(
      
        <Card title='Soma de número' red>
           <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{min + max}</strong>
                </span>
           </div>
        </Card>
    )
}