import cardImg from "../../assets/naruto-shippuden.jpg";
import Button from "../Button";
import styles from "./styles.module.css";

function Card() {
  return (
    <div className={styles.container}>
      <img
        className={styles.imgCard}
        src={cardImg}
        alt="Pôster Naruto Shippuden"
      />

      <div>
        <h1>Naruto Shippuden (2007)</h1>
        <p>
          <span style={{ fontWeight: "bold" }}>Naruto Shippuden</span> é a
          segunda parte do anime Naruto, que adapta a continuação do mangá
          original escrito por{" "}
          <span style={{ fontWeight: "bold" }}>Masashi Kishimoto</span> e
          consiste em 500 episódios ao todo. Ambientada dois anos após os
          eventos da série original, Shippuden acompanha o ninja adolescente
          Naruto e seus aliados.
        </p>
        <Button />
      </div>
    </div>
  );
}

export default Card;
