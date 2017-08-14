import DomainConstants from '../domain/Constants';

const ReservationService = {
    listReservations: function () {
        return fetch(`${DomainConstants.domainApiUrl}/admin/listReservations`).then((res) => {
            return res.json();
        })
    },

    setReserveDate: function ({reservationId, reserveDate}) {
        return fetch(`${DomainConstants.domainApiUrl}/admin/${reservationId}/reserveDate`, {
            method: "PUT",
            body: JSON.stringify({reserveDate}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            return res.json();
        })
    },

    setPaymentDate: function ({reservationId, paymentDate}) {
        return fetch(`${DomainConstants.domainApiUrl}/admin/${reservationId}/paymentDate`, {
            method: "PUT",
            body: JSON.stringify({paymentDate}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            return res.json();
        })
    },

    setSentPackageDate: function ({reservationId, sentPackageDate}) {
        return fetch(`${DomainConstants.domainApiUrl}/admin/${reservationId}/sentPackageDate`, {
            method: "PUT",
            body: JSON.stringify({sentPackageDate}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            return res.json();
        })
    },

    setAgentCalledDate: function ({reservationId, agentCalledDate}) {
        return fetch(`${DomainConstants.domainApiUrl}/admin/${reservationId}/agentCalledDate`, {
            method: "PUT",
            body: JSON.stringify({agentCalledDate}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            return res.json();
        })
    }

}

export default ReservationService;