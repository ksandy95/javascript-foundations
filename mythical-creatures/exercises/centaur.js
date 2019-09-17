class Centaur {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
    this.cranky = false
    this.standing = true
    this.count = 0
    this.layingDown = false
  }

  shoot() {
    if (this.cranky === false && this.layingDown === false) {
      this.count++
      if (this.count >= 3) {
        this.cranky = true
      }
      return 'Twang!!!'
    } else {
      return 'NO!'
    }
  }

  run() {
    if (this.cranky === false && this.layingDown === false) {
      this.count++
      if (this.count >= 3) {
        this.cranky = true
      }
      return 'Clop clop clop clop!!!'
    } else {
      return 'NO!'
    }
  }

  sleep() {
    if (this.standing === true) {
      return 'NO!'
    } else {
      this.cranky = false
      return 'ZZZZ'
    }
  }

  layDown() {
    if (this.standing === true) {
      this.standing = false
      this.layingDown = true
    }
  }

  standUp() {
    if (this.standing === false) {
      this.standing = true
      this.layingDown = false
    }
  }

  drinkPotion() {
    if (this.standing === true) {
      if (this.cranky === false) {
        this.cranky = true
      } else {
        this.cranky = false
      }
    } else {
      return 'Not while I\'m laying down!'
    }
  }

}


module.exports = Centaur;
