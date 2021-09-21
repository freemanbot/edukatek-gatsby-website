import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>Hi, I'm <strong>Edukatek</strong>, IT e-learning<br />
                    platform.</h1>
                    <p>Information Technology and cybersecurity specialized education platform.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
