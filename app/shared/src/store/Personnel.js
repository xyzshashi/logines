Ext.define('login.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnelshared',
    model: 'login.model.Personnel',
    groupField: 'dept',
    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", dept: "bridge" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", dept: "security" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", dept: "medical" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", dept: "bridge" }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
