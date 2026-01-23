export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">SOFIA DARKE</div>
        <div className="footer-info">
          <span className="footer-location">STOCKHOLM</span>
          <span className="footer-copyright">©{currentYear} SOFIA DARKE</span>
        </div>
      </div>
    </footer>
  )
}
