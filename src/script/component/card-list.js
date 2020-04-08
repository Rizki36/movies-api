import './card-item';
class CardList extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"})
    }

    set movies(movies){
        this._movies = movies;
        this.render()
    }

    render(){
        this.shadowDOM.innerHTML = ``
        this._movies.foreach(movie=>{
            const CardItem = document.createElement('card-item')
            CardItem.movie = movie
            this.shadowDOM.appendChild(CardItem)
        })
    }
}