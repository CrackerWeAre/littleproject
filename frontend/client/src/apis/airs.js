import axios from 'axios'

const port = 1323;
export default axios.create({
    baseURL: `http://49.247.134.77:${port}`,
    headers:{

    }
})

