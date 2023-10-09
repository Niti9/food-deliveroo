module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    //setup babel for tailwind
    plugins:["tailwindcss-react-native/babel"]
  };
};
