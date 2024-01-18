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
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.75
        }
    },
}

const applyVariantMobileOnly = (isMobile) => {
    const variant = {
        hidden: isMobile ? iconsMobileVariant.hidden : {},
        visible: isMobile ? iconsMobileVariant.visible : {},
    };

    return {
        initial: {...variant.hidden},
        whileInView: {...variant.visible}
    }
};
export { applyVariantMobileOnly };

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
            delay: 0.5,
            bounce: 0.25,
        }
    }
}

/****************** */
export { iconsDktpVariant, iconsMobileVariant, textVariant };