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

Pops.prototype.subtotal = function() {
  var subtotal = 0;
  if (this.popsSize === "small") {
    subtotal = 2;
  } else if (this.popsSize === "medium") {
    subtotal = 3;
  } else if (this.popsSize === "big") {
    subtotal = 5;
  } else if (this.popsSize === "xl") {
    subtotal = 7;
  }

  this.popsaddon.forEach(function() {
    cost += 1.00;
  });
  this.subtotal = subtotal;
}
