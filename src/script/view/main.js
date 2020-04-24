import '@fortawesome/fontawesome-free/js/all.js';
import '../../modal/animatedModal.js';
import '../component/card-item.js';
import '../component/card-list.js';
import DataSource from '../data/data-source'
const main = ()=>{
    const dataSource     = new DataSource,
          cardList       = document.querySelector('card-list'),
          searchEndpoint = '/search/movie'
    let   searchKeyWord  = ''

    async function getMovies(endpoint='trending/movie/week',page='1',query=''){
        try {
            const movies = await dataSource.getMovies(endpoint,page,query)
            const genres = await dataSource.getGenres()
            render(movies.results,genres.genres)
        } catch (error) {
            console.log(error)
        }
    } 

    const render = (movies,genres)=>{
        cardList.genres = genres
        cardList.movies = movies
    }

    document.addEventListener('DOMContentLoaded', (event) => {
        getMovies()
    })

    $('#input-search').on('keypress',function(event){
        const keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13') {
            searchKeyWord  = $(this).val().replace(/\s+/g, '+');
            $('body').attr('data-endpoint',searchEndpoint)
            getMovies(searchEndpoint,'1',`&query=${searchKeyWord}`)
        }
    })

    $('aside li').on('click',function(e){
        e.preventDefault()
        $('aside li').removeClass('active');
        $(this).addClass('active');
        
        let   endpoint   = $(this).children('a').attr('href'),
              title      = $(this).children('a').html();
        const pagination = `<li><a></a></li>
                            <li class="active"><a>1</a></li>
                            <li><a>2</a></li>`;
        getMovies(endpoint);
        
        $('#title').html(title);
        $('body').attr('data-endpoint',endpoint);
        $('article .pagination').html(pagination)
    })

    $('body').on('click','article .pagination li a',function(e){
        e.preventDefault();
        const onPage   = parseInt($(this).html()),
              endpoint = $('body').attr('data-endpoint'),
              template = `<li><a>${onPage-1==0?'':onPage-1}</a></li>
                         <li class="active"><a>${onPage}</a></li>
                         <li><a>${onPage+1}</a></li>`
        
        document.documentElement.scrollTop = 0
        
        if(endpoint != searchEndpoint){
            getMovies(endpoint,onPage)
        }else{
            getMovies(endpoint,onPage,`&query=${searchKeyWord}`)
        }
        
        $('article .pagination').html(template)
    })

    $('#btn-expand').on('click',function(){
        $('aside').addClass('show-aside')
    })

    $('#btn-back').on('click',function(e){
        $('aside').removeClass('show-aside')
    })

}

export default main;