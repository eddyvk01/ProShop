import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer>
        <Container >
            <Row>
            <section >
              {/* <!-- Grid row--> */}
              <div className="row text-center d-flex justify-content-center pt-5">
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to ='/'  className="text-white">About Us</Link>
                  </h6>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to ='/'  className="text-white">Products</Link>
                  </h6>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to ='/'  className="text-white">Help</Link>
                  </h6>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <Link to ='/'  className="text-white">Contact</Link>
                  </h6>
                </div>
                {/* <!-- Grid column --> */}

                
              </div>
              {/* <!-- Grid row--> */}
            </section>
            <hr className="my-4" />
            {/* <!-- Section: Text --> */}
            <section className="mb-2">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p>
                   A Pro-shop website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.
                  </p>
                </div>
              </div>
             </section>
            {/* <!-- Grid container --> */}
            <div className="text-center">
              {/* <!-- Section: Social media --> */}
              <section className="mb-4">
                {/* <!-- Facebook --> */}
                <a className="btn btn-dark btn-floating m-1" href="https://www.facebook.com/" role="button"
                  ><i className="fab fa-facebook-f"></i
                ></a>

                {/* <!-- Twitter --> */}
                <a className="btn btn-dark btn-floating m-1" href="https://twitter.com/" role="button"
                  ><i className="fab fa-twitter"></i
                ></a>

                {/* <!-- Google --> */}
                <a className="btn btn-dark btn-floating m-1" href="https://www.google.co.in/" role="button"
                  ><i className="fab fa-google"></i
                ></a>

                {/* <!-- Github --> */}
                <a className="btn btn-dark btn-floating m-1" href="https://github.com/eddyvk01" role="button"
                  ><i className="fab fa-github"></i
                ></a>

                {/* <!-- Linkedin --> */}
                <a className="btn btn-dark btn-floating m-1" href="https://www.linkedin.com/in/vineet-kumar-998869230" role="button"
                  ><i className="fab fa-linkedin-in"></i
                ></a>

   
              </section>
              {/* <!-- Section: Social media --> */}
            </div>
            {/* <!-- Grid container --> */}
            <hr class="my-2" />
            {/* <!-- Copyright --> */}
            <div className="text-center p-3" >
                Copyright &copy; ProShop
            </div>
            {/* <!-- Copyright --> */}
            {/* <Col className= "text-center py-3 " ></Col> */}
            </Row>
        </Container>
    </footer>  
  )
}
export default Footer

