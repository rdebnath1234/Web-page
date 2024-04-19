import React, { useRef } from "react";
const Formvalid2 = () => {
  const nameRef = useRef();
  const passRef = useRef();
  const cpassRef = useRef();
  const btnRef = useRef();
  const handleSubmit = () => {
    // alert("form submitted");
    if(nameRef.current.value!==""&&passRef.current.value!==""&&cpassRef.current.value!=="")
    alert("logged in successfully");
    else{
      validname();
      validpass();
    }
  };
  const isactivefrm = () => {
    //when all validation of form are done, isactivebtn called
    if (
      nameRef.current.classList.contains("is-valid") &&
      passRef.current.classList.contains("is-valid") &&
      cpassRef.current.classList.contains("is-valid")
    ) {
      isactivebtn();
    }
  }
  const isinactivebtn = () => {
    btnRef.current.disabled = true;
  };
  const isactivebtn = () => {
    btnRef.current.disabled = false;
  };
  const validname = () => {
    if (nameRef.current.value.length <= 5) {
      let name = document.getElementById("name");
      name.innerHTML = "Name must be 6 characters";
      name.style.color = "red";
      nameRef.current.classList.add("is-invalid");
      isinactivebtn();
    } else {
      nameRef.current.classList.remove("is-invalid");
      nameRef.current.classList.add("is-valid");
      let name = document.getElementById("name");
      name.innerHTML = "";
      isactivefrm();
    }
  };
  const validpass = () => {
    if (passRef.current.value.length <= 5) {
      let pass = document.getElementById("pass");
      pass.innerHTML = "password must be 6 digits";
      pass.style.color = "red";
      passRef.current.classList.add("is-invalid");
      isinactivebtn();
    } else {
      passRef.current.classList.remove("is-invalid");
      passRef.current.classList.add("is-valid");
      let pass = document.getElementById("pass");
      pass.innerHTML = "";
      isactivefrm();
    }
  };
  const validcpass = () => {
    if (cpassRef.current.value !== passRef.current.value) {
      let cpass = document.getElementById("cpass");
      cpass.innerHTML = "password not match";
      cpass.style.color = "red";
      cpassRef.current.classList.add("is-invalid");
      isinactivebtn();
    } else {
      let cpass = document.getElementById("cpass");
      cpass.innerHTML = "";
      cpassRef.current.classList.remove("is-invalid");
      cpassRef.current.classList.add("is-valid");
      isactivefrm();
    }
  };
  return (
    <>
      <div className="container border border-success mt-5 p-5">
        <h1 className="text-center bg-success-subtle">User Login</h1>
        <form>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name=""
                  onKeyUp={validname}
                  ref={nameRef}
                  className="form-control"
                />
                <p id="name"></p>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name=""
                  onKeyUp={validpass}
                  ref={passRef}
                  className="form-control"
                />
                <p id="pass"></p>
              </div>
              <div className="col">
                <label htmlFor="">Confirm Password</label>
                <input
                  type="password"
                  name=""
                  onKeyUp={validcpass}
                  ref={cpassRef}
                  className="form-control"
                />
                <p id="cpass"></p>
              </div>
            </div>
          </div>
          <div className="form-group">
            <button
              className="btn btn-info"
              ref={btnRef}
              onClick={handleSubmit}
              style={{ marginTop: "25px" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Formvalid2;
