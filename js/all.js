$(document).ready( function () {
    $('#example').DataTable({
        responsive: true,
        select: true,
        searchPanes: {
        viewCount: false,
        viewTotal: true,
        initCollapsed: false},
        dom: 'Plfrtip',
            columnDefs: [
                {
                    searchPanes: {
                        show: false
                    },
                    targets: [1,2,3,4,5,6,7]
                }
            ],
        'ajax':'data/pricedataV2.txt',
        'columns':[
            {'data':'partition'},
            {'data':'item'},
            {'data':'supply'},
            {'data':'date'},
            {'data':'uni'},
            {'data':'amount'},
            {'data':'unitPrice'},

        ]
    },
    );
} );