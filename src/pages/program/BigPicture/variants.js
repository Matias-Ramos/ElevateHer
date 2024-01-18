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
            delay: 0.35,
            bounce: 0.25,
        }
    }
}

/****************** */

export { iconsDktpVariant, textVariant };