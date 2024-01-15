import classes from "./successModalUpload.module.css";

interface PropsModal {
  closeModal: () => void;
  closeModalSuccess: () => void;
  modalSuccessStatus: boolean;
}

export const SuccessModalUpload: React.FC<PropsModal> = ({
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
            ثبت نام اولیه شما انجام شد. برای تکمیل و نهایی شدن ثبت نام هزینه
            ورودی را به مبلغ
          </p>
          <p className={classes.center}> 50.000.000 تومان (پنجاه میلیون تومان) </p>
          <p>
            به حساب بانک پاسارگاد{" "}
            <strong>شرکت ایده پردازان نیکداد اروین</strong> واریز نمایید تا ثبت
            نام شما تایید و نهایی شود.
          </p>
          <ul>
            <li>
              <div className={classes.key}>
                <p>شماره سپرده</p>
              </div>
              <div className={classes.value}>
                <p>312.8100.17900.608.1</p>
              </div>
            </li>
            <li>
              <div className={classes.key}>
                <p>شماره شبا</p>
              </div>
              <div className={classes.value}>
                <p>610570031281017900608101</p>
              </div>
            </li>
          </ul>
          <p>
            پس از واریز هزینه ثبت نام، رسید خود را در جای مشخص شده بارگذاری
            کنید.
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
