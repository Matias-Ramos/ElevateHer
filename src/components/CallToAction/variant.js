const headerVariant = {
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            delay: 0.5,
            bounce: 0.25,
        }
    }
}

const videoVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.25
        }
    }
}




export { headerVariant, videoVariant, applyLogoVariant };