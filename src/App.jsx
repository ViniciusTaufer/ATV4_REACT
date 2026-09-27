import Header from "./components/Header";
import Navigator from "./components/Navigator";
import Article from "./components/Article";
import Siderbar from "./components/Siderbar";
import Footer from "./components/Footer";

import "./css/App.css";

function App() {
  const post = {
    titulo: "A Evolução dos Videogames",
    autor: "Vinicius Taufer",
    data: "07 de setembro de 2026",
    conteudo:
      "Os videogames fazem parte da cultura popular há décadas. O que começou como experiências simples com gráficos extremamente limitados evoluiu para uma das maiores indústrias de entretenimento do mundo."
  };

  const postsRelacionados = [
    "A história da internet",
    "Como funciona a realidade virtual?",
    "O futuro dos jogos digitais"
  ];

  return (
    <>
      <Header titulo="Pixel & História" />

      <Navigator />

      <main id="inicio" className="container layout">
        <section>
          <Article
            titulo={post.titulo}
            autor={post.autor}
            data={post.data}
            conteudo={post.conteudo}
          />
        </section>

        <Siderbar posts={postsRelacionados} />
      </main>

      <Footer />
    </>
  );
}

export default App;