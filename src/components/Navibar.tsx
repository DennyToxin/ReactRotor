import { linkList } from "../constant"
import { rotorLogo } from "../utils"

export const Navibar = () => {
  return (
    <header className="navibar">
        <nav className="w-full flex justify-between items-center">
          <div id="header" className="flex justify-center ml-10">
            <img src={rotorLogo} width={18} height={18} alt="logo" />
            <a href="#home" className="text-default navs ml-2">
              RotorPenza
            </a>
          </div>
          <div
            id="header"
            className="flex justify-center gap-10 mr-10
            max-sm:hidden"
          >
            {linkList.map(({ id, text, link }) => (
              <a href={link} className="text-default navs" key={id}>
                {text}
              </a>
            ))}
          </div>
        </nav>
      </header>
  )
}
