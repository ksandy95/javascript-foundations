class Wizard {
  constructor(wizard) {
    this.name = wizard.name
    this.bearded = true
    if(wizard.bearded !== undefined) {
      this.bearded = wizard.bearded;
    }
    this.rested = true
    this.count = 0
  }

  incantation(words) {
    return words.toUpperCase()
  }

  cast() {
    this.count += 1
    if (this.count >= 3) {
      this.rested = false
      return 'I SHALL NOT CAST!'
    } else {
      return "MAGIC BULLET"
    }
  }
}


module.exports = Wizard;
