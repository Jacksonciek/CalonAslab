import React from "react";
import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import expe from "../assets/img/expe.png";
import edu from "../assets/img/edu.png";
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const observerRef = useRef(null);
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    };
    observerRef.current = new IntersectionObserver(observerCallback);
    const hiddenElements = document.querySelectorAll('.hiddene');
    hiddenElements.forEach((el) => observerRef.current.observe(el));
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="bg-[#0800E1] " id="connect">
      <Container>
        <Col className="align-items-center">
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Row size={12} md={6}>
                  <div className="col-md-6 ">
                    <h2 className="mt-10">Experience</h2>
                    <img src={expe} className="hiddene w-100 h-auto" alt="" />
                  </div>
                  <div className="col-md-6 ">
                    <h2 className="mt-10">Education</h2>
                    <img src={edu} className="hiddene w-100 h-auto"  alt="" />
                  </div>
                </Row>
              </div>}
          </TrackVisibility>

        </Col>
      </Container>
    </section>
  )
}
