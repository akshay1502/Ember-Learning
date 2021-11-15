import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class TestingRoute extends Route {
  async model() {
    let usersData = await fetch('https://api2.binance.com/api/v3/ticker/24hr');
    let users = await usersData.json();
    let data = users.slice(0, 20);
    console.log(data);
    return data;
  }

  @action
  loading() {
    console.log('entering loading event');
    this.intermediateTransitionTo('loading');
    return true;
  }
}
