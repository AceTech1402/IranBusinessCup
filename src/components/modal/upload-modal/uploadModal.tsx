import { useState } from "react";
import { PlusIcon } from "../../svgs/svgs";
import { SuccessModalUpload } from "../success-modal-upload/successModalUpload";
import classes from "./uploadModal.module.css";
import { SuccessMessageRegister } from "../success-message-register/successMessageRegister";

interface PropsUploadMoadDataType {
  statusModal: boolean;
  closeModal: () => void;
}

export const UploadModal: React.FC<PropsUploadMoadDataType> = ({
  statusModal,
  closeModal,
}) => {
  const [modalSuccessStatus, setModalSuccessStatus] = useState<boolean>(false);
  const [uplaodImage, setUploadImage] = useState<string | null>(null);

  const openModal = () => {
    setModalSuccessStatus(true);
  };

  const closeModalSuccess = () => {
    setModalSuccessStatus(false);
  };

  return (
    <>
      {/* <SuccessModalUpload
        closeModal={closeModal}
        closeModalSuccess={closeModalSuccess}
        modalSuccessStatus={modalSuccessStatus}
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
          <form>
            <div className={classes.inputWrapper}>
              <label>
                <span>نام شرکت</span>
                <input type="text" />
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
                  type="file"
                  onChange={(e: any) => {
                    setUploadImage(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                {uplaodImage && (
                  <div className={classes.image}>
                    <img src={uplaodImage} alt="" />
                  </div>
                )}
                {uplaodImage && (
                  <div
                    className={classes.changeImage}
                    onClick={() => setUploadImage(null)}
                  >
                    <PlusIcon />
                  </div>
                )}
                <div className={classes.icon}>
                  <PlusIcon />
                </div>
                <div className={classes.text}>
                  <p>بارگذاری</p>
                </div>
              </div>
            </div>

            <div className={classes.buttons}>
              <button
                className={classes.accept}
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  openModal();
                }}
              >
                <p>تایید</p>
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
