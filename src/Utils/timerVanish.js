export const timerVanish = (state, setState) => {
    setState(true)
    const timerId = setTimeout(() => {
        setState(false)
        clearTimeout(timerId)
    }, 3000)
}