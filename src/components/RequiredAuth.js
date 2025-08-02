/** @format */

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const RequiredAuth = ({ user, children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/", {
        replace: true,
      },[user]);
    }
  });

  return children;
};
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
export default connect(mapStateToProps)(RequiredAuth);
