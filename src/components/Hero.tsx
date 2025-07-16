'use client';

function Hero() {
  return (
    <>
      <section className="relative w-full min-h-screen bg-center bg-no-repeat bg-cover overflow-hidden" 
        style={{
          backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/3b5087c6-a3ed-4a4e-9617-8332c38ca134/SIDD8608+full+2.jpg?format=1500w')",
        }}>
        
        {/* Grainy Filter Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")',
            backgroundSize: '200% 200%',
            opacity: '0.0', // Adjust opacity for stronger/weaker effect
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