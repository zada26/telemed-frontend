export default function Register() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Patient Registration</h2>
      <form>
        <input placeholder="Full Name" /><br /><br />
        <input placeholder="Email" type="email" /><br /><br />
        <input placeholder="Insurance Info" /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
