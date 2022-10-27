import { ChangeEvent, Dispatch, SetStateAction, useRef } from 'react'
import styles from './Input.module.scss'
import closeIcon from './close_icon.svg'

type TProps = {
  value: string
  placeholder: string
  onChange: Dispatch<SetStateAction<string>>
  valid: boolean
  setIsValid: Dispatch<SetStateAction<boolean>>
}

const Input = ({ value, placeholder, onChange, valid, setIsValid }: TProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
    setIsValid(true)
  }

  const clearInput = () => {
    onChange('')
    inputRef.current!.focus()
  }

  return (
    <div className={styles.inputContainer}>
      {value !== '' && (
        <img
          className={styles.closeIconInput}
          src={closeIcon}
          alt="закрыть"
          onClick={clearInput}
        />
      )}
      <input
        ref={inputRef}
        value={value}
        className={valid ? styles.input : styles.input + ' ' + styles.error}
        type="text"
        placeholder={placeholder}
        onChange={(e) => changeInput(e)}
      />
      {!valid && (
        <p className={styles.textError}>
          Минимальная длина ввода в поле ввода адреса - 3 символа
        </p>
      )}
    </div>
  )
}

export default Input
