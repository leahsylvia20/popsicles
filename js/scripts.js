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
Pops.prototype.addAddon = function(addon) {
  this.addon.push(addon);
}

Pops.prototype.subtotal = function() {
  var cost = 0;
  if (this.popsSize === "small") {
    cost = 2;
  } else if (this.popsSize === "medium") {
    cost = 3;
  } else if (this.popsSize === "big") {
    cost = 5;
  } else if (this.popsSize === "xl") {
    cost = 7;
  }

  this.popsAddon.forEach(function() {
    cost += 1.00;
  });
  this.cost = cost;
}

// Order Constructor
function Order(subtotal) {
  this.subtotal = subtotal

Order.prototype.addPops = function(pops) {
  pops.subtotal();
  this.pops.push(pops);
}

Order.prototype.determineCost = function() {
  var totalCost = 0;
  this.pops.forEach(function(pops) {
    totalCost += pops.subtotal;
});

  function CustomerInfo(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.pops = [];
}

  this.totalCost = totalCost;
}

// User Interface Logic

var nextDiv = function(toHide, toShow) {
  $(toHide).hide();
  $(toShow).show();

  var createPops = function() {
    var popsSize = $('input[name="size"]:checked').val();
    var popsFlavor = $('input[name="flavor"]:checked').val();
    var popsAddon = $('input[name="addon"]:checked').val();
    var newPops = new Pops(popsSize, popsAddon);

    $('input[name="size"]:checked').each(function() {
      newPops.size($(this).val());
    });
    var popsAddon = [];
    $('input[name="Addon"]:checked').each(function() {
      newPops.addAddon($(this).val());
    });

    var createCustomerInfo = function() {
      var Name = $('#name').val();
      var Address = $('#street').val() + ', ' + $('#city').val() + ', ' + $('#zip').val();
      var Phone = $('#phone').val();
      return new Order(name, address, phone);
    }
    return newPops;
    }

  }
  var FinalTotal = function(order) {
    order.TotalCost();
    return order.totalCost;
  }

    $(document).ready(function() {
      var Order = new Order();

      // Order my pops now button
      $('.start-order button').click(function() {
        event.preventDefault();
        Order = createPops();
        nextDiv('.start-order', '.order-input');
      });

      // order input submit
      $('.order-input form').submit(function(event) {
        event.preventDefault();
        Order = createPops();
        nextDiv('.order-input', '.checkout');
      });

      $('.checkout form').submit(function(event) {
        event.preventDefault();
        Order = createFinalTotal();
        nextDiv('.checkout', '.customer-info');
      });

      $('.customer-info form').submit(function(event) {
        event.preventDefault();
        Order = createCustomerInfo();
      });

        var thisPops = createPops();
        Order.addPops(thisPops);
      });

    // add pops
    $('.order form').submit(function(event) {
      event.preventDefault();
      var thisPops = createPops();
      Order.addPops(thisPops);
      nextDiv('.order-pops-input', '.checkout-order');
    });

    // sumbit order
    $('#checkout-order').click(function(event) {
      nextDiv('.checkout order', '.order-summary');
      debugger
    });


    // console log
    $('#console-log').click(function() {
      console.log(Order);
    })
  }
