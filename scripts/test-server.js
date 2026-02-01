
async function testServer() {
  console.log('Testing connectivity to http://localhost:3000/api/contact...');
  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: 'Debug',
        lastName: 'User',
        email: 'debug@example.com',
        subject: 'Connectivity Test',
        message: 'This is a test message from the verification script.'
      })
    });
    
    console.log(`Response Status: ${response.status}`);
    const data = await response.json();
    console.log('Response Body:', data);
    
    if (response.ok) {
      console.log('✅ SUCCESS: Server is reachable and processing requests.');
    } else {
      console.log('⚠️ SERVER ERROR: Server reached but returned an error.');
    }
  } catch (error) {
    console.error('❌ CONNECTION FAILED:', error.message);
    if (error.cause) console.error('Cause:', error.cause);
  }
}

testServer();
