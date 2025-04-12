import axios from "axios";
import { base_url } from "../base_url";

export const Add_enterprise = async (
  name: string,
  number: string,
  email: string,
  companyName: string
) => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("mobile", number);
    formData.append("email", email);
    formData.append("company_name", companyName);

    const rs = await axios.post(`${base_url}contacted-users`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    return rs;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const customer_Review = async () => {
  try {
    const rs = await axios.get(base_url + "get_happy_customers");
    return rs;
  } catch (error) {
    console.log(error);
  }
};
