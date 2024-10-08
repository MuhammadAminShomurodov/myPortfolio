import React from 'react';
import { Col } from 'react-bootstrap';
import './ProjectCard.css'; // Import your CSS file here

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="proj-imgbx"
      >
        <div className="hello">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
