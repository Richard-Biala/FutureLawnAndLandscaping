import React from 'react'

import Card from '../components/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import mower from '../assets/images/mower.png';
import byard from '../assets/images/byard.png';
import fyard from '../assets/images/fyard.png';


class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            items: [
                {
                    id: 0,
                    title: 'Title',
                    subTitle: 'subTitle',
                    imgSrc: mower.png,
                    // link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Title',
                    subTitle: 'subTitle',
                    imgSrc: byard.png,
                    // link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Title',
                    subTitle: 'subTitle',
                    imgSrc: fyard.png,
                    // link: '',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !==id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item =>{
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} /> 
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
   
}

export default Carousel;
