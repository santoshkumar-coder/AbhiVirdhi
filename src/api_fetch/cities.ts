import axios from "axios";
import { base_url } from "../base_url";

export const cities = async () => {
    try {
        const rs = await axios.get(`${base_url}state`);
        // console.log(rs.data.data);
        return rs.data.data
    } catch (error) {
        console.log(error);
        return error
    }
}
export const areas = async (id: number) => {
    console.log(id);

    const formdata = new FormData();
    if (id) {
        formdata.append("state_id", id.toString())
    }
    try {
        const rs = await axios.post(`${base_url}area`, formdata);
        // console.log(rs.data.data);
        return rs.data
    } catch (error) {
        console.log(error);
        return error
    }
}