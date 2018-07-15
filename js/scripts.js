// Business Logic
function Pops(size, flavor, addon) {
  this.size = [];
  this.flavor = [];
  this.addon = [];
// this.subtotal)
}

Pops.prototype.addSize = function(size) {
  this.size.push(size);
}
Pops.prototype.addFlavor = function(flavor) {
  this.flavor.push(flavor);
}
Pops.prototype.addAddon = function(addon) {
  this.addon.push(addon);
}
