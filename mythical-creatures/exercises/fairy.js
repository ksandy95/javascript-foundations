class Fairy {
  constructor(name) {
    this.name = name
    this.dust = 10
    this.clothes = {dresses: ['Iris']}
    this.disposition = 'Good natured'
    this.humanWards = []
  }

  receiveBelief() {
    this.dust++
  }

  believe() {
    this.dust += 10
  }

  makeDresses(new_dresses) {
    this.clothes.dresses.concat(new_dresses)
  }

  provoke() {
    this.disposition = 'Vengeful'
  }

  replaceInfant(infant) {
    if (this.count >= 3) {
      this.disposition = 'Good natured'
    }
    if (this.disposition === 'Vengeful') {
      this.count++
      let newInfant = infant
      newInfant.disposition = 'Malicious'
      this.humanWards.push(infant)
      return newInfant
    } else {
      this++
      return infant
    }
  }
}


module.exports = Fairy;
