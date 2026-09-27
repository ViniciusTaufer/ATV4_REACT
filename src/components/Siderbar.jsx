import "../css/Siderbar.css";

function Siderbar({ posts = [] }) {
  return (
    <aside className="sidebar">

      {/* POSTS RELACIONADOS */}
      <section className="sidebar-card">
        <h3>Posts relacionados</h3>

        <ul className="sidebar-posts">
          {posts.map((post, index) => (
            <li key={index}>
              <a href="#inicio">
                {post}
              </a>
            </li>
          ))}
        </ul>
      </section>


      {/* SOBRE O BLOG */}
      <section className="sidebar-card">
        <h3>Sobre o blog</h3>

        <p>
          Pixel & História é um espaço dedicado à história,
          tecnologia e evolução dos videogames.
        </p>
      </section>


      {/* VOCÊ SABIA */}
      <section className="sidebar-card curiosidade">
        <h3>Você sabia?</h3>

        <p>
          O primeiro console doméstico comercial,
          o Magnavox Odyssey, foi lançado em 1972.
        </p>
      </section>


      {/* CATEGORIAS */}
      <section className="sidebar-card">
        <h3>Categorias</h3>

        <ul className="categorias">
          <li>
            <a href="#historia">História</a>
          </li>

          <li>
            <a href="#curiosidades">Tecnologia</a>
          </li>

          <li>
            <a href="#curiosidades">Curiosidades</a>
          </li>

          <li>
            <a href="#comentarios">Comunidade</a>
          </li>
        </ul>
      </section>

    </aside>
  );
}

export default Siderbar;