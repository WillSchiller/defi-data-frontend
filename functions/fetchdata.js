const readAll = () => {
    return fetch('http://localhost:8888/api/getdata').then((response) => {
      return response
      console.log(respose)
    })
  }

  export default {
    
    readAll: readAll,

  }