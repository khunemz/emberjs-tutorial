import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';
export default class LoginFormComponent extends Component {
  // Chutipong : Tracked is like state changed
  @tracked
  userId = null;

  /**
   * @type { AuthService}
   */
  @service auth;

  get isDisabled() {
    return !this.userId;
  }

  @action
  onSelectChanged(evt) {
    this.userId = evt.target.value;
  }
  
  @action
  onLoginFormSubmit(evt) {
    evt.preventDefault();
    const { target } = evt;
    const val = target.querySelector('select').value;
    this.auth.loginWithUserId(val);
  }
}
