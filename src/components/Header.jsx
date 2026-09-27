import "../css/Header.css";

function Header({ titulo }) {
  return (
    <header className="cabecalho">
      <div className="container">
        <h1>{titulo}</h1>
      </div>
    </header>
  );
}

export default Header;