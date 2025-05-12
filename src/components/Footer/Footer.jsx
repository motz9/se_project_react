import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>Developed by Matthew Lane</p>
      <p>{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
