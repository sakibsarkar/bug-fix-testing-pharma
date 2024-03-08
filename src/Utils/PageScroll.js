export const pageScroll = (id) => {
    const element = document.querySelector(id);
    console.log(id, element);
    element?.scrollIntoView({ behavior: "smooth" });
}