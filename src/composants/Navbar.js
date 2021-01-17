import React, { useState } from 'react';
import NavItem from './NavItem';


const Navbar = (props) => {

    // 1er element qui contient une variable et une fonction qu'on appelle set + nomDeVariable
    // Pour modifier la valeur de selectedIndex
    const [selectedIndex, setSelectedIndex] = useState(0);

    props.callback(selectedIndex);

    const contenuNavbarText = [
        'Acceuil',
        'A propos',
        'Contact',
        'React'
    ]

    const contenuNavbar = contenuNavbarText.map(
        (valeur, index) => 
            <NavItem 
            // toutes les props qu'on recupere dans l'enfant
                text = {valeur}
                index = {index}
                selected = {selectedIndex === index}
                callback = {(e) => {setSelectedIndex(e)}}/>  
    )    
    
    return (
        <ul className="Navbar">
            {contenuNavbar}
        </ul>
    )
}

export default Navbar
