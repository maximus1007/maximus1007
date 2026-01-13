import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'React Native',
    'Node.js, Express.js',
    'PHP, Laravel',
    'DevOps, AWS, Firebase',
    'Web3, Ehters',
    'React, Next.js',
    'Vue, Vuex, Nuxt.js',
    'GraphQL, Apollo',
    'MySQL, MongoDB',
    'Git, Docker',
    'Smart Contract',
    'Machine Learning',
    'Deep Learning',
    'Python',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I believe that maintaining consistent standards in a codebase is essential to building
              reliable, scalable software. Just as a railway must follow a precise route to function
              correctly, a project depends on well-defined rules and structure to remain stable and
              maintainable. I am a disciplined and detail-oriented web developer with over six years
              of professional experience, committed to writing clean, well-structured, and
              maintainable code. I place a strong emphasis on best practices and code quality, and I
              take pride in improving and sustaining high standards across projects. Known
              professionally, I am a web developer with a deep passion for
              engineering and problem-solving. Coding is more than a skill to me—it is a core part
              of how I create value and build impactful digital experiences.
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default About;
