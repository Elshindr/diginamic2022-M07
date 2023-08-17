class Base {
  private _x = 12;
  get x() {
    return this._x;
  }
}
const b = new Base();
console.log(b.x);