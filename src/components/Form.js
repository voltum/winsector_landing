import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import spinner from '../img/loading_spinner.svg'

function Form() {
    
    const formSubmit = (e, formObj) => {
        e.preventDefault();

        let formElement = document.getElementById("form_contact");
        let input_name_value = formElement.elements.input_name.value;
        let input_email_value = formElement.elements.input_email.value;
        let input_question_value = formElement.elements.input_question.value;

        var formData = new FormData();
        formData.append("input_name", input_name_value);
        formData.append("input_email", input_email_value);
        formData.append("input_question", input_question_value);

        console.log(formData);

        var request;
        request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            document.querySelector('.popup_loading_content').style.display = 'none';
            if (request.readyState === 4 && request.status === 200){
                document.querySelector('.popup_success_content').style.display = 'block';
                document.querySelector('.popup_error_content').style.display = 'none';
            } 
            else {
                document.querySelector('.popup_error_content').style.display = 'block';
                document.querySelector('.popup_success_content').style.display = 'none';
            }
        }
        request.open("POST", "/handler.php", true);
        request.send(formData);
        openPopup();
    }

    const openPopup = () => {
        document.querySelector('.modal-overlay').classList.add('active');
        document.querySelector('.modal').classList.add('active');
        document.body.style.overflowY = 'hidden';

        document.querySelector('.popup_loading_content').style.display = 'block';
        document.querySelector('.popup_success_content').style.display = 'none';
        document.querySelector('.popup_error_content').style.display = 'none';
    }
    const closePopup = () => {
        document.querySelector('.modal-overlay').classList.remove('active');
        document.querySelector('.modal').classList.remove('active');
        document.body.style.overflowY = 'unset';
    }
    
    useEffect(() => {
        document.querySelector('.close-modal').onclick = function(){
        closePopup();
        };
    }, []);

    return (
        <>
        <div className="modal-overlay">
            <div className="modal">
                <a className="close-modal">
                    <svg viewBox="0 0 20 20">
                    <path fill="#000" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                    </svg>
                </a>
        
                <div className="modal-content">
                    <h2>Request status</h2>
                    <div className="popup_loading_content">
                        {/* <a className="close-modal-btn">отмена</a> */}
                        <div className="popup_loader" style={{textAlign:'center'}}>
                            <img className="popup_spinner" src={spinner} />
                        </div>
                        <p>
                            Your request is on the way...
                        </p>
                    </div>
                    <div className="popup_success_content" style={{display:'none'}}>
                        {/* <a className="close-modal-btn">отмена</a> */}
                        <div className="popup_loader" style={{textAlign:'center'}}>
                            <FontAwesomeIcon className="popup_tick" style={{margin: 'auto', color:'#F13F95'}} icon={faCheckCircle} />
                        </div>
                        <p>
                            Your request is successfully received!
                        </p>
                    </div>
                    <div className="popup_error_content" style={{display:'none'}}>
                        {/* <a className="close-modal-btn">отмена</a> */}
                        <div className="popup_loader" style={{textAlign:'center'}}>
                            <FontAwesomeIcon className="popup_tick" style={{margin: 'auto'}} icon={faExclamationCircle} />
                        </div>
                        <p>
                            Error!
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <div>
            <h2>Still have questions?</h2>
            <h3>Contact us and we will help you to understand all the nuances</h3>
            <form onSubmit={(e) => formSubmit(e)} id="form_contact">
                <input type="text" placeholder="Your name" name="input_name" className="input_name" required/>
                <input type="email" placeholder="Your email" name="input_email" className="input_email" required/>
                <textarea rows="10" placeholder="Your question" name="input_question" required/>
                <button type="submit" className="btn head_btn">Ask a question</button>
            </form>
        </div>
        </>
    )
}

export default Form
