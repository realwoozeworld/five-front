/* eslint-disable no-empty-pattern */
/* eslint-disable no-undef */
import React from 'react';
import './authorization.css';

const Authorization = () => {
    return (
      <React.Fragment>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <form
              style={{
                width: "512px",
                height: "735px",
                background: "black",
                padding: "10px",
                position: "absolute",
                borderRadius: "8px",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "700px",
                marginTop: "150px",
              }}
            >
              <img
                className="logo"
                alt=""
                src="/logo.svg"
                style={{ marginLeft: "40px", marginTop: "48px" }}
              />
              <h1
                style={{
                  height: "24px",
                  weight: "188px",
                  color: "white",
                  fontWeight: "700",
                  fontStyle: "normal",
                  fontSize: "30px",
                  marginLeft: "45px",
                  textTransform: "uppercase",
                  fontFamily: "Noto Sans Georgian",
                }}
              >
                რეგისტრაცია
              </h1>
              <h2
                style={{
                  color: "white",
                  width: "320px",
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  marginLeft: "45px",
                  lineHeight: "normal",
                  fontFamily: "Noto Sans Georgian",
                }}
              >
                შეიყვანე პირადი ინფორმაცია და დაიწყე თამაში
              </h2>
              <div>
                <label
                  style={{
                    width: "fixed 400px",
                    margin: "auto",
                    color: "#8A8A8A",
                    height: "80px",
                  }}
                >
                  <img
                    className="user"
                    alt=""
                    src="/user.svg"
                    style={{
                      position: "absolute",
                      alignSelf: "flex-start",
                      marginLeft: "60px",
                      marginTop: "27px",
                    }}
                  />
                </label>
                <input
                  type="username"
                  id="username"
                  placeholder="ექაუნთი"
                  style={{
                    width: "380px",
                    fontWeight: "bold",
                    fontFamily: "Noto Sans Georgian",
                    outlineColor: "white",
                    color: "white",
                    textAlign: "center",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    width: "fixed 400px",
                    margin: "auto",
                    color: "#8A8A8A",
                    height: "80px",
                  }}
                >
                  <img
                    className="sms"
                    alt=""
                    src="/sms.svg"
                    style={{
                      position: "absolute",
                      alignSelf: "flex-start",
                      marginLeft: "60px",
                      marginTop: "27px",
                    }}
                  />
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="ელ.ფოსტა"
                  style={{
                    width: "380px",
                    fontWeight: "bold",
                    fontFamily: "Noto Sans Georgian",
                    outlineColor: "white",
                    color: "white",
                    textAlign: "center",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    width: "fixed 400px",
                    margin: "auto",
                    color: "#8A8A8A",
                    height: "80px",
                  }}
                >
                  <img
                    className="lock"
                    alt=""
                    src="/lock.svg"
                    style={{
                      position: "absolute",
                      alignSelf: "flex-start",
                      marginLeft: "60px",
                      marginTop: "24px",
                    }}
                  />
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="პაროლი"
                  style={{
                    width: "380px",
                    fontWeight: "bold",
                    fontFamily: "Noto Sans Georgian",
                    outlineColor: "white",
                    color: "white",
                    textAlign: "center",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    width: "fixed 400px",
                    margin: "auto",
                    color: "#8A8A8A",
                    height: "80px",
                  }}
                >
                  <img
                    className="lock"
                    alt=""
                    src="/lock.svg"
                    style={{
                      position: "absolute",
                      alignSelf: "flex-start",
                      marginLeft: "60px",
                      marginTop: "25px",
                    }}
                  />
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="გაიმეორე პაროლი"
                  style={{
                    width: "380px",
                    fontWeight: "bold",
                    fontFamily: "Noto Sans Georgian",
                    outlineColor: "white",
                    color: "white",
                    textAlign: "center",
                  }}
                />
              </div>
              <div className="authorization">
                <button
                  style={{
                    height: "80px",
                    width: "430px",
                    padding: "24px",
                    justifyContent: "center",
                    margin: "auto",
                    fontWeight: "510",
                    fontSize: " 16px",
                    fontFamily: "Noto Sans Georgian",
                  }}
                >
                  რეგისტრაცია
                  <img className="image" src="/vuesaxlinearlogin.svg" alt="" />
                </button>
                <p
                  style={{
                    color: "white",
                    width: "360px",
                    height: "22px",
                    justifyContent: "fixed",
                    marginLeft: "70px",
                    fontSize: "16px",
                    position: "absolute",
                    fontFamily: "Noto Sans Georgian",
                    fontWeight: "400",
                  }}
                >
                  თქვენ უკვე ხართ რეგისტრირებული?{' '}
                  <a
                    href="./Login.jsx"
                    style={{
                      color: "#DBFF00",
                      border: "24px",
                      fontSize: "16px",
                      position: "flex",
                      fontFamily: "Noto Sans Georgian",
                    }}
                  >
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  };

export default Authorization;
