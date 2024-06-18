export const toTopPage = (top: number | undefined) => {
    window.scrollTo({
        top: top,
        behavior: `smooth`
    })
}