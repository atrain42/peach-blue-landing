import smile from '../images/peach.png'

const Header = () => {
  return (
    <header className='relative flex items-center px-8 justify-evenly h-screen'>
      <div className='mv:w-full md:w-[32rem]'>
        <h1 className='mv:text-5xl xl:text-7xl header-color'>Lorum Isum</h1>
        <h1 className='mv:text-5xl xl:text-7xl'>dolar sit amet</h1>
        <p className='mt-5 w-full'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <div className='grid grid-cols-2 mt-8 mv:gap-x-5 sm:gap-x-9 gap-y-9 font-button place-items-center text-md tracking-wider'>
          <button
            className='w-full font-poppins font-normal text-center text-white py-3 rounded-md hover:rounded-[30px] ease-in duration-150 primary-btn'
            href='#'
          >
            Button One
          </button>
          <button
            className='w-full text-center font-poppins font-normal py-3 rounded-md hover:rounded-[30px] ease-in duration-150 secondary-btn'
            href='#'
          >
            Button Two
          </button>
        </div>
      </div>
      <div className='w-4/12 h-auto'>
        <img
          className='h-full w-full'
          src={smile}
          alt='platform'
        />
      </div>
    </header>
  )
}

export default Header
