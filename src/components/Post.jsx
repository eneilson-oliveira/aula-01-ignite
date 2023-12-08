
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          < Avatar src="https://github.com/eneilson-oliveira.png" />
          <div className={styles.authorInfo}>
            <strong>Eneilson</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2023-05-10 12:27:14" title="10 de nov 2023"> Publicado á 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto </a>{' '}
          <a href=""> #nlw</a >{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe um comentário</strong>
        <textarea
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit" >Publicar</button>
        </footer>


      </form>
      <div className={styles.commentList} >
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  )
}