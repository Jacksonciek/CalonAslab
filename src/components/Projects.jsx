
import './projects.css';
import React from "react";
import { useEffect, useRef } from 'react';

export const Projects = () => {
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
    <section className="project bg-white" id="projects">
      <h2 className="text-black">Languages</h2>
      <p className="text-black">All kinds of language that I have learned including everyday language and programming language</p>
      <div className="flex flex-col">

        <div className="skills-area flex flex-col">
          <div className="skill  hiddene">
            <div className="skill-title">Indonesia</div>
            <div className="skill-bar"></div>
            <div className="indo skill-fill">
              <span className="skill-percent">100%</span>
            </div>
          </div>
          <div className="skill hiddene">
            <div className="skill-title">English</div>
            <div className="skill-bar"></div>
            <div className="eng skill-fill">
              <span className="skill-percent">85%</span>
            </div>
          </div>
          <div className="skill hiddene">
            <div className="skill-title">Mandarin</div>
            <div className="skill-bar"></div>
            <div className="man skill-fill">
              <span className="skill-percent">70%</span>
            </div>
          </div>
          <div className="skill hiddene">
            <div className="skill-title">HTML</div>
            <div className="skill-bar"></div>
            <div className="html skill-fill">
              <span className="skill-percent">95%</span>
            </div>
          </div>
        </div>
        <div className="skills-area flex flex-col">

          <div className="skill hiddene">
            <div className="skill-title">CSS</div>
            <div className="skill-bar"></div>
            <div className="css skill-fill">
              <span className="skill-percent">90%</span>
            </div>
          </div>
          <div className="skill hiddene">
            <div className="skill-title">C</div>
            <div className="skill-bar"></div>
            <div className="js skill-fill">
              <span className="skill-percent">70%</span>
            </div>
          </div>
          <div className="skill hiddene">
            <div className="skill-title">SQL</div>
            <div className="skill-bar"></div>
            <div className="sql skill-fill">
              <span className="skill-percent">85%</span>
            </div>
          </div>
          <div className="skill hiddene">
            <div className="skill-title">PHP</div>
            <div className="skill-bar"></div>
            <div className="php skill-fill">
              <span className="skill-percent">30%</span>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
