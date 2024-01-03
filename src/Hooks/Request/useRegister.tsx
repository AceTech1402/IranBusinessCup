import axios from "axios";
import { useState } from "react";

interface FormDataType {
  f_name: string;
  l_name: string;
  email: string;
  address: string;
  mobile: string;
  company_name: string;
}

const useRegister = () => {
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const [result_req, setResult_req] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const changeShowPopupStatus = () => {
    setShowPopup(false);
  };

  const handle_register = async ({
    f_name,
    l_name,
    email,
    address,
    mobile,
    company_name,
  }:FormDataType) => {
    const formData = new FormData();
    formData.append("f_name", f_name);
    formData.append("l_name", l_name);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("company_name", company_name);
    formData.append("mobile", mobile);

    try {
      setSending(true);
      await axios
        .post(
          "https://api.goldensports.at/request/addRequest_iranbusinesscup",
          formData,
          {
            headers: {
              Accept: "application/json, text/plain, */*",
            },
          }
        )
        .then((res) => {
          if (res.status == 200) {
            if (res.data.data.email_error_msg !== "") {
              setSending(false);
              if (res.data.data) {
                console.log(res.data.data)
                setMessage(res.data.data.message);
                setResult_req(1);
                setShowPopup(true);
              }
            } else {
              setSending(false);
              if (res.data.data) {
                setMessage(res.data.data.message);
                setResult_req(res.data.data.email_sended ? 1 : 0);
                setShowPopup(true);
              }
            }
          }
        })
        .catch((e) => {
          setSending(false);
          setMessage(e);
          setResult_req(2);
          setShowPopup(true);
        });
    } catch (err:any) {
      setSending(false);
      setMessage(err);
      setResult_req(2);
      setShowPopup(true);
    }
  };

  return {
    handle_register,
    changeShowPopupStatus,
    sending,
    message,
    result_req,
    showPopup,
  };
};

export default useRegister;
