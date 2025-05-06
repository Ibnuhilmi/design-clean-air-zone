// Otomasi penanaman pohon
player.onChat("Hijaukan", function(){
    for (let i = 0; i < 5; i++){
        agent.setItem (OAK_SAPLING, 64, 1)
        agent.move (FORWARD, 1)
        agent.place (DOWN)
    }
})