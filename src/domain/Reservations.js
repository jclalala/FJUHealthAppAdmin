import DomainConstants from './Constants';
import DomainCommon from './Common';

const ReservationService = {
    listReservations: function () {
        return DomainCommon.fetch(`${DomainConstants.domainApiUrl}/admin/listReservations`);
    },

    setReserveDate: function ({reservationId, reserveDate}) {
        return DomainCommon.fetch(`${DomainConstants.domainApiUrl}/admin/${reservationId}/reserveDate`, "PUT", {reserveDate});
    },

    setPaymentDate: function ({reservationId, paymentDate}) {
        return DomainCommon.fetch(`${DomainConstants.domainApiUrl}/admin/${reservationId}/paymentDate`, "PUT", {paymentDate});
    },

    setSentPackageDate: function ({reservationId, sentPackageDate}) {
        return DomainCommon.fetch(`${DomainConstants.domainApiUrl}/admin/${reservationId}/sentPackageDate`, "PUT", {sentPackageDate});
    },

    setAgentCalledDate: function ({reservationId, agentCalledDate}) {
        return DomainCommon.fetch(`${DomainConstants.domainApiUrl}/admin/${reservationId}/agentCalledDate`, "PUT", {agentCalledDate});
    }
}

export default ReservationService;