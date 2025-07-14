'use client';

function Hero() {
  return (
    <>
      <section className="relative w-full min-h-screen bg-center bg-no-repeat bg-cover overflow-hidden" 
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2017/08/01/15/23/bride-2566244_1280.jpg')",
        }}>
        
        {/* Grainy Filter Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")',
            backgroundSize: '200% 200%',
            opacity: '0', // Adjust opacity for stronger/weaker effect
            mixBlendMode: 'overlay' // Creates natural blending with background
          }}
        />
        
        {/* Optional: Add your content here */}
        {/* <h1 className="relative z-10 text-white">Your Title</h1> */}
      </section>
    </>
  )
}

export default Hero