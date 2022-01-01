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
                    targets: [1,2,3,4,5,6,7,8,9]
                }
            ],
        'ajax':'/data/pricedataV2.json',
        'columns':[
            {'data':'partition'},
            {'data':'index'},
            {'data':'itemNum'},
            {'data':'item'},
            {'data':'supply'},
            {'data':'date'},
            {'data':'unit'},
            {'data':'amount'},
            {'data':'unitPrice'},
            {'data':'insurancePrice'}

        ]
    },
    );
} );