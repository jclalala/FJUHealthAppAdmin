import DomainConstants from '../domain/Constants';

const ReservationService = {
    listReservations: function () {
        return fetch(`${DomainConstants.domainApiUrl}/admin/listReservations`).then((res) => {
            return res.json();
        })
    }
}

export default ReservationService;