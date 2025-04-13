import { Suspense } from 'react'
import './App.css'
import DaisyNav from './component/daisyNav/DaisyNav'
import Navbar from './component/navBar/Navbar'
import PricingOptions from './component/PricingOption/PricingOptions'

const pricingPromise = fetch('PricingData.json').then(res=>res.json())

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav>`</DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App
