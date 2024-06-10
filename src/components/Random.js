import React from 'react'

import { useState } from "react";


function Random()
{

var[number, setrandom] = useState(0)

function ranpic()
{

setrandom(Math.floor(Math.random()*100))
}

return(
    <div className='Rstyle'>
        <h1>{number}</h1>

        <button onClick={ranpic}>RandomNumber</button>
    </div>
)

}

export default Random