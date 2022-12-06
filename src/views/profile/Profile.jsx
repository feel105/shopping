import React, { useEffect, useState } from "react";

const Profile = () => {
  let [data, setProfileData] = useState(null);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("User-info"));
    if (user) {
      setProfileData(user);
    } else {
      localStorage.setItem(null);
    }
  }, []);

  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-5">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src={`${data?.image}`}
                    width={155}
                    height={155}
                    alt={data?.name}
                    className="rounded-circle img-fluid"
                  />
                  <h5 className="my-3">{data?.username}</h5>
                  <p className="text-muted mb-1">{data?.email}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">
                      Order
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary ms-1"
                    >
                      Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fa fa-globe fa-lg text-warning" />
                      <p className="mb-0">lorem ipsum</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fa fa-twitter fa-lg"
                        style={{ color: "#55acee" }}
                      />
                      <p className="mb-0">lorem ipsum</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fa fa-instagram fa-lg"
                        style={{ color: "#ac2bac" }}
                      />
                      <p className="mb-0">lorem ipsum</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fa fa-facebook-f fa-lg"
                        style={{ color: "#3b5998" }}
                      />
                      <p className="mb-0">lorem ipsum</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {data?.firstName} {data?.lastName}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{data?.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Gender</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{data?.gender}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(91) 9879552619</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Lorem, ipsum, IPS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4">
                        <span className="text-primary font-italic me-1">
                          Orders
                        </span>{" "}
                        Product Status
                      </p>
                      <p className="mb-1" style={{ fontSize: ".77rem" }}>
                        Lorem ipsum
                      </p>
                      <div className="progress rounded" style={{ height: 5 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Lorem ipsum
                      </p>
                      <div className="progress rounded" style={{ height: 5 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow={72}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Lorem ipsum
                      </p>
                      <div className="progress rounded" style={{ height: 5 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow={89}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Lorem ipsum
                      </p>
                      <div className="progress rounded" style={{ height: 5 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Lorem ipsum
                      </p>
                      <div
                        className="progress rounded mb-2"
                        style={{ height: 5 }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow={66}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Profile;
