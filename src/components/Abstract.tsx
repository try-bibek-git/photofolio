'use client';

function Abstract() {
  return (
    <section className='w-full min-h-screen relative px-4 sm:px-6 lg:px-12 py-8 lg:py-14'>
      <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 max-w-7xl mx-auto'>
        {/* Left Image */}
        <div className='w-full lg:w-1/4 flex justify-end items-start order-2 lg:order-1'>
          <div className='w-full h-[300px] sm:h-[400px] lg:h-[600px] bg-center bg-no-repeat bg-cover rounded-lg'
            style={{
              backgroundImage:
                "url('https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/306b3c30-8166-4514-82d9-1c1263929d2c/0H1A4354+%281%29+small.jpg?format=750w')",
            }}>
          </div>
        </div>

        {/* Center Content */}
        <div className='w-full lg:w-2/4 space-y-6 order-1 lg:order-2'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-light text-center lg:text-left leading-tight tracking-wide'>
            A MODERN AGE APPROACH
            <br />
            <span className="block mt-2">
              <span className='italic text-[#d19107]'>to an </span>
              AGE OLD TRADITION
            </span>
          </h1>

          <p className='italic text-[#3d2b05] text-base sm:text-lg leading-relaxed mt-6 text-center lg:text-left'>
            Considered to be the epitome of Modern Photography and Filmmaking, TTT has transformed the Indian Wedding landscape on a regular basis. For almost a decade The Timeless tales has been creating photographs and films which are timeless and have been etched in memories of thousands of people forever.
            <br /><br />
            Awarded as the Wedding Filmmaker of the year for four consecutive years at the Weddingsutra awards along with numerous other awards TTT is the only company listed on IMDB for its award winning films.
          </p>
        </div>

        {/* Right Image */}
        <div className='w-full lg:w-1/4 order-3'>
          <div className='w-full h-[300px] sm:h-[400px] lg:h-[600px] bg-center bg-no-repeat bg-cover rounded-lg'
            style={{
              backgroundImage:
                "url('https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1db82b11-0d5e-446f-bfef-3bee15ed4f8a/P1+small.jpg?format=750w')",
            }}>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Abstract