class DataSource{
    constructor(baseUrl = 'https://api.themoviedb.org/3',token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA5ZWMwNjlmMTJlODQ4MGMwNGI1OTRhZTRjN2VkYiIsInN1YiI6IjVlODk1YzUwZDU1YzNkMDAxNzUyYjRhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P8Qjtn610F_yefESC2sJpL_f96NV4nb9k2MmctsrjlU'){
        this.baseUrl = baseUrl;
        this.token   = token;
    }

    search(keyword){
        console.log(keyword)
    }
    
    // class DataSource
    getMovies(page='1',endpoint='trending/movie/week'){
        return fetch(`${this.baseUrl}/${endpoint}?page=${page}`,{
            method:'Get',
            headers:{
                'Authorization': `Bearer ${this.token}`,
                'Accept': 'application/json',
                'Content-Type' :'application/json'
            }
         })
        .then(response=>{
            return response.json();
        })
        .then(responseJson=>{
            return Promise.resolve(responseJson.results);
        })
        // .catch(error=>{
        //     this.messageError(error)
        // })
    }

    render(Movies){

    }

    messageError(message = 'Koneksi error'){
        alert(message)
    }
}
export default DataSource;