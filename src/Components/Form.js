import React, { useState } from 'react';
import '../styles/Form.css';

function Form() {
    const [form, setState] = useState({
        impressions: '',
        clicks: '',
        platform: '',
        product: '',
        date: ''
    });

    const handleChange = (event) => {
        setState({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    console.log(form.impressions)
    return (
        <form>
            <h2>Filter Data</h2>
            <div className='filterForm'>
                <label>
                Number of impressions: <br></br>
                    <select value={form.impressions} name='impressions' onChange={handleChange}>
                        <option value='' selected disbaled hidden>None</option>
                        <option value='grapefruit'>Grapefruit</option>
                        <option value='lime'>Lime</option>
                        <option value='coconut'>Coconut</option>
                        <option value='mango'>Mango</option>
                    </select>
                </label>
                <label>
                Clicks per product: <br></br>
                    <select name='clicks'>
                        <option value='' selected disbaled hidden>None</option>
                        <option value='grapefruit'>Grapefruit</option>
                        <option value='lime'>Lime</option>
                        <option value='coconut'>Coconut</option>
                        <option value='mango'>Mango</option>
                    </select>
                </label>
                <label>
                Platform: <br></br>
                    <select name='platform'>
                        <option value='' selected disbaled hidden>None</option>
                        <option value='grapefruit'>Grapefruit</option>
                        <option value='lime'>Lime</option>
                        <option value='coconut'>Coconut</option>
                        <option value='mango'>Mango</option>
                    </select>
                </label>
                <label>
                Product: <br></br>
                    <select name=''>
                        <option value='' selected disbaled hidden>None</option>
                        <option value='grapefruit'>Grapefruit</option>
                        <option value='lime'>Lime</option>
                        <option value='coconut'>Coconut</option>
                        <option value='mango'>Mango</option>
                    </select>
                </label>
                <label>
                Date Range: <br></br>
                    <select name=''>
                        <option value='' selected disbaled hidden>None</option>
                        <option value='grapefruit'>Grapefruit</option>
                        <option value='lime'>Lime</option>
                        <option value='coconut'>Coconut</option>
                        <option value='mango'>Mango</option>
                    </select>
                </label>
            </div>
        <input className='filterSubmit' type='submit' value='Submit' />
        </form>
    )
}

export default Form;