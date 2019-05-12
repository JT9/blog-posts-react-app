import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    //call action creator
    componentDidMount() {
        this.props.fetchPosts();
    }
    
    render() {
        console.log(this.props.posts);
        return <div>Post List</div>;
    }
}

//from combineReducers
const mapStateToProps = (state) => {
    return { posts: state.posts};
};

export default connect(
    mapStateToProps, 
    { fetchPosts }
)(PostList);