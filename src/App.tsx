import Info from './Info'
import About from './About'
import QRcodeArea from './QRcodeArea'
import Footer from './Footer'
import Interest from './Interest'

export default function App() {

  return (
    <>
      <div className='container'>
          <Info />
          <About />
          <Interest />
          <QRcodeArea />
          <Footer />
      </div>    
    </>
  )
}


