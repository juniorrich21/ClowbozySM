import { BrowserRouter } from "react-router-dom";

import { About, Plans, Ourservices, Feedbacks, Hero, Navbar, Faq, Works, StarsCanvas, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Ourservices />
        <Works />
        <Feedbacks />
        <Faq />
        <div className='relative z-0'>
          <Plans />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;