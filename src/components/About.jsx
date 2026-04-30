export default function About() {
  return (
    <section className="container">
      <h2 className="green">Cześć!</h2>

      <p>
        Nazywam się Natalia Zagórska i pomagam uczniom zrozumieć biologię
        w prosty i logiczny sposób.
      </p>

      <div style={{display: "flex", gap: "20px", marginTop: "20px"}}>
        <div>✔ Zrozumienie zamiast wkuwania</div>
        <div>✔ Przygotowanie do matury</div>
        <div>✔ Indywidualne podejście</div>
      </div>
    </section>
  );
}