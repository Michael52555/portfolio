export default function Section({ id, title, children }) {
  return (
    <section id={id} style={{ padding: "15px 0" }}>
      <h2 style={{ margin: "0 0 14px", fontSize: 22 }}>{title}</h2>
      {children}
    </section>
  );
}
