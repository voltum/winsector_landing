import React from 'react'
import affiliates_img from '../../img/sec/affiliates_img.png'

function Vacancies() {
    return (
        <>
            <div id="sec_4" className="sec sec_4 container">
                <div className="sec_content sec_left sec_steps">
                    <div>
                        <h2>Affiliates</h2>
                        <p>Another exciting way of taking part in our journey is by becoming an affiliate. Since its launch, our affiliate program has worked with many loyal partners to promote and strengthen the brand. We offer several affiliate programs, including revenue share or CPA options and multiple revenue streams via app, mobile, and desktop versions.</p>

                        <p>Once connected, affiliates work hand in hand with team members to help find the right program to fit their needs. If you are willing to cooperate or become partners to promote our platforms and create additional income, please feel free to contact us - we would love to hear from you.</p>

                    </div>
                    <div>
                        <img src={affiliates_img} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vacancies
