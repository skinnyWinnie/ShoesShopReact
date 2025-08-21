import React from "react"
import { useState, useEffect, memo } from "react"


const MemoizedClock = memo(function Clock () {
  const [date, setDate] = useState(new Date())
  const tick = () => {
    setDate(new Date())
  }
  useEffect(()=> {
    const timerID = setInterval(()=> tick(), 1000)
    // return ()=> {clearInterval(timerID)}
  }, [])
  return (
    <h1>Московское время: {date.toLocaleTimeString()}</h1>
  )
}, (oldProps, newProps) => oldProps.someProps !== newProps.someProps) 
export default MemoizedClock