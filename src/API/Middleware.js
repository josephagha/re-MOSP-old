/* import React from 'react'

function initLoginForm() {
  if ($('body#login').length) {
    $('#inputPaxId').val(getLoginData().paxId)
    $('#inputEmbarkationDate').val(getLoginData().embarkationDate)
    $('#inputDisembarkationDate').val(getLoginData().disembarkationDate)
    $('#inputBookingNumber').val(getLoginData().bookingNumber)

    $('#inputEmbarkationDate').datepicker({
      language: 'de',
      format: 'yyyy-mm-dd',
    })
    $('#inputDisembarkationDate').datepicker({
      language: 'de',
      format: 'yyyy-mm-dd',
    })
  }

  $('#form-login').on('submit', function() {
    event.preventDefault()

    paxId = $('#inputPaxId').val()
    embarkationDate = $('#inputEmbarkationDate').val()
    disembarkationDate = $('#inputDisembarkationDate').val()
    bookingNumber = $('#inputBookingNumber').val()

    if (!isValidDate(embarkationDate) || !isValidDate(disembarkationDate)) {
      alert('Dies ist kein valides Datum')
    } else {
      if (
        paxId !== '' &&
        embarkationDate !== '' &&
        disembarkationDate !== '' &&
        bookingNumber !== ''
      ) {
        // Ä, Ö, Ü, ä, ö, ü, ß
        // phrase.split('dog').join('')
        // var newStr = myStr.replace(/ß/g, 'ss')

        setLoginData(paxId, embarkationDate, disembarkationDate, bookingNumber)
        window.location.href = 'products.html'
      } else {
        alert('Bitte füllen Sie die Felder aus')
      }
    }
  })
}

function initProductsForm() {
  if ($('body#products').length) {
    showProductDetails('mvp01')
  }

  $('#form-products').on('submit', function() {
    event.preventDefault()

    amount = $('input[name=amount]:checked').val()

    if (amount !== undefined) {
      checkout('mvp01', amount)
    } else {
      alert('Bitte wählen Sie einen Betrag aus')
    }
  })
}

function initCheckouts() {
  $('#checkouts-refresh').on('click', function() {
    updateCheckouts()
  })

  if ($('.checkouts-view').length) {
    updateCheckouts()
  }
}

function initSuccess() {
  if ($('body#success').length) {
    amount = window.location.hash.substr(1)
    if (amount === '') {
      window.location.href = 'products.html'
    }

    $('#success-amount').text(amount)
  }
}
 */
