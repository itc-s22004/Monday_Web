import Header from "@/components/header"
import Footer from "@/components/footer"
import style from "@/styles/utils.module.css"

const Layout = ({children}) => {
    return (
        <div className={style.sideBySideCenter}>
            <Header />

            <main>{children}</main>

            <Footer />
        </div>
    )
}

export default Layout