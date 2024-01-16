import classes from "./successMessageRegister.module.css";

interface PropsModal {
  closeModal: () => void;
  closeModalSuccess: () => void;
  modalSuccessStatus: boolean;
}

export const SuccessMessageRegister: React.FC<PropsModal> = ({
  closeModalSuccess,
  closeModal,
  modalSuccessStatus,
}) => {

  return (
    <div
      className={`${classes.successModalUploadWrapper} ${
        modalSuccessStatus ? classes.active : ""
      }`}
    >
      <div
        className={classes.cover}
        onClick={() => {
          closeModal();
          closeModalSuccess();
        }}
      ></div>

      <div className={classes.successModalUpload}>
        <div className={classes.title}>
          <p>ثبت نام با موفقیت انجام شد</p>
        </div>
        <div className={classes.text}>
          <p>
            بعد از بررسی رسید واریزی، فرایند ثبت نام شما تایید شده وبا شما تماس
            حاصل خواهد شد.
          </p>
        </div>
        <div className={classes.button}>
          <button
            onClick={() => {
              closeModal();
              closeModalSuccess();
            }}
          >
            <p>تایید</p>
          </button>
        </div>
      </div>
    </div>
  );
};
