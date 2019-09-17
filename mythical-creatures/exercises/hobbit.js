class Hobbit {

  constructor(name, disposition, age) {
    this.name = name
    this.disposition = disposition || 'homebody'
    this.age = age || 0
    this.adult = false
    this.old = false
    this.isShort = true
    this.hasRing = false
     if(this.name === 'Frodo') {
       this.hasRing = true;
     } else {
       this.hasRing = false;
     }
  }

  celebrateBirthday(){
    this.age += 1
    if (this.age >= 33) {
      this.adult = true
    }
    if (this.age > 100) {
      this.old = true
    }
  }
}


module.exports = Hobbit;
