import React, {Component} from 'react';
//import { Media } from 'reactstrap';
import { Card, CardImg, CardimgOverlay, CardText, CardBody, CardTitle, CardImgOverlay } from 'reactstrap';

class Menu extends Component {
    
    constructor(props) { 
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish){
        this.setState({ selectedDish: dish});
    }

    renderDish(dish){
        if(dish != null){
            return (
                <card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){

        const menu = this.props.dishes.map((dish) => {
            return(
                // This part is used using media component which is commented out above. This is a sample. It is improved using card components below. 
                // <div key={dish.id} className="col-12 mt-5">
                //     <Media tag="li">
                //         <Media left middle>
                //             <Media object src={dish.image} alt={dish.name} />
                //         </Media>
                //         <Media body className="ml-5">
                //             <Media heading>{dish.name}</Media>
                //             <p>{dish.description}</p>
                //         </Media>
                //     </Media>
                // </div>

                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />                 <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {/* This part is used in media component style */}
                    {/*<Media list>
                        {menu}
                    </Media> */}
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;