import { helloWebpack } from './hellowebpack';
import logo from './images/vue-logo.png'


document.getElementById('title').innerHTML = helloWebpack();
document.getElementById('image').src = logo;

// document.write(helloWebpack());