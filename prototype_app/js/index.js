// när man väljer kontrakt så ...
$("body").on("change", "#contract", update)
// ...
$("body").on("click", ".phone, .contract, .data, .extra", update)
$("body").on("click", "#order>button", toggleOrderForm)
$("body").on("submit", "#order", submitOrderForm)
$("body").on("click", "#return", closeConfirmation)


/*
  funktionen update kallas på när, för att ...
*/
function update() {
  console.log('update was called')
  // telefonen som valts läggs i variablen phone
  let phone = $(".phone>input:checked").val()
  // ...
  let whatPhone = $(".phone>input:checked").parent().find("h2").text()
  phone = parseInt(phone)
  phone = phone ? phone : 0

  let contract = $("#contract>option:selected").val()
  let whatContract = $("#contract>option:selected").text()
  contract = parseInt(contract)
  contract = contract ? contract : 0

  let data = $(".data>input:checked").val()
  data = parseInt(data)
  data = data ? data : 0
  let whatData = $(".data>input:checked").parent().find("label").text()

  let extra = 0
  $(".extra>input:checked").each(function () {
    let x = parseInt($(this).val())
    if (x > 0) {
      extra += x
    }
  })

  let price = phone + contract + data + extra
  price = discount(price, whatPhone, whatContract, whatData)
  $("#price").val(price)
  display(price)
}


function discount(price, whatPhone, whatContract, whatData, whatExtras) {
  let text = ''
  let textExtra = ''
  if (whatPhone == "iPhone G" && whatContract == "12 mån Student") {
    price = price * 0.8
    text = "Du får 20% rabatt på totalsumman när du väljer iPhone G och 12 månader Student!"

  } else if (whatPhone == "iPhone Z" && whatContract == "18 mån Silver") {
    price = price * 0.9
    text = "Du får 10% rabatt på totalsumman när du väljer iPhone Z och 18månader Silver!"

  } else if (whatData == "100 GB" && whatContract == "24 mån Guld") {
    price = price * 0.75
    text = "Du får 25% rabatt på totalsumman när du väljer 100 GB datamängd och 24 månader guld!"
  }

  if (whatPhone == 'iPhone G') {
    price = price - 30
    textExtra = "Airy Flayphones ingår  när du köper iPhone G!"
    $('.extra:nth-child(4)>input').click()
  }

  $("#notice").children("h2").html(text + '<br>' + textExtra)
  $("#confirm").children("h2").html(text + '<br>' + textExtra)

  if (text || textExtra) {
    $("#notice").show(500).delay(1000).hide(500)
  }

  return price
}


function display(price) {          //  789
  price = price.toString()         // "789"
  price = price.split("")          // ["7","8","9"]
  price = price.reverse()          // ["9","8","7"]
  let p_100 = 0
  if (price[2]) {
    p_100 = price[2]               // "7"
  }
  let p_10 = 0
  if (price[1]) {
    p_10 = price[1]                // "8"
  }
  let p_1 = price[0]               // "9"
  let f = 30
  $(".n-100").animate({ "margin-top": p_100 * -f })
  $(".n-10").animate({ "margin-top": p_10 * -f })
  $(".n-1").animate({ "margin-top": p_1 * -f })
}


function createOrderConfirmation() {
  let list = $('<ul class="form-data"></ul>')
  list.append("<li><h2>Din beställning är mottagen!</h2></li>")
  $("#order input").each(function () {
    list.append("<li>" + $(this).attr("placeholder") + ": " + $(this).val() + "</li>")
  })
  $("#confirm").prepend(list)
}


function toggleOrderForm(e) {
  e.preventDefault()
  $("#order>input").toggle()
  $(this).toggleClass("showing-form")
}


function submitOrderForm(e) {
  e.preventDefault()
  $("#order>input").hide()
  createOrderConfirmation()
  $("#confirm").fadeIn(500)
}


function closeConfirmation(e) {
  e.preventDefault()
  $(".form-data").remove()
  $("#confirm").fadeOut(500)
}
