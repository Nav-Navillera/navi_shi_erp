// Copyright (c) 2025, Navi and contributors
// For license information, please see license.txt

frappe.ui.form.on("Cost Breakdown Sheet", {
refresh(frm) {
    var timestamps = $(".frappe-timestamp");
    timestamps.each(function(index, element) {
        var timestamp = $(element).data("timestamp");
        $(element).text(timestamp);
    });
},
});
