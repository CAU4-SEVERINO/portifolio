import { Outlet } from "react-router"
import Banner from "../../componentes/Banner/Banner"

const PaginaPadrao = () => {
    return(
        <main>
            <Banner />
            <Outlet />
        </main>
    )
}

export default PaginaPadrao