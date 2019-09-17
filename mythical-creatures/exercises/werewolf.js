class Werewolf {
  constructor(name, location) {
    this.name = name
    this.location = location
    this.human = true
    this.wolf = false
    this.hungry = false
  }

  change() {
    if (this.human === true && this.wolf === false) {
      this.human = false
      this.wolf = true
      this.hungry = true
    } else {
      this.human = true
      this.wolf = false
      this.hungry = false
    }
  }

  eat(victim) {
    if (this.human === false) {
      this.change()
      victim.alive = false
    } else {
      return 'I Cannot Eat You!'
    }
  }

}

module.exports = Werewolf;
