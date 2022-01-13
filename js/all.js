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
        'ajax':'https://github.com/Pharmacyofdianthus/recentPrice/blob/4e3fe2a53b3882fb8511fa480d6c1a914c690e5b/data/pricedataV2.txt',
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