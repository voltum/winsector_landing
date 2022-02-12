import React from 'react'
import careers_img from '../../img/sec/careers_img.png'

function Vacancies() {
    return (
        <>
            <div id="sec_3" className="sec sec_3 container">
                <div className="sec_content sec_right sec_steps">
                    <div>
                        <img src={careers_img} alt="" />
                    </div>
                    <div>
                        <h2>Careers</h2>
                        {/* <h3>Case of a new online casino</h3> */}
                        <p>As a fast-growing company, we are always on the lookout for new additions to the team. If, like us, you are passionate about online gambling and would like to help build the best casinos in the world, keep an eye on our vacancies. 
                        <br/><br/>These are added when needed, but please feel free to send us your resume – we are always interested to hear from talented, ambitious people.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vacancies
