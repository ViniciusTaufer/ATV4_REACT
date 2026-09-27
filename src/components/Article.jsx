import "../css/Article.css";

function Article({ titulo, autor, data, conteudo }) {
  return (
    <article className="post">

      <header className="post-header">
        <span className="categoria">
          Tecnologia & Cultura
        </span>

        <h2>{titulo}</h2>

        <p className="subtitulo">
          Da simplicidade dos primeiros consoles aos mundos
          virtuais que conhecemos hoje.
        </p>

        <p className="autor">
          Publicado por <strong>{autor}</strong> — {data}
        </p>
      </header>

      <section id="historia">
        <h3>Como tudo começou?</h3>

        <p>{conteudo}</p>

        <p>
          Nos primeiros anos, os jogos eram bastante simples.
          Mesmo assim, eles foram responsáveis por apresentar ao
          público uma nova forma de interação com a tecnologia.
        </p>
      </section>

      <section>
        <h3>A evolução dos consoles</h3>

        <div className="cards">

          <div className="card">
            <h4>Primeira geração</h4>

            <p>
              Os primeiros consoles apresentavam jogos simples
              e controles bastante básicos.
            </p>
          </div>

          <div className="card">
            <h4>Era dos 8 e 16 bits</h4>

            <p>
              Os gráficos ficaram mais detalhados e personagens
              icônicos começaram a surgir.
            </p>
          </div>

          <div className="card">
            <h4>Era moderna</h4>

            <p>
              Internet, gráficos em alta definição e mundos
              abertos transformaram completamente a experiência.
            </p>
          </div>

        </div>
      </section>

      <section id="curiosidades">
        <h3>Videogames e tecnologia</h3>

        <p>
          Atualmente, os videogames utilizam tecnologias como
          inteligência artificial, realidade virtual, ray tracing
          e sistemas online.
        </p>

        <p>
          Além dos consoles tradicionais, existem jogos para
          computadores, celulares e serviços de streaming.
        </p>

        <blockquote>
          "Os videogames deixaram de ser apenas uma brincadeira
          e se transformaram em uma forma de arte e tecnologia."
        </blockquote>
      </section>

      <section className="midia">
        <h3>Um pouco da história dos videogames</h3>

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Vídeo relacionado aos videogames"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section id="comentarios" className="comentarios">
        <h3>Deixe seu comentário</h3>

        <p>
          Qual geração de videogames marcou mais a sua vida?
        </p>

        <form action="#" method="post">

          <div className="campo">
            <label htmlFor="nome">Nome:</label>

            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              required
              minLength="3"
            />
          </div>

          <div className="campo">
            <label htmlFor="email">E-mail:</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="exemplo@email.com"
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="idade">Idade:</label>

            <input
              type="number"
              id="idade"
              name="idade"
              min="10"
              max="100"
            />
          </div>

          <div className="campo">
            <label htmlFor="geracao">
              Sua geração favorita:
            </label>

            <select
              id="geracao"
              name="geracao"
              required
            >
              <option value="">Selecione</option>

              <option value="retrô">
                Retrô
              </option>

              <option value="8-16">
                8/16 bits
              </option>

              <option value="32-64">
                32/64 bits
              </option>

              <option value="moderna">
                Moderna
              </option>
            </select>
          </div>

          <div className="campo">
            <label htmlFor="comentario">
              Comentário:
            </label>

            <textarea
              id="comentario"
              name="comentario"
              rows="5"
              placeholder="Escreva seu comentário..."
              required
              minLength="10"
            ></textarea>
          </div>

          <div className="campo checkbox">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
            />

            <label htmlFor="newsletter">
              Quero receber novidades sobre tecnologia.
            </label>
          </div>

          <button type="submit">
            Enviar comentário
          </button>

        </form>
      </section>

    </article>
  );
}

export default Article;