import React, { useState } from "react";

import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [customerName, setCustomerName] = useState("");
  const [phNo, setPhNo] = useState("");
  const [businessName,setBusinessName] = useState("");
  const [serviceServed, setServiceServed] = useState("");
  const [serviceComplete, setServiceComplete] = useState("");
  const [satisfactionLevel, setSatisfactionLevel] = useState("");
  const [feedbackDesigners_Editors, setFeedbackDesigners_Editors] = useState("");
  const [ratingForCRM, setRatingForCRM] = useState("");
  const [reherts, setReherts] = useState("");
  const postDetail = () =>
    axios
      .post("https://videoaudit-server.onrender.com/api/feedback/add", {
        customerName: customerName,
        phNo: phNo,
        businessName: businessName,
        serviceServed: serviceServed,
        serviceComplete: serviceComplete,
        satisfactionLevel: satisfactionLevel,
        feedbackDesigners_Editors: feedbackDesigners_Editors,
        ratingForCRM: ratingForCRM,
        reherts: reherts,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    const hanldeServed = (e) => {
        setServiceServed(e.target.value)
    }

    const handleComplete = (e) => {
        setServiceComplete(e.target.value)
    }

    const handleSatisfaction = (e) => {
      setSatisfactionLevel(e.target.value);
    };

    const handleCrm = (e) => {
      setRatingForCRM(e.target.value);
    };

  return (
    <Container>
      <Navbar />
      <div>
        <Card
          border="light"
          className="bg-white shadow-sm mb-4"
          style={{ marginTop: "8rem" }}
        >
          <Card.Body>
            <h4
              style={{
                color: "#003163",
                fontWeight: "600",
                fontSize: "20px",
                textAlign: "center",
                textDecoration: "underline",
                marginBottom: "2rem",
              }}
            >
              Feedback
            </h4>
            <Form>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group id="customerName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="phNo">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      value={phNo}
                      onChange={(e) => setPhNo(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group id="businessName">
                    <Form.Label>Business Name </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="serviceServed">
                    <Form.Label>Service Served</Form.Label>
                    <Form.Select
                      defaultValue="0"
                      value={serviceServed}
                      onChange={hanldeServed}
                    >
                      <option>--Select Option --</option>
                      <option value="Business Awareness">
                        {" "}
                        Business Awareness
                      </option>
                      <option value="Lead generation">Lead generation</option>
                      <option value="Reels">Reels</option>
                      <option value="Website">Website</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={4} className="mb-3">
                  <Form.Group id="serviceComplete">
                    <Form.Label>Service Completed</Form.Label>
                    <Form.Select
                      defaultValue="0"
                      value={serviceComplete}
                      onChange={handleComplete}
                    >
                      <option>--Select Option --</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4} className="mb-3">
                  <Form.Group id="satisfactionLevel">
                    <Form.Label>Satisfaction Level</Form.Label>
                    <Form.Select
                      defaultValue="0"
                      value={satisfactionLevel}
                      onChange={handleSatisfaction}
                    >
                      <option>--Select Option --</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4} className="mb-3">
                  <Form.Group id="ratingForCRM">
                    <Form.Label>Feedback Rating for CRM</Form.Label>
                    <Form.Select
                      defaultValue="0"
                      value={ratingForCRM}
                      onChange={handleCrm}
                    >
                      <option>--Select Option --</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group id="feedbackDesigners_Editors">
                    <Form.Label>
                      Any feedback for Desingers/ Editors{" "}
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={feedbackDesigners_Editors}
                      onChange={(e) =>
                        setFeedbackDesigners_Editors(e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="reherts">
                    <Form.Label>Reherts received and explained </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={reherts}
                      onChange={(e) => setReherts(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div
                className="mt-3"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button variant="success" onClick={postDetail}>
                  <Link
                    to="/thanku"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Submit
                  </Link>
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
      {/* Footer */}
    </Container>
  );
};

export default Home;
