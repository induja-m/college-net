import axios from 'axios'
//baseurl which is common for all api calls
const baseUrl = "http://localhost:3000";

// function to perform fetch data across the project
export const getData = (url,options = {}) =>{
    return axios.get(`${baseUrl}/${url}`, options);
}

// export const postData = (url,postObj={}, options = {}) =>{
//     return axios.post(`${baseUrl}/${url}`, postObj);
// }

// function to perform post data across the project
export const postData =(url,postObj)=>{  
    return axios({
        method: 'post', 
        url: `${baseUrl}${url}`,
        data: JSON.stringify(postObj),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        }
      })
}

// function to perform delete data across the project
export const deleteData = (url,options = {}) =>{
    return axios.delete(`${baseUrl}/${url}`);
}

// function to perform update data across the project
export const putData =(url,putObj)=>{  
    return axios({
        method: 'put', 
        url: `${baseUrl}/${url}`,
        data: JSON.stringify(putObj),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        }
      })
}
