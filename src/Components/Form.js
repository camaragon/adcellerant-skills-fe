import React, { useState } from 'react';
import '../styles/Form.css';

function Form({filterData}) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const [form, setState] = useState({
        impressions: 0,
        clicks: '',
        platform: '',
        product: ''
    });
    const [dateRange, setDateRange] = useState({start: null, end: null})

    const handleChange = (event) => {
        setState({
            ...form,
            [event.target.name]: event.target.value
        });
        setDateRange({
            ...dateRange,
            [event.target.name]: event.target.value
        });
    };

    const addDay = (date) => {
        const result = new Date(date);
        result.setDate(result.getDate() + 1)
        return result.toISOString().slice(0, 10);
    }

    const handleClick = (event) => {
        event.preventDefault();

        filterData(form)
        
    }

    console.log(dateRange)

    return (
        <form>
            <h2>Filter Data</h2>
            <div className='filterForm'>
                <label>
                Number of impressions: <br></br>
                    <select value={form.impressions} name='impressions' onChange={handleChange}>
                        <option value='' selected disbaled hidden>None</option>
                        <option value={1}>700+</option>
                        <option value={2}>400-699</option>
                        <option value={3}>100-399</option>
                        <option value={4}>0-99</option>
                    </select>
                </label>
                <label>
                Clicks per product: <br></br>
                    <select value={form.clicks} name='clicks' onChange={handleChange}>
                        <option value='' selected disbaled hidden>None</option>
                        <option value='100+'>100+</option>
                        <option value='75-99'>75-99</option>
                        <option value='25-74'>25-74</option>
                        <option value='0-24'>0-24</option>
                    </select>
                </label>
                <label>
                Platform: <br></br>
                    <select value={form.platform} name='platform' onChange={handleChange}>
                        <option value='' selected disbaled hidden>None</option>
                        <option value='Amazon'>Amazon</option>
                        <option value='Facebook'>Facebook</option>
                        <option value='Google'>Google</option>
                        <option value='Twitter'>Twitter</option>
                        <option value='LinkedIn'>LinkedIn</option>
                    </select>
                </label>
                <label>
                Product: <br></br>
                    <select value={form.product} name='product' onChange={handleChange}>
                        <option value='' selected disbaled hidden>None</option>
                        {alphabet.map(letter => {
                            return <option value={letter}>{letter}</option>
                        })}
                    </select>
                </label>
                <div className='dateRange'>
                    <p style={{marginTop: 0}}>Date Range:</p>
                    <label for='startDate'>Start</label>    
                    <input type='date' id='startDate' name='start' value={dateRange.start} min='2021-04-01' max='2021-04-05' onChange={handleChange}></input>
                    {dateRange.start && <> 
                    <label for='endDate'>End</label> 
                    <input type='date' id='endDate' name='end' value={dateRange.end} min={addDay(dateRange.start)} max='2021-04-05' onChange={handleChange}></input>
                    </>
                    }
                </div>
            </div>
        <input className='filterSubmit' type='submit' value='Submit' />
        </form>
    )
}

export default Form;