function popupFn() {
    document.getElementById(
        "overlay"
    ).style.display = "block";
    document.getElementById(
        "popupDialog"
    ).style.display = "flex";
}
function closeFn() {
    document.getElementById(
        "overlay"
    ).style.display = "none";
    document.getElementById(
        "popupDialog"
    ).style.display = "none";
}