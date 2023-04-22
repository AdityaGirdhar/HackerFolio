import React, { useState } from 'react'
import windowButtons from '../Assets/buttons.svg'
import toggle from '../Assets/toggle.svg'

function Prompt() {
    return (
        <>
           <span className="bold"><span className="green">guest</span>@<span className="blue">grdr.me</span>:$ ~ </span>
           <input type="text" className='input-prompt' autoFocus/>
        </>
    );
}

export default function Terminal() {
  const dateTime = useState(Date(Date.now()).toString())
  return (
    <>
        <div className='h-screen flex w-full flex-wrap pt-4 pb-8 content-center items-center justify-center'>
            <div className='term-window'>
                <div className="top-bar">
                    <div className="left-right">
                        <img src={windowButtons} alt="window buttons" className='window-buttons'/>
                        <img src={toggle} alt="toggle-key" />
                    </div>
                    <div className='title-text'>girdhar@Adityas-Macbook-Pro:~</div>
                </div>

                <div className="terminal-body">
                    <div className="greeting">
                    Hello, world. This is my website. <br />
                    Last login: {dateTime} on console <br /> <br />
                    Type <strong>`help`</strong> for a full list of supported commands. <br />
                    This is an open source project. Type <strong>`source`</strong> to view my GitHub repository. <br /> <br />
                    {<Prompt />}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
