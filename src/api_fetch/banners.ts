import axios from "axios";
import { base_url } from "../base_url/index";
import { BANNERS } from "../redux/action";

export const banners = async (dispatch: any) => {
    try {
        const rs = await axios.get(`${base_url}banner`);
        console.log(rs);
        dispatch({
            type: BANNERS,
            payload: rs.data.data
        })

    } catch (error) {
        console.log(error);

    }
}