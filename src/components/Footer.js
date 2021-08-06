import React from 'react'
import './Footer.css'

function Footer() {
    const date = new Date();
    const current_year = date.getFullYear();
    return (
        <footer>
           <p>Copyright &copy; {current_year}</p> 
        </footer>
    )
}

export default Footer
