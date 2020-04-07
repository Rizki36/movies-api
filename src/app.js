import _ from 'lodash';
import $ from 'jquery';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
import './style.css';

$('a').on('click',function(e){
    e.preventDefault()
    $('a').closest('li').removeClass('active');
    $(this).closest('li').addClass('active');
})

