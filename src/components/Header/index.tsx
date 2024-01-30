import ThemeSelector from '../ThemeSelector'


interface HeaderProps {
  setTheme: (arg: number) => void;
  theme: number;
}
const Header = ({setTheme, theme} : HeaderProps) => {
  return (
    <header className='header'>
        <h1>calc</h1>
        <ThemeSelector setTheme={setTheme} theme={theme}/>
    </header>
  )
}

export default Header