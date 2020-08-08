$(document).ready(() => {
    const a = $('input#ActivityTitle'),
        b = $('select##CategorySelect'),
        c = $('input#ActivityTime'),
        d = $('textarea#ActivityNotes');
    actvityEntryForm.on('submit', (e) => {
        const f = {
            activityName: a.val().trim(),
            activityCategory: b.val().trim(),
            totalTime: c.val().trim(),
            entryActvityText: d.val().trim(),
        };
        e.preventDefault(), $.post('api/activityEntry', f).then(function () {});
    });
});
