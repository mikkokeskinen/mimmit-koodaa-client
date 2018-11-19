import { connect } from 'react-redux'
import Header from '../components/Header'
import { addTodo } from '../actions'

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(
  mapStateToProps,
  { addTodo },
)(Header)

