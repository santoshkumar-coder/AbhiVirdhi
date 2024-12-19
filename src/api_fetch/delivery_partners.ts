import axios from "axios";
import { base_url } from "../base_url";

export const Delviery_Partners = async () => {
    try {
        const rs = await axios(`${base_url}getDeliveryPartners`);
        // console.log(rs.data.data);
        return rs.data.deliveryPartners[0]
    } catch (error) {
        console.log(error);
        return error
    }
}