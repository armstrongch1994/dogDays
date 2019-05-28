import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getAllDogsThunk} from '../store/dog'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

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
  }
})

class userDogs extends Component {
  componentDidMount() {
    this.props.loadAllDogs()
  }
  render() {
    const {classes, theme} = this.props
    return (
      <div className="all-dogs-container">
        <h1 className="all-dogs-header"> Meet our furry friends! </h1>

        <div className="all-dogs-list">
          {this.props.allDogs.map(dog => {
            return (
              <Card key={dog.id} className={classes.card}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    {dog.puppyName}
                    <p>
                      <b>Gender: </b>
                      {dog.gender}
                    </p>
                    <p>
                      <b>Size: </b>
                      {dog.size}
                    </p>
                    <p>
                      <b>Personality: </b>
                      {dog.personality}
                    </p>
                  </CardContent>
                </div>
                <CardMedia className={classes.cover} image={dog.imgUrl} />
              </Card>
              // <div key={dog.id} className="single-dog">
              //   <div className="image-container">
              //     <img className="all-dog-image" src={dog.imgUrl} />
              //   </div>
              //   <div className="dog-content">
              //     <h3>{dog.puppyName}</h3>
              //     <p>
              //       <b>gender:</b>
              //       {dog.gender}{' '}
              //     </p>
              //     <p>
              //       {' '}
              //       <b>size:</b> {dog.size}{' '}
              //     </p>
              //     <p>
              //       {' '}
              //       <b>personality:</b>
              //       {dog.personality}{' '}
              //     </p>
              //     <p className="spend-day">
              //       Want to spend the day with {dog.puppyName}?
              //       <Link to={`/allDogs/${dog.id}`}>
              //         Check availability <i class="fa fa-arrow-right" />
              //       </Link>
              //     </p>
              //   </div>
              // </div>
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
