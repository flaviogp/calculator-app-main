import { useState } from "react"

const ThemeSelector = () => {
  const [theme, setTheme] = useState(1)

  const toggleInputTheme = (id: string) => {
    id === 'theme-one' &&  setTheme(1)
    id === 'theme-two' &&  setTheme(2)
    id === 'theme-three' &&  setTheme(3)
  }

  const handleClick = () => {
    if(theme >= 3) return setTheme(1)
    const nextTheme = theme + 1
    return setTheme(nextTheme)
  }

  return (
    <div className='theme-selector'>
        <span>
            THEME
        </span>
        <div className='select-box'>
            <label htmlFor="theme-one">
              <span>1</span>
              <input 
                onChange={(e) => toggleInputTheme(e.currentTarget.id)} 
                type="radio" 
                name="select-theme" 
                id="theme-one" 
              />
            </label>
            <label htmlFor="theme-two">
              <span>2</span>
              <input 
                onChange={(e) => toggleInputTheme(e.currentTarget.id)} 
                type="radio" 
                name="select-theme" 
                id="theme-two" 
              />
            </label>
            <label htmlFor="theme-three">
              <span>3</span>
              <input 
                onChange={(e) => toggleInputTheme(e.currentTarget.id)} 
                type="radio" 
                name="select-theme" 
                id="theme-three" 
              />
            </label>
            <div className={`toggle-theme toggle-theme-${theme}`} onClick={() => handleClick()}></div>
        </div>
    </div>
  )
}

export default ThemeSelector