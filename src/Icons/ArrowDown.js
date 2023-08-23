

const ArrowDown = ({rotateArrow, condition_1, condition_2}) => {
    // console.log(rotateArrow, condition_1, condition_2)
    return (
        <i className = {rotateArrow ? condition_1 : condition_2}></i>
    )
}

export default ArrowDown