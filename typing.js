new TypeIt("#typewriter", { 
    startDelay: 900,
    speed: 50
})
.type("This is the most Versatile", {delay: 100})
.move(-9, {delay: 100})
.type("Powerful & ", {delay: 100})
.move(null, {to: "END"})
.type(" CSS Framework of all time!!!", {delay: 100})
.go()
