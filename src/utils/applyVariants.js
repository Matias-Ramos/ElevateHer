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
export default applyVariant