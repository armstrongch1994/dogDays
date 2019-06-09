import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import {withStyles} from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'
import {getAllDogsThunk, getfilteredDogsThunk} from '../store/dog'
import {connect} from 'react-redux'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
})
class NativeSelects extends React.Component {
  state = {
    personality: '',
    size: '',
    gender: '',
    name: 'hai',
    labelWidth: 0
  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef.current).offsetWidth
    })
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value})
    if (name === 'personality') {
      this.props.loadFilteredDogs(name, event.target.value)
    } else if (name === 'size') {
      this.props.loadFilteredDogs(name, event.target.value)
    } else if (name === 'gender') {
      this.props.loadFilteredDogs(name, event.target.value)
    }
  }

  render() {
    console.log(this.state)
    const {classes} = this.props
    this.InputLabelRef = React.createRef()
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel ref={this.InputLabelRef} htmlFor="gender-native-simple">
            Gender
          </InputLabel>
          <Select
            native
            value={this.state.gender}
            onChange={this.handleChange('gender')}
            inputProps={{
              name: 'gender',
              id: 'gender-native-simple'
            }}
          >
            <option value="" />
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel ref={this.InputLabelRef} htmlFor="size-native-simple">
            Size
          </InputLabel>
          <Select
            native
            value={this.state.size}
            onChange={this.handleChange('size')}
            inputProps={{
              name: 'size',
              id: 'size-native-simple'
            }}
          >
            <option value="" />
            <option value="small">Extra Small</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extraLarge">Extra Large</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel
            ref={this.InputLabelRef}
            htmlFor="personality-native-simple"
          >
            Personality
          </InputLabel>
          <Select
            native
            value={this.state.personality}
            onChange={this.handleChange('personality')}
            inputProps={{
              name: 'personality',
              id: 'personality-native-simple'
            }}
          >
            <option value="" />
            <option value="lazy">Lazy</option>
            <option value="mild">Mild</option>
            <option value="energetic">Energetic</option>
            <option value="wild">Wild</option>
          </Select>
        </FormControl>
      </div>
    )
  }
}
const mapState = state => {
  return {
    allDogs: state.dog.dogs
  }
}
const mapDispatch = dispatch => ({
  loadAllDogs: () => {
    dispatch(getAllDogsThunk())
  },
  loadFilteredDogs: (category, categoryType) => {
    dispatch(getfilteredDogsThunk(category, categoryType))
  }
})
NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired
}
const styledComp = withStyles(styles)(NativeSelects)
export default connect(mapState, mapDispatch)(styledComp)
