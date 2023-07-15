import sequelize from "./DATABASE/database.js";
//importation des models 
import Authorisation from "./DATABASE/MODELS/authorisation.js";
import Contact from "./DATABASE/MODELS/contact.js";
import Groupe from "./DATABASE/MODELS/groupe.js";
import User from "./DATABASE/MODELS/user.js";
import Tier from "./DATABASE/MODELS/tier.js";
import Campaign from "./DATABASE/MODELS/campaign.js";
import Exchange from "./DATABASE/MODELS/exchange.js";
import Bind from "./DATABASE/MODELS/bind.js";

//tentative connection
try {
    await sequelize.authenticate();
    console.log('Connection avec la database réussie');
} catch (error) {
    console.error('Impossible de ce connecter a la database:', error);
}

//tentative création table a partir de nos models et ajoout des fausses données
try {

    await sequelize.drop();//on efface toutes les tables
    await sequelize.sync();//on ajoute nos models importer plus haut
    console.log('Toutes les tables sont crées');
    //on ajoute nos fausses données
    // Seed des données pour la table AUTHORISATION
    await Authorisation.create({ make: true, edit: true, suppress: true })
    await Authorisation.create({ make: true, edit: false, suppress: true })
    await Authorisation.create({ make: false, edit: true, suppress: true })
    console.log('données AUTHORISATION ok')
    // Seed des données pour la table CONTACT
    await Contact.create(
        {
            title: 'M.',
            firstname: 'Jean-Philippe',
            lastname: 'Prommenschenkel',
            work_phone: '0123456789',
            cellphone: '9876543210',
            email: 'john.doe@example.com',
            networks: 'linkedin.com/johndoe',
            poste_fonction: 'Manager',
            address: '123 Main St, City',
            personal_data: 'Consent given',
            actif: true,
        })
    await Contact.create(
        {
            title: 'Mme',
            firstname: 'Jane',
            lastname: 'Smith',
            work_phone: '9876543210',
            cellphone: '0123456789',
            email: 'jane.smith@example.com',
            networks: 'twitter.com/janesmith',
            poste_fonction: 'Analyst',
            address: '456 Elm St, City',
            personal_data: 'Consent given',
            actif: true,
        })
    await Contact.create(
        {
            title: 'M.',
            firstname: 'Robert',
            lastname: 'Johnson',
            work_phone: '0123456789',
            cellphone: '9876543210',
            email: 'robert.johnson@example.com',
            networks: 'linkedin.com/robertjohnson',
            poste_fonction: 'Developer',
            address: '789 Oak St, City',
            personal_data: 'Consent given',
            actif: true,
        })
    console.log('données CONTACT ok')

} catch (error) {
    console.error('Il y a un probléme', error);
}


