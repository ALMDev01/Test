; var CEOMessagePopup = (function () {

    var variables = {
        Messages: new Array(),
        lockFunction: false,
        widgetId: 0
    }

    var CSSStyle = "<style>#ceo-message-popup .modal-content{border-radius:17px;background-color:rgb(38,35,35);width:95%}#ceo-message-popup .header-title{font-size:30.064px;font-family:Lato;color:#fff;text-transform:uppercase;line-height:1.3;padding-bottom:10px;padding-top:9px;z-index:1;position:relative;padding:10px 20px}#ceo-message-popup .description-text{font-size:18px;font-family:Lato;color:#bdbdbd;line-height:1.391;position:relative;padding:10px 20px;margin:0;}#ceo-message-popup #hide-ceo-message-popup{position:absolute;top:-5px;font-size:35px;color:#919091;z-index:999999}#ceo-message-popup .modal-dialog{min-width:90vw}#ceo-message-popup .back-img{width:100%;height:100%;background-image:url(https://static.almanhal.com/images/CEO-cover-img.jpg);background-size:cover;position:absolute;opacity:.3;background-position:center;border-radius:17px}#ceo-message-popup .modal-body{padding:0}#ceo-message-popup #hide-ceo-message-popup:hover{text-decoration: unset;}@media only screen and (min-width:576px){#ceo-message-popup .modal-dialog{margin-top:8vh;display:flex;justify-content:center}}</style>"
    var HtmlPopup = '<div id="ceo-message-popup" data-backdrop="static" data-keyboard="false" class="modal fade" role="dialog" style="z-index:9999"> <div class="modal-dialog modal-sm"> <div class="modal-content"> <div class="modal-body"> <a id="hide-ceo-message-popup" href="javascript:void(0)">&times;</a> <div class="back-img"></div><p class="header-title mb-0">{{Title}}</p><p class="description-text mb-0">{{Description}}</p></div></div></div></div>';
    var CloseIconEnStyle = "<style>#ceo-message-popup #hide-ceo-message-popup{right: 10px;}</style>"
    var CloseIconArStyle = "<style>#ceo-message-popup #hide-ceo-message-popup{left: 10px;}</style>"

    var Messages = {
        Ar: {
            Title: "رسالة من محمد البغدادي - الرئيس التنفيذي",
            Description: "العملاء الأعزاء،<br/><br/>بالرغم مما نمر به الآن من أوقات استثنائية، فقد كان من الواجب علينا اتجاهكم واتجاه عائلاتكم أن نشارككم دعمنا وتضامننا، ونرجو لكم أطيب الأمنيات.<br/><br/>في ظل هذه الظروف أصبحنا أكثر وعيًا بمسؤولياتنا حول ضمان استمرارية وصولكم إلى المحتوى والخدمات التي نقدمها، وأود أن أطمئنكم على أننا ملتزمون اتجاه مسؤولياتنا،<br/>ونبذل كل ما في وسعنا للحفاظ على أمان فريقنا ومساعدتكم لتحقيق أهدافكم وأولوياتكم.<br/><br/>كما أنني في هذا الوقت أود أن أشكركم شخصيًا على دعمكم المستمر وصبركم.<br/><br/>إنّ شركاءنا وعملاءنا في صميم ما نقوم به، لذا أود أن أحثكم جميعًا على التواصل مع جهات الاتصال الإقليمية الخاصة بكم لضمان معالجة أسئلتكم واستفساراتكم وطلباتكم.<br/><br/>وأخيرًا، أقدم كل الشكر لزملائنا على جهودهم المستمرة خلال هذا الوقت الغير مسبوق، نحن جميعًا في هذا الأمر ومن خلال العمل معًا؛ سنجد مخرجًا.<br/><br/>مودتي وإخلاصي،،<br/>محمد",
        },
        En: {
            Title: "A Message from the CEO - Mohamad Al Baghdadi",
            Description: "We are experiencing the most extraordinary of times during which I would like to share my heartfelt support, best wishes and solidarity with you and your families. As I become more aware of our responsibility towards providing you with uninterrupted access to our content and services, I’d like to reassure you that we continue to be committed towards responsible business while doing all we can to keep our team safe and help you achieve your goals and priorities. <br/><br/> During this uncertain time, I would like to personally thank you for your ongoing support and patience. Our partners and customers are at the heart of what we do, so I would urge all of you to continue to work with your regional contact to ensure that your questions, queries and requests are being addressed. <br/><br/> And finally, I would like to thank our colleagues for their continued efforts during this unprecedented time. We’re all in this together – and it is by working together that we will find a way out! <br/><br/> Sincerely<br/> Mohamad<br/>",
        }
    };

    var init = function () {
        initControls();
    };

    var initControls = function () {
        var CEOPopup = CSSStyle + HtmlPopup;
        var LangCode = $('#hdnAppLang').val();
        if (LangCode == 2) {
            CEOPopup = CloseIconArStyle + CEOPopup;
            CEOPopup = CEOPopup.replace("{{Title}}", Messages.Ar.Title);
            CEOPopup = CEOPopup.replace("{{Description}}", Messages.Ar.Description);
        }
        else {
            CEOPopup = CloseIconEnStyle + CEOPopup;
            CEOPopup = CEOPopup.replace("{{Title}}", Messages.En.Title);
            CEOPopup = CEOPopup.replace("{{Description}}", Messages.En.Description);
        }


        $("body").append(CEOPopup);
        initEventHandlers();
        setTimeout(function () {
            var oldSKey = localStorage.getItem("CEOsKey");
            var sKey = $("#sKey").val();
            var isSameSession = oldSKey != null && oldSKey != "" && oldSKey == sKey;
            if (!isSameSession) {
                localStorage.setItem("CEOsKey", sKey);
                $("#ceo-message-popup").modal("show");
            }

        }, 4000);

    };

    var initEventHandlers = function () {
        $("#hide-ceo-message-popup").click(function () {
            $("#ceo-message-popup").modal("hide");
        });
    };

    return {
        init: function () {
            init();
        },
    }
})();


$(function () {
    CEOMessagePopup.init();
});