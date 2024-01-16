import Button from "../button/button";
import classes from "./form.module.css";
import { useForm } from "react-hook-form";

import ShapeZarbdarImage from "./../../assets/images/home/Group 46.svg";

import useRegister from "./../../Hooks/Request/useRegister";
import Loading from "../Loading/loading";
import Popup from "../popup/popup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UploadModal } from "../modal/upload-modal/uploadModal";
import { SuccessModalUpload } from "../modal/success-modal-upload/successModalUpload";
import { PlusIcon } from "../svgs/svgs";

interface FormDataType {
  Firstname: string;
  Lastname: string;
  Companyname: string;
  Email: string;
  mobile: string;
  address: string;
  AccessPrivacy: boolean;
  file?: File | null;
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
  const [modalSuccessStatus, setModalSuccessStatus] = useState<boolean>(false);
  const [uplaodImage, setUploadImage] = useState<any | null>(null);

  console.log("====================================");
  console.log(uplaodImage);
  console.log("====================================");

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
      file: data.file,
    };
    handle_register(dataForm);
  };

  const showModal = () => {
    setStatusModal(true);
  };
  const closeModal = () => {
    setStatusModal(false);
    setModalSuccessStatus(false);
  };

  return (
    <>
      <Popup
        showPopup={showPopup}
        result_req={result_req}
        message={message}
        changeShowPopupStatus={changeShowPopupStatus}
      />
      <UploadModal statusModal={statusModal} closeModal={closeModal} />
      <SuccessModalUpload
        closeModal={closeModal}
        closeModalSuccess={close}
        modalSuccessStatus={modalSuccessStatus}
      />
      <div className={`${classes.form} shape-box small`} id="register">
        <div className={classes.formTitle}>
          <img src={ShapeZarbdarImage} />
          <h1 className={classes.register}>ثبت نام</h1>
          <img src={ShapeZarbdarImage} />
        </div>
        <form
          className={classes.inputsWrapper}
          onSubmit={handleSubmit(submitForm)}
        >
          <div className={classes.twoColumn}>
            <div className={classes.input}>
              <label className={classes.label}>نام</label>
              <input
                type="text"
                className={classes.borderInput}
                {...register("Firstname", {
                  required: "لطفا نام خود را وارد کنید",
                })}
              />
              <p className={classes.para}>{errors.Firstname?.message}</p>
            </div>
            <div className={classes.input}>
              <label className={classes.label}>نام خانوادگی</label>
              <input
                type="text"
                className={classes.borderInput}
                {...register("Lastname", {
                  required: "لطفا نام  خانوادگی را وارد کنید",
                })}
              />
              <p className={classes.para}>{errors.Lastname?.message}</p>
            </div>
          </div>
          <div className={classes.oneColumn}>
            <div className={classes.input}>
              <label className={classes.label}>نام شرکت</label>
              <input
                type="text"
                className={classes.borderInput}
                {...register("Companyname", {
                  required: "لطفا نام شرکت خود را وارد کنید",
                })}
              />
              <p className={classes.para}>{errors.Companyname?.message}</p>
            </div>
          </div>
          <div className={classes.twoColumn}>
            <div className={classes.input}>
              <label className={classes.label}>ایمیل</label>
              <input
                type="text"
                className={classes.borderInput}
                {...register("Email", {
                  required: "لطفا ایمیل خود را وارد کنید",
                  pattern: {
                    value: email_regular,
                    message: "ایمیل وارد شده اشتباه است",
                  },
                })}
              />
              <p className={classes.para}>{errors.Email?.message}</p>
            </div>
            <div className={classes.input}>
              <label className={classes.label}>شماره تماس</label>
              <input
                type="text"
                className={classes.borderInput}
                {...register("mobile", {
                  required: "لطفا شماره تماس خود را وارد کنید",
                })}
              />
              <p className={classes.para}>{errors.mobile?.message}</p>
            </div>
          </div>
          <div className={classes.oneColumn}>
            <div className={classes.input}>
              <label className={classes.label}>ادرس شرکت</label>
              <input
                type="text"
                className={classes.borderInput}
                {...register("address", {
                  required: "لطفا ادرس شرکت خود را وارد کنید",
                })}
              />
              <p className={classes.para}>{errors.address?.message}</p>
            </div>
          </div>
          <div className={classes.uploadingSection}>
            <div className={classes.upperPart}>
              <p>
                تصویر رسید واریزی هزینه ثبت نام در تورنمنت ایران بیزینس کاپ را
                بارگذاری کنید. (کمتر از 5mb)
              </p>
              <div className={classes.upload}>
                <input
                  {...register("file")}
                  type="file"
                  onChange={(e: any) => {
                    setUploadImage(e.target.files[0]);
                  }}
                  accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                />
                {uplaodImage && (
                  <div className={classes.image}>
                    <img src={URL.createObjectURL(uplaodImage)} alt="" />
                  </div>
                )}
                {uplaodImage ? (
                  <div
                    className={classes.changeImage}
                    onClick={() => setUploadImage(null)}
                  >
                    <PlusIcon />
                  </div>
                ) : (
                  <>
                    <div className={classes.icon}>
                      <PlusIcon />
                    </div>
                    <div className={classes.text}>
                      <p>بارگذاری</p>
                    </div>
                  </>
                )}
              </div>
            </div>
            <p>
              * در صورتی که هزینه‌ی ثبت نام را در هنگام تکمیل فرم پرداخت
              ننمودید، با کلیک روی دکمه “ثبت نام” ثبت نام اولیه خود را انجام
              داده و در زمانی دیگر برای تکمیل فرایند، رسید خود را در بخش
              “بارگذاری رسید واریزی” (بخش زیرین ) بارگذاری کنید.
            </p>
          </div>
          <div className={classes.checkButton}>
            <div className={classes.checkInput}>
              <div className={classes.checkbox_wrapper}>
                <input
                  type="checkbox"
                  className={classes.borderCheckInput}
                  {...register("AccessPrivacy", {
                    validate: (value) =>
                      value === false
                        ? "لطفا قوانین ما را قبول کنید"
                        : undefined,
                  })}
                />
                <div className={classes.checkbox}></div>
                <div className={classes.text}>
                  <p>
                    <Link to="/register-rules" className={classes.textBlue}>
                      <span>قوانین ثبت نام ایران بیزنس کاپ </span>
                    </Link>
                    را خواندم و با آن موافقم.
                  </p>
                </div>
              </div>
              <p className={classes.para}>{errors.AccessPrivacy?.message}</p>
            </div>
            <Button
              btnColor={"#21B891"}
              type="submit"
              disabled={sending ? true : false}
              icon={false}
            >
              {sending ? (
                <>
                  <p>درحال ارسال</p>
                  <Loading />
                </>
              ) : (
                <p>ثبت نام</p>
              )}
            </Button>
          </div>
        </form>

        {/* upload recived */}
        <form className={classes.uploadRecived}>
          <div className={classes.textWrapper}>
            <div className={classes.title}>
              <p>بارگذاری رسید واریزی</p>
            </div>
            <div className={classes.explian}>
              <p>
                روی “دکمه بارگزاری رسید” را کلید کرده و همراه با وارد نمودن نام
                شرکت خود رسید خود را بارگذاری نمایید.
              </p>
            </div>
          </div>
          <button
            className={classes.button}
            onClick={(e) => {
              e.preventDefault();
              showModal();
            }}
          >
            <p>بارگذاری رسید</p>
          </button>
        </form>
      </div>
    </>
  );
};
export default Form;
