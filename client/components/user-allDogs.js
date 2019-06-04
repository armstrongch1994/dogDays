import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getAllDogsThunk} from '../store/dog'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import ReactDOM from 'react-dom'

const styles = theme => ({
  card: {
    display: 'flex',
    width: '35%',
    margin: '5px auto',
    justifyContent: 'space-between',
    border: '1px solid #bac5d0'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 200
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  },
  paragraph: {
    lineHeight: 1.8,
    margin: 0
  },
  link: {
    color: '#bac5d0',
    lineHeight: 1.8,
    '&:hover': {
      color: 'pink'
    }
  },
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

class userDogs extends Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0
  }
  componentDidMount() {
    this.props.loadAllDogs()
  }
  render() {
    const {classes, theme} = this.props
    return (
      <div className="all-dogs-container">
        <h1 className="all-dogs-header"> Meet our furry friends! </h1>
        {/* <form className={classes.root}>
          <FormControl className={classes.formContro}>
            <InputLabel htmlFor="age-simple">Age</InputLabel>
            <Select
              value=""
              inputProps={{
                name: 'age',
                id: 'age-simple'
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </form> */}
        <div className="all-dogs-list">
          {this.props.allDogs.map(dog => {
            return (
              <Card key={dog.id} className={classes.card}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    {dog.puppyName}
                    <p className={classes.paragraph}>
                      <b>Gender: </b>
                      {dog.gender}
                    </p>
                    <p className={classes.paragraph}>
                      <b>Size: </b>
                      {dog.size}
                    </p>
                    <p className={classes.paragraph}>
                      <b>Personality: </b>
                      {dog.personality}
                    </p>
                    <p className={classes.paragraph}>
                      Want to spend the day with {dog.puppyName}?
                    </p>
                    <Link className={classes.link} to={`/allDogs/${dog.id}`}>
                      Check availability <i className="fa fa-arrow-right" />
                    </Link>
                  </CardContent>
                </div>
                <CardMedia className={classes.cover} image={dog.imgUrl} />
              </Card>
            )
          })}
        </div>
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
  }
})
userDogs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

const styledComp = withStyles(styles, {withTheme: true})(userDogs)

export default connect(mapState, mapDispatch)(styledComp)
