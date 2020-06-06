import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor(props){
        super(props);
        
    }



    renderDish(dish){
        if(dish != null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(dish){
        if(dish != null) {
            console.log(dish.comments);
            

            const dishComments = dish.comments.map((comment) => {
                return (
                    <div className="">
                        <ul className="list-unstyled">
                            <li><p>{comment.comment}</p></li>
                            <li><p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p></li>
                        </ul>
                    </div>
                );
            });
            return(
                <div>
                    <h4>Comments</h4>
                    {dishComments}
                </div>
            )
        
        } else {
            return(
                <div></div>
            )
        }
    }


    render(){
        const selectedDish = this.props.selectedDish;

        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(selectedDish)}
                    </div>
                
                </div>
            </div>
        );
    }
}

export default DishDetail;








