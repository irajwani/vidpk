import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './Config/ReactotronConfig'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from './Stores'
import RootScreen from './Containers/Root'

const { store, persistor } = createStore()

export default class App extends Component {
  render() {
    
    return (
      
      <Provider store={store}>
        
        <PersistGate loading={null} persistor={persistor}>
          <RootScreen />
        </PersistGate>
      </Provider>
    )
  }
}

// export default class App extends Component {
//   render() { 
//     return (
//       <View style={{backgroundColor: 'red', flex: 1}}>

//       </View>
//     )
//   }
// }

// /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app/Contents/MacOS/Simulator -CurrentDeviceUDID D9974757-E6A8-419C-A47B-08A83A16FFE4
