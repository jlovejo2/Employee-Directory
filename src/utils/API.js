import axios from 'axios';

export default {
    //Where did this syntax come from?
    getEmployees: function() {
        return axios.get(' https://randomuser.me/api/?results=20&nat=us')
    }

}