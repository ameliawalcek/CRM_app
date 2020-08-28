import { observable, action } from 'mobx'
import "mobx-react-lite/batchingForReactDom"

export class InputStore {
    @observable last = ''
    @observable first = ''
    @observable owner_id = ''
    @observable email = ''
    @observable date = ''
    @observable country_id = ''
    @observable email_type_id = ''
    @observable sold = false

    @action handleInput = ({ target }) => {
        if (target.name === 'date') {
            var array = (target.value).toString().split(/-/g);
            array.push(array.shift());
            this[target.name] = array.join('/')
        } else {
            this[target.name] = target.value
        }
    }

    @action handleCheckBox = () => {
        this.sold = !this.sold
    }
}