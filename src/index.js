const React = {
    createElement(tag, attrs, ...children) {
        return (
            {
                tag,
                attrs,
                children
            }
        )
    }
}

const ele = (
    <div className='wrap' title='detail'>
        tangji
        <span>tangji children</span>
    </div>
)

console.log(ele);
