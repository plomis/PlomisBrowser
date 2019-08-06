module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    // '@react-native-community',
    'plugin:flowtype/recommended',
    'promise-react'
  ],
  plugins: [
    'flowtype'
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  }
};
