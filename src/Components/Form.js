import React, { useState } from 'react';
import '../styles/Form.css';

function Form() {
    const [impressions, setImpressions] = useState('');

    const handleChange = (event) => {
        setImpressions(event.target.value);
    }

    return (
        <form>
            <h2>Filter Data</h2>
            <div className='filterForm'>
                <label>
                Number of impressions: <br></br>
                    <select value={impressions} name='impressions' onChange={handleChange}>
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