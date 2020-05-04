import Service from '@ember/service';
import Router from '@ember/routing/router';

export default class MockAuthService extends Service {
    
    currentUserId = null;

    @service router;

    loginWithUserId(userId) {
        window.localStorage.setItem(AUTH_KEY , userId);
        this.router.transitionTo('teams')
    }

}