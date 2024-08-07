export const IsIntoView = (ref: React.RefObject<HTMLElement>,
    setIsIntoView: React.Dispatch<React.SetStateAction<boolean>>) => {
    const rect = ref?.current?.getBoundingClientRect()
    if (!rect) {
        return
    } else {
        rect.top < window.innerHeight ? setIsIntoView(true) : setIsIntoView(false)
    }
}