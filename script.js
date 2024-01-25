gsap.to(".card", {
    rotateY: 180,
    duration: 2.0,
    ease: "power4.inOut",
    repeat: -1,
    yoyo: true
});
document.onload = function() {
    document.getElementById('yourAudioTagId').play();
}
