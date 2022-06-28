import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


function Header({title}) {
    const onClick= () => {
        console.log("clicked")
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color="steelblue" text= "Add Task" onClick={onClick}/>
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
