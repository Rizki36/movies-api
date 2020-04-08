class CardItem extends HTMLElement{
    constructor(){
        super()
        this.shadowDOM = this.attachShadow({mode:"open"})   
    }

    connectedCallback(){
        this.render();
    }
    
    set movie(movie){
        this._movie = movie
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        
        <style>
            :host{
                position: relative;
                display: flex;
                flex-direction: column;
                margin-right: 8px;
                margin-left: 8px;
                margin-bottom: 30px;
            }
            
            .rate{
                align-self: center;
                text-align: center;
                background-color: #FFBD08;
                min-width: 30px;
                height: 20px;
                border-radius: 10px;
                font-size: 10px;
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 100;
                cursor: pointer;
            }
            
            .thumbnail{
                margin-top: 10px;
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
                cursor: pointer;
            }
            
            .thumbnail .icon-play{
                position: absolute;
                display: flex;
                background-color: rgba(255, 23, 128, 0.618) ;
                opacity: 0;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                align-items: center;
                justify-content: center;
                font-size: 30px;
                transition: .2s;
                text-align:center
            }
            
            .thumbnail:hover .icon-play{
                opacity: 1;
            }
            
            .thumbnail img{
                width: 100%;
            }
            
            .title,
            .category{
                cursor: pointer;
            }
            
            .title{
                margin-top: 10px;
                font-size: 12px;
                font-weight: bold;
            }
            
            .category{
                font-size: 10px;
                margin-top: 3px;
                font-weight: normal;
                color: rgb(160, 174, 188);
            }
        </style>

            <div class="rate">5.0</div>
            <div class="thumbnail">
                <span class="icon-play">
                    Coming Soon
                </span>
                <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wmMq5ypRNJbWpdhC9aPjpdx1MMp.jpg" alt="">
            </div>
            <span class="title">${this._movie}</span>
            <span class="category">${this._movie}</span>
        `;
    }
}
customElements.define('card-item',CardItem)