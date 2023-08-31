export default function sortCharacter(listCharacter) {
    return listCharacter.sort(function(a, b) {
        if (a.health > b.health) {
            return -1
        }
        if (a.health < b.health) {
            return 1
        }
        // return 0
    })
}
let a = 0
