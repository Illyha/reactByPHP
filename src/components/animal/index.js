import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as animalActions from './reducer';
import get from 'lodash.get';

class AnimalWidgetContainer extends Component {
    state = {}
    render() {
        console.log('===Props-===', this.props);
        return (
            <div>
                <h1>Hello Animal</h1>
            </div>
        );
    }
}
const mapState = (state) => {
    return {
        list: get(state, 'animal.list.data'),
        isListLoading: get(state, 'animal.list.loading'),
        isListError: get(state, 'animal.list.error')
    }
}
const AnimalWidget = connect(mapState)(AnimalWidgetContainer);
const AnimalWidget = connect()(AnimalWidgetContainer);

export default AnimalWidget;