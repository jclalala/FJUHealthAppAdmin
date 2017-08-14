import React from 'react';
import {connect} from 'react-redux';
import {
    fetchReservations,
    setReserveDate,
    setPaymentDate,
    setSentPackageDate,
    setAgentCalledDate
} from '../../../../../actions/Reservations';
import QueueAnim from 'rc-queue-anim';
import moment from 'moment';
import Config from '../../../../../constants/Config';

import AccessTime from 'material-ui/svg-icons/device/access-time';
import AssignmentTurnedIn from 'material-ui/svg-icons/action/assignment-turned-in';
import CreditCard from 'material-ui/svg-icons/action/credit-card';
import RecordVoiceOver from 'material-ui/svg-icons/action/record-voice-over';
import IconButton from 'material-ui/IconButton';

import DatePicker from 'material-ui/DatePicker';

class ReservationsTable extends React.Component {
    const
    datePickerFieldStyle = {visibility: "hidden"};

    render() {
        return <article className="article">
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
                    {this.props.reservations.map((reservation, index) => {
                        return (<tr key={index}>
                            <td>{reservation.user.profile.name}</td>
                            <td>{reservation.user.profile.phoneNumber}</td>
                            <td>{reservation.user.profile.gender}</td>
                            <td>{reservation.reserveDate ? moment(reservation.reserveDate).format(Config.localization.dateFormat) : null}</td>
                            <td>{reservation.paymentDate ? moment(reservation.paymentDate).format(Config.localization.dateFormat) : null}</td>
                            <td>{reservation.sentPackageDate ? moment(reservation.sentPackageDate).format(Config.localization.dateFormat) : null}</td>
                            <td>{reservation.agentCalledDate ? moment(reservation.agentCalledDate).format(Config.localization.dateFormat) : null}</td>
                            <td>{reservation.status}</td>
                            <td style={{textAlign: "center", paddingLeft: 0, paddingRight: 0}}>
                                <IconButton onClick={
                                    ((reservationId) => {
                                        return () => {
                                            this.selectedReservationId = reservationId;
                                            this.reserveDatePicker.openDialog();
                                        }
                                    })(reservation.id)
                                }> <AccessTime/>
                                </IconButton>
                                <IconButton onClick={
                                    ((reservationId) => {
                                        return () => {
                                            this.selectedReservationId = reservationId;
                                            this.paymentDatePicker.openDialog();
                                        }
                                    })(reservation.id)
                                }> <CreditCard/>
                                </IconButton>
                                <IconButton onClick={
                                    ((reservationId) => {
                                        return () => {
                                            this.selectedReservationId = reservationId;
                                            this.sentPackageDatePicker.openDialog();
                                        }
                                    })(reservation.id)
                                }>
                                    <AssignmentTurnedIn/> </IconButton>
                                <IconButton onClick={
                                    ((reservationId) => {
                                        return () => {
                                            this.selectedReservationId = reservationId;
                                            this.agentCalledDatePicker.openDialog();
                                        }
                                    })(reservation.id)
                                }> <RecordVoiceOver/>
                                </IconButton>
                            </td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>
            <DatePicker ref={(datePicker) => {
                this.reserveDatePicker = datePicker;
            }} style={this.datePickerFieldStyle} onChange={(event, reserveDate) => {
                this.props.setReserveDate({reservationId: this.selectedReservationId, reserveDate});
            }}/>
            <DatePicker ref={(datePicker) => {
                this.paymentDatePicker = datePicker;
            }} style={this.datePickerFieldStyle} onChange={(event, paymentDate) => {
                this.props.setPaymentDate({reservationId: this.selectedReservationId, paymentDate});
            }}/>
            <DatePicker ref={(datePicker) => {
                this.sentPackageDatePicker = datePicker;
            }} style={this.datePickerFieldStyle} onChange={(event, sentPackageDate) => {
                this.props.setSentPackageDate({reservationId: this.selectedReservationId, sentPackageDate});
            }}/>
            <DatePicker ref={(datePicker) => {
                this.agentCalledDatePicker = datePicker;
            }} style={this.datePickerFieldStyle} onChange={(event, agentCalledDate) => {
                this.props.setAgentCalledDate({reservationId: this.selectedReservationId, agentCalledDate});
            }}/>
        </article>
    }
}

class Page extends React.Component {
    componentDidMount() {
        this.props.fetchReservations();
    }

    render() {
        return <section className="container-fluid with-maxwidth chapter">
            <QueueAnim type="bottom" className="ui-animate">
                <div><ReservationsTable setReserveDate={this.props.setReserveDate}
                                        setPaymentDate={this.props.setPaymentDate}
                                        setSentPackageDate={this.props.setSentPackageDate}
                                        setAgentCalledDate={this.props.setAgentCalledDate}
                                        reservations={this.props.reservations}/></div>
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
        },
        setReserveDate: ({reservationId, reserveDate}) => {
            return dispatch(setReserveDate({reservationId, reserveDate}));
        },
        setPaymentDate: ({reservationId, paymentDate}) => {
            return dispatch(setPaymentDate({reservationId, paymentDate}));
        },
        setSentPackageDate: ({reservationId, sentPackageDate}) => {
            return dispatch(setSentPackageDate({reservationId, sentPackageDate}));
        },
        setAgentCalledDate: ({reservationId, agentCalledDate}) => {
            return dispatch(setAgentCalledDate({reservationId, agentCalledDate}));
        }
    };
}

module.exports = connect(
    mapStateToProps, mapDispatchToProps
)(Page);
