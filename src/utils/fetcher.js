import axios from 'axios'

export default url => axios.get(url).then(res => res.data)
// export default (...args) => fetch(...args).then(res => res.json())