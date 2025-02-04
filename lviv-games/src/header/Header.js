import React, { useEffect, useState }  from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'

export function Header() { 
  const [translations, setTranslations] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/translations")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch translations');
        }
        return response.json();
      })
      .then((data) => setTranslations(data))
      .catch((error) => console.error('Error fetching translations:', error));
  }, []);

  if (!translations) {
    return <div>Loading...</div>; 
  }
    return (
        <header>
           <Navbar collapseOnSelect expand="lg" className="header-shadow">
      <Container>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_6978_1123)">
              <path d="M36.7542 2.52L39.48 5.2458V36.7584L36.7542 39.4842H5.2458L2.52 36.7584V5.2458L5.2458 2.52H36.7584M37.8042 0H4.2L0 4.2V37.8C1.6422 39.4422 2.5578 40.3578 4.2 42H37.8L42 37.8V4.2C40.3578 2.5578 39.4422 1.6422 37.8 0H37.8042Z" fill="#A6A6A6"/>
              <path d="M17.3503 28.2702L13.0327 23.9484L26.5483 9.99181L32.5669 8.73181L31.3069 14.7504L17.3503 28.2702Z" fill="#A6A6A6"/>
              <path d="M16.8419 30.4794L10.8191 24.4608L12.8771 21.9618L19.3367 28.4256L16.8419 30.4794Z" fill="#A6A6A6"/>
              <path d="M10.9284 32.1384L9.16016 30.3744L15.4098 23.688L17.6148 25.893L10.9284 32.1384Z" fill="#A6A6A6"/>
              <path d="M11.4849 31.4188L9.83965 29.7735C9.61822 29.5521 9.25922 29.5521 9.03779 29.7735L8.15871 30.6526C7.93729 30.874 7.93729 31.233 8.15872 31.4544L9.80401 33.0997C10.0254 33.3211 10.3844 33.3211 10.6059 33.0997L11.4849 32.2206C11.7064 31.9992 11.7064 31.6402 11.4849 31.4188Z" fill="#A6A6A6"/>
              <path d="M24.6497 28.2702L28.9673 23.9484L15.4517 9.99181L9.43311 8.73181L10.6931 14.7504L24.6497 28.2702Z" fill="#A6A6A6"/>
              <path d="M25.1579 30.4794L31.1807 24.4608L29.1227 21.9618L22.6631 28.4256L25.1579 30.4794Z" fill="#A6A6A6"/>
              <path d="M31.0717 32.1384L32.8399 30.3744L26.5903 23.688L24.3853 25.893L31.0717 32.1384Z" fill="#A6A6A6"/>
              <path d="M32.2001 33.1008L33.8454 31.4555C34.0668 31.2341 34.0668 30.8751 33.8454 30.6536L32.9663 29.7746C32.7449 29.5531 32.3859 29.5531 32.1645 29.7746L30.5192 31.4199C30.2977 31.6413 30.2977 32.0003 30.5192 32.2217L31.3983 33.1008C31.6197 33.3222 31.9787 33.3222 32.2001 33.1008Z" fill="#A6A6A6"/>
              </g>
              <defs>
              <clipPath id="clip0_6978_1123">
              <rect width="42" height="42" fill="white"/>
              </clipPath>
              </defs>
            </svg>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex nav-links">
            <Nav.Link href="" className="grey" id="active-page">Ігри</Nav.Link>
            <Nav.Link href="" className="grey">Новачкам</Nav.Link>
            <Nav.Link href="" className="grey">Відгуки</Nav.Link>
            <Nav.Link href="" className="grey">Акції</Nav.Link>
            <Nav.Link href="" className="grey">Контакти</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
    );
}