// Instale as dependências
// npm install react-native-webview
// react-native link react-native-webview

import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://portal-alternativo-frontend.vercel.app/login' }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default App;
