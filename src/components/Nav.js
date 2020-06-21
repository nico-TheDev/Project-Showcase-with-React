import React from 'react'


export default class Nav extends React.Component {
    moveThumb = {
        transform: this.props.isDark ? 'translateX(0)' : 'translateX(2rem)'
    }

  
    render(){
        const moveThumb = {
            transform: this.props.isDark ? 'translateX(0)' : 'translateX(2rem)'
        }

        return (
            <nav className="nav">
            <img src="img/logo-light.png" alt="" className="nav__logo"/>
    
            <ul className="nav__list">
                <li className="nav__item"><a target='_blank' href="#projects" className="nav__link">Projects</a></li>
                <li className="nav__item"><a target='_blank' href="#about" className="nav__link">About</a></li>
                <button className="themeBtn" onClick={this.props.changeTheme} >
                    <span className="themeBtn__switch" style={moveThumb}></span>
                </button>
            </ul>
        </nav>
        );
    }
}