const getData = () => {
    return fetch('http://localhost:3002/api/v1/ads')
        .then(response => response.json())
        .catch(err => console.error(err))
}

export default getData;