import React, { useState } from 'react';
import '../styles/Form.css';

function Form() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
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

    return (
        <form>
            <h2>Filter Data</h2>
            <div className='filterForm'>
                <label>
                Number of impressions: <br></br>
                    <select value={form.impressions} name='impressions' onChange={handleChange}>
                        <option value='' selected disbaled hidden>None</option>
                        <option value='700+'>700+</option>
                        <option value='400-699'>400-699</option>
                        <option value='100-399'>100-399</option>
                        <option value='0-99'>0-99</option>
                    </select>
                </label>
                <label>
                Clicks per product: <br></br>
                    <select value={form.clicks} name='clicks' onChange={handleChange}>
                        <option value='' selected disbaled hidden>None</option>
                        <option value='100'>100+</option>
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
                <label>
                Date Range: <br></br>
                    <select name='' onChange={handleChange}>
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