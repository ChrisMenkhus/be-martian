const scrollHelper = (ref, gap = 10, initialNavOffset = 0) => {
    let windowoffset = window.pageYOffset;
    let refoffset = ref.current.offsetTop;
    let distancefromtop = ref.current.getBoundingClientRect().top;
    let scrollingover = distancefromtop < gap ? true : false;

    const shouldstick = () => {        
        if (windowoffset > initialNavOffset) {
            return true;
        }
        else {
            return false;
        }
    }

    return({
        windowoffset,
        refoffset,
        distancefromtop,
        scrollingover,
        shouldstick
    })
}

export default scrollHelper;