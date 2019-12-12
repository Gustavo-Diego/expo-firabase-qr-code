import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './Login'
import TelaQR from './telaQRCode'

const Rotas = createAppContainer(
        createSwitchNavigator({
                Login,
                TelaQR
        })
)

export default Rotas