import Image from 'next/image'
import BeachSpiderLily from '@/assets/images/BeachSpiderLily.png'
import succulents from '@/assets/images/succulents.png'

export const Slide1 = () => (
  <>
    <div>
      <h2>Welcome to GreenShop</h2>
      <h1>
        Let’s Make a Better
        {/* */}
        <span> Planet</span>
      </h1>
      <p>
        We are an online plant shop offering a wide range of cheap and trendy plants.
        Use our plants to create a unique Urban Jungle.
        Order your favorite plants!
      </p>
    </div>
    <Image src={BeachSpiderLily} alt="Beach Spider Lily" placeholder="blur" width={507} height={550} />
  </>
)

export const Slide2 = () => (
  <>
    <div>
      <h2>Discover Our Collection</h2>
      <h1>
        From ferns to succulents,
        {/* */}
        <span> We Have It All!</span>
      </h1>
      <p>
        Explore our diverse selection of indoor and outdoor plants.
        Whether you're a beginner or a seasoned gardener,
        we will help you find the perfect plants for your home.
      </p>

    </div>
    <Image src={succulents} alt="Beach Spider Lily" placeholder="blur" width={507} height={550} />
  </>
)

export const Slide3 = () => (
  <>
    <div>
      <h2>Join the Green Revolution</h2>
      <h1>
        Bring Nature Indoors,
        {/* */}
        <span> One Plant at a Time!</span>
      </h1>
      <p>
        Join our community of plant lovers!
        Subscribe for our plant care tips and get inspired
        with new ideas for your green space.
      </p>

    </div>
    <Image src={BeachSpiderLily} alt="Beach Spider Lily" placeholder="blur" width={507} height={550} />
  </>
)
