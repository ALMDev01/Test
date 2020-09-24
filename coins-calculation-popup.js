; var calculationMessagePopup = (function () {

    var variables = {
        Messages: new Array(),
        lockFunction: false,
        widgetId: 0
    }

    var CSSStyle = "<style> #calculation-message-popup .modal-content { background: radial-gradient(at center center, rgb(31, 128, 200) 0%, rgb(8, 100, 168) 35%, rgb(3, 93, 160) 100%); z-index: 9999 !important; border-radius: 13px !important; width: 430px; height: auto; box-shadow: 0 0 6px 0 rgba(0,0,0,.16); } #calculation-message-popup .header-title { font-size: 28px !important; color: rgb(255, 243, 58) !important; margin: 0.3em 6px 0.1em 0px !important; } #calculation-message-popup .description-text { font-size: 20px; display: flex; align-items: center; line-height: 1.8; color: rgb(255, 255, 255) !important; } #calculation-message-popup #hide-calculation-message-popup { position: absolute; top: -5px; font-size: 35px; color: #919091; z-index: 999999; } #calculation-message-popup .modal-dialog { } #calculation-message-popup .modal-body { padding: 0; } #calculation-message-popup #hide-calculation-message-popup:hover { text-decoration: unset; } </style>"
    var HtmlPopup = '<div id="calculation-message-popup" data-backdrop="static" data-keyboard="false" class="modal fade" role="dialog" style="z-index: 9999;"> <div class="modal-dialog modal-sm"> <div class="modal-content"> <div class="modal-body"> <a id="hide-calculation-message-popup" href="javascript:void(0)">&times;</a> <p class="header-title mb-0">{{Title}}</p> <p class="description-text mb-0">{{Description}}</p> </div> </div> </div> </div>';
    var CloseIconEnStyle = "<style>#calculation-message-popup #hide-calculation-message-popup{right: 10px;}</style>"
    var CloseIconArStyle = "<style>#calculation-message-popup #hide-calculation-message-popup{left: 10px;}</style>"

    var Messages = {
        Ar: {
            Title: "تنبيه:",
            Description: "تم إعادة طريقة احتساب النقاط بحيث أصبح تمرين إعادة ترتيب القصة اختياري وليس أساسي، وبالتالي قد يكون هناك زيادة في عدد النقاط.",
        },
        En: {
            Title: "Attention:",
            Description: "Coins calculation method has been updated since the sort story exercise is now optional. There will be an increase in the number of coins for some students.",
        }
    };

    var init = function () {
        initControls();
    };

    var initControls = function () {
        var calculationPopup = CSSStyle + HtmlPopup;
        var LangCode = $('#hdnAppLang').val();
        if (LangCode == 2) {
            calculationPopup = CloseIconArStyle + calculationPopup;
            calculationPopup = calculationPopup.replace("{{Title}}", Messages.Ar.Title);
            calculationPopup = calculationPopup.replace("{{Description}}", Messages.Ar.Description);
        }
        else {
            calculationPopup = CloseIconEnStyle + calculationPopup;
            calculationPopup = calculationPopup.replace("{{Title}}", Messages.En.Title);
            calculationPopup = calculationPopup.replace("{{Description}}", Messages.En.Description);
        }


        $("body").append(calculationPopup);
        initEventHandlers();
        setTimeout(function () {
            var oldSKey = localStorage.getItem("calculationsKey");
            var sKey = $("#sKey").val();
            var isSameSession = oldSKey != null && oldSKey != "" && oldSKey == sKey;
            if (!isSameSession) {
                localStorage.setItem("calculationsKey", sKey);
                $("#calculation-message-popup").modal("show");
            }

        }, 4000);

    };

    var initEventHandlers = function () {
        $("#hide-calculation-message-popup").click(function () {
            $("#calculation-message-popup").modal("hide");
        });
    };

    return {
        init: function () {
            init();
        },
    }
})();


$(function () {
    calculationMessagePopup.init();
});
