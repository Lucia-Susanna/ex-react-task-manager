import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <Link to={'/'}>Home</Link>
      <Link to={'AddTask'}>Aggiungi una task</Link>
    </header>
  )
}

export default Header

