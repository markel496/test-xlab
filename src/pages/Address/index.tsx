import style from './Address.module.scss'
import Adresses from '../../components/Adresses'
import Input from '../../components/Input'
import { useRef, useState } from 'react'
import { IAdress } from '../../models'

const URL =
  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
const TOKEN = '9afdf8ee189ca00bb584edbe480f50d327d71c28'

const Address = () => {
  const [searchValue, setSearchValue] = useState('')
  const [adresses, setAdresses] = useState<IAdress[]>()
  const [isValid, setIsValid] = useState(true)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const clickHandler = () => {
    if (searchValue.length < 3) {
      setSearchValue('')
      setIsValid(false)
      setAdresses(undefined)
    } else {
      const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Token ' + TOKEN,
        },
        body: JSON.stringify({ query: searchValue }),
      }
      fetch(URL, options as RequestInit)
        .then((response) => response.json())
        .then(({ suggestions }: { suggestions: IAdress[] }) =>
          setAdresses(suggestions)
        )
        .catch((error) => console.warn('error', error))
      setIsValid(true)
    }
  }

  return (
    <>
      <h2 className="title">Поиск адресов</h2>
      <p className={style.text}>Введите интересующий вас адрес</p>
      <div className={style.searchWrapper}>
        <Input
          value={searchValue}
          placeholder="Введите интересующий вас адрес"
          onChange={setSearchValue}
          valid={isValid}
          setIsValid={setIsValid}
        />
        <button className={style.btn} ref={buttonRef} onClick={clickHandler}>
          Поиск
        </button>
      </div>
      {adresses && isValid && <Adresses adresses={adresses} />}
    </>
  )
}

export default Address
