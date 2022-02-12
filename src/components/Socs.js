import React from 'react'
import soc_vk from '../img/soc/soc_vk.svg'
import soc_fb from '../img/soc/soc_fb.svg'
import soc_ok from '../img/soc/soc_ok.svg'
import soc_google from '../img/soc/soc_google.svg'
import soc_twitter from '../img/soc/soc_twitter.svg'

function Socs() {
    return (
        <div className="socs">
            <a href="https://vk.com/" target="_blank"><img src={soc_vk} alt="vk" /></a>
            <a href="https://fb.com/" target="_blank"><img src={soc_fb} alt="fb" /></a>
            <a href="https://ok.ru/" target="_blank"><img src={soc_ok} alt="ok" /></a>
            <a href="https://google.com/" target="_blank"><img src={soc_google} alt="google" /></a>
            <a href="https://twitter.com/" target="_blank"><img src={soc_twitter} alt="twitter" /></a>
        </div>
    )
}

export default Socs
