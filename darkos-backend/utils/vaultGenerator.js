function generateVault() {
  const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let vault = '';
  for (let i = 0; i < 44; i++) {
    vault += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return vault;
}

module.exports = generateVault;
