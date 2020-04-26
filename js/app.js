$(document).foundation()

let animation = () => {
    var nameAn = TweenMax.to('#name', 1, {
        scaleY: "1",
        ease: "expo"
    })
    let titleAn = TweenMax.to('#title', 1, {
        scaleY: "1",
        ease: "expo.out"
    }).delay(.5)
    let lineAn = TweenMax.to('.line', 1, {
        scaleX: "1",
        ease: "expo.out"
    }).delay(.5)
    let logoAn = TweenMax.to('#devlogo', 1, {
        opacity: "1",
        ease: "expo.out"
    }).delay(.7)

animation()