
import { BsCart } from 'react-icons/bs'
BsCart

const NavBar = () => {
  return (
    <div className='d-flex justify-content-between bg-secondary p-3'>
        <a href=''className='navbar-brand fs-3 fw-bolder'>Shop</a>
        <a href='' className='navbar-link text-white fs-6'><BsCart/></a>
    </div>
  )
}

export default NavBar