const applyVariant = (variant, isMobile) => {
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

const applyVariantOnce = (variant) => {
    return{
        variants: variant, 
        initial: "hidden",
        whileInView: "visible"
    }
}
export default applyVariant