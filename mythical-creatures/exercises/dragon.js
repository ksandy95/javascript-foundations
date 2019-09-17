class Dragon {
  constructor(name, rider, color) {
    this.name = name
    this.rider = rider
    this.color = color
    this.hungry = true
    this.counter = 0
  }

  eat() {
    this.counter += 1
    if (this.counter === 3) {
      this.hungry = false
    }
  }

}

module.exports = Dragon;
