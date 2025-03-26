const adjectives = ['silent', 'unit', 'ghost', 'dark', 'flux', 'echo'];
const numbers = () => Math.floor(100 + Math.random() * 900);

function generateAlias() {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  return `${adj}${numbers()}.darkos`;
}

module.exports = generateAlias;
