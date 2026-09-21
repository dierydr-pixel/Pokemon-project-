// fetch('https://pokeapi.co/api/v2/pokemon/pikachu') .then((response) => response.json()) .then(json=>{
//     console.log(json)
//     document.getElementById ("pikachu_profile") .src = json.sprites.front_shiny
// })
var slideshow = []
var i = 0;
async function get() {
    var data = null
    var res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

data = await res.json()

for (let i = 2; i < Object.keys(data.sprites).length; i++) {
    var list = Object.keys(data.sprites)
    slideshow.push(data.sprites[list[i]])
    
}

for (let i = 0; i < data.stats.length; i++) {
    document.getElementById("stats2").innerHTML =
        data.stats[i].stat.name + ": " + data.stats[i].base_stat;
}
function next() {
    if (i == 7) return
    document.getElementById ("pikachu_profile") .src = slideshow[i]
    i++
}
function previous() {
    if (i == 0) return 
    document.getElementById("pikachu_profile") .src = slideshow[i]
    i--
}
    document.getElementById("Next").onclick = next
    document.getElementById("Previous").onclick = previous
}
get()

