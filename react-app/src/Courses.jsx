import React from 'react';

export default class Courses extends React.Component {
    state = {
        courses: []
    }

    render() {
        return (
            <>
                {JSON.stringify(this.state.courses)}
            </>
        )
    }
}