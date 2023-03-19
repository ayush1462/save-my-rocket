import kaboom from "kaboom";
kaboom({
    background: [36, 0, 77]
})

loadSprite("rocket", "./sprites/rocket.png")
loadSprite("object", "./sprites/object.png")

const SPEED = 620;
var OBJ_SPEED = 3;
const player = add([
    sprite("rocket"),
    scale(0.15),
    pos(120, 620),
    area(),
])

onKeyDown("left", () => {
    player.move(-SPEED, 0)
})

onKeyDown("right", () => {
    player.move(SPEED, 0)
})


setInterval(function () {
    for (let i = 0; i < 10; i++) {
        let x = rand(0, width());
        let y = height();


        let c = add([
            sprite("object"),
            pos(x, 0),
            scale(0.5),
            area(),
            "obj"
        ])
        c.onUpdate(() => {
            c.moveTo(c.pos.x, c.pos.y + OBJ_SPEED)
        })
    }

}, 4000);

player.onCollide("obj", () => {
    destroy(player)
    add([
        text("Game Over"),
        pos(width() / 2, height() / 2),
    ])
    addKaboom(player.pos)
})
