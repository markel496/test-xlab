import { IAdress } from '../../models'
import style from './Adresses.module.scss'

const Addresses = ({ adresses }: { adresses: IAdress[] }) => {
  return (
    <div className={style.container}>
      <h2 className="title">Адреса</h2>
      <ul>
        {adresses?.map((adress, i) => (
          <li key={i}>{adress.unrestricted_value}</li>
        ))}
      </ul>
      {adresses && !adresses.length ? <p>Не удалось найти адреса</p> : ''}
    </div>
  )
}

export default Addresses
