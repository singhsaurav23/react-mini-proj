import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID HMKhl5ayAaEOQqM2Q5Vwb3tkKsIlPcc-4mfXC_wudfM'
      }

});

