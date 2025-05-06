/**
 * Otomasi penanaman pohon
 * 
 * player.onChat("Hijaukan", function () {
 * 
 * for (let index = 0; index < 5; index++) {
 * 
 * agent.setItem(OAK_SAPLING, 64, 1)
 * 
 * agent.move(FORWARD, 1)
 * 
 * agent.place(DOWN)
 * 
 * }
 * 
 * })
 */
player.onChat("Ukur_Polusi", function () {
    if (Polusi > 0) {
        player.say("Polusi: " + Polusi)
    } else {
        player.say("Udara Bersih!")
    }
})
let Polusi = 0
// Polusi lagi
Polusi = 20
