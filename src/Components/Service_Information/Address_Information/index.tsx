import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { VscTriangleDown } from "react-icons/vsc";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/action";
import Cities from "../../Home/VehiclesDisplay/Cities";
import axios from "axios";
import { Autocomplete, LoadScript } from "@react-google-maps/api";
import useLiveLocation from "../../../hook/useLiveLocation";
import { estimate } from "../../../api_fetch/estimete";

const libraries: "places"[] = ["places"];

const fetchAddressFromCoordinates = async (lat: number, lng: number) => {
  const apiKey = "AIzaSyDuMG2WaY4Vwi0iM3XqPdUrNAcvjHtR8wE";
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
  );
  const data = await response.json();
  if (data.status === "OK") {
    return data.results[0].formatted_address;
  } else {
    throw new Error("Failed to fetch address from coordinates");
  }
};

const Address_Information: React.FC = () => {
  const { serviceId, serviceInformation } = useParams<{
    serviceInformation: string;
    serviceId: string;
  }>();
  const navigate = useNavigate();
  const selector = useSelector((state: AppState) => state);
  const [city, setCity] = useState<boolean>(false);
  const [city_id, setCity_Id] = useState<number>(-1);

  const [GSTVerification, setGSTVerification] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [gstVerified, setGstVerified] = useState<boolean>(false);

  const [showOTP, setShowOTP] = useState(false);
  const [otpError, setotpError] = useState("");
  const [otp, setOtp] = useState("");

  const [formData, setFormData] = useState<{
    pickupAddress: string;
    dropAddress: string;
    phoneNumber: string;
    name: string;
    business: string;
    gstNumber: string;
    pickup_lat: number | null;
    pickup_long: number | null;
    drop_lat: number | null;
    drop_long: number | null;
  }>({
    pickupAddress: "",
    dropAddress: "",
    phoneNumber: "",
    name: "",
    business: "",
    gstNumber: "",
    pickup_lat: null,
    pickup_long: null,
    drop_lat: null,
    drop_long: null
  });
  const [touched, setTouched] = useState({
    pickupAddress: false,
    dropAddress: false,
    phoneNumber: false,
    name: false
  });

  const [selectBusinessDrop, setSelectBusinessDrop] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (field: string) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams({
      brand: "abhiviridhi",
      customer_mobile: formData.phoneNumber,
      customer_name: formData.name,
      frequency: formData.business,
      from_address_landmark: formData.pickupAddress,
      from_address_lat: formData.pickup_lat?.toString() || "28.6505331",
      from_address_long:
        formData.pickup_long?.toString() || "77.23033699999999",
      geo_region_id: "2",
      to_address_landmark: formData.dropAddress,
      to_address_lat: formData.drop_lat?.toString() || "28.6505331",
      to_address_long: formData.drop_long?.toString() || "77.23033699999999",
      vehical_info: serviceInformation || "",
      vehical_id: serviceId || ""
    });

    const rs = await estimate(formData, serviceId || "");
    console.log(rs?.status);
    if (rs?.status) {
      navigate(`/fare_estimate_mob?${params.toString()}`);
    } else {
      alert("Something went wrong, try again");
    }
  };

  const handleVerifyOTP = async () => {
    setGSTVerification(false);
    setShowOTP(false);
    setOtp("");
  };

  const gstVerification = async () => {
    if (!formData.gstNumber) {
      alert("Enter a valid GST number");
      return;
    }
    setLoading(true);
    try {
      const rs = await axios.post(
        " https://server1.pearl-developer.com/abhivriti/public/api/verify-gst",
        {
          gstin: formData.gstNumber
        }
      );
      console.log(rs);
      if (rs.status === 200) {
        alert(
          `${rs?.data?.message}, ${rs?.data?.data?.legal_name_of_business}`
        );
        setGSTVerification(false);
        setGstVerified(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const location = useLiveLocation();
  const pickupAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(
    null
  );
  const dropAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(
    null
  );
  const [loadingAddress, setLoadingAddress] = useState(false);

  useEffect(() => {
    const autoFillPickup = async () => {
      if (
        location.latitude &&
        location.longitude &&
        !formData.pickupAddress &&
        !loadingAddress
      ) {
        setLoadingAddress(true);
        const address = await fetchAddressFromCoordinates(
          location.latitude,
          location.longitude
        );
        if (address) {
          setFormData((prev) => ({
            ...prev,
            pickupAddress: address,
            pickup_lat: location.latitude,
            pickup_long: location.longitude
          }));
        }
        setLoadingAddress(false);
      }
    };

    autoFillPickup();
  }, [location.latitude, location.longitude]);

  const handlePickupPlaceChanged = () => {
    const place = pickupAutocompleteRef.current?.getPlace();
    if (place?.formatted_address && place?.geometry?.location) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      console.log("Selected pickup address:", place.formatted_address);
      console.log("Pickup location:", { lat, lng });

      if (place.formatted_address) {
        if (place.formatted_address) {
          setFormData((prev) => ({
            ...prev,
            pickupAddress: place.formatted_address || "",
            pickup_lat: lat,
            pickup_long: lng
          }));
        } else {
          console.warn("Formatted address is undefined");
        }
      } else {
        console.warn("Formatted address is undefined");
      }
    } else {
      console.warn("No valid geometry found for pickup place");
    }
  };

  const handleDropPlaceChanged = () => {
    const place = dropAutocompleteRef.current?.getPlace();
    if (place?.formatted_address && place?.geometry?.location) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      console.log("Selected drop address:", place.formatted_address);
      console.log("Drop location:", { lat, lng });

      setFormData((prev) => ({
        ...prev,
        dropAddress: place.formatted_address || "",
        drop_lat: lat,
        drop_long: lng
      }));
    } else {
      console.warn("No valid geometry found for drop place");
    }
  };

  return (
    <div className="w-full font-titillium">
      <div className="flex flex-col justify-center items-center">
        <div className="md:w-auto w-[80%]">
          <div
            className="flex items-center bg-white py-4 mb-1 px-3 gap-2 w-fit rounded-t-xl cursor-pointer"
            onClick={() => setCity(true)}
          >
            <MdLocationPin />
            <span>{selector.select_city}</span>
            <VscTriangleDown />
          </div>
          <LoadScript
            googleMapsApiKey="AIzaSyDuMG2WaY4Vwi0iM3XqPdUrNAcvjHtR8wE"
            libraries={libraries}
          >
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="md:flex md:w-auto w-full bg-white items-center px-5 py-8 rounded-r-xl rounded-bl-xl gap-3 w-auto"
            >
              <div className="flex flex-col items-start justify-start">
                <label htmlFor="pickupaddress" className=" text-sm">
                  Pickup Address
                  <span className="text-red-500 ml-1 -mt-2 font-bold text-lg">
                    *
                  </span>
                </label>
                <Autocomplete
                  onLoad={(autocomplete) => {
                    pickupAutocompleteRef.current = autocomplete;
                    console.log("Pickup Autocomplete loaded");
                  }}
                  onPlaceChanged={handlePickupPlaceChanged}
                >
                  <input
                    type="text"
                    name="pickupAddress"
                    value={formData.pickupAddress}
                    onChange={handleChange}
                    placeholder={
                      loadingAddress ? "Detecting..." : "Enter pickup location"
                    }
                    className=" border py-1 rounded border-none focus:outline-none focus:border-transparent text-sm "
                  />
                </Autocomplete>
                {touched.pickupAddress && !formData.pickupAddress && (
                  <p className="text-xs text-red-500 mt-1">
                    Enter Pickup Address
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start justify-start">
                <label htmlFor="dropaddress" className=" text-sm">
                  Drop Address
                  <span className="text-red-500 ml-1 -mt-2 font-bold text-lg">
                    *
                  </span>
                </label>
                <Autocomplete
                  onLoad={(autocomplete) => {
                    dropAutocompleteRef.current = autocomplete;
                    console.log("Drop Autocomplete loaded");
                  }}
                  onPlaceChanged={handleDropPlaceChanged}
                  className="w-full"
                >
                  <input
                    type="text"
                    name="dropAddress"
                    value={formData.dropAddress}
                    onChange={handleChange}
                    placeholder="Enter drop location"
                    className="py-1 rounded border-none focus:outline-none focus:border-transparent text-sm"
                  />
                </Autocomplete>
                {touched.dropAddress && !formData.dropAddress && (
                  <p className="text-xs text-red-500 mt-1">
                    Enter Drop Address
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start justify-start">
                <label htmlFor="phoneNumber" className=" text-sm">
                  Sender Phone Number
                  <span className="text-red-500 ml-1 -mt-2 font-bold text-lg">
                    *
                  </span>
                </label>
                <input
                  className="border-none focus:outline-none focus:border-transparent text-sm md:w-auto w-full"
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    const value = e.target.value;

                    if (/^\d{0,10}$/.test(value)) {
                      handleChange(e);
                    }
                  }}
                  onFocus={() => handleFocus("phoneNumber")}
                  onBlur={() => handleBlur("phoneNumber")}
                  placeholder="Enter contact details"
                  maxLength={10}
                />
                {touched.phoneNumber && !formData.phoneNumber && (
                  <p className="text-xs text-red-500 mt-1">
                    Enter Phone Number
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start justify-start">
                <label htmlFor="name" className=" text-sm">
                  Sender Name
                  <span className="text-red-500 ml-1 -mt-2 font-bold text-lg">
                    *
                  </span>
                </label>
                <input
                  className="border-none text-sm focus:outline-none focus:border-transparent md:w-auto w-full"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name")}
                  placeholder="Enter your name"
                />
                {touched.name && !formData.name && (
                  <p className="text-xs text-red-500 mt-1">Enter your Name</p>
                )}
              </div>

              <div className="relative md:mt-0 mt-3">
                <div
                  className="flex flex-col items-start justify-start cursor-pointer"
                  onClick={() => setSelectBusinessDrop(!selectBusinessDrop)}
                >
                  <label
                    htmlFor="bussesniss"
                    className="flex items-center justify-center cursor-pointer text-sm"
                  >
                    What describes you best?
                    <span className="text-red-500 ml-1 -mt-2 font-bold text-lg">
                      *
                    </span>
                    <span className="ml-5">
                      <VscTriangleDown />
                    </span>
                  </label>
                  <input
                    className="border-none bg-transparent capitalize text-sm focus:outline-none focus:border-transparent cursor-pointer"
                    type="text"
                    placeholder="Enter your name"
                    disabled
                    value={formData.business}
                  />
                </div>
                {!gstVerified && selectBusinessDrop && (
                  <div className="absolute top-14 bg-gray-100 shadow-lg hover:shadow-xl p-3 rounded-xl">
                    <h1
                      className="hover:bg-gray-300 font-bold p-2 text-sm cursor-pointer rounded-lg"
                      onClick={() => {
                        setFormData({ ...formData, business: "personal user" });
                        setSelectBusinessDrop(false);
                      }}
                    >
                      Personal User
                    </h1>
                    <h1
                      className="mt-2 hover:bg-gray-300 font-bold p-2 text-sm cursor-pointer rounded-lg"
                      onClick={() => {
                        setFormData({ ...formData, business: "business user" });
                        setSelectBusinessDrop(false);
                        setGSTVerification(true);
                      }}
                    >
                      Business User
                    </h1>
                  </div>
                )}
              </div>

              <button
                disabled={
                  !formData.business ||
                  !formData.dropAddress ||
                  !formData.name ||
                  !formData.phoneNumber ||
                  !formData.pickupAddress
                }
                className={`
                                ${
                                  formData.business &&
                                  formData.dropAddress &&
                                  formData.name &&
                                  formData.phoneNumber &&
                                  formData.pickupAddress
                                    ? "hover:text-white/80 cursor-pointer bg-blue-600 hover:bg-blue-800 hover:scale-105 trasition-all ease-in duration-300"
                                    : "bg-gray-400  cursor-not-allowed"
                                }
                            flex justify-between md:mt-0 mt-10 items-center gap-10 bg-blue-600 select-none  p-3 rounded-lg text-white   ml-3 text-sm `}
              >
                <span>Get an estimate</span>
                <span>
                  <FaLongArrowAltRight />
                </span>
              </button>
            </form>
          </LoadScript>
          {GSTVerification && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm h-screen w-screen z-20">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-lg font-semibold mb-3">Business User</h2>

                <div className="flex flex-col items-start justify-start">
                  <label htmlFor="name" className="text-sm">
                    Enter your GST Number
                    <span className="text-red-500 ml-1 font-bold text-lg">
                      *
                    </span>
                  </label>
                  <input
                    className="border p-2 w-full rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    name="gstNumber"
                    value={formData.gstNumber}
                    onChange={handleChange}
                    onFocus={() => handleFocus("gstNumber")}
                    onBlur={() => handleBlur("gstNumber")}
                    placeholder="Enter your GST Number"
                  />
                  {!formData.gstNumber && (
                    <p className="text-xs text-red-500 mt-1">
                      Enter your GST Number
                    </p>
                  )}
                </div>

                {/* OTP Verification Section */}
                {/* {showOTP && (
              <div className="mt-4">
                <div className="flex flex-col items-start justify-start">
                  <label htmlFor="otp" className="text-sm">
                    Enter OTP
                    <span className="text-red-500 ml-1 font-bold text-lg">
                      *
                    </span>
                  </label>
                  <input
                    className="border p-2 w-full rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                  />
                </div>
                {otpError && (
                  <p className="text-xs text-red-500 mt-1">Invalid OTP</p>
                )}

                
              </div>
            )} */}

                <button
                  onClick={gstVerification}
                  className="mt-4 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  disabled={loading} // Disable the button while loading
                >
                  {loading ? (
                    <div className="spinner-border animate-spin border-4 border-t-4 border-white w-5 h-5 rounded-full"></div>
                  ) : (
                    "Verify GST"
                  )}
                </button>

                {/* <button
                onClick={handleVerifyOTP}
                className="mt-4 px-4 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Verify OTP
              </button> */}

                <button
                  onClick={() => {
                    setFormData({ ...formData, business: "" });
                    setGSTVerification(false);
                    setShowOTP(false);
                  }}
                  className="m-4 px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>{city && <Cities setCity={setCity} setCity_Id={setCity_Id} />}</div>
    </div>
  );
};

export default Address_Information;
