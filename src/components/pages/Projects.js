import React from 'react'
import sec2img from '../../img/sec/sec6img_raj_nobg.png'
import sec2img_vegas from '../../img/sec/sec2img_vegas.png'
import sec4img from '../../img/sec/sec4img.png'
import sec5img from '../../img/sec/sec5img.png'

function Projects() {
    return (
        <>
            <div id="sec_1" className="sec sec_2 container">
                <div className="sec_content sec_center">
                    <div>
                        <h2>Our projects</h2>
                        <p>We are proud to have a number of diverse, highly successful projects under our belt, with many more in the pipeline. Current projects were designed with key specifications in mind, targeting two of the largest and most exciting online gambling audiences.</p>
                        {/* <div className="quoteblock">
                            <p>
                            RajBet Casino - a new online casino in which any visitor can find a game of chance to their liking. Fun and colorful themed slots, all kinds of poker, bingo - all of these games are available at our new RajBet Casino online casino. 
                            <br/><br/>By clicking on this link https://raj.bet/ you can personally see how professional our developers are in their work.
                            </p>
                        </div> */}
                        <hr/>
                    </div>
                </div>
            </div>
            <div id="sec_2" className="sec sec_5 container">
                <div className="sec_content sec_right sec_steps">
                    <div>
                        <img src={sec2img} alt="" />
                    </div>
                    <div>
                        <h2 className="step">Raj.bet</h2>
                        <p>The Indian gambling market is enormous, with further potential for stunning growth. Indians have a long history of gambling in various forms and are fervent sports fans. To cater to this market, <b><a href="https://raj.bet/">Raj.bet</a></b> was established to give Indian players a complete one-stop gambling platform offering everything from online casino games to sports betting.</p>
                        <p>At <b><a href="https://raj.bet/">Raj.bet</a></b>, the online casino side offers household name slots, top quality table games, and live games – as well as local classics like Andar Bahar. In the sportsbook, major events are covered, focusing on sports Indians love, such as cricket and football.</p>
                    </div>
                </div>
            </div>
            <div id="sec_3" className="sec sec_4 container">
                <div className="sec_content sec_left sec_steps">
                    <div>
                        <h2 className="step">Crypto.vegas</h2>
                        <p>The crypto revolution is in full swing as an investment and for making financial transactions. Cryptocurrencies have many inherent properties that make them ideal for use at online casinos, such as anonymity and safety. 
                        <br/><br/><b><a href="https://crypto.vegas/">Crypto.vegas</a></b> was designed to give the growing crowd of crypto gamblers a safe space to play all of the favourite games, using a wide range of tokens.</p>
                        <p>With a focus on the Australian gambling market, <b><a href="https://crypto.vegas/">Crypto.vegas</a></b> is nevertheless available for players all around the world to come and enjoy. Like all of our platforms, players can find the very best in iGaming at Crypto.vegas no matter what style of game customers prefer.</p>
                    </div>
                    <div>
                        <img src={sec2img_vegas} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
