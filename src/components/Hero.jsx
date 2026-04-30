

export default function Hero() {
  return (
    <section className="container" style={{display: "flex", alignItems: "center", gap: "40px"}}>
      
      <div>
        <h1 style={{fontSize: "48px"}} className="green">
          Biologia <br /> zrozumiana na kod!
        </h1>

        <p>
          Korepetycje z biologii <br />
          szkoła podstawowa | liceum | matura
        </p>

        <button className="btn">Umów lekcję</button>
      </div>

      {/* <img 
        src={} 
        alt="Natalia" 
        style={{width: "300px", borderRadius: "20px"}}
      /> */}
    </section>
  );
}