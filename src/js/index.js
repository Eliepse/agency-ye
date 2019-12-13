import Parallax from 'parallax-js'

let scenes = document.querySelectorAll('.parallax');

scenes.forEach(scene => {
    new Parallax(scene);
});