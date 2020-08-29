import { observable, action, computed } from 'mobx'
import axios from 'axios'
import "mobx-react-lite/batchingForReactDom"

export class CRMStore {
    @observable clients = []
    @observable countrySums = []
    @observable ownerSums = []
    @observable owners = []
    @observable countries = []
    @observable emailTypes = []
    @observable popularCountry = []

    @action async getClients() {
        let clients = await axios.get("http://localhost:4200/clients")
        this.clients = clients.data
    }

    @action async getSums() {
        let categorySums = await axios.get("http://localhost:4200/clients/sums")
        this.ownerSums = categorySums.data[1]
        this.countrySums = categorySums.data[0]
            .map(({ count: value, country: id, ...rest }) => ({ value, id, ...rest }))
    }

    @action async getCountries() {
        let countries = await axios.get("http://localhost:4200/clients/countries")
        this.countries = countries.data
            .map(({ country: value, ...rest }) => ({ value, ...rest }))
    }

    @action async getEmailTypes() {
        let emailTypes = await axios.get("http://localhost:4200/clients/emailTypes")
        this.emailTypes = emailTypes.data
            .map(({ email_type: value, ...rest }) => ({ value, ...rest }))
    }

    @action async getOwners() {
        let owners = await axios.get("http://localhost:4200/clients/owners")
        this.owners = owners.data
            .map(({ owner: value, ...rest }) => ({ value, ...rest }))

    }

    @action async getPopularCountry() {
        await this.getSums()
        this.popularCountry = this.countrySums
            .slice().sort((a, b) => b.count - a.count)[0]
    }

    @action async addClient(newClient) {
        await axios.post('http://localhost:4200/client', newClient)
        this.getClients()
    }

    @action async deleteClient(client, resolve) {
        await axios.delete(`http://localhost:4200/client/${client.id}`)
        this.getClients()
        resolve()
    }

    @computed get clientTotal() {
        return this.clients.length
    }

}