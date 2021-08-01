let eq = ''
let result = ''
let memory = ''

$('button.clear-all').click(function () {
    // stuff goes here
    eq = ''
    $('div.held-label').text('RUNNING TOTAL')
  })

  $('button.clear-entry').click(function () {
    // stuff goes here
    eq = eq.slice(0, -1)
    $('div.held-label').text(eq)
  })

  $('button.memory-store').click(function () {
    // stuff goes here
    memory = eq
  })

  $('button.memory-recall').click(function () {
    // stuff goes here
    eq = eq + memory 
    updateEq()
  })

  $('button.memory-clear').click(function () {
    // stuff goes here
    memory = ''
  })

  $('button.add').click(function () {
    // stuff goes here
    if(eq.slice(-1) !== "+" && eq.slice(-1) !== "-" && eq.slice(-1) !== "*" && eq.slice(-1) !== "/" && eq.slice(-1) !== ""){
      eq = eq + "+"
    }
  })

  $('button.subtract').click(function () {
    // stuff goes here
    if(eq.slice(-1) !== "+" && eq.slice(-1) !== "-" && eq.slice(-1) !== "*" && eq.slice(-1) !== "/" && eq.slice(-1) !== ""){
      eq = eq + "-"
    }
  })

  $('button.multiply').click(function () {
    // stuff goes here
    if(eq.slice(-1) !== "+" && eq.slice(-1) !== "-" && eq.slice(-1) !== "*" && eq.slice(-1) !== "/" && eq.slice(-1) !== ""){
      eq = eq + "*"
    }
  })

  $('button.divide').click(function () {
    // stuff goes here
    if(eq.slice(-1) !== "+" && eq.slice(-1) !== "-" && eq.slice(-1) !== "*" && eq.slice(-1) !== "/" && eq.slice(-1) !== ""){
      eq = eq + "/"
    }
  })

  $('button.equals').click(function () {
    // stuff goes here
    eq = eval(eq).toString()
  })





$('section.digits button:nth-of-type(1)').click(function () {
    // stuff goes here
    eq = eq + "1"
  })

  $('section.digits button:nth-of-type(2)').click(function () {
    // stuff goes here
    eq = eq + "2"
  })

  $('section.digits button:nth-of-type(3)').click(function () {
    // stuff goes here
    eq = eq + "3"
  })

  $('section.digits button:nth-of-type(4)').click(function () {
    // stuff goes here
    eq = eq + "4"
  })

  $('section.digits button:nth-of-type(5)').click(function () {
    // stuff goes here
    eq = eq + "5"
  })

  $('section.digits button:nth-of-type(6)').click(function () {
    // stuff goes here
    eq = eq + "6"
  })

  $('section.digits button:nth-of-type(7)').click(function () {
    // stuff goes here
    eq = eq + "7"
  })

  $('section.digits button:nth-of-type(8)').click(function () {
    // stuff goes here
    eq = eq + "8"
  })

  $('section.digits button:nth-of-type(9)').click(function () {
    // stuff goes here
    eq = eq + "9"
  })

  $('section.digits button:nth-of-type(10)').click(function () {
    // stuff goes here
    eq = eq + "."
  })

  $('section.digits button:nth-of-type(11)').click(function () {
    // stuff goes here
    eq = eq + "0"
  })

  
  function updateEq() {
    $('div.held-label').text(eq)
  }

  $('section.digits button').click(updateEq)
  $('section.operations button').click(updateEq)