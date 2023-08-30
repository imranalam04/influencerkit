"use client"
import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Linear.css'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="fixed-top bg-gradient-violet-blue " variant="dark" style={{backgroundColor:"black"}}>
      <Container>
        <Nav.Link href="/">
          <Navbar.Brand className="">Influencerkits</Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
          <div className="my-auto">
          <Nav.Link href="/blog">
            <button className="nav-link active btn  text-white">
              Blog
            </button>
          </Nav.Link>
        </div>
            <div className="my-auto">
              <Nav.Link href="/login" >
                <button className="nav-link active btn  text-white" >
                  Login
                </button>
              </Nav.Link>
            </div>
            <div className="my-auto">
              <Nav.Link href="/signup">
                <button className="nav-link active text-decoration-none btn btn-sm btn-primary bg-gradient-violet-purple text-white">
                  Start for free
                </button>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
