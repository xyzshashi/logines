Ext.define('login.view.home.HomeView',{
	xtype: 'homeview',
	cls: 'homeview',
	controller: {type: 'homeviewcontroller'},
	viewModel: {type: 'homeviewmodel'},
	requires: [],
	extend: 'Ext.Container',
    scrollable: true,
	items:[{
		xtype:'form',
		width:200,
		height:300,
		items:[{
			xtype:'textfield',
			fieldlabel:'username',
		},{
			xtype:'textfield',
			fieldlabel:'password'
		},{
			xtype:'button',
			Text:'Login'
		}]
	}]
  
});