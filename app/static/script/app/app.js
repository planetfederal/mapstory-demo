Ext.ns('app');
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
