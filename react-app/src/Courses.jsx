import React from 'react';

export default class Courses extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        fetch('/api/heroku-mysql-courses')
            .then(res => {
                console.log('res: ', res)
                return res.json()
            })
            .then(courses => {
                console.log('Courses: ', courses)
                this.setState({courses})
            })
            .catch( async () => {
                const res = await fetch('http://localhost:3333/courses');
                const courses = await res.json();
                console.log('courses: ', courses);
                this.setState({courses});
            })
    }

    render() {
        return (
            <>
                {JSON.stringify(this.state.courses)}
            </>
        )
    }
}