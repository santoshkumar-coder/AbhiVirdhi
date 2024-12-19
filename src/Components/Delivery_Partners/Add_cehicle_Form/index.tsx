import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField } from '@mui/material';

const Add_vehicle_form = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (
        <div className='bg-white/90 p-5 rounded-lg -mt-5'>
            <div className='space-y-5'>
                <h1 className='text-center md:text-3xl text-xl font-bold'>Attach Vehicle Now</h1>
                <form className='md:flex md:space-x-5 space-y-5 md:space-y-0'>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                            size="small"
                            className='w-full'
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Number"
                            type="number"
                            size="small"
                            className='w-full'
                        />
                    </div>
                    <div className='flex space-x-5'>
                        <div>
                            <FormControl sx={{ minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small-label">City</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl sx={{ minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small-label">Vehicle</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={age}
                                    label="Vehicle"
                                    onChange={handleChange}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                transformOrigin: 'top center',
                                                marginTop: '4px', // Adjusts the dropdown position slightly below
                                            },
                                        },
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

                        </div>
                    </div>
                    <div>
                        <FormControl sx={{ minWidth: 120, width: "100%" }} size="small">
                            <InputLabel id="demo-select-small-label">Source</InputLabel>
                            <Select
                                className='w-full'
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={age}
                                label="Vehicle"
                                onChange={handleChange}
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            transformOrigin: 'top center',
                                            marginTop: '4px', // Adjusts the dropdown position slightly below
                                        },
                                    },
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
                    </div>
                    <div>
                        <button className='w-full bg-blue-800 text-white p-2 font-bold rounded'>REGISTER</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add_vehicle_form