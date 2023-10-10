import {} from 'react'
import TextSize from './componentes/TextSize'
import TextPerson from './componentes/TextPerson'
import TextColor from './componentes/TextColor'
import TextBackground from './componentes/TextBackground'

function App() {

  return (
    <>
    <div className='container'>
      <TextSize/>

      <TextPerson/>

      <TextColor/>

      <TextBackground/>
    </div>
    </>
  )
}

export default App
