Ext.define('login.view.main.center.CenterView', {
	extend: 'Ext.form.Panel',
	xtype: 'centerview',
	cls: 'centerview',
	
//	layout: 'card',
	items:[{
		xtype:'textfield',
		fieldlabel:'User Name',
		id:'userid',
		labelAlign:'left',
		style:{
			margin:'30px 0 0 0'
		}
//		html:'user name'
	},{
		xtype:'textfield',
		fieldlabel:'Password',
		id:'passid',
		style:{
			margin:'0 0 0 0'
		}
	},{
		xtype:'button',
		Text:'Save',
		html:'Login',
		handler:function(){
			var username=Ext.getCmp('userid').getValue();
			var password = Ext.getCmp('passid').getValue();
			Ext.Ajax.request({
				url:'http://localhost:3000/posts',
				method:'POST',
				jsonData:{
					name:username,
					pass:password
				},
				success:function(response){
					console.log(response);
				}
			})
		}
	}]
});
