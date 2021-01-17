import React from 'react'
import View1 from './View1'
import View2 from './View2'
import View3 from './View3'
import View4 from './View4'

const WindowContent = (props) => {

    let afficherView; 

    if (props.selectedIndex === 0) {
        afficherView = <View1/>
    } else if (props.selectedIndex === 1) {
        afficherView = <View2/>
    }else if (props.selectedIndex === 2) {
        afficherView = <View3/>
    } else if (props.selectedIndex === 3) {
        afficherView = <View4/>
    }

    

    return (
        <section>
            {afficherView}
        </section>
    )
}

export default WindowContent
