import React from './react'
import ReactDom from './react-dom' 

const ele = (
    <div className='wrap' title='detail'>
        <div>hahah</div>
        tangji
        <br />
        <span>tangji children</span>
    </div>
)

ReactDom.render(ele, document.getElementById('root'))
