import axios from "axios";
import { base_url } from "../base_url/index";

export const Delviery_Partners = async () => {
  try {
    const rs = await axios(`${base_url}getDeliveryPartners`);
    // console.log(rs.data.data);
    return rs.data.deliveryPartners[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const Add_Delviery_Partner = async (
  name: string,
  mobile: string,
  password: string,
  city: string,
  vecile: string
) => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("mobile", mobile);
    formData.append("password", password);
    formData.append("city", city);
    formData.append("vehicle", vecile);
    formData.append("user_type", "delivery_partner");
    const rs = await axios.post(`${base_url}app/signup`, formData, {
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
