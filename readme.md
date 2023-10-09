# to install expo globally
 npm i -g expo-cli

 # to create expo environment 
 npx create-expo-app food-deliveroo

 # to start expo
 expo start 

# to start for web or browser
# also we have to install react-native-web, and react-dom 
 expo start --web

# we have to install tailwind for react and save developer dependencies
npm install tailwindcss-react-native
npm install --save-dev tailwindcss

# then check tailwind react page and setup tailwindcss and all tailwind provider
# create tailwind.config.js and copy code
module.exports ={
    content:[
        "./screens/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

    ]
}

# add this line in babel.config.js
plugins:["tailwindcss-react-native/babel"]

# use this extension in vs code
Tailwind CSS IntelliSense
# also import TailwindProvider in app.js and use as tag
import {TailwindProvider} from "tailwindcss-react-native";
# also instll  native stack navigator library
npm install @react-navigation/native-stack
# import native stack as
import { createNativeStackNavigator } from '@react-navigation/native-stack';



# open react navigation website and download
npm install @react-navigation/native

# also dependencies download for expo
npx expo install react-native-screens react-native-safe-area-context

# import  NavigationContainer for wrapping up app in app.js
import { NavigationContainer } from '@react-navigation/native'; 
# using navigation container in app.js 