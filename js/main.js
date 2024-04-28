"use strict";
// elements
const box = document.querySelector(".box");
// constants
const HOVER_CLASS = "hover";
// utils
const px = (value) => `${value}px`;
const getPseudoCoordinates = () => {
    const pseudoStyles = getComputedStyle(box, "::before");
    const { top, left } = pseudoStyles;
    return { top, left };
};
const setEnterVariables = () => {
    const { top, left } = getPseudoCoordinates();
    box.style.setProperty("--enter-top", top);
    box.style.setProperty("--enter-left", left);
};
const setLeaveVariables = () => {
    const { top, left } = getPseudoCoordinates();
    box.style.setProperty("--leave-top", top);
    box.style.setProperty("--leave-left", left);
};
const setCurrentVariables = (e) => {
    const { pageX, pageY } = e;
    const { x, y } = box.getBoundingClientRect();
    const pseudoSize = parseFloat(getComputedStyle(box, "::before").width);
    const top = pageY - y - pseudoSize / 2;
    const left = pageX - x - pseudoSize / 2;
    box.style.setProperty("--current-top", px(top));
    box.style.setProperty("--current-left", px(left));
};
const addHoverClass = () => box.classList.add(HOVER_CLASS);
const removeHoverClass = () => box.classList.remove(HOVER_CLASS);
// Actual code
box.addEventListener("mouseenter", (e) => {
    setEnterVariables();
    addHoverClass();
});
box.addEventListener("mousemove", (e) => {
    setCurrentVariables(e);
});
box.addEventListener("mouseleave", (e) => {
    setLeaveVariables();
    removeHoverClass();
});
