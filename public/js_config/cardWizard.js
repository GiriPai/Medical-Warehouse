$(document).ready(function() {
    // Initialise the wizard
    demo.initMaterialWizard();
    setTimeout(function() {
        $(".card.card-wizard").addClass("active");
    }, 600);
});
