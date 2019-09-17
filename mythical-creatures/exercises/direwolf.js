class Direwolf {
  constructor(name, home, size) {
    this.name = name
    this.home = home || 'Beyond the Wall'
    this.size = size || 'Massive'
    this.starksToProtect = []
    this.huntsWhiteWalkers = true
  }

  protect(stark) {
    if (stark.location == this.home) {
      if (this.starksToProtect.length < 2) {
        this.starksToProtect.push(stark)
        stark.safe = true
        this.huntsWhiteWalkers = false
      }
    }
  }

  leave(stark_to_remove) {
    let newArray = this.starksToProtect.filter(stark => {
      return stark !== stark_to_remove
    })
    this.starksToProtect = newArray
    stark_to_remove.safe = false
  }

}

module.exports = Direwolf;
