import React from 'react';
import {connect} from 'react-redux';
import {fetchReservations} from '../../../../../actions/Reservations';
import QueueAnim from 'rc-queue-anim';

const ReservationsTable = (props) => (
    <article className="article">
        <h2 className="article-title">Flip Scroll</h2>
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
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>{reservation.reserveDate}</td>
                        {/* TODO: Jeff, format with momentJS */}
                        <td>{reservation.paymentDate}</td>
                        <td>{reservation.sentPackageDate}</td>
                        <td>{reservation.agentCalledDate}</td>
                        <td>{reservation.status}</td>
                        <td>Test</td>
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
