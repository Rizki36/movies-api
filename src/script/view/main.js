import '@fortawesome/fontawesome-free/js/all.js';
import '../../modal/animatedModal.js';
import '../component/card-item.js';
import DataSource from '../data/data-source'
const main = ()=>{
    const dataSource = new DataSource;
    try {
        async()=>{
            const result = await dataSource.getMovies()
            console.log(result)
        } 
    } catch (error) {
        console.log(error)        
    }
}

export default main;

$('a').on('click',function(e){
    e.preventDefault()
    $('a').closest('li').removeClass('active');
    $(this).closest('li').addClass('active');
})