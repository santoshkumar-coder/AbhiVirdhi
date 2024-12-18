// Define Action Types
export const SELECTED_CITY = "SELECTED_CITY";
export const SELECTED_USER = "SELECTED_USER";
export const BANNERS = "BANNERS";

// Define the structure of Banner (adjust this to your actual response structure)
export interface Banner {
  [key: string]: any;  // This allows `banners` to be any object with dynamic keys
}

// Define the structure of your state
export interface AppState {
  select_city: string;
  select_user: string;
  banners: Banner;  // This will now accept any object for banners
}

// Action Types
interface SelectCityAction {
  type: typeof SELECTED_CITY;
  payload: string;
}

interface SelectUserAction {
  type: typeof SELECTED_USER;
  payload: string;
}

interface BannersAction {
  type: typeof BANNERS;
  payload: Banner;
}

// Combine all action types for easy use
export type AppActionTypes = SelectCityAction | SelectUserAction | BannersAction;
