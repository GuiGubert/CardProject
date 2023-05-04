import Card from "./components/Card";
import imgNaruto from "./assets/naruto-shippuden.jpg";
import imgOnePunch from "./assets/one-punch.jpg";
import imgDBZ from "./assets/dbZ.jpg";

function App() {
  return (
    <>
      <Card
        title="Naruto Shippuden (2007)"
        description="Naruto Shippuden é a segunda parte do anime Naruto, que adapta a
      continuação do mangá original escrito por Masashi Kishimoto e consiste
      em 500 episódios ao todo. Ambientada dois anos após os eventos da
      série original, Shippuden acompanha o ninja adolescente Naruto e seus
      aliados."
        imgCard={imgNaruto}
      />
      <Card
        title="One Punch-Man (2009)"
        description="One Punch-Man é uma série de webcomic criada pelo autor com o pseudónimo One, e é publicada desde 2009. A série rapidamente tornou-se um fenómeno viral, alcançando mais de 7,9 milhões de acessos, em junho de 2012."
        imgCard={imgOnePunch}
      />
      <Card
        title="Dragon Ball Z (1989)"
        description="As aventuras de um poderoso guerreiro chamado Goku, seu filho Gohan e seus aliados, que se esforçam para defender a Terra das ameaças. Eles são auxiliados por um dragão que concede os desejos de quem quer que reúna as sete Esferas do Dragão."
        imgCard={imgDBZ}
      />
    </>
  );
}

export default App;
