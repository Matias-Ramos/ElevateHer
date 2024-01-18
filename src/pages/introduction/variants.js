
/********************** */
/********************** */
/********************** */
/********************** */


const appearVariant = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1 ,
        transition: {
            delay: 0.5,
        }
    }
}

/********************** */
/********************** */
/********************** */
/********************** */

const logoVariantMobile = {
    hidden: {
        opacity: 0,
        y: -150
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.25,
        }
    }
}
const logoVariantDesktop = {
    hidden: {
        opacity: 0,
        y: 150
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.25,
            delay: 0.5
        }
    }
}
const applyLogoVariant = (isMobile) => {
    const variant = {
        hidden: isMobile ? logoVariantMobile.hidden : logoVariantDesktop.hidden,
        visible: isMobile ? logoVariantMobile.visible : logoVariantDesktop.visible,
    };

    return {
        initial: {...variant.hidden},
        animate: {...variant.visible}
    }
};


/********************** */
/********************** */
/********************** */
/********************** */


const headerVariantDesktop = {
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
const applyTextVariant = (isMobile) => {
    const variant = {
        hidden: isMobile ? appearVariant.hidden : headerVariantDesktop.hidden,
        visible: isMobile ? appearVariant.visible : headerVariantDesktop.visible,
    };

    return {
        initial: {...variant.hidden},
        animate: {...variant.visible}
    }
};

/********************** */
/********************** */
/********************** */
/********************** */

const applyVideoVariant = () => {
    const variant = {
        hidden: appearVariant.hidden,
        visible: appearVariant.visible,
    };

    return {
        initial: {...variant.hidden},
        animate: {...variant.visible}
    }
};

/********************** */
/********************** */
/********************** */
/********************** */

export { applyLogoVariant, applyTextVariant, applyVideoVariant };