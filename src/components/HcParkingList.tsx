import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { HcState } from "../redux/configureStore";
import { setRentModalParkingLot, setSelectedParkingLot } from "../redux/parkingSearch/actions";
import { ParkingSearchState } from "../redux/parkingSearch/types";
import ParkingPicto from "../res/img/parking-picto.svg";
import HcListItem from "./HcListItem";

export interface HcParkingListProps extends Pick<ParkingSearchState, 'parking_lots'> {
    setSelectedParkingLot: (pl: number | null) => void,
    setRentModalParkingLot: (id: number | null) => void
}

class HcParkingList extends Component<HcParkingListProps> {

    public render() {

        const {
            parking_lots,
            setSelectedParkingLot,
            setRentModalParkingLot
        } = this.props;

        const items = parking_lots.map(p => ({
            title: p.label,
            features: p.capacity === -1 ? 'Nombre de places non disponibles' : `${p.capacity} places`,
            footer: `${p.price_per_day} € / jour`,
            id: p.id
        }));

        return (
            <div>
                <Container>
                    {
                        parking_lots.length !== 0 ?
                            (<div className='hc-list'>
                                {items.map(item =>
                                    <HcListItem
                                        {...item}
                                        onMouseEnter={setSelectedParkingLot}
                                        onMouseLeave={() => setSelectedParkingLot(null)}
                                        picto={ParkingPicto}
                                        key={item.id}
                                        onRentButtonClick={() => setRentModalParkingLot(item.id)}
                                        show_rent_btn={true}
                                    />
                                )}
                            </div>)
                            : (<p>No parking lots found</p>)
                    }
                </Container>
            </div>
        );
    }
}

export default connect(
    (state: HcState) => ({ parking_lots: state.parking_search.parking_lots }),
    {
        setSelectedParkingLot: (pl: number | null) => setSelectedParkingLot(pl),
        setRentModalParkingLot: (id: number | null) => setRentModalParkingLot(id)
    }
)(HcParkingList);