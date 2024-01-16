import axios from "axios";
import { useState } from "react";
import BASE_URL from "../../contants/baseUrl";
import apis from "../../contants/apis";

interface FormDataType {
  company_name: string;
  file?: File | null;
}

const useUploadFile = () => {
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const [result_req, setResult_req] = useState(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const changeShowPopupStatus = () => {
    setShowPopup(false);
  };

  const handle_register = async ({ company_name, file }: FormDataType) => {
    const formData = new FormData();
    formData.append("company_name", company_name);
    file && formData.append("file", file);

    try {
      setSending(true);
      await axios
        .post(`${BASE_URL}${apis.uploadFileIranbusinesscup}`, formData, {
          headers: {
            Accept: "application/json, text/plain, */*",
          },
        })
        .then((res: any) => {
          if (res.status == 200) {
            setSending(false);
            if (res.data.data) {
              setMessage(res.data.data.message);
              setResult_req(1);
              setShowPopup(true);
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

export default useUploadFile;
