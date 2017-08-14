import DomainConstants from './Constants';
import DomainCommon from './Common';

const User = {
    login: function ({email, password}) {
        return DomainCommon.fetch(`${DomainConstants.domainApiUrl}/admin/public/login`, "POST", {
            email,
            password
        }).then((user) => {
            DomainCommon.setAPIToken(user.token);
            return user;
        });
    }
}

export default User;