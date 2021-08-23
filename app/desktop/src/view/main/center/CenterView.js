Ext.Ajax.on("beforerequest", function () {
	console.log('before');
});
var store = Ext.create('Ext.data.Store', {
	fields: ['name', 'progress','price'],
	data: [
		{ name: 'Test 1', progress: 0.10, price: 100.7 },
		{ name: 'Test 2', progress: 0.23, price: 200.8 },
		{ name: 'Test 3', progress: 0.86, price: 300.9 },
		{ name: 'Test 4', progress: 0.31, price: 400.5 }
	]
});

var grid1 = Ext.create({
	xtype: 'grid',
	title: 'Widget Column Demo',
	store: store,

	columns: [{
		text: 'Test Number',
		dataIndex: 'name',
		width: 100
	}, {
        text: 'Progress',
        width: 120,
        dataIndex: 'progress',
        widget: {
            xtype: 'progressbarwidget',
            textTpl: '{value:percent}'
        }
    },{
		text: 'price',
		dataIndex: 'price',
		width: 100
	}],

	width: 220,
	height: 250,
});

var tab2 = Ext.create('Ext.panel.Panel', {
  //  renderTo: Ext.getBody(),
    width: 400,
    height: 900,
    layout:'auto',
    controller: 'center',
	autishow:true,

	requires: [
        'login.view.main.center.CenterViewController',
   //     'Ext.form.Panel'
    ],

    items: [
        {
            xtype: 'panel',
            title: 'Login page',
            height: 900,
            width: '100%',
			id:'loginid',
			autoShow:true,
			items:[{
				xtype:'textfield',
				label:'username',
			},{
				xtype:'passwordfield',
				label:'password',
			},{
				xtype:'button',
				text:'login',
				handler: function(){
					        
						localStorage.setItem("TutorialLoggedIn", true);

						// Remove Login Window
						Ext.getCmp('loginid').destroy();

						// Add the main view to the viewport
						Ext.widget('app-main');
				}
				
			}]
        }
        
    ]
});


Ext.define('login.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	items: [tab2]

	// items: [{
	// 	xtype: 'panel',
	// 	viewModel: {
	// 		type: 'test'
	// 	},
	// 	fullscreen: true,
	// 	// layout: 'hbox',
	// 	defaultType: 'textfield',
	// 	defaults: {
	// 		flex: 1
	// 	},
	// 	items: [{
	// 		html: 'User Form',
	// 		style: 'background-color: white'
	// 	},
	// 	{
	// 		fieldLabel: 'First Name',
	// 		name: 'firstName',
	// 		bind: '{firstName}'
	// 	},
	// 	{
	// 		fieldLabel: 'Last Name',
	// 		name: 'lastName'
	// 	},
	// 	{
	// 		xtype: 'datefield',
	// 		fieldLabel: 'Date of Birth',
	// 		name: 'birthDate',
	// 		msgTarget: 'under', // location of the error message
	// 		invalidText: '"{0}" bad. "{1}" good.' // custom error message text
	// 	},
	// 	{
	// 		xtype: 'button',

	// 		text: 'Save',
	// 		handler: function () {
	// 			//DELETE
	// 			Ext.Ajax.request({
	// 				url: 'http://localhost:3000/posts/3',
	// 				method: 'DELETE',
	// 				timeout: 2000,

	// 				success: function (response) {
	// 					Ext.Msg.alert(response);
	// 				},
	// 				failure: function (response) {
	// 					Ext.Msg.alert(response);
	// 				}
	// 			});
	// 			Ext.Ajax.request({
	// 				url: 'http://localhost:3000/posts',
	// 				method: 'POST',
	// 				jsonData: {
	// 					name: 'Pariwesh'
	// 				},
	// 				success: function (response) {
	// 					Ext.Msg.alert(response);
	// 				},
	// 				failure: function (response) {
	// 					Ext.Msg.alert(response);
	// 				}
	// 			});

	// 			// Ext.Ajax.request({
	// 			// 	url: 'http://localhost:3000/posts',
	// 			// 	success: function (response){
	// 			// 		const responseBody = Ext.decode(response.responseText)
	// 			// 		console.log(responseBody);
	// 			// 	}
	// 			// })
	// 		}
	// 	}
	// 	]
	// }]
});

// Ext.define('CoolUniversalApp.view.main.center.CenterView', {
// 	extend: 'Ext.grid.Grid',
// 	title: 'Businesses',
	 
// 	columns: [
// 		{ xtype: 'rownumberer', width: 55},
// 		{ text: 'Name',  dataIndex: 'name', flex : 2},
// 		{ text: 'Address', dataIndex: 'full_address', flex : 3  },
// 		{ text: 'City', dataIndex: 'city', flex: 1 }
// 	],
	 
// 	store: {
// 		type: 'virtual',
// 		pageSize: 200,
// 		proxy : { type : 'ajax', url : '//nameless-tundra-27404.herokuapp.com/go/?fn=bigdata', reader : { type : 'json', rootProperty : 'data' } },
// 		autoLoad: true
// 	}
	 
// 	});
