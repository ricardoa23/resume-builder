// postcss.config.js
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true // ✅ Add this to allow Node.js globals like `module`
    },
    extends: [
        "eslint:recommended"
    ],
    rules: {
        "no-undef": "off" // Optional: Disables `no-undef` for this case
    }
};
  
  