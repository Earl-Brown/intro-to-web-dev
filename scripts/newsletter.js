const registerForNewsletter = async (email) => {
  const msg = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ? `Thank you for registering.  Expect a confirmation at your address: ${email}!`
  : 'Please enter a valid email address.';
  alert(msg);

};

