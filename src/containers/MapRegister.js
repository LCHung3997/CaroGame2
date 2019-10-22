import { connect } from 'react-redux'
import Register from '../register/home'
 import {fecthAccount} from '../actions/indexAction'

const mapDispatchToProps = dispatch => ({
    registerAcc: (Username,Password) => dispatch(fecthAccount(Username,Password)),
})

export default connect( null , mapDispatchToProps)(Register)