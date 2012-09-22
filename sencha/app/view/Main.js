Ext.define("TEST.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
		
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
			{
				xtype: 'toolbar',
				ui: 'neutral',
				docked: 'top',
				
				items: [
					{
						text: "뒤로가기",
						ui: 'back'
					}						
				]
			},
            {
                xtype: 'homepanel'
			}
			
		]
	}
     
});
