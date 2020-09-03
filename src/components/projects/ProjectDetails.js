import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { deleteProject } from "../../store/actions/projectActions.js";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  const handleDelete = (e) => {
    const { id } = props;
    e.preventDefault();
    props.deleteProject(id);
    props.history.push("/");
    // you can push to dashboard after deleting...
  };
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              {project.title}
              <a class="btn-floating btn-small right waves-light red">
                <i onClick={handleDelete} class="material-icons">
                  delete
                </i>
              </a>
            </span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    id: id,
    project: project,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (id) => dispatch(deleteProject(id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: "projects",
    },
  ])
)(ProjectDetails);
