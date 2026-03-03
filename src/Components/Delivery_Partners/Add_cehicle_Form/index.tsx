import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";
import { cities } from "../../../api_fetch/cities";
import { useNavigate } from "react-router-dom";
import { Add_Delviery_Partner } from "../../../api_fetch/delivery_partners";

interface Cities {
  image: string;
  name: string;
  id: number;
}

interface ApiErrorResponse {
  message?: string | Record<string, string[]>;
}

interface Props {
  setModalVisiable: React.Dispatch<React.SetStateAction<boolean>>;
}

const Add_vehicle_form: React.FC<Props> = ({ setModalVisiable }) => {
  const [city, setcity] = useState("");
  const [vecile, setvecile] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState<Cities[]>([]);

  const navigate = useNavigate();

  /* ---------------- Fetch Cities ---------------- */
  useEffect(() => {
    const fetchData = async () => {
      const rs = await cities();
      setData(rs);
    };
    fetchData();
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setcity(event.target.value);
  };

  /* ---------------- Submit Form ---------------- */
  const handleAdd_Delviery_Partner = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setError(""); // clear old error

    try {
      const rs = await Add_Delviery_Partner(
        name,
        mobile,
        password,
        city,
        vecile
      ) as { status: number };

      // ✅ SUCCESS
      if (rs.status === 201) {
        setModalVisiable(true);

        setName("");
        setMobile("");
        setPassword("");
        setcity("");
        setvecile("");

        navigate("/delivery_Partners");
      }
    } catch (err: any) {
      const apiError: ApiErrorResponse | undefined =
        err?.response?.data;

      // validation object errors
      if (typeof apiError?.message === "object") {
        const firstError =
          Object.values(apiError.message)[0]?.[0];

        setError(firstError || "Validation error");
      }
      // normal string error
      else if (typeof apiError?.message === "string") {
        setError(apiError.message);
      } else {
        setError("API request failed");
      }
    }
  };

  return (
    <div className="bg-white/80 p-5 rounded-lg -mt-5">
      <h1 className="text-center md:text-3xl text-xl font-bold mb-5">
        Attach Vehicle Now
      </h1>

      {/* ✅ ERROR MESSAGE */}
      {error && (
        <p className="text-red-600 text-center mb-3 font-semibold">
          {error}
        </p>
      )}

      <form
        className="md:flex md:space-x-5 space-y-5 md:space-y-0"
        onSubmit={handleAdd_Delviery_Partner}
      >
        <TextField
          required
          label="Name"
          size="small"
          className="w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          required
          label="Number"
          type="number"
          size="small"
          className="w-full"
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value.slice(0, 10))
          }
        />

        <TextField
          required
          label="Password"
          type="password"
          size="small"
          className="w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* CITY */}
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel>City</InputLabel>
          <Select value={city} label="City" onChange={handleChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>

            {data.map((item) => (
              <MenuItem key={item.id} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* VEHICLE */}
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel>Vehicle</InputLabel>
          <Select
            value={vecile}
            label="Vehicle"
            onChange={(e) => setvecile(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Two_Wheeler">Two Wheeler</MenuItem>
            <MenuItem value="Three_Wheeler">Three Wheeler</MenuItem>
            <MenuItem value="Mini_Truck">Mini Truck</MenuItem>
            <MenuItem value="Large_Truck">Large Truck</MenuItem>
          </Select>
        </FormControl>

        {/* ✅ SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-blue-800 text-white p-2 font-bold rounded"
        >
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default Add_vehicle_form;