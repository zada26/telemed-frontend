export default function Login() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Doctor Login</h2>
      <form>
        <input placeholder="Email" type="email" /><br /><br />
        <input placeholder="Password" type="password" /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
