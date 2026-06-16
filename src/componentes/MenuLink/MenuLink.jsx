import { Link, useLocation } from "react-router"
import styles from "./MenuLink.module.css"

const MenuLink = ({children, to}) =>{

const Localizacao = useLocation()

    return(
        <Link className={Localizacao.pathname === to ? styles.linkDestacado : ""} to={to}>{children}</Link>
    )
}

export default MenuLink