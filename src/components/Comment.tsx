import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { useState } from 'react';
 
interface CommentProps {
    content: string;
    onDeleteComment: (comment : string) => void
}

export function Comment({ content, onDeleteComment } : CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/denisiorodrigues.png"  alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Denisio Rodrigues</strong>
                            <time title='23 de julho de 2022 as 08:15' dateTime='2022-07-23 08:15:30'>Cerca de 2h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}