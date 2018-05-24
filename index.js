import { AppRegistry } from 'react-native';
import App from './src/config/routes';

import { Provider } from 'react-redux';

export default class RNCognito extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
AppRegistry.registerComponent('reduxform', () => RNCognito);
