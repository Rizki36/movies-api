class DataSource{
    constructor(baseUrl = 'https://api.themoviedb.org/3',token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA5ZWMwNjlmMTJlODQ4MGMwNGI1OTRhZTRjN2VkYiIsInN1YiI6IjVlODk1YzUwZDU1YzNkMDAxNzUyYjRhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P8Qjtn610F_yefESC2sJpL_f96NV4nb9k2MmctsrjlU'){
        this.baseUrl = baseUrl;
        this.token   = token;
    }
    
    getMovies(endpoint,page,query){
        return fetch(`${this.baseUrl}/${endpoint}?page=${page}${query}`,{
            method:'Get',
            headers:{
                'Authorization': `Bearer ${this.token}`,
                'Accept': 'application/json',
                'Content-Type' :'application/json'
            }
         })
        .then(response=> {
            return response.json()
        })
        .then(responseJson => {
            if(responseJson) {
                return Promise.resolve(responseJson)
             } else {
                return Promise.reject('Data Kosong')
             }
        })
        .catch(error=>{
            this.messageError(error)
        })
    }

    getGenres(){
        return fetch(`${this.baseUrl}/genre/movie/list`,{
            method:'Get',
            headers:{
                'Authorization': `Bearer ${this.token}`,
                'Accept': 'application/json',
                'Content-Type' :'application/json'
            }
        })
        .then(response=>{
            return response.json()
        })
        .then(responseJson=>{
            if(responseJson) {
                return Promise.resolve(responseJson)
             } else {
                return Promise.reject('Data Kosong')
             }
        })
        .catch(error=>{
            this.messageError(error)
        })
    }

    messageError(message = 'Koneksi error'){
        alert(message)
    }
}

export default DataSource;
