import Button from "../button/button";
import styles from "./form.module.css";
import { useForm } from "react-hook-form";

import ShapeZarbdarImage from "./../../assets/images/home/Group 46.svg";
import { NavLink } from "react-router-dom";

import useRegister from "./../../Hooks/Request/useRegister";
import Loading from "../Loading/loading";
import Popup from "../popup/popup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UploadModal } from "../modal/upload-modal/uploadModal";
import { SuccessModalUpload } from "../modal/success-modal-upload/successModalUpload";

interface FormDataType {
  Firstname: string;
  Lastname: string;
  Companyname: string;
  Email: string;
  mobile: string;
  address: string;
  AccessPrivacy: boolean;
}

const Form: React.FC = () => {
  const email_regular =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>();

  const [statusModal, setStatusModal] = useState<boolean>(false);

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
      mobile: data.mobile,
      address: data.address,
    };
    handle_register(dataForm);
  };

  const showModal = () => {
    setStatusModal(true)
  }
  const closeModal = () => {
    setStatusModal(false)
  }

  return (
    <>
      <Popup
        showPopup={showPopup}
        result_req={result_req}
        message={message}
        changeShowPopupStatus={changeShowPopupStatus}
      />
      <UploadModal statusModal={statusModal} closeModal={closeModal} />
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
                {...register("mobile", {
                  required: "لطفا شماره تماس خود را وارد کنید",
                })}
              />
              <p className={styles.para}>{errors.mobile?.message}</p>
            </div>
          </div>
          <div className={styles.oneColumn}>
            <div className={styles.input}>
              <label className={styles.label}>ادرس شرکت</label>
              <input
                type="text"
                className={styles.borderInput}
                {...register("address", {
                  required: "لطفا ادرس شرکت خود را وارد کنید",
                })}
              />
              <p className={styles.para}>{errors.address?.message}</p>
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
                      value === false
                        ? "لطفا قوانین ما را قبول کنید"
                        : undefined,
                  })}
                />
                <div className={styles.checkbox}></div>
                <div className={styles.text}>
                  <p>
                    <Link to="/register-rules" className={styles.textBlue}>
                      <span>قوانین ثبت نام ایران بیزنس کاپ </span>
                    </Link>
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

        {/* upload recived */}
        <div className={styles.uploadRecived}>
          <div className={styles.textWrapper}>
            <div className={styles.title}>
              <p>بارگذاری رسید واریزی</p>
            </div>
            <div className={styles.explian}>
              <p>
                روی “دکمه بارگزاری رسید” را کلید کرده و همراه با وارد نمودن نام
                شرکت خود رسید خود را بارگذاری نمایید.
              </p>
            </div>
          </div>
          <button className={styles.button} onClick={() => showModal()}>
            <p>بارگذاری رسید</p>
          </button>
        </div>
      </div>
    </>
  );
};
export default Form;
