import './index.css';
import getData from './modules/fetch-data';

getData()
    .then(response => {
        console.log(response)
    })