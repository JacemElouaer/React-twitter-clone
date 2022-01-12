import React from 'react'
import './SidebarOption.css'; 


// smae think for many items 
// stock the repeated item apart  

//ES6  in place of writing props you just write element in  the props 
//  text , Icon  =  props ==> basic thing
function SidebarOption({text,Icon}) { 
    return (
        <div className="sidebarOption">
            <Icon />
            <h2>{text}</h2> 
           
        </div>
    )
}

export default SidebarOption
