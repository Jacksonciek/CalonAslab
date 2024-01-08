import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../assets/img/profile.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import { motion } from "framer-motion";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Jackson Lawrence", "Web Developer", "Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const navbarAnimation = {
    hidden: {
      y: -100,
    },
    show: {
      y: 0,
      transition: {
        delay: 1.7,
        duration: 0.5,
      },
    },
  };
  return (
    <section className="banner bg-[#0800E1]" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="text-5xl tagline">Hello !</span>
                <h1 className="text-4xl text-white">{`I'm `} <span className="text-4xl text-white" dataPeriod="1000" data-rotate='["Jackson Lawrence", "Web Developer", "Designer"]'><span className="wrap">{text}</span></span></h1>
                <br /><p className="text-white text-justify" id="biarrapi">I am a person who likes programming learning new things. I like to solve various problems with quality solutions and using logic to solve problems. I also sharpen my programming skills by studying new technology, new programming language, and also new framework for front-end and back-end implementation.</p>
              
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={profile} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
