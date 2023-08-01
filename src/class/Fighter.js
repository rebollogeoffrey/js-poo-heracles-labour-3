const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity, image, x, y) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.image = image;
    // x and y have to be in the range of 1 to 10
    this.x= (x<=10 && x>=1)? x : 5;
    this.y= (y<=10 && y>=1)? y : 5;
  }

  /** 
   * Launch a strike
   * @param Fighter defender
   */
  fight(defender) {
    let attackPoints = this.getRandomInt(this.getDamage());
    let damages = Math.max(attackPoints - defender.getDefense(), 0);
    defender.life = Math.max(defender.life - damages, 0);
  }

  /**
   * Calculate the value of the defense
   * @returns
   */
  getDamage() {
    return this.strength;
  }

  /**
   * Calculate the value of the attack
   * @returns
   */
  getDefense() {
    return this.dexterity;
  }

  /**
   * Make a random number between 1 and 100
   * @param Number max
   * @returns Number
   */
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  /**
   * Check if the fighters is still alive
   * @returns Boolean
   */
  isAlive() {
    return this.life > 0;
  }
}
