export default {
    createElement(tag, attrs, ...children) {
        return (
            {
                tag,
                attrs,
                children
            }
        )
    },
}