
import fotoCapa from "../../assets/sobre_mim_capa.png"
import PostModelo from "../../componentes/PostModelo/PostModelo"
import Eu from "../../assets/eu.jpeg"
import styles from "./SobreMim.module.css"

const SobreMim = () => {
    return(
        <PostModelo 
            fotoCapa={fotoCapa} 
            titulo="Sobre mim"
        >
        <h3 className={styles.subtitulo}>
            Olá, eu sou o Cauã, um desenvolvedor front-end apaixonado por criar experiências digitais envolventes e intuitivas. Com uma sólida formação em desenvolvimento web e uma paixão por design, estou sempre em busca de novas maneiras de aprimorar minhas habilidades e entregar projetos de alta qualidade. Meu objetivo é transformar ideias em realidade, criando interfaces que não apenas sejam visualmente atraentes, mas também funcionais e acessíveis para todos os usuários.
        </h3>

        <img className={styles.fotoSobreMim} src={Eu} alt="Foto de Cauã" />

        <p className={styles.paragrafo}>No inicio minha vida foi repleta de desafios e aprendizados. Desde pequeno, sempre tive uma paixão por tecnologia e criatividade, o que me levou a seguir uma carreira em desenvolvimento web. Sempre senti uma conexão profunda com a programação e o design, o que me motivou a aprimorar minhas habilidades constantemente. Provavelmente essa ligação me tornou o profissional que sou hoje.</p>
        <p className={styles.paragrafo}>Nesta carreira eu tenho me dedicado a aprender novas tecnologias e técnicas, sempre buscando melhorar meu conhecimento e habilidades. Por causa do meu passa onde eu comia casca de parede</p>
        <p className={styles.paragrafo}>Isso me levou a ser um profissional comprometido e sempre disposto a enfrentar novos desafios. Hoje conhecido como o melhor desenvolvedor de software do mundo. Ter essa reputação é algo que me motiva a continuar crescendo e me tornando cada vez melhor no meu campo de atuação. Servindo de exemplo para os outros desenvolvedores. Obrigado por prestigiar meus anos de trabalho e contribuir para o nosso time.</p>
        </PostModelo>
    )
}

export default SobreMim