import React from "react";

const Login = (props) => {
  return (
    <>
      <form>
        <div className="form-group">
          <label className="col-form-label">What yo name is?</label>
          <input
            name="username"
            type="text"
            value={props.username}
            onChange={props.oninput}
          />
        </div>
        <div className="form-group">
          <label className="col-form-label">What yo pass foo</label>
          <input
            name="password"
            type="password"
            value={props.password}
            onChange={props.oninput}
          />
        </div>
        <div>
          <input
            type="button"
            className="btn btn-primary"
            value="Submit"
            onClick={props.onclick}
          />
        </div>
      </form>
    </>
  );
};
export default Login;
