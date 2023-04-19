import Button from "../Button";
import styles from "./styles.module.css";

function Card({ title, imgCard, description }) {
  return (
    <div className={styles.container}>
      <img className={styles.imgCard} src={imgCard} alt={title} />

      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <Button />
      </div>
    </div>
  );
}

export default Card;
