import '../css/footer.css'

const Footer = () => {
  return (
    <>  
        <div className="findme">
          <h2>Encuéntranos en:</h2>
        </div>
        <footer className="footer">
          <div className="containerFotter">
            <div className="boxFotter twetter">
              <a href='https://twitter.com/Mariajuli06'><i className="fab fa-twitter"></i> </a> 
            </div>
            <div className="boxFotter facebook">
                <a href="https://www.facebook.com/profile.php?id=100012098647573"><i className="fab fa-facebook-f"></i></a>
            </div>
            <div className="boxFotter youtube">
                <a href=""><i className="fab fa-youtube"></i></a>
            </div>
            <div className="boxFotter instagram">
              <a href="https://www.instagram.com/_juliana_rm/"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="contacto">
            <p>Como:  MM Marias's manualidades</p>
          </div>
        </footer>
    
    </>
  )
}

export default Footer