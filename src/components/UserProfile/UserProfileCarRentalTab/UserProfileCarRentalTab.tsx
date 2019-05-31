import React, { Component } from "react";
import { connect } from "react-redux";
import { HcState } from "../../../redux/configureStore";
import { withRouter, RouteComponentProps } from "react-router";
import { fetchUserProfileCarRentals, onUserProfileCarRentalDelete } from "../../../redux/userProfile/userProfileCarRentalTab/actions";
import { UserDataState } from "../../../redux/user/types";
import { UserProfileCarRentalTabState } from "../../../redux/userProfile/userProfileCarRentalTab/types";
import { HcListItemProps } from "../../HcListItem";
import { diffDays, convertDate } from "../../../Utils";
import HcList from "../../HcList";
import CarPicto from "../../../res/img/car-picto.svg";
import { toggleShowModal } from "../../../redux/navbar/actions";
import { ToggleSignModalAction } from "../../../redux/navbar/types";

interface UserProfileCarRentalTabProps extends RouteComponentProps {
    user: UserDataState,
    user_profile_car_rental_tab: UserProfileCarRentalTabState
    fetchUserProfileCarRentals: (id: number) => void,
    toggleModal: (show: boolean) => ToggleSignModalAction,
    onUserProfileCarRentalDelete: (selected_spot_rental_id: number) => void
}

class UserProfileCarRentalTab extends Component<UserProfileCarRentalTabProps> {

    constructor(props: UserProfileCarRentalTabProps) {
        super(props);
        this.props.fetchUserProfileCarRentals(this.props.user.id);
    }

    public onDelete = (id: number) => {
        this.props.onUserProfileCarRentalDelete(id);
        this.props.toggleModal(false);
    }

    public render() {

        const { fetching, car_rentals } = this.props.user_profile_car_rental_tab;
        const spots_count = Object.keys(car_rentals).length;

        const spots: HcListItemProps[] = car_rentals.map(car => {
            const c = car, total_price = diffDays(c.start_date, c.end_date) * c.parking_spot.car.price_per_day;
            return {
                header: `Du ${convertDate(c.start_date)} au ${convertDate(c.end_date)}`,
                title: c.parking_spot.car.model,
                features: `${c.parking_spot.car.gearbox.type} • ${c.parking_spot.car.fuel.type} • ${c.parking_spot.car.seats} places • ${c.parking_spot.car.doors} portes`,
                footer: `${total_price} € • ${c.parking_spot.car.price_per_day} € / jour`,
                id: c.id
            };
        });

        return (
            <div>
                {fetching ? (<p> Chargement des réservations de véhicules en cours...</p >) : (
                    <HcList
                        items={spots} className="hc-user-profile-list-item" picto={CarPicto} update={false}
                        onDelete={(id: number) => this.onDelete(id)}
                    />
                )}
                {!fetching && spots_count === 0 ? (
                    <p>Vous n'avez pas encore réservé de véhicules pour votre prochain départ ?
                        <span className="link" onClick={() => this.props.history.push('/voiture')}> Réservez dès maintenant.</span>
                    </p>
                ) : null}
            </div>
        );
    }
}

export default
    withRouter(
        connect(
            (state: HcState) => ({
                user: state.user.data,
                user_profile_car_rental_tab: state.user_profile_tabs.user_profile_car_rental_tab
            }), {
                fetchUserProfileCarRentals: (id: number) => fetchUserProfileCarRentals(id),
                toggleModal: (show: boolean) => toggleShowModal(show),
                onUserProfileCarRentalDelete: (id: number) => onUserProfileCarRentalDelete(id)
            }
        )(UserProfileCarRentalTab)
    )