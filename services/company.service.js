import { loadFromStorage, makeId, saveToStorage } from './util.service.js'
import { storageService } from './async-storage.service.js'


const COMPANY_KEY = 'companyDB'
_createCompany()

export const companyService = {
    get
}

function get(companyId) {
    return storageService.get(COMPANY_KEY, companyId)
}

function _createCompany() {
    let companies = loadFromStorage(COMPANY_KEY)
    if (!companies || companies.length == 0) {
       let  company = { 
            id: 1,
            name: "Meta", 
            icon: "assets/img/meta.png",
            description: "Meta is a leading integrator of IT security solutions in the world\nMeta owns a wide knowledge base, professional personnel\n technologies and products for computer networks....",
            location: "Israel, Tel Aviv"
        }
        saveToStorage(COMPANY_KEY, [company])
    }
}