export default function Navbar() {
  return (
    <nav className="container" style={{display: "flex", justifyContent: "space-between"}}>
      <h2 className="green">KOD BIOLOGII</h2>
      <div>
        <a>Start</a> | <a>O mnie</a> | <a>Oferta</a> | <a>Kontakt</a>
      </div>
    </nav>
  );
}