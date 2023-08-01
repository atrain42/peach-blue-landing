import smile from '../images/peach.png'

const Header = () => {
  return (
    <header className='relative flex items-center h-screen px-8 mv:flex-col mv:justify-center z-10 lg:flex-row lg:justify-evenly'>
      <div className='mv:mr-0 mv:w-full md:mr-4 md:w-100'>
        <h1 className='text-7xl header-color'>Lorum Isum</h1>
        <h1 className='text-7xl'>dolar sit amet</h1>
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
      <div className='h-280 w-auto'>
        <img
          className='mx-auto mv:h-5/6 mv:w-5/6 md:h-full md:w-auto '
          src={smile}
          alt='platform'
        />
      </div>
    </header>
  )
}

export default Header
