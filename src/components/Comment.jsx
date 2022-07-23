import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
 
export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/denisiorodrigues.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Denisio Rodrigues</strong>
                            <time title='23 de julho de 2022 as 08:15' dateTime='2022-07-23 08:15:30'>Cerca de 2h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}