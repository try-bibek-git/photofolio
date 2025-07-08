
function Navbar() {
  return (
    <>
    <div className='w-screen bg-red-400 flex h-32 px-12 py-8 justify-between red'>
       {/* FUCKER DONT LEAVE SRC EMPTY NIGGA GETTING ERROR*/}
        {/* <div><img src="" alt="logo" /></div> */}
            <div className='flex'>
                <ul className='flex gap-7 py-2 mr-6'>
                    <li><a href="">Photography</a></li>
                    <li><a href="">Films</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">More</a></li>
                </ul>
                <button type='button' className='bg-black rounded h-12 px-3'>Get in touch</button>
            </div>
    </div>
    </>
  )
}

export default Navbar