import React,{useState} from 'react'

const StateCustom = (setstateVar,initState) => {

    const [state, setstate] = useState(initState)

    setstate(setstateVar)

    return state;
}


export default StateCustom;