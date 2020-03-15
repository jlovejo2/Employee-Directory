import axios from 'axios';

export default {
    //This code makes the call to the api for the response object
    getEmployees: function() {
        return axios.get('https://randomuser.me/api/?results=50&nat=us')
    }

}