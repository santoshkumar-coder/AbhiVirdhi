import axios from "axios";
import { base_url } from "../base_url";

export const estimate = async (data: any, serviceId: string | undefined) => {
  const url = `${base_url}calculate_price`;
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("phone_number", data.phoneNumber);
  formData.append("user_type", data.business.split(" ")[0]);
  formData.append("pickup_lat", data.pickup_lat);
  formData.append("pickup_lng", data.pickup_long);
  formData.append("drop_lat", data.drop_lat);
  formData.append("drop_lng", data.drop_long);
  if (serviceId) {
    formData.append("vehicle_types_id", serviceId);
  }
  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    return response;
  } catch (error) {}
};
