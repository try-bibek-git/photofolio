'use client';

function Abstract() {
  return (
    <section className='w-full min-h-screen relative px-12 py-14 flex justify-between overflow-hidden '>
        <div className=' w-110 flex justify-end items-end '>
            <div className=' w-100 h-120 bg-center bg-no-repeat bg-cover'
            style={{
        backgroundImage:
          "url('https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/306b3c30-8166-4514-82d9-1c1263929d2c/0H1A4354+%281%29+small.jpg?format=750w')",
      }}></div>
        </div>
        <div className=' w-130  pt-10 '>
            <h1 className='text-5xl absolute left-80 '>A MODERN AGE APPROACH <br /> <span className=" left-50 relative"><span className=' italic text-[#d19107]'>to an </span>AGE OLD TRADITION </span></h1>

            <p className='mt-35 italic text-[#3d2b05]'>Considered to be the epitome of Modern Photography and Filmmaking, TTT has transformed the Indian Wedding landscape on a regular basis. For almost a decade The Timeless tales has been creating photographs and films which are timeless and have been etched in memories of thousands of people forever. <br /> <br />Awarded as the Wedding Filmmaker of the year for four consecutive years at the Weddingsutra awards along with numerous other awards TTT is the only company listed on IMDB for its award winning films.</p>
        </div>
        <div className=' w-110'>
            <div className=' w-100 h-120 bg-center bg-no-repeat bg-cover'
            style={{
        backgroundImage:
          "url('https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1db82b11-0d5e-446f-bfef-3bee15ed4f8a/P1+small.jpg?format=750w')",
      }}></div>
        </div>
    </section>
  )
}

export default Abstract