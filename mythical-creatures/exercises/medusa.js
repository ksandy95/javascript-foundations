class Medusa {
  constructor(name) {
    this.name = name
    this.statues = []
  }

  stare(victim) {
    if (this.statues.length < 3) {
      this.statues.push(victim)
      victim.stoned = true
    } else {
      this.unstone(this.statues[0])
      this.statues.push(victim)
      victim.stoned = true
    }
  }

  unstone(victim) {
    victim.stoned = false
    this.statues.shift(victim)
  }

}

module.exports = Medusa;
