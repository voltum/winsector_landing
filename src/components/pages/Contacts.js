import React from 'react'
import Form from '../Form'
import secformimg from '../../img/sec/sec_form_img.png'

function Vacancies() {
    return (
        <>
            <div id="sec_8" className="sec sec_8 container">
                <div className="sec_form">
                    <Form />
                    <div className="form_img_block">
                        <img src={secformimg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vacancies
