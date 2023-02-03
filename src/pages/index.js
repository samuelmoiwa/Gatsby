import React from 'react'
import NavBar from '../components/navBar'
import { StaticImage } from 'gatsby-plugin-image'
import "../css/App.css"
import "../css/Index.css"

const Index = () => {

  return (
    <>
      <NavBar />
      <body className="main_container">
        <div className='header_div'>
          <div className='header_image'>
          <StaticImage src="../images/header_image.png" alt="mass" className="img_header" />
          </div>
          <h2 className='header_text'> This is a place for all space lovers where everyone
            will find a hundred things for themselves
          </h2>
          <button className='start_button'>Start Now</button>
        </div>

        <div className='our_terms_div'>
          <div className='rewards_div'>
            <div className='reward_1'>
              <div className='reward_text'>
                <h3 className='reward_text_header'>80</h3>
                <h3>Satisfied clients</h3>
              </div>
            </div>
            <div className='reward_2'>
            <div className='reward_text'>
                <h3 className='reward_text_header'>200</h3>
                <h3>Posts completed</h3>
              </div>
            </div>
            <div className='reward_3'>
            <div className='reward_text'>
                <h3 className='reward_text_header'>90</h3>
                <h3>Reviews given</h3>
              </div>
            </div>
          </div>
          <div className='our_team_main_div'>
            <div className='our_team_left_div '>
              <h2 className='our_team_header'>Our Team</h2>
              <p className='our_team_text'>
                Our team is a group of people who are passionate about space and
                everything related to it. We are a group of people who are
                passionate about space and everything related to it. We are a
                group of people who are passionate about space and everything
                related to it. We are a group of people who are passionate about
                space and everything related to it.
              </p>
              <div className='our_team_right_image_div'>
              <StaticImage src="../images/our_team_image.png" alt="" className="img-our_team" />

              </div>

            </div>
            <div className='our_team_right_div '>
            <StaticImage src="../images/mass.png" alt="" className="img-mass" />
            </div>
          </div>
        </div>

        <div className='work_example_main_div'>
          <div className='work_example_left_div'>
            <div className='work_example_left_text_div'>
              <h2 className='work_example_header'>My Creative Works Latest
                <span className='work_example_header_color'> Projects</span>
              </h2>
              <p className='work_example_text'>
              I have selected and mentioned here some of my latest
              projects to share with you
              </p>
              <button className='work_example_button'>Show More</button>
            </div>

          </div>
          <div className='work_example_right_div'>
            <div className='work_example_right_div_left'>
              <StaticImage src="../images/space_img_1.png" alt="" className="img-work_example_right_1" />
              <StaticImage src="../images/space_img_2.png" alt="" className="img-work_example_right_2" />
            </div>
            <div className='work_example_right_div_right'>
              <StaticImage src="../images/space_img_3.png" alt="" className="img-work_example_right_3" />
              <StaticImage src="../images/space_img_4.png" alt="" className="img-work_example_right_4" />
            </div>

          </div>

        </div>



      </body>
    </>
  )
}

export default Index;
