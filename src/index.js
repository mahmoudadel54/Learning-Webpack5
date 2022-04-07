import _ from 'lodash'
import "./assets/style/style.css"
import Img from './assets/img/routing app.jpeg';
const createComp = ()=>{
    let divElem = document.createElement('div');
    divElem.innerHTML = _.join(['Hello', 'webpack'], ' ');
    let img = document.createElement('img');
    img.src=Img;
    img.width = 300;
    img.height = 300;
    divElem.appendChild(img)
    return divElem
};
document.body.appendChild(createComp());
