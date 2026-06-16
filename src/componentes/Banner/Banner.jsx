import styles from "./Banner.module.css"
import error_404 from '../../assets/erro_404.png'
import circuloColorido from '../../assets/circulo_colorido.png'

const Banner = () =>{
    return(
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>Olá, Mundo!</h1>
                <p>Oi, eu sou um aluno explorado pelo senai, faço cursos legais, faço sites legais, 
                gosto do Corinthians, vulgo maior time do mundo, acredito em Deus e que as 
                ofenças de uma pessoa dizem mais sobre ela do que sobre mim.</p>
            </div>
            {/* imagem */}
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} alt="circulo colorido atrás do cachorro(que sou eu)" />
                <img className={styles.error_404} src={error_404} alt="cachorro no pc que aparentemente sou eu" />
            </div>
        </div>
    )
}

export default Banner