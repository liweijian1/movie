import axios from 'axios'

const baseuri = process.env.NODE_ENV === 'production'?'http://49.234.74.40:3002':'http://localhost:3002'
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