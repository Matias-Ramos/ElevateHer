/****************** */

const iconsDktpVariant = {
    hidden: {
        opacity: 0,
        x: -150
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            delay: 0.5,
            bounce: 0.25,
        }
    },
}

/****************** */

const iconsMobileVariant = {
    initial: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5
        }
    },
}

const textVariant = {
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

/****************** */
export { iconsDktpVariant, iconsMobileVariant, textVariant };