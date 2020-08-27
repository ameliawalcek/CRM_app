import { observable, action, computed } from 'mobx'
import axios from 'axios'
import "mobx-react-lite/batchingForReactDom"

export class CRMStore {
    @observable clients = []
    @observable sumsCountry = []
    @observable sumsOwner = []

    @action async getClients(){
        let clients = await axios.get("http://localhost:4200/clients")
        this.clients = clients.data
    }

    @action async getSums(){
        let sums = await axios.get("http://localhost:4200/clients/sums")
        this.sumsCountry = sums.data.country
        this.sumsOwner = sums.data.owner
    }

    @computed get clientTotal(){
        return this.clients.length
    }
}