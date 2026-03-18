import axios from "axios";
import { base_url } from "../base_url/index";

export const news = async () => {
    try {
        const rs = await axios(`${base_url}news`);
        // console.log(rs.data.data);
        return rs.data.data
    } catch (error) {
        console.log(error);
        return error
    }
}

export const happu_customer_review = async()=>{
    try {
        const rs = await axios(`${base_url}app_happy_customer`);
        // console.log(rs.data.data);
        return rs.data.data
    } catch (error) {
        console.log(error);
        return error
    }
}