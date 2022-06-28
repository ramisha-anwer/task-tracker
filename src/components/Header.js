import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


function Header({title, onBtnClick, showAdd}) {
    const onClick= () => {
        console.log("clicked")
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd? 'black' : 'steelblue'} text= {showAdd? "Close" : "Add Task"} onClick={onBtnClick}/>
        </header>
    )
}

Header.defaultProps={
    title: "Task Tracker 🚀"
}
Header.propTypes = {
    title:PropTypes.string
}

export default Header
