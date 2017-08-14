import React from 'react';
import {connect} from 'react-redux';
import {fetchReservations} from '../../../../../actions/Reservations';
import QueueAnim from 'rc-queue-anim';
import moment from 'moment';
import Config from '../../../../../constants/Config';

import AccessTime from 'material-ui/svg-icons/device/access-time';
import AssignmentTurnedIn from 'material-ui/svg-icons/action/assignment-turned-in';
import CreditCard from 'material-ui/svg-icons/action/credit-card';
import RecordVoiceOver from 'material-ui/svg-icons/action/record-voice-over';
import IconButton from 'material-ui/IconButton';

const ReservationsTable = (props) => (
    <article className="article">
        <h2 className="article-title">Reservations</h2>
        <div className="box box-default table-box table-flip-scroll mdl-shadow--2dp">
            <table className="mdl-data-table table-bordered table-striped cf no-margin">
                <thead className="cf">
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Reservation Date</th>
                    <th>Payment Date</th>
                    <th>Package Sent Date</th>
                    <th>Agent Call Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {props.reservations.map((reservation, index) => {
                    return (<tr key={index}>
                        <td>{reservation.user.profile.name}</td>
                        <td>{reservation.user.profile.phoneNumber}</td>
                        <td>{reservation.user.profile.gender}</td>
                        <td>{reservation.reserveDate ? moment(reservation.reserveDate).format(Config.localization.dateFormat) : null}</td>
                        <td>{reservation.paymentDate ? moment(reservation.paymentDate).format(Config.localization.dateFormat) : null}</td>
                        <td>{reservation.sentPackageDate ? moment(reservation.sentPackageDate).format(Config.localization.dateFormat) : null}</td>
                        <td>{reservation.agentCalledDate}</td>
                        <td>{reservation.status}</td>
                        <td style={{textAlign: "center", paddingLeft: 0, paddingRight: 0}}><IconButton> <AccessTime/> </IconButton>
                            <IconButton> <CreditCard/> </IconButton>
                            <IconButton> <AssignmentTurnedIn/> </IconButton>
                            <IconButton> <RecordVoiceOver/> </IconButton>
                        </td>
                    </tr>)
                })
                }
                </tbody>
            </table>

        </div>
    </article>
);


class Page extends React.Component {
    componentDidMount() {
        this.props.fetchReservations();
    }

    render() {
        return <section className="container-fluid with-maxwidth chapter">
            <QueueAnim type="bottom" className="ui-animate">
                <div><ReservationsTable reservations={this.props.reservations}/></div>
            </QueueAnim>
        </section>
    }
};

const mapStateToProps = ({reservations: {data}}) => {
    return {reservations: data}
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReservations: () => {
            return dispatch(fetchReservations());
        }
    };
}

module.exports = connect(
    mapStateToProps, mapDispatchToProps
)(Page);
