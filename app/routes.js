const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Branching
router.post('claim-eligible', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let claimeligible = req.session.data['claim-eligible']

  if (claimeligible === 'false') {
    res.redirect('claim-live-no')
  } else {
    res.redirect('claim-live-yes')
  }
})

module.exports = router
