import axios from "axios";
import { useState } from "react";
import BASE_URL from "../../contants/baseUrl";
import apis from "../../contants/apis";

interface FormDataType {
  f_name: string;
  l_name: string;
  email: string;
  address: string;
  mobile: string;
  company_name: string;
  file?: File | null;
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
    file,
  }: FormDataType) => {
    const formData = new FormData();
    formData.append("f_name", f_name);
    formData.append("l_name", l_name);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("company_name", company_name);
    formData.append("mobile", mobile);
    file && formData.append("file", file);

    try {
      setSending(true);
      await axios
        .post(`${BASE_URL}${apis.addRequestIranbusinesscup}`, formData, {
          headers: {
            Accept: "application/json, text/plain, */*",
          },
        })
        .then((res: any) => {
          if (res.status === 200) {
            setSending(false);
            setMessage(res.data.data.message);
            setResult_req(1);
            setShowPopup(true);
          }
        })
        .catch((e) => {
          setSending(false);
          setMessage(e);
          setResult_req(2);
          setShowPopup(true);
        });
    } catch (err: any) {
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
