const applyVariantDesktopOnly = (variant, isMobile) => {
    if(isMobile){
        return {}
    } else {
        return {
            variants: variant ,
            initial: "hidden",
            animate: "visible"
        }
    }
}