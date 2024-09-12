import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xldrkbrd"); // Replace "xldrkbrd" with your actual Formspree ID

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  {state.succeeded ? (
                    <p>Thanks for reaching out!</p>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <label htmlFor="firstName">First Name</label>
                          <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <label htmlFor="lastName">Last Name</label>
                          <input
                            id="lastName"
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <label htmlFor="email">Email Address</label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                          />
                          <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <label htmlFor="phone">Phone No.</label>
                          <input
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="Phone No."
                          />
                        </Col>
                        <Col size={12} className="px-1">
                          <label htmlFor="message">Message</label>
                          <textarea
                            id="message"
                            name="message"
                            rows="6"
                            placeholder="Message"
                            required
                          ></textarea>
                          <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                          />
                          <button type="submit" className="submitbutton" disabled={state.submitting}>
                            {state.submitting ? "Sending..." : "Send"}
                          </button>
                        </Col>
                      </Row>
                    </form>
                  )}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
