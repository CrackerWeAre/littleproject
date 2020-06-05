import axios from 'axios'

const port = 1323;
export default axios.create({
    baseURL: `https://mkoa.sparker.kr:${port}`,
    headers:{

    }
})

