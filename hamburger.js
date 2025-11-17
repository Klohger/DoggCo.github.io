
document.addEventListener('mousedown', (ev) => { /** @type {HTMLImageElement} */
/** @type {[HTMLElement, HTMLAudioElement]} */
    const [image, audio] = get_hamburg();

    {
        const m = Math.min(window.innerWidth, window.innerHeight) * 0.05;
        image.style.top = `${(ev.clientY + window.scrollY) - m}px`
        image.style.left = `${(ev.clientX + window.scrollX) - m}px`
    };
    audio.preservesPitch = false;
    
    audio.playbackRate = 1 + (Math.random()*0.125-0.0625);
    audio.volume = 0.25;
    audio.addEventListener('play', () => {
        HAMBURGERS.appendChild(image)
        void image.offsetHeight;
        image.style.opacity = 1;
    });
    audio.play();
});