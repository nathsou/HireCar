import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { CarSearchState } from "../redux/carSearch/types";
import { HcState } from "../redux/configureStore";
import CarPicto from "../res/img/car-picto.svg";
import HcListItem, { HcListItemProps } from "./HcListItem";

export interface HcCarListProps extends Pick<CarSearchState, 'cars'> { }

class HcCarList extends Component<HcCarListProps> {

    public render() {

        const cars: HcListItemProps[] = this.props.cars.map(c => {
            return {
                title: c.model,
                features: `${c.fuel_id} - ${c.nb_places} places - ${c.nb_doors} portes`,
                footer: `${c.price_per_day} € / jour`
            };
        })

        return (
            <main>
                <Container>
                    <div className='hc-list'>
                        {cars.map((car, i) =>
                            <HcListItem {...car} picto={CarPicto} key={`rent_car_${i}`} />
                        )}
                    </div>
                </Container>
            </main>
        );
    }
}

export default connect(
    (state: HcState) => state.car_search
)(HcCarList);

