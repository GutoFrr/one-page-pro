import React from 'react'
import Container from './styles'
import bottomBg from '../../public/upload/about-bg-2.png'

const About = () => {
  return (
    <Container id="About Us">
      <div className="about">
        <div className="about-title">
          <h2>\ Our Stories .</h2>
        </div>
        <p className="text-1">
          <span>A wonderful serenity</span> has taken possession of my entire
          soul, like these sweet mornings of spring which I enjoy with my whole
          heart. I am alone, and feel the charm of existence in this spot, which
          was created for and yet I feel that I never was a greater artist than
          now. When, while the lovely valley teems with vapour around me.
        </p>
        <div className="about-list">
          <ul>
            <li>
              <span>I am alone, and feel the charm of</span>
            </li>
            <li>
              <span>as I lie close to the earth, a thousand</span>
            </li>
            <li>
              <span>I should be incapable of drawing</span>
            </li>
          </ul>
        </div>
        <p className="text-2">
          I throw myself down among the tall grass by the trickling stream; and,
          as I lie close to the earth, a thousand unknown plants are noticed by
          me: when I hear the buzz of the little world among the stalks, and
          grow familiar with the that I neglect my talents. I should be
          incapable of drawing a single stroke at the present moment; and yet I
          feel that I never was a greater artist than. and yet I feel that I
          never was a greater artist than now. When, while the lovely valley
          teems with vapour around me.
        </p>
        <a>Visit Website</a>
        <img src={bottomBg} alt="Imagem inferior About" />
      </div>
    </Container>
  )
}

export default About
