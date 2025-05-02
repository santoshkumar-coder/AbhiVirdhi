import React, { useEffect, useRef, useState } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import useLiveLocation from "./useLiveLocation";

const libraries: "places"[] = ["places"];

const fetchAddressFromCoordinates = async (lat: number, lng: number): Promise<string | null> => {
  const apiKey = "AIzaSyDuMG2WaY4Vwi0iM3XqPdUrNAcvjHtR8wE"; // Replace with real key
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === "OK" && data.results.length > 0) {
      console.log("Fetched address:", data.results[0].formatted_address);
      return data.results[0].formatted_address;
    } else {
      console.warn("Geocoding failed:", data.status);
      return null;
    }
  } catch (error) {
    console.error("Error fetching address:", error);
    return null;
  }
};

const PickupForm = () => {
  const location = useLiveLocation();
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const [formData, setFormData] = useState({
    pickupAddress: "",
    dropAddress: "",
    name: "",
    phoneNumber: "",
    business: ""
  });

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
        const address = await fetchAddressFromCoordinates(location.latitude, location.longitude);
        if (address) {
          setFormData((prev) => ({ ...prev, pickupAddress: address }));
        }
        setLoadingAddress(false);
      }
    };

    autoFillPickup();
  }, [location.latitude, location.longitude]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(`Input ${name} changed:`, value);
  };

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();
    if (place?.formatted_address) {
      console.log("Selected place:", place.formatted_address);
      setFormData((prev) => ({ ...prev, pickupAddress: place.formatted_address || "" }));
    } else {
      console.warn("No formatted address found in selected place");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form:", formData);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDuMG2WaY4Vwi0iM3XqPdUrNAcvjHtR8wE" libraries={libraries}>
      <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow max-w-md mx-auto">
        <h2 className="text-lg font-semibold mb-4">Pickup Form</h2>

        <label className="block mb-3">
          Pickup Address
          <Autocomplete
            onLoad={(autocomplete) => {
              autocompleteRef.current = autocomplete;
              console.log("Autocomplete loaded");
            }}
            onPlaceChanged={handlePlaceChanged}
          >
            <input
              type="text"
              name="pickupAddress"
              value={formData.pickupAddress}
              onChange={handleChange}
              placeholder={loadingAddress ? "Detecting..." : "Enter pickup location"}
              className="w-full border px-2 py-1 rounded mt-1"
            />
          </Autocomplete>
        </label>

        <label className="block mb-3">
          Drop Address
          <input
            type="text"
            name="dropAddress"
            value={formData.dropAddress}
            onChange={handleChange}
            placeholder="Enter drop location"
            className="w-full border px-2 py-1 rounded mt-1"
          />
        </label>

        <label className="block mb-3">
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Sender name"
            className="w-full border px-2 py-1 rounded mt-1"
          />
        </label>

        <label className="block mb-3">
          Phone Number
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone number"
            className="w-full border px-2 py-1 rounded mt-1"
          />
        </label>

        <label className="block mb-4">
          Business Type
          <input
            type="text"
            name="business"
            value={formData.business}
            onChange={handleChange}
            placeholder="Personal or Business"
            className="w-full border px-2 py-1 rounded mt-1"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </LoadScript>
  );
};

export default PickupForm;
