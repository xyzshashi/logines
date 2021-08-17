Ext.define('login.view.personnel.PersonnelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnelviewcontroller',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onCall: function(list, info) {
        var record = info.record;

        Ext.Msg.alert('Call', record.get('name'));
    },

    onMessage: function(list, info) {
        var record = info.record;

        Ext.Msg.prompt('Send To',
                       record.get('name'),
                       function(button, text) {
                           if (button === 'ok') {
                               console.log('Send message:', text);
                           }
                       }
        );
    },

    onEdit: function(list, info) {
        var record = info.record;

        Ext.Msg.alert('Edit',
                      record.get('name'));
    }

});
