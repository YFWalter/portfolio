import React, { useState, useEffect } from 'react'

const LINES = [
  { text: '$ whoami', type: 'cmd' },
  { text: 'walter yañez · desarrollador web', type: 'out' },
  { text: '$ cat stack.txt', type: 'cmd' },
  { text: 'Laravel · JavaScript · React · Vue · PHP', type: 'out' },
  { text: '$ status --now', type: 'cmd' },
  { text: '● disponible para nuevos proyectos', type: 'ok' },
]

const CodeIntro = () => {
  const [displayed, setDisplayed] = useState([])
  const [current, setCurrent] = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    if (lineIdx >= LINES.length) return

    const line = LINES[lineIdx]

    if (charIdx <= line.text.length) {
      const speed = line.type === 'cmd' ? 55 : 22
      const t = setTimeout(() => {
        setCurrent(line.text.slice(0, charIdx))
        setCharIdx(charIdx + 1)
      }, speed)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setDisplayed((d) => [...d, line])
      setCurrent('')
      setCharIdx(0)
      setLineIdx(lineIdx + 1)
    }, 380)
    return () => clearTimeout(t)
  }, [charIdx, lineIdx])

  const done = lineIdx >= LINES.length

  return (
    <div className="terminal">
      <div className="terminal__bar">
        <span className="terminal__dot"></span>
        <span className="terminal__dot"></span>
        <span className="terminal__dot"></span>
        <span className="terminal__title">walter@portfolio: ~</span>
      </div>
      <div className="terminal__body">
        {displayed.map((l, i) => (
          <div key={i} className={`terminal__line terminal__line--${l.type}`}>{l.text}</div>
        ))}
        {!done && (
          <div className={`terminal__line terminal__line--${LINES[lineIdx].type}`}>
            {current}<span className="terminal__cursor">▋</span>
          </div>
        )}
        {done && (
          <div className="terminal__line terminal__line--cmd">
            $ <span className="terminal__cursor">▋</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default CodeIntro
