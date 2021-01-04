import React from "react";
import "../assets/styles.css";
import "../assets/footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Footer() {
  return (
    <>
      <footer class="footer text-center abelkader">
        <div class="container">
          <div class="row">
            {/* <!-- Footer Location--> */}
            <div class="col-lg-4 mb-5 mb-lg-0 ">
              <h4 class="text-uppercase mb-4">Contact</h4>
              <div className="contactFooter">
                <p class="lead mb-0">
                  <i class="fas fa-envelope"></i>  ac.tunisia2020@gmail.com{" "}
                </p>
                <p class="lead mb-0">
                  {" "}
                  <i class="fas fa-phone-square-alt"></i>  (+216) 22 036 040{" "}
                </p>
                <p class="lead mb-0">
                  <i class="fas fa-map-marker-alt"></i> Rue de la teinturerie,
                  Megrine Ben Arous
                </p>
              </div>
            </div>
            {/* <!-- Footer Social Icons--> */}
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Around the Web</h4>
              <a
                target="_blanck"
                class="btn btn-outline-light btn-social mx-1"
                href="https://www.facebook.com/DEMARRES"
              >
                <i class="fab fa-fw fa-facebook-f"></i>
              </a>
              {/* <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a> */}
              <a
                target="_blanck"
                class="btn btn-outline-light btn-social mx-1"
                href="#!"
              >
                <i class="fab fa-fw fa-linkedin-in"></i>
              </a>
              <a
                target="_blanck"
                class="btn btn-outline-light btn-social mx-1"
                href="#!"
              >
                <i class="fab fa-fw fa-youtube"></i>
              </a>
            </div>
            {/* <!-- Footer About Text--> */}
            <div class="col-lg-4 ">
              <h4 class="text-uppercase mb-4">About Active citizens Tunsia</h4>
              <div className="aboutFooter">
                <p class="lead mb-0" style={{ marginBottom: "30px" }}>
                  "Active Citizens" is a training program on leadership and
                  social leadership... .
                </p>
              </div>
              <div className="buttonLearnmoreFooter">
                <a
                  target="_blanck"
                  class="button alt"
                  href="https://drive.google.com/file/d/13nZmwsqVigNdXg755_hdbSg5DX1vP-_U/view?usp=sharing"
                >
                  More
                </a>
                <a
                  target="_blanck"
                  class="button alt"
                  href="https://drive.google.com/file/d/1Fsi0r2trttGTDF4jOwUTewCf3uHWM0Ux/view?usp=sharing"
                >
                  إقرأ أكثر
                </a>
              </div>
            </div>
          </div>
          <hr />
          <Container style={{ marginTop: "5%" }}>
            <Row>
              <Col>
                <img
                 src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/56426946_10157190368303659_7990493943596843008_n.png?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=EDoKkfDpfjYAX8wh9u2&_nc_ht=scontent.ftun3-1.fna&oh=7be5f1fc4babc79a139010aee1c3aeba&oe=5FDC7651"
                 
                  width="50px"
                  height="50px"
                 
                />
              </Col>
              <Col>
                <img
                  src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/85213875_106753697595003_1846910274573959168_n.png?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=H_mrwpOt_z8AX8OvqYj&_nc_ht=scontent.ftun3-1.fna&oh=52c0ddf830ed32af29e6d0cd8d2ced67&oe=5FDB402F"
                
                 
                  width="50px"
                  height="50px"
                />
              </Col>
              <Col>
                <img
                 src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/12074664_925554880848421_2549274974271297255_n.png?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=N5G5QgsOp7AAX_hwXGq&_nc_ht=scontent.ftun3-1.fna&oh=649e436d574411bbc4edd23be30d34aa&oe=5FDD1B32"
                  width="50px"
                  height="50px"
                />
              </Col>
              <Col>
                <img
                  src="data:image/jpeg;base64,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"
                  width="50px"
                  height="50px"
                />
              </Col>
            </Row>
          </Container>
        
        </div>
        <i class="far fa-copyright">All Rights Reserved.</i>
      </footer>
      
    </>
  );
}

export default Footer;
