import React, { useState } from "react";

const ContactForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputFieldHandller = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo.name && userInfo.email && userInfo.phone && userInfo.message) {
      alert("form submission successfull");
      setUserInfo({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      alert("please give us your requried information");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-10 mx-auto col-md-8">
            <div className="card bg-light shadow text-dark p-3">
              <div className="card-body">
                <h2 className="text-capitalize fw-bold">get in touch</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-12 col-lg-4">
                      <label
                        htmlFor="name"
                        className="form-label text-capitalize"
                      >
                        name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={userInfo.name}
                        onChange={inputFieldHandller}
                        className="form-control"
                        autoComplete="off"
                      />
                    </div>
                    <div className="col-md-12 col-lg-4">
                      <label
                        htmlFor="email"
                        className="form-label text-capitalize"
                      >
                        email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={userInfo.email}
                        onChange={inputFieldHandller}
                        className="form-control"
                        autoComplete="off"
                      />
                    </div>
                    <div className="col-md-12 col-lg-4">
                      <label
                        htmlFor="phone"
                        className="form-label text-capitalize"
                      >
                        phone
                      </label>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        value={userInfo.phone}
                        onChange={inputFieldHandller}
                        className="form-control"
                        autoComplete="off"
                      />
                    </div>
                    <div className="col-12">
                      <label
                        htmlFor="message"
                        className="form-label text-capitalize"
                      >
                        message
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        value={userInfo.message}
                        onChange={inputFieldHandller}
                      ></textarea>
                    </div>
                  </div>
                  <div className="d-grid d-sm-block">
                    <input
                      className="btn btn-info btn-lg  mt-3"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
