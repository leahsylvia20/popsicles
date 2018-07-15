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

// Order Constructor
function Order(name, address, phone) {
  this.name = name;
  this.address = address;
  this.phone = phone;

  this.pops = [];
}
Order.prototype.addPops = function(pops) {
  pops.subtotal();
  this.pops.push(pops);
}
Order.prototype.totalCost = function() {
  var totalCost = 0;
  this.pops.forEach(function(pops) {
    totalCost += pops.subtotal;
  });
  this.totalCost = totalCost;
}

// User Interface Logic

  var createOrder = function() {
    var Name = $('#name').val();
    var Address = $('#street').val() + ', ' + $('#city').val() + ', ' + $('#zip').val();
    var Phone = $('#phone').val();

    return Order(name, address, phone);
  }
  var createPops = function() {
    var popsSize = $('input[name="popsSize"]:checked').val();
    var popsFlavor = $('input[name="popsFlavor"]:checked').val();
    var Pops = Pops(size, flavor, addon);
    $('input[name="size"]:checked').each(function() {
      Pops.addsize($(this).val());
    });
    var addon = [];
    $('input[name="addon"]:checked').each(function() {
      Pops.addaddon($(this).val());
    });
