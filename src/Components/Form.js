function Form() {
    return (
        <form>
            <label>
            Pick your favorite flavor: <br></br>
                <select name=''>
                    <option value='' selected disbaled hidden>None</option>
                    <option value='grapefruit'>Grapefruit</option>
                    <option value='lime'>Lime</option>
                    <option value='coconut'>Coconut</option>
                    <option value='mango'>Mango</option>
                </select>
            </label>
        {/* <input type='submit' value='Submit' /> */}
        </form>
    )
}

export default Form;