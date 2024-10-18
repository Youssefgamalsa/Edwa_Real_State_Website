import React from "react";
import img from "../../../../assets/img/image.jpg";
import AuthComponent from "../../../Usable/Component/AuthComponent/AuthComponent";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { USERS_URL } from "../../../../Api/Api";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // token
  const token = localStorage.getItem("token");

  // submit
  const submit = async (data) => {
    try {
      const res = await axios.post(USERS_URL.register, data, {
        headers: {
          Authorization: `${token}`,
        },
      });
      toast.success("Sign Up Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Sign Up Failed");
    }
  };

  const form = () => {
    return (
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center py-4">
        <div className="col-12 col-lg-11 col-xl-10">
          <div className="card-body p-4">
            <div className="mb-4 text-center">
              <h3 className="text-4xl">Sign up</h3>
              <p>
                If you already have an account,{" "}
                <Link
                  className="font-bold text-decoration-none text-danger"
                  to={"/auth/login"}
                >
                  Login here
                </Link>
                !
              </p>
            </div>
            <form onSubmit={handleSubmit(submit)}>
              <div className="row gy-3">
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                      {...register("firstName", { required: "First name is required" })}
                      id="firstName"
                      placeholder="First name"
                    />
                    <label htmlFor="firstName">First name</label>
                    {errors.firstName && (
                      <div className="invalid-feedback" style={{ minHeight: '1.5em' }}>
                        {errors.firstName.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                      {...register("lastName", { required: "Last name is required" })}
                      id="lastName"
                      placeholder="Last name"
                    />
                    <label htmlFor="lastName">Last name</label>
                    {errors.lastName && (
                      <div className="invalid-feedback" style={{ minHeight: '1.5em' }}>
                        {errors.lastName.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                      {...register("phone", { required: "Phone number is required" })}
                      id="phonenumber"
                      placeholder="Phone number"
                    />
                    <label htmlFor="phonenumber">Phone number</label>
                    {errors.phone && (
                      <div className="invalid-feedback" style={{ minHeight: '1.5em' }}>
                        {errors.phone.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                          message: "Invalid email format",
                        },
                      })}
                      id="email"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="email">Email</label>
                    {errors.email && (
                      <div className="invalid-feedback" style={{ minHeight: '1.5em' }}>
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="password"
                      className={`form-control ${errors.password ? "is-invalid" : ""}`}
                      {...register("password", { required: "Password is required" })}
                      id="password"
                      placeholder="Password"
                    />
                    <label htmlFor="password">Password</label>
                    {errors.password && (
                      <div className="invalid-feedback" style={{ minHeight: '1.5em' }}>
                        {errors.password.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      {...register("remember_me")}
                      id="remember_me"
                    />
                    <label className="form-check-label" htmlFor="remember_me">
                      Keep me logged in
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-grid">
                    <button className="btn btn-dark btn-lg" type="submit">
                      Sign Up now
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return <AuthComponent form={form()} img={img} />;
}
