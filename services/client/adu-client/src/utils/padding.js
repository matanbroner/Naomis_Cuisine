
const setPadding = (top, right, bottom, left, unit=null) => {
    var u = ''
    if (unit) u = unit
    else u = 'px'
    return {
        paddingTop: `${top}${u}`,
        paddingRight: `${right}${u}`,
        paddingBottom: `${bottom}${u}`,
        paddingLeft: `${left}${u}`
    }
}

export default setPadding