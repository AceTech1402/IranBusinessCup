import { useEffect, useState } from "react";
import { PlusIcon } from "../../svgs/svgs";
import classes from "./uploadModal.module.css";
import { SuccessMessageRegister } from "../success-message-register/successMessageRegister";
import { useForm } from "react-hook-form";
import useUploadFile from "../../../Hooks/Request/useUploadFile";
import Loading from "../../Loading/loading";

interface PropsUploadMoadDataType {
  statusModal: boolean;
  closeModal: () => void;
}

interface FormDataType {
  company_name: string;
  file: File;
}

export const UploadModal: React.FC<PropsUploadMoadDataType> = ({
  statusModal,
  closeModal,
}) => {
  const [modalSuccessStatus, setModalSuccessStatus] = useState<boolean>(false);
  const [uplaodImage, setUploadImage] = useState<any | null>(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormDataType>();

  const closeModalSuccess = () => {
    setModalSuccessStatus(false);
  };

  const { handle_register, sending, showPopup } = useUploadFile();

  const submitFormUpload = async (data: FormDataType) => {
    await handle_register({
      company_name: data.company_name,
      file: uplaodImage,
    });
  };

  useEffect(() => {
    setModalSuccessStatus(showPopup);
  }, [showPopup]);

  return (
    <>
      {/* <SuccessModalUpload
        closeModal={closeModal}
        closeModalSuccess={closeModalSuccess}
        modalSuccessStatus={showPopup}
      /> */}
      <SuccessMessageRegister
        closeModal={closeModal}
        closeModalSuccess={closeModalSuccess}
        modalSuccessStatus={modalSuccessStatus}
      />
      <div
        className={`${classes.uploadModalWrapper}  ${
          statusModal ? classes.active : ""
        }`}
      >
        <div className={`${classes.cover}`} onClick={() => closeModal()}></div>
        <div className={classes.uploadModal}>
          <div className={classes.title}>
            <p>بارگذاری رسید واریزی</p>
          </div>
          <form onSubmit={handleSubmit(submitFormUpload)}>
            <div className={classes.inputWrapper}>
              <label>
                <span>نام شرکت</span>
                <input
                  {...register("company_name", {
                    required: " لطفا این فیلد را کامل کنید.",
                  })}
                  type="text"
                />
                {errors.company_name?.message && (
                  <span className={classes.error}>
                    {errors.company_name?.message}
                  </span>
                )}
              </label>
            </div>
            <div className={classes.uploadWrapper}>
              <div className={classes.text}>
                <p>
                  تصویر رسید واریزی هزینه ثبت نام در تورنومنت ایران بیزینس کاپ
                  را بارگذاری کنید.
                </p>
                <p>(کمتر از 5mb)</p>
              </div>
              <div className={classes.upload}>
                <input
                  {...register("file", {
                    required: " لطفا این فیلد را کامل کنید.",
                  })}
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
                {errors.file?.message && (
                  <span className={classes.error}>{errors.file?.message}</span>
                )}
              </div>
            </div>

            <div className={classes.buttons}>
              <button
                className={classes.accept}
                type="submit"
                // onClick={(e) => {
                //   e.preventDefault();
                //   openModal();
                // }}
              >
                {sending ? (
                  <>
                    <p>درحال ارسال</p>
                    <Loading />
                  </>
                ) : (
                  <p>تایید</p>
                )}
              </button>
              <button
                className={classes.close}
                onClick={(e) => {
                  e.preventDefault();
                  closeModal();
                }}
              >
                <p>بستن</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
