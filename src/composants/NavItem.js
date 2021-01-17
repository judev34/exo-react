import React from 'react'

const NavItem = (props) => {

    return (
        <li>    
           <button className={
            props.selected ? "clicked" : "notClicked"}  
            onClick = {() => {props.callback(props.index)}}>
            {props.text}
            </button> 
        </li>
    )
}

export default NavItem;
