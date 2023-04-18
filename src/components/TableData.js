import React from "react";
import Table from 'react-bootstrap/Table';

function TableData(props) {

    const data = [
        {
            id: 1,
            username: 'Dubinek',
            comments: 'neumim stavove komponenty',
            topic:'react'
        },
        {
            id: 2,
            username: 'Pepous',
            comments: 'bavi me vice react',
            topic:'angular'
        },
        {
            id: 3,
            username: 'BigFranta',
            comments: 'vue je super',
            topic:'vue'
        },
        {
            id: 4,
            username: 'Beruska',
            comments: 'setState je genialni vec',
            topic:'react'
        },
        {
            id: 5,
            username: 'Tomik',
            comments: 'bojim se projektoveho dne',
            topic:'react'
        }
    ]

    const idList = data.map(({id}) => <tr>{id}</tr>)
    const usernameList = data.map(({username}) => <tr>{username}</tr>)
    const commentsList = data.map(({comments}) => <tr>{comments}</tr>)
    const topicList = data.map(({topic}) => <tr>{topic}</tr>)
    
    return (
        <table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Comment</th>
                    <th>Topic</th>
                </tr>
            </thead>
            <tbody>
                <td>
                    <tr>{idList}</tr>
                </td>
                <td>
                    <tr>{usernameList}</tr>
                </td>
                <td>
                    <tr>{commentsList}</tr>
                </td>
                <td>
                    <tr>{topicList}</tr>
                </td>
            </tbody>
        </table>

    )

}

export default TableData;
