// import React from 'react'
import Button from "../button/button";
import styles from "./form.module.css";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

import ShapeZarbdarImage from "./../../assets/images/home/Group 46.svg";
import { NavLink } from "react-router-dom";

import useRegister from "./../../Hooks/Request/useRegister";
import Loading from "../Loading/loading";
import Popup from "../popup/popup";

interface FormDataType {
  Firstname: string;
  Lastname: string;
  Companyname: string;
  Email: string;
  phoneNumber: string;
  Location: string;
  AccessPrivacy: boolean;
}

const Form = () => {
  // const schema = yup.object({
  //   Firstname: yup.string().required("this field is required"),
  //   Lastname: yup.string().required("this field is required"),
  //   Companyname: yup.string().required("this field is required"),
  //   Email: yup.string().required("this field is required"),
  //   Location: yup.string().required("this field is required"),
  //   Zipcode: yup.string().required("this field is required"),
  //   AccessPrivacy: yup.boolean().required("please accept this field.")
  // });
  const email_regular =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>();

  const {
    handle_register,
    sending,
    result_req,
    showPopup,
    message,
    changeShowPopupStatus,
  } = useRegister();

  const submitForm = async (data: any) => {
    let dataForm = {
      f_name: data.Firstname,
      l_name: data.Lastname,
      company_name: data.Companyname,
      email: data.Email,
      phoneNumber: data.phoneNumber,
      location: data.Location,
    };
    handle_register(dataForm);
  };
  return (
    <>
      <Popup
        showPopup={showPopup}
        result_req={result_req}
        message={message}
        changeShowPopupStatus={changeShowPopupStatus}
      />
      <div className={`${styles.form} shape-box small`} id="register">
        <div className={styles.formTitle}>
          <img src={ShapeZarbdarImage} />
          <h1 className={styles.register}>ثبت نام</h1>
          <img src={ShapeZarbdarImage} />
        </div>
        <form
          className={styles.inputsWrapper}
          onSubmit={handleSubmit(submitForm)}
        >
          <div className={styles.twoColumn}>
            <div className={styles.input}>
              <label className={styles.label}>نام</label>
              <input
                type="text"
                className={styles.borderInput}
                {...register("Firstname", {
                  required: "لطفا نام خود را وارد کنید",
                })}
              />
              <p className={styles.para}>{errors.Firstname?.message}</p>
            </div>
            <div className={styles.input}>
              <label className={styles.label}>نام خانوادگی</label>
              <input
                type="text"
                className={styles.borderInput}
                {...register("Lastname", {
                  required: "لطفا نام  خانوادگی را وارد کنید",
                })}
              />
              <p className={styles.para}>{errors.Lastname?.message}</p>
            </div>
          </div>
          <div className={styles.oneColumn}>
            <div className={styles.input}>
              <label className={styles.label}>نام شرکت</label>
              <input
                type="text"
                className={styles.borderInput}
                {...register("Companyname", {
                  required: "لطفا نام شرکت خود را وارد کنید",
                })}
              />
              <p className={styles.para}>{errors.Companyname?.message}</p>
            </div>
          </div>
          <div className={styles.twoColumn}>
            <div className={styles.input}>
              <label className={styles.label}>ایمیل</label>
              <input
                type="text"
                className={styles.borderInput}
                {...register("Email", {
                  required: "لطفا ایمیل خود را وارد کنید",
                  pattern: {
                    value: email_regular,
                    message: "ایمیل وارد شده اشتباه است",
                  },
                })}
              />
              <p className={styles.para}>{errors.Email?.message}</p>
            </div>
            <div className={styles.input}>
              <label className={styles.label}>شماره تماس</label>
              <input
                type="text"
                className={styles.borderInput}
                {...register("phoneNumber", {
                  required: "لطفا شماره تماس خود را وارد کنید",
                })}
              />
              <p className={styles.para}>{errors.Email?.message}</p>
            </div>
          </div>
          <div className={styles.oneColumn}>
            <div className={styles.input}>
              <label className={styles.label}>ادرس شرکت</label>
              <input
                type="text"
                className={styles.borderInput}
                {...register("Location", {
                  required: "لطفا ادرس شرکت خود را وارد کنید",
                })}
              />
              <p className={styles.para}>{errors.Location?.message}</p>
            </div>
          </div>
          <div className={styles.checkButton}>
            <div className={styles.checkInput}>
              <div className={styles.checkbox_wrapper}>
                <input
                  type="checkbox"
                  className={styles.borderCheckInput}
                  {...register("AccessPrivacy", {
                    validate: (value) =>
                      value === false ? "لطفا قوانین ما را قبول کنید" : undefined,
                  })}
                />
                <div className={styles.checkbox}></div>
                <div className={styles.text}>
                  <p>
                    <NavLink
                      to="/register-rules"
                      className={styles.textBlue}
                    >
                      <span>قوانین ثبت نام ایران بیزنس کاپ </span>
                    </NavLink>
                    را خواندم و با آن موافقم.
                  </p>
                </div>
              </div>
              <p className={styles.para}>{errors.AccessPrivacy?.message}</p>
            </div>
            <Button
              btnColor={"#21B891"}
              type="submit"
              disabled={sending ? true : false}
              icon={false}
            >
              {sending ? (
                <>
                  <p>درحال ارسال ...</p>
                  <Loading />
                </>
              ) : (
                <p>ثبت نام</p>
              )}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
