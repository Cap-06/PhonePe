function simulatePayment() {
    // Simulate a payment request using a promise
    return new Promise((resolve, reject) => {
      // Simulate a random success or failure
      const isSuccess = Math.random() < 0.5; // 50% chance of success
  
      setTimeout(() => {
        if (isSuccess) {
          resolve();
        } else {
          reject();
        }
      }, 2000); // Simulating a delay of 2 seconds for processing
    });
  }
  
  function showProcessingUI() {
    document.getElementById('processing').style.display = 'block';
    document.getElementById('success').style.display = 'none';
    document.getElementById('failure').style.display = 'none';
  }
  
  function showSuccessUI() {
    document.getElementById('processing').style.display = 'none';
    document.getElementById('success').style.display = 'block';
    document.getElementById('failure').style.display = 'none';
  }
  
  function showFailureUI() {
    document.getElementById('processing').style.display = 'none';
    document.getElementById('success').style.display = 'none';
    document.getElementById('failure').style.display = 'block';
  }
  
  function makePayment() {
    showProcessingUI();
  
    simulatePayment()
      .then(() => {
        // Payment successful
        showSuccessUI();
      })
      .catch(() => {
        // Payment failed
        showFailureUI();
      });
  }