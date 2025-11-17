/**
 * @name get_hamburg
 * @function
 * @returns {[HTMLElement, HTMLMedia]}
 */

document.addEventListener('mousedown', (ev) => { /** @type {HTMLImageElement} */
    /**@type {[HTMLElement, HTMLMediaElement]}*/const [hamburger, audio] = get_hamburg();
    {
        const m = Math.min(window.innerWidth, window.innerHeight) * 0.05;
        hamburger.style.top = `${(ev.clientY + window.scrollY) - m}px`
        hamburger.style.left = `${(ev.clientX + window.scrollX) - m}px`
    };
    audio.preservesPitch = false;
    
    audio.playbackRate = 1 + (Math.random()*0.125-0.0625);
    audio.volume = 0.25;
    audio.addEventListener('play', () => {
        HAMBURGERS.appendChild(hamburger)
        void hamburger.offsetHeight;
        hamburger.style.opacity = 1;
    });
    audio.play();
});