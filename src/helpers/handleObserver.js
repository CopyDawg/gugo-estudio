

export const handleObserver = (element) => {
    
    const inViewport = (entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("slide", entry.isIntersecting );
            if (entry.isIntersecting) Obs.unobserve(entry.target);
        });
    };

    const Obs = new IntersectionObserver(inViewport, { } );

    const container = document.querySelectorAll(element);

    container.forEach( el => {
        Obs.observe(el);
    })
    
}
