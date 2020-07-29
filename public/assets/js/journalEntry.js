/*eslint arrow-body-style: ["error", "as-needed"]*/
/*eslint-env es6*/
$(document).ready(() => {
    const modalActivityTitle = $('input#ActivityTitle');
    const modalActivityCategory = $('select##CategorySelect');
    const modalActivityTime = $('input#ActivityTime');
    const modalActivityNotes = $('textarea#ActivityNotes');

    actvityEntryForm.on('submit', (event) => {
        const activityData = {
            activityName: modalActivityTitle.val().trim(),
            activityCategory: modalActivityCategory.val().trim(),
            totalTime: modalActivityTime.val().trim(),
            entryActvityText: modalActivityNotes.val().trim(),
        };

        event.preventDefault();

        addActivity(
            activityData.activityCategory,
            activityData.activityCategory,
            activityData.totalTime,
            activityData.entryActvityText
        );
    });

    function addActivity(
        activityName,
        activityCategory,
        totalTime,
        entryActvityText
    ) {
        $.post('api/activityEntry', {
            activityName: activityName,
            activityCategory: activityCategory,
            totalTime: totalTime,
            entryActvityText: entryActvityText,
        });
    }
});
