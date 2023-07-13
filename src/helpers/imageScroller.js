
export const imageScroller = () => {

    let scrollContainer = document.querySelector(".tattoos-section-scroller");
    let prevBtn = document.getElementById("prevBtn");
    let nextBtn = document.getElementById("nextBtn");
    let scrollImage = document.querySelector(".tattoo-section-image");
    
    scrollContainer.addEventListener( "wheel", (event) => {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY;
    });
    
    prevBtn.addEventListener( "click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= scrollImage.offsetWidth;
    });
    
    nextBtn.addEventListener( "click", () => {

        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += scrollImage.offsetWidth;
    });

}

