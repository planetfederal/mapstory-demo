Ext.ns('app');
app.demos = [{
    title: 'Hurricane Irene Track',
    url: 'irene.html',
    description: 'Tracked Object Time Animation example: The storm position,' +
    'NexRad Radar, and storm wind classifications will change along with the time. Starts at Aug 17, 2011 and continues' +
    'until Aug 29, 2011 or until you stop it'
}/*,{
    title: '',
    url: '',
    description: ''
}*/
]
app.ds = new Ext.data.Store({
    reader: new Ext.data.JsonReader({
        fields: ['title', 'url', 'description']
    }),
    proxy: new Ext.data.MemoryProxy(app.demos),
    autoLoad: true
})
Ext.onReady(function(){
    app.grid = new Ext.grid.GridPanel({
        columns: [{
            header: 'Title',
            dataIndex: 'title',
            width:150
        }, {
            header: 'Link',
            dataIndex: 'url',
            tpl: '<a href="{url}">{url}</a>',
            xtype: 'templatecolumn',
            width:150
        }, {
            header: 'Description',
            dataIndex: 'description',
            width:500
        }],
        ds:app.ds,
        stripeRows:true,
        width: 850,
        height:500,
        renderTo: 'demogrid'
    })
})
