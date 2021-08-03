import React, { useState } from 'react'

import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Search from './components/Search'
import Translate from './components/Translate'

const items = [
  {
    title: 'O que é React?',
    content: 'React é um framework javascript para o frontend',
  },
  {
    title: 'Por que usar React?',
    content: 'React é o framework JS favorito entre os engenheiros',
  },
  {
    title: 'Como se usa o React?',
    content: 'Se usa o React criando componentes',
  },
]

const options = [
  {
    label: 'A cor vermelha',
    value: 'red',
  },
  {
    label: 'A cor verde',
    value: 'green',
  },
  {
    label: 'Um tom de azul',
    value: 'blue',
  },
]

const App = () => {
  // const [selected, setSelected] = useState(options[0])
  // const [showDropdwon, setShowDropdown] = useState(true)

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdwon)}>
        Toggle Dropdown
      </button>
      {showDropdwon ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}

      <Translate />
    </div>
  )
}
export default App
