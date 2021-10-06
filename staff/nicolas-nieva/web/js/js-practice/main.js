var bananas = { name: 'Banana', quantity: 4, price: 2 }
var oranges = { name: 'Orange', quantity: 10, price: 2 }
var kiwis = { name: 'Kiwi', quantity: 2, price: 6 }
var melons = { name: 'Melon', quantity: 1, price: 2 }

var cart = [bananas, oranges, kiwis, melons]
var total = 0

var table = '<table class="table"><thead><tr><th>name</th><th>quantity</th><th>price</th></tr></thead><tbody>'

for (var i = 0; i < cart.length; i++) { // i++ => i = i + 1
    var item = cart[i]

    total = total + item.quantity * item.price

    var row = '<tr class="table__row"><td>' + item.name + '</td><td>' + item.quantity + '</td><td>' + item.price + '</td></tr>'

    table = table + row
}

table = table + '</tbody>'

var foot = '<tfoot><tr><th colspan="2">total</th><td>' + total + '</td></tr></tfoot>'

table = table + foot + '</table>'

document.write(table)