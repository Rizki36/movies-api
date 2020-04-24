import './card-item';
class CardList extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"})
    }

    set movies(movies){
        this._movies = movies;
        this.render()
        console.log(movies)
    }

    set genres(genres){
        this._genres = genres;
    }

    render(){       
        this.shadowDOM.innerHTML = `
        <style>
        :host{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        </style>
        `
        this._movies.forEach(movie=>{
            const CardItem = document.createElement('card-item')
            let genres = []
            movie.genre_ids.forEach(genre_id=>{
                this._genres.forEach(genre=>{
                    if(genre_id == genre.id){
                        genres.push(genre.name)
                    }
                })
            })
            CardItem.movie = movie
            CardItem.genres = genres.join(', ')
            this.shadowDOM.appendChild(CardItem)
        })
    }
}
customElements.define('card-list',CardList);