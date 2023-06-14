import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';

function RenderDish({ dish }) {

    if (dish != null)
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay >
                    <CardTitle>{dish.name}</CardTitle>
                    <CardBody>{dish.description}</CardBody>
                </CardImgOverlay>
            </Card>
        )
    else {
        return (
            <div></div>
        )
    }

}

function RenderComments({ comments }) {

    if (comments != null) {
        const comment = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author},
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(comment.date))}
                        </p>
                    </li>
                </div>
            );
        });
        return (
            <div >
                <h4> Comments </h4>
                <ul>

                    {comment}
                </ul>

            </div>
        )
    }

    else {
        return (
            <div></div>
        )
    }

}

const DishDetail = (props) => {
    if (props.dish != null)
        return (
            <div className='container' key={props.dish}>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className='col-12 col-md-5'>
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            </div>
        );

}




export default DishDetail