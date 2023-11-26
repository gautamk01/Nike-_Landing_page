import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../Constants"
const Nav = () => {
    return (
        <header className=" padding-x py-8 absolute z-10 w-full ">

            <nav className="flex items-center justify-between max-container ">
                <a href="/"><img src={headerLogo} alt="LOGO" width={130} height={29} /></a>
                <ul className="flex-1 flex items-center justify-center gap-16 max-lg:hidden">
                    {navLinks.map((x, i) => (
                        <li key={i} className=" font-palanquin text-slate-gray leading-normal">
                            <a href={x.href}>{x.label}</a>
                        </li>
                    ))}
                </ul>
                <div className=" max-lg:hidden shadow-lg shadow-orange-500 flex justify-center items-center  bg-orange-600 text-white font-montserrat h-[70px] w-[70px] rounded-full">Sign in</div>
                <img src={hamburger} alt="box" width={22} height={22} className="lg:hidden" />
            </nav>
        </header>
    )
}

export default Nav