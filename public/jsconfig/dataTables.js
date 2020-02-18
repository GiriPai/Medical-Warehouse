//Basic Example
$("#data-table-basic").bootgrid({
  css: {
    icon: "zmdi icon",
    iconColumns: "zmdi-view-module",
    iconDown: "zmdi-expand-more",
    iconRefresh: "zmdi-refresh",
    iconUp: "zmdi-expand-less"
  }
});

$("#data-table-selection").bootgrid({
  css: {
    icon: "zmdi icon",
    iconColumns: "zmdi-view-module",
    iconDown: "zmdi-expand-more",
    iconRefresh: "zmdi-refresh",
    iconUp: "zmdi-expand-less"
  },
  selection: true,
  multiSelect: true,
  rowSelect: true,
  keepSelection: true
});

//Command Buttons
$("#data-table-command").bootgrid({
  // css: {
  //   icon: "zmdi icon",
  //   iconColumns: "zmdi-view-module",
  //   iconDown: "zmdi-expand-more",
  //   iconRefresh: "zmdi-refresh",
  //   iconUp: "zmdi-expand-less"
  // },
  // formatters: {
  //   commands: function(column, row) {
  //     return (
  //       '<button type="button" onclick= "showModal(e)" class="btn btn-icon command-edit waves-effect waves-circle" data-row-id="' +
  //       row.id +
  //       '"><span class="zmdi zmdi-edit"></span></button> ' +
  //       '<button type="button" class="btn btn-icon command-delete waves-effect waves-circle" data-row-id="' +
  //       row.id +
  //       '"><span class="zmdi zmdi-delete"></span></button>'
  //     );
  //   }
  // }
});
