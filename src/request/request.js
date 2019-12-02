import axios from 'axios'

const baseuri = 'http://localhost:3002'
const requestMethod = function MovieRequest(url,method='get',data={},param=null){
   if(method === 'get'){
       return new Promise((resolve,reject) => {
        axios.get(`${baseuri}/${url}`,{params:param})
        .then(res=>{
           resolve(res)
        })
        .catch(err=>{
            reject(err)
        })
       })
   }
   if(method === 'post'){
       return new Promise((resolve,reject)=>{
           axios.post(`${baseuri}/${url}`,data)
           .then(res=>{
               resolve(res)
           })
           .catch(err=>{
               reject(err)
           })
       })
   }
}

export default requestMethod