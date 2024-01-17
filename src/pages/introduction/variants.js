const headerVariant = {
    hidden: {
        opacity: 0,
        x: 150
    },
    visible: {
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


const applyLogoVariant = (isMobile) => {
    const variant = {
        hidden: {
            opacity: 0,
            y: isMobile ? -150 : 150,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                delay: 0.5,
                bounce: 0.25,
            }
        }
    };

    return {
        initial: {...variant.hidden},
        animate: {...variant.visible}
    }
};


export { headerVariant, videoVariant, applyLogoVariant };