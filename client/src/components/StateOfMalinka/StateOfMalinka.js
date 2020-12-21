import './style.css'
import { useEffect } from 'react'
import StateCard from '../StateCard/StateCard'
import { useDispatch, useSelector } from 'react-redux'
import { addPinSettings } from '../../redux/action-creators/actions'

export default function StateOfMalinka() {
  
  const pinSettings = useSelector((state) => state.pinSettings)
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const resp = await fetch('http://localhost:3001/data')
      const data = await resp.json()
      dispatch(addPinSettings(data))
    })()
  }, [])

  if (pinSettings.length) {
    return (
      <>
        {pinSettings.map(el =>
          (<StateCard key={el._id} state={el.state} id={el._id} name={el.name} pinNum={el.pinNum} pinType={el.pinType} />)
        )}
      </>
    )
  }

  return (
    <>
      <h3>Состояние</h3>
      Пока неизвестно
    </>
  )
}
