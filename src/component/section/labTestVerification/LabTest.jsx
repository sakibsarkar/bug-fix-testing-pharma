import "./labtest.css";
import React, { useRef } from "react";
import errIcon from "../../../assets/error.png";
import successIcon from "../../../assets/success.png";
import { useState } from "react";
import { timerVanish } from "../../../Utils/timerVanish";
import { orderNumber } from "../../../db/db";

const LabTest = () => {
  const inputRef = useRef(null)

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false)

  const hanldeType = (e) => {
    const value = e.target.value;
    const keyCode = parseInt(e.keyCode);
    const DB_Data = [...orderNumber];
    if (value === "") {
      setError(false);
      setSuccess(false)
    }

    // enter button
    if (keyCode === 13) {

      if (!value) {
        setError(false)
        setSuccess(false)
        return timerVanish(isEmpty, setIsEmpty)
      }

      if (DB_Data.includes(value)) {
        setSuccess(true)
        setError(false)
      }

      else {
        setError(true)
        setSuccess(false)
      }
    }

  }

  const handleCheck = () => {
    const value = inputRef.current.value || ""
    const DB_Data = [...orderNumber]

    if (!value) {
      setError(false)
      setSuccess(false)
      return timerVanish(isEmpty, setIsEmpty)
    }

    if (DB_Data.includes(value)) {
      setError(false)
      return setSuccess(true)
    }
    setError(true)
    setSuccess(false)

  }


  return (
    <section id="verify-lab-test" className="lab-test">
      <div className="section-title">
        <div className="container">
          <h2 className="title">VERIFY A LAB TEST HERE</h2>
        </div>
      </div>
      <div className="labTest-content-wrapper">
        <div className="container">
          <div className="text-box">
            <p>
              Copy the ORDER NUMBER (seen in the top left part of the lab test)
              in the area below. Then click the “VERIFY LAB TEST” button. A
              verified or rejected message will be shown. The customer name
              shown below should match the name on the report, too. If you
              believe there is an error, you may contact us. For new lab tests,
              allow up to 24 hours after test results have been emailed for it
              to properly verify on the website.
            </p>
          </div>
          <div className="verify-test">
            <input
              name="search-test"
              type="text"
              onKeyUp={hanldeType}
              ref={inputRef}
              placeholder="Copy Order Number Here "
            />
            <button onClick={handleCheck}>{"VERIFY LAB TEST (CLICK ME)"}</button>

            {
              isEmpty ?
                <div className="lab-emty-field-notification">
                  <p>{`Please fill out the field.`}</p>
                </div>
                :
                ""
            }

          </div>

          {
            success ?
              <div className="lab-notification">
                <div className="lab-notify-icon">
                  <img src={successIcon} alt="" />
                </div>
                <p>{`THIS LAB TEST IS 2022 VERIFIED FOR CUSTOMER “AUCTUS PHARMA GROUP”`}</p>
              </div>
              :
              ""
          }

          {
            error ?
              <div className="lab-notification lab-notification-error">
                <div className="lab-notify-icon">
                  <img src={errIcon} alt="" />
                </div>
                <p>{`THE ORDER NUMBER IS REJECTED. THIS DOESN’T EXIST.`}</p>
              </div>
              :
              ""
          }
        </div>
      </div>
    </section>
  );
};

export default LabTest;
