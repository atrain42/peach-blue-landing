import DarkMode from './DarkMode/DarkMode'

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full z-40 navbar'>
      <div className='items-center justify-between w-full p-8 px-16 mv:hidden md:flex'>
        <div className='flex items-center cursor-pointer'>
          <span class='material-symbols-outlined'>roofing</span>
        </div>
        <ul
          className={`flex items-center w-96 justify-between font-poppins cursor-pointer`}
        >
          <li className='hover-link'>About</li>
          <li className='hover-link'>Writing</li>
          <li className='hover-link'>Projects</li>
          <li className='hover-link'>Contact</li>
          <DarkMode />
        </ul>
      </div>
    </nav>
  )
}
