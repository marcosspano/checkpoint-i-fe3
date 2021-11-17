import './style.scss';

const Footer = () => {
    return (

        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark">
            <div className="col-md-4 d-flex align-items-center">

            <span className="text-muted">© 2021 Company, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-muted" href="https://github.com/marcosspano" target="blank"><i className="bi-github" role="img" aria-label="GitHub" style={{fontSize: "28px"}} /></a></li>
                <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/marcosspano/" target="blank"><i className="bi-linkedin" role="img" aria-label="Linkedin" style={{fontSize: "28px"}} /></a></li>
                <li className="ms-3"><a className="text-muted" href="mailto:e.marcosspano@gmail.com"><i className="bi-envelope-fill" role="img" aria-label="Mail" style={{fontSize: "28px"}} /></a></li>
            </ul>
        </footer>

    )
}

export default Footer;

