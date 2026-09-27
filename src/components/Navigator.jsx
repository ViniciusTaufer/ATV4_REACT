import "../css/Navigator.css";

function Navigator() {
  return (
    <nav aria-label="Menu principal">
      <div className="container">
        <ul className="menu">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#historia">História</a></li>
          <li><a href="#curiosidades">Tecnologia</a></li>
          <li><a href="#comentarios">Comentários</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigator;