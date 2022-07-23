import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/denisiorodrigues.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Denisio Rodrigues</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="23 de julho de 2022 07:30" dateTime="2022-07-23 07:30:56">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href='#'>jane.design/doctorcare</a></p>
                <p> 
                    <a href='#'>#novoprojeto</a> 
                    <a href='#'>#nlw</a> 
                    <a href='#'>#rocketseat</a>
                </p>
            </div>
        </article>
    );
}