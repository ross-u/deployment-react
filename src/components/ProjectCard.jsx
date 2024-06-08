/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function ProjectCard ({ title, description, id }) {
  
  return (
    <div className="ProjectCard card">
      <Link to={`/projects/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
    </div>
  );
}

export default ProjectCard;