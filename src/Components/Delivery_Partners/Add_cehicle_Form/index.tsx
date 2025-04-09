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
interface Props {
  setModalVisiable: React.Dispatch<React.SetStateAction<boolean>>;
}

const Add_vehicle_form: React.FC<Props> = ({ setModalVisiable }) => {
  const [city, setcity] = React.useState<string>("");
  const [vecile, setvecile] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [mobile, setMobile] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const [data, setData] = useState<Cities[] | null>(null);

  const navigate = useNavigate();

  const fetchData = async () => {
    const rs = await cities();
    setData(rs);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleChange = (event: SelectChangeEvent) => {
    setcity(event.target.value);
  };

  const handleAdd_Delviery_Partner = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const rs = (await Add_Delviery_Partner(
      name,
      mobile,
      password,
      city,
      vecile
    )) as { status: number };
    console.log(rs);
    if (rs.status === 201) {
      setModalVisiable(true);
      setPassword("");
      setMobile("");
      setName("");
      setvecile("");
      setcity("");
    }
  };

  return (
    <div className="bg-white/80 p-5 rounded-lg -mt-5">
      <div className="space-y-5">
        <h1 className="text-center md:text-3xl text-xl font-bold">
          Attach Vehicle Now
        </h1>
        <form
          className="md:flex md:space-x-5 space-y-5 md:space-y-0"
          onSubmit={handleAdd_Delviery_Partner}
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Name"
              size="small"
              className="w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Number"
              type="number"
              size="small"
              className="w-full"
              inputProps={{
                maxLength: 10,
                max: 9999999999
              }}
              onChange={(e) => {
                const value = e.target.value.slice(0, 10);
                e.target.value = value;
                setMobile(e.target.value);
              }}
              value={mobile}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Password"
              type="password"
              size="small"
              className="w-full"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="flex space-x-5">
            <div>
              <FormControl sx={{ minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">City</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={city}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {data?.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item.name}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                  {/* <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Vehicle</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={vecile}
                  label="Vehicle"
                  onChange={(e) => setvecile(e.target.value)}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        transformOrigin: "top center",
                        marginTop: "4px"
                      }
                    }
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Two_Wheeler"}>Two Wheeler</MenuItem>
                  <MenuItem value={"Three_Wheeler"}>Three Wheeler</MenuItem>
                  <MenuItem value={"Mini_Truck"}>Mini Truck</MenuItem>
                  <MenuItem value={"Large_Truck"}>Large Truck</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          {/* <div>
            <FormControl sx={{ minWidth: 120, width: "100%" }} size="small">
              <InputLabel id="demo-select-small-label">Source</InputLabel>
              <Select
                className="w-full"
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={source}
                label="Vehicle"
                onChange={(e) => setSoruce(e.target.value)}
                MenuProps={{
                  PaperProps: {
                    style: {
                      transformOrigin: "top center",
                      marginTop: "4px" // Adjusts the dropdown position slightly below
                    }
                  }
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div> */}
          <div onClick={() => navigate("/delivery_Partners")}>
            <button className="w-full bg-blue-800 text-white p-2 font-bold rounded">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add_vehicle_form;
