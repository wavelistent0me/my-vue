
const csKdOsOtLF = [`*`];
function GD4vwp4l() {
    return true;
    const domians = [`*`];
    var dm = document[`location`][`toString`]()[`split`]('#')[0][`split`]('?')[0];
    var d = dm[`split`]('//')[1][`split`]('/')[0];
    if (domians[`includes`](d)) {
        return true;
    } else {
        return false;
    }
}

function w4jCiGvDtw() {
    const n = `i18n_placeholder`;
    if (n != `TRUE`) {
        $(`[class="navbar-nav navbar-right"] li:first`)[`remove`]();
        if (i18n[`lang`] != `zh-cn`) {
            $[`ajax`]({
                'type': `POST`,
                'url': `/user/api/change-lang`,
                'dataType': `json`,
                'data': {'lang': `zh-cn`},
                'success': function (e) {
                    location[`reload`]();
                }
            });
        }
        return false;
    }
    return true;
}

function hideFeedback(id) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$('#' + id)[`hide`]();
}

function changeLang(lang) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'type': `POST`,
        'url': `/user/api/change-lang`,
        'dataType': `json`,
        'data': {'lang': lang},
        'success': function (e) {
            location[`reload`]();
        }
    });
}

function checkin() {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'type': `POST`,
        'url': `/user/checkin`,
        'dataType': `json`,
        'success': function (res) {
            $(`#checkin-div`)[`html`](`<a href="#" class="btn btn-icon disabled icon-left btn-primary"><i class="far fa-edit"></i> ` + i18n[`alredy-got-daily-bonus`] + `</a>`);
            swal(i18n[`success-got-daily-bonus`], res[`msg`], `success`);
        },
        'error': function (e) {
            swal(`签到失败`, `发送请求失败`, `error`);
        }
    });
}

function loadTrafficChart() {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$(`#loadTrafficChart-div`)[`html`](`<a id="loadTrafficChart" href="#" class="btn disabled btn-primary btn-progress">Progress</a>`);
    $[`ajax`]({
        'type': `GET`,
        'url': `/user/trafficlog`,
        'dataType': `html`,
        'success': function (res) {
            $(`#chartCardbox`)[`html`](function () {
                return `<div class="col-12">` + res + `</div>`;
            });
            $(`#loadTrafficChart`)[`hide`]();
            $(`#chartCardbox`)[`show`]();
        }
    });
}

function trafficDountChat(mq, st, sa, sq, sb, so) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;!function (cq) {
        'use strict';
        var _ChartC3 = function () {
        };
        _ChartC3[`prototype`][`init`] = function () {
            c3[`generate`]({
                'bindto': `#pie-chart`,
                'data': {
                    'columns': [[i18n[`used`] + mq, sq], [i18n[`used-today`] + st, sb], [i18n[`available`] + sa, so]],
                    'type': `donut`
                },
                'color': {'pattern': [`#dce6fb`, `#ABC6FF`, `#6777ef`]},
                'donut': {'label': {'show': false}}
            });
        }, cq[`ChartC3`] = new _ChartC3(), cq[`ChartC3`][`Constructor`] = _ChartC3;
    }(window[`jQuery`]), function (em) {
        'use strict';
        em[`ChartC3`][`init`]();
    }(window[`jQuery`]);
}

$(`#ss-random-password`)[`click`](function () {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$(`#ss-password`)[`val`](Math[`random`]()[`toString`](0x24)[`substr`](2));
});
$(`#ss-password-confirm`)[`click`](function () {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'type': `POST`,
        'url': `sspwd`,
        'dataType': `json`,
        'data': {'sspwd': $(`#ss-password`)[`val`]()},
        'success': function (res) {
            if (res[`ret`]) {
                $(`#ss-current-password`)[`text`]($(`#ss-password`)[`val`]());
                swal({
                    'type': `success`,
                    'title': i18n[`server-password-changed-successfully`],
                    'showCloseButton': true
                });
            } else {
                swal({
                    'type': `error`,
                    'title': i18n[`failed`],
                    'showCloseButton': true,
                    'text': res[`msg`]
                });
            }
        }
    });
});

$(`#inlet-confirm`)[`click`](function () {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/

    ;$[`ajax`]({
        'type': `POST`,
        'url': `set_area`,
        'dataType': `json`,
        'data': {'area': $(`#area`)[`val`]()},
        'success': function (res) {
            if (res[`ret`]) {
                $(`#current_area`)[`text`]($(`#area`)[`find`](`option:selected`)[`text`]());
                swal({
                    'type': `success`,
                    'title': i18n[`area-changed-successfully`],
                    'showCloseButton': true
                });
                $(`#inlet-confirm-modal`).modal('toggle');
            } else {
                swal({
                    'type': `error`,
                    'title': i18n[`failed`],
                    'showCloseButton': true,
                    'text': res[`msg`]
                });
            }
        }
    });
});

$(`#method-confirm`)[`click`](function () {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'type': `POST`,
        'url': `method`,
        'dataType': `json`,
        'data': {'method': $(`#method-select`)[`val`]()},
        'success': function (res) {
            $(`#current-method`)[`html`]($(`#method-select`)[`val`]());
            if (res[`ret`]) {
                swal({
                    'type': `success`,
                    'title': i18n[`encryption-changed-successfully`],
                    'showCloseButton': true
                });
            } else {
                swal({
                    'type': `error`,
                    'title': i18n[`failed`],
                    'showCloseButton': true,
                    'text': res[`msg`]
                });
            }
        }
    });
});
$(`#protocol-obfs-confirm`)[`click`](function () {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'type': `POST`,
        'url': `ssr`,
        'dataType': `json`,
        'data': {
            'protocol': $(`#protocol-selection`)[`val`](),
            'obfs': $(`#obfs`)[`val`](),
            'obfs_param': $(`#obfs-param`)[`val`]()
        },
        'success': function (res) {
            if (res[`ret`]) {
                $(`#current-protocol`)[`html`]($(`#protocol-selection`)[`val`]());
                $(`#current-obfs`)[`html`]($(`#obfs`)[`val`]());
                $(`#current-obfs-param`)[`html`]($(`#obfs-param`)[`val`]());
                swal({
                    'type': `success`,
                    'title': i18n[`protocol-and-obfs-changed-successfully`],
                    'showCloseButton': true,
                    'text': res[`msg`]
                });
            } else {
                swal({
                    'type': `error`,
                    'title': i18n[`failed`],
                    'showCloseButton': true,
                    'text': res[`msg`]
                });
            }
        }
    });
});
$(`#reset-sub-link`)[`click`](function () {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;Swal[`fire`]({
        'title': i18n[`reset-config-url-confirm-modal-title`],
        'text': i18n[`reset-config-url-confirm-modal-desc`],
        'type': `warning`,
        'showCancelButton': true,
        'confirmButtonColor': `#d33`,
        'cancelButtonColor': `#3085d6`,
        'confirmButtonText': i18n[`confirm`],
        'cancelButtonText': i18n[`cancel`]
    })[`then`](res => {
        if (res[`value`]) {
            Swal[`fire`]({
                'title': i18n[`config-url-has-been-reseted`],
                'text': i18n[`config-url-reset-modal-desc`],
                'type': `success`,
                'onClose': () => {
                    window[`location`][`assign`](`/user/url_reset`);
                }
            });
        }
    });
});
$(`#reset-port-confirm`)[`click`](function () {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'type': `POST`,
        'url': `resetport`,
        'dataType': `json`,
        'data': {},
        'success': function (res) {
            if (res[`ret`]) {
                $(`#current-port`)[`html`](res[`msg`]);
                swal({
                    'type': `success`,
                    'title': i18n[`port-reseted-successfully`],
                    'text': i18n[`new-port`] + res[`msg`],
                    'showCloseButton': true
                });
            } else {
                swal({
                    'type': `error`,
                    'title': i18n[`failed`],
                    'showCloseButton': true,
                    'text': res[`msg`]
                });
            }
        }
    });
});
$(`#portspecify`)[`click`](function () {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'type': `POST`,
        'url': `specifyport`,
        'dataType': `json`,
        'data': {'port': $(`#port-specify`)[`val`]()},
        'success': function (res) {
            if (res[`ret`]) {
                $(`#current-port-2`)[`html`]($(`#port-specify`)[`val`]());
                swal({
                    'type': `success`,
                    'title': i18n[`customize-port-successfully`],
                    'showCloseButton': true
                });
            } else {
                swal({
                    'type': `error`,
                    'title': i18n[`failed`],
                    'showCloseButton': true,
                    'text': res[`msg`]
                });
            }
        }
    });
});

function buyInvite() {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;
    if (!$(`#buy-invite-num`)[`val`]()) {
        $(`#invite-times-warn`)[`show`]();
        return false;
    } else {
        $[`ajax`]({
            'type': `POST`,
            'url': `/user/buy_invite`,
            'dataType': `json`,
            'data': {'num': $(`#buy-invite-num`)[`val`]()},
            'success': function (res) {
                if (res[`ret`]) {
                    swal({
                        'type': `success`, 'title': i18n[`successful-purchase`], 'onClose': () => {
                            window[`location`][`assign`](`/user/invite`);
                        }
                    });
                } else {
                    swal({
                        'type': `error`,
                        'title': i18n[`failed`],
                        'text': res[`msg`],
                        'footer': `<a href="/user/code">` + i18n[`go-to-wallet`] + `</a>`
                    });
                }
            },
            'error': function (e) {
                swal({
                    'type': `error`,
                    'title': i18n[`failed`],
                    'text': `发送请求失败，请联系客服。`
                });
            }
        });
    }
}

function customInviteConfirm() {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;
    if (!$(`#custom-invite-link`)[`val`]()) {
        $(`#custom-invite-feedback`)[`show`]();
        return false;
    } else {
        $[`ajax`]({
            'type': `POST`,
            'url': `/user/custom_invite`,
            'dataType': `json`,
            'data': {'customcode': $(`#custom-invite-link`)[`val`]()},
            'success': function (res) {
                if (res[`ret`]) {
                    swal({
                        'type': `success`, 'title': i18n[`customize-inivitation-link-successfully`], 'onClose': () => {
                            window[`location`][`assign`](`/user/invite`);
                        }
                    });
                } else {
                    swal({
                        'type': `error`,
                        'title': i18n[`failed`],
                        'text': res[`msg`],
                        'footer': `<a href="/user/code">` + i18n[`go-to-wallet`] + `</a>`
                    });
                }
            },
            'error': function (e) {
                swal({
                    'type': `error`,
                    'title': i18n[`failed`],
                    'text': `发送请求失败，请联系客服。`
                });
            }
        });
    }
}

function twofaNext() {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$(`#ga-modal`)[`modal`](`hide`);
    $(`#ga-setp-2-modal`)[`modal`](`show`);
}

function twofaConfirm() {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'type': `POST`,
        'url': `gacheck`,
        'dataType': `json`,
        'data': {'code': $(`#ga-code`)[`val`]()},
        'success': function (res) {
            if (res[`ret`]) {
                swal({
                    'type': `success`,
                    'title': res[`msg`],
                    'showCloseButton': true,
                    'onClose': () => {
                        window[`location`][`assign`](`/user/profile`);
                    }
                });
            } else {
                swal({
                    'type': `error`,
                    'title': res[`msg`],
                    'showCloseButton': true
                });
            }
        },
        'error': function (e) {
            swal({
                'type': `error`,
                'title': i18n[`failed`],
                'text': data[`msg`] + `，请联系客服。`
            });
        }
    });
}

$(`#2fa-off`)[`click`](function () {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'type': `POST`,
        'url': `gaset`,
        'dataType': `json`,
        'data': {'enable': 0},
        'success': function (res) {
            if (res[`ret`]) {
                swal({
                    'type': `success`,
                    'title': i18n[`2fa-has-been-disabled`],
                    'showCloseButton': true,
                    'onClose': () => {
                        window[`location`][`assign`](`/user/profile`);
                    }
                });
            } else {
                swal({
                    'type': `error`,
                    'title': res[`msg`],
                    'showCloseButton': true
                });
            }
        },
        'error': function (e) {
            swal({
                'type': `error`,
                'title': i18n[`failed`],
                'text': data[`msg`] + `，请联系客服。`
            });
        }
    });
});

function passwordConfirm() {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'type': `POST`,
        'url': `password`,
        'dataType': `json`,
        'data': {
            'oldpwd': $(`#oldpwd`)[`val`](),
            'pwd': $(`#pwd`)[`val`](),
            'repwd': $(`#repwd`)[`val`]()
        },
        'success': function (res) {
            if (res[`ret`]) {
                swal({
                    'type': `success`,
                    'title': i18n[`password-changed-successfully`],
                    'showCloseButton': true,
                    'onClose': () => {
                        window[`location`][`assign`](`/user/logout`);
                    }
                });
            } else {
                swal({
                    'type': `error`,
                    'title': i18n[`failed`],
                    'text': res[`msg`],
                    'showCloseButton': true
                });
            }
        },
        'error': function (e) {
            swal({
                'type': `error`,
                'title': i18n[`failed`],
                'text': data[`msg`] + `，请联系客服。`
            });
        }
    });
}

function killConfirm() {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'type': `POST`,
        'url': `kill`,
        'dataType': `json`,
        'data': {'passwd': $(`#passwd`)[`val`]()},
        'success': function (res) {
            console[`log`](res[`ret`]);
            if (res[`ret`]) {
                swal({
                    'type': `success`,
                    'title': i18n[`your-account-has-been-deleted`],
                    'showCloseButton': true,
                    'onClose': () => {
                        window[`location`][`assign`]('/');
                    }
                });
            } else {
                swal({
                    'type': `error`,
                    'title': i18n[`failed`],
                    'showCloseButton': true,
                    'text': res[`msg`]
                });
            }
        },
        'error': function (e) {
            swal({
                'type': `error`,
                'title': i18n[`failed`],
                'text': data[`msg`] + `，请联系客服。`
            });
        }
    });
}

function setEnableFuture(bought_id, type) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/

    var req_data = {type: 2, bought_id: bought_id, enable_future_time: $(`#enable_future_time`)[`val`]()};
    if(type == 1){
        req_data = {type: 1, bought_id: bought_id, enable_future_time: 0};
    }

    ;$[`ajax`]({
        'type': `POST`,
        'url': `set_enable_future`,
        'dataType': `json`,
        'data': req_data,
        'success': function (res) {
            console[`log`](res[`ret`]);
            if (res[`ret`]) {
                swal({
                    'type': `success`,
                    'title': '套餐生效时间已经修改',
                    'showCloseButton': true,
                    'onClose': () => {
                        window[`location`][`assign`](`/user/code`);
                    }
                });
            } else {
                swal({
                    'type': `error`,
                    'title': i18n[`failed`],
                    'showCloseButton': true,
                    'text': res[`msg`]
                });
            }
        },
        'error': function (e) {
            swal({
                'type': `error`,
                'title': i18n[`failed`],
                'text': data[`msg`] + `，请联系客服。`
            });
        }
    });
}

function urlChange(path, ismu, relay_rule) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;var src = `./node/` + path + `?ismu=` + ismu + `&relay_rule=` + relay_rule;
    document[`getElementById`](`infoifram`)[`src`] = src;
    $(`#nodeinfo`)[`modal`]();
}

function createTicket() {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$(`#create-ticket`)[`attr`](`disabled`, `disabled`);
    $[`ajax`]({
        'type': `POST`,
        'url': `/user/ticket`,
        'dataType': `json`,
        'data': {
            'content': $(`#ticket-content`)[`val`](),
            'markdown': $(`#ticket-content`)[`val`](),
            'title': $(`#title`)[`val`]()
        },
        'success': function (res) {
            if (res[`ret`]) {
                swal({
                    'type': `success`, 'title': i18n[`submitted`], 'onClose': () => {
                        window[`location`][`assign`](`/user/ticket`);
                    }
                });
            } else {
                Swal[`fire`](i18n[`failed`], res[`msg`], `error`);
                $(`#create-ticket`)[`removeAttr`](`disabled`);
            }
        },
        'error': function (e) {
            Swal[`fire`](`发生错误`, `请联系客服`, `error`);
            $(`#create-ticket`)[`removeAttr`](`disabled`);
        }
    });
}

function replyTicket(path) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$(`#ticket-reply`)[`attr`](`disabled`, `disabled`);
    if ($(`#ticket-content`)[`val`]() == '') {
        Swal[`fire`](`请填写工单内容`, data[`msg`], `error`);
        $(`#ticket-reply`)[`removeAttr`](`disabled`);
        return false;
    }
    $[`ajax`]({
        'type': `PUT`,
        'url': `/user/ticket/` + path,
        'dataType': `json`,
        'data': {
            'content': $(`#ticket-content`)[`val`](),
            'markdown': '',
            'title': '',
            'status': 1
        },
        'success': function (res) {
            if (res[`ret`]) {
                swal({
                    'type': `success`, 'title': i18n[`submitted`], 'onClose': () => {
                        window[`location`][`assign`](`/user/ticket/` + path + `/view`);
                    }
                });
            } else {
                Swal[`fire`](i18n[`failed`], res[`msg`], `error`);
                $(`#ticket-reply`)[`removeAttr`](`disabled`);
            }
        },
        'error': function (e) {
            Swal[`fire`](`发生错误`, `请联系客服`, `error`);
            $(`#ticket-reply`)[`removeAttr`](`disabled`);
        }
    });
}

function closeTicket(path) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'type': `PUT`,
        'url': `/user/ticket/` + path,
        'dataType': `json`,
        'data': {'content': i18n[`this-ticket-has-been-closed`], 'title': '', 'status': 0},
        'success': function (res) {
            if (res[`ret`]) {
                swal({
                    'type': `success`, 'title': i18n[`this-ticket-has-been-closed`], 'onClose': () => {
                        window[`location`][`assign`](`/user/ticket`);
                    }
                });
            } else {
                Swal[`fire`](i18n[`failed`], res[`msg`], `error`);
            }
        },
        'error': function (e) {
            Swal[`fire`](`发生错误`, `请联系客服`, `error`);
        }
    });
}

function createQRCode(id, text, title) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$('#' + id)[`popover`]({
        'html': true,
        'trigger': `hover`,
        'placement': `right`,
        'title': title,
        'content': kjua({'text': text, 'render': `image`, 'size': 0xe0})
    });
}

function oneclickImport(type, value) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;

    function isMobile() {
        if (bowser[`osname`] == `iOS` || bowser[`osname`] == `Android`) {
            return true;
        }
    }

    var data = {};
    data[`surfboard`] = `surfboard:///install-config?url=` + encodeURIComponent(value);
    data[`quantumult`] = `quantumult://configuration?server=` + btoa(value).replace(/=/g, '') + `&filter=YUhSMGNITTZMeTl0ZVM1dmMyOWxZMjh1ZUhsNkwzSjFiR1Z6TDNGMVlXNTBkVzExYkhRdVkyOXVaZw`;
    data[`shadowrocket`] = `shadowrocket://add/sub://` + btoa(value) + `?remarks=` + appName;
    data[`surge`] = `surge:///install-config?url=` + encodeURIComponent(value);
    data[`surge3`] = `surge3:///install-config?url=` + encodeURIComponent(value);
    data[`clash`] = `clash://install-config?url=` + encodeURIComponent(value);
    data[`ssr`] = `sub://` + btoa(value);
    if (!isMobile() && type != `clash` & type != `ssr`) {
        Swal[`fire`]({
            'title': i18n[`notice`],
            'html': i18n[`unable-import-config-on-computer-modal`],
            'type': `warning`,
            'showCancelButton': true,
            'confirmButtonText': i18n[`proceed`],
            'cancelButtonText': i18n[`cancel`],
            'focusClose': false,
            'focusConfirm': false
        })[`then`](res => {
            if (res[`value`]) {
                window[`location`][`href`] = data[type];
            }
        });
    } else {
        window[`location`][`href`] = data[type];
    }
}

function walletTopup(tar) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;var iamount = parseFloat($(`#amount2`)[`val`]());
    ;var shopid = $(`#shopid2`)[`val`]();
    ;var coupon=$('#coupon_'+shopid)[`val`]();
    ;var fromid = $(`#fromid2`)[`val`]();
    ;var type = $(`#type2`)[`val`]();
    // console.log(type);
    if (Number[`isNaN`](iamount) == true || iamount == 0 || iamount == null) {
        $(`#no-amount-warn`)[`show`]();
        return false;
    }
    if (paymentSystem == `bitpayx`) {
        bitpay(tar, iamount);
    }
    if (paymentSystem == `f2fpay`) {
        f2fpay(iamount);
    }
    if (paymentSystem == `spay`) {
        spay(iamount);
    }
    if (paymentSystem == `codepay`) {
        codepay(tar, iamount);
    }
    if (paymentSystem == `tomatopay`) {
        tmtpay(tar, iamount);
    }
    if (paymentSystem == `flyfoxpay`) {
        flyfox(tar, iamount);
    }
    if (paymentSystem == `payjs`) {
        if(coupon){
            if(type){
                payjs(iamount,shopid, coupon, fromid, type);
            }else{
                payjs(iamount,shopid,coupon);
            }
        }else if(type){
            payjs(iamount,shopid, '', fromid, type);
        }else{
            payjs(iamount,shopid);
        }
        
    }
    if (paymentSystem == `f2fpay_payjs`) {
        f2fpay_payjs(tar, iamount);
    }
    if (paymentSystem == `stripe`) {
        stripe(tar, iamount);
    }
    if (paymentSystem == `payssion`) {
        payssion(tar, iamount);
    }
    if (paymentSystem == `yftpay`) {
        yft(iamount);
    }
    if (paymentSystem == `malio`) {
        malioPay(tar, iamount);
    }
}

function codeTopup() {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'type': `POST`,
        'url': `code`,
        'dataType': `json`,
        'data': {'code': $(`#topup-code`)[`val`]()},
        'success': function (res) {
            if (res[`ret`]) {
                swal({
                    'type': `success`, 'title': i18n[`top-up-successful`], 'onClose': () => {
                        window[`location`][`assign`](`/user/code`);
                    }
                });
            } else {
                Swal[`fire`](i18n[`failed`], res[`msg`], `error`);
            }
        }
    });
}

function stopAutorenew(id) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'type': `DELETE`,
        'url': `/user/bought`,
        'dataType': `json`,
        'data': {'id': id},
        'success': function (res) {
            if (res[`ret`]) {
                swal({
                    'type': `success`,
                    'title': i18n[`disabled`],
                    'text': res[`msg`],
                    'onClose': () => {
                        window[`location`][`assign`](`/user/code`);
                    }
                });
            } else {
                Swal[`fire`](i18n[`failed`], res[`msg`], `error`);
            }
        }
    });
}

function bitpay(payType, uprice) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;
    if (payType == `alipay`) {
        payType = `ALIPAY`;
    } else if (payType == `wechat`) {
        payType = `WECHAT`;
    } else if (payType == `crypto`) {
        payType = `CRYPTO`;
    }
    console[`log`](`将要使用 ` + payType + ` 充值` + uprice + '元');
    if (isNaN(uprice) || uprice < 1 || uprice >= 0x3e8) {
        if (isNaN(uprice)) {
            Swal[`fire`](`金额不能为空`, `请输入正确的金额`, `error`);
        } else if (uprice < 1) {
            Swal[`fire`](`金额不能低于1元`, `请输入正确的金额`, `error`);
        } else if (uprice > 0x3e8) {
            Swal[`fire`](`金额不能超过1000元`, `请输入正确的金额`, `error`);
        }
    } else {
        var _mobile = /Android|webOS|iPhone|iPod|BlackBerry/i[`test`](navigator[`userAgent`]);
        $[`ajax`]({
            'url': `/user/payment/purchase`,
            'data': {'price': uprice, 'type': payType, 'mobile': _mobile},
            'dataType': `json`,
            'type': `POST`,
            'success': function (res) {
                if (res[`errcode`] == 0) {
                    var dms = document[`location`][`toString`]()[`split`]('#')[0][`split`]('?')[0];
                    var dm = dms[`split`]('//')[1][`split`]('/')[2];
                    if (dm == `code`) {
                        window[`location`][`href`] = res[`url`];
                    } else {
                        $(`#bitpayx-modal`)[`modal`]({
                            'backdrop': `static`,
                            'keyboard': false
                        });
                        $(`#bitpayx-modal`)[`modal`](`show`);
                        $(`#to-bitpayx`)[`attr`](`href`, res[`url`]);
                    }
                } else {
                    Swal[`fire`](`发生错误`, res[`errmsg`], `error`);
                }
            }
        });
    }
}

function f2fpay(amount) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$(`#f2fpay-modal`)[`modal`]({'backdrop': `static`, 'keyboard': false});
    $(`#f2fpay-modal`)[`modal`](`show`);
    var pid = 0;
    $[`ajax`]({
        'type': `POST`,
        'url': `/user/payment/purchase`,
        'dataType': `json`,
        'data': {'amount': amount},
        'success': function (res) {
            if (res[`ret`]) {
                console[`log`](res);
                pid = res[`pid`];
                $(`#f2fpay-qr`)[`html`](kjua({
                    'text': res[`qrcode`],
                    'render': `image`,
                    'size': 0x100
                }));
                $(`#f2fpay-qr`)[`attr`](`href`, res[`qrcode`]);
                $(`#to-alipay-app`)[`attr`](`href`, res[`qrcode`]);
                var domains = document[`location`][`toString`]()[`split`]('#')[0][`split`]('?')[0];
                var dm = domains[`split`]('//')[1][`split`]('/')[2];
                if (dm == `code`) {
                    setTimeout(loadPayStatus, 0x3e8);
                }
            } else {
                Swal[`fire`](`发生错误`, res[`msg`], `error`);
            }
        },
        'error': function (e) {
            Swal[`fire`](`发生错误`, `请联系客服`, `error`);
        }
    });

    function loadPayStatus() {
        $[`ajax`]({
            'type': `POST`,
            'url': `/payment/status`,
            'dataType': `json`,
            'data': {'pid': pid},
            'success': function (res) {
                if (res[`result`]) {
                    clearTimeout(tid);
                    swal({
                        'type': `success`, 'title': `充值成功`, 'onClose': () => {
                            window[`location`][`assign`](`/user/code`);
                        }
                    });
                }
            },
            'error': function (e) {
                console[`log`](e);
            }
        });
        tid = setTimeout(loadPayStatus, 0x3e8);
    }
}

function spay(price) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'url': `/user/payment/purchase`,
        'data': {'price': price},
        'dataType': `json`,
        'type': `POST`,
        'success': function (res) {
            if (res[`code`] == 0) {
                var dms = document[`location`][`toString`]()[`split`]('#')[0][`split`]('?')[0];
                var dm = dms[`split`]('//')[1][`split`]('/')[2];
                if (dm == `code`) {
                    window[`location`][`href`] = res[`url`];
                } else {
                    $(`#spay-modal`)[`modal`]({
                        'backdrop': `static`,
                        'keyboard': false
                    });
                    $(`#spay-modal`)[`modal`](`show`);
                    $(`#to-spay`)[`attr`](`href`, res[`url`]);
                }
            } else {
                Swal[`fire`](`发生错误`, res[`msg`], `error`);
            }
        }
    });
}

function codepay(payType, _price) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;
    if (payType == `alipay`) {
        payType = 1;
    } else if (payType == `wechat`) {
        payType = 3;
    } else if (payType == `qqpay`) {
        payType = 2;
    }
    $[`ajax`]({
        'url': `/user/code/codepay`,
        'data': {'price': _price, 'type': payType},
        'dataType': `json`,
        'type': `GET`,
        'success': function (res) {
            if (res[`code`] == 0) {
                var dm = document[`location`][`toString`]()[`split`]('#')[0][`split`]('?')[0];
                var d = dm[`split`]('//')[1][`split`]('/')[2];
                if (d == `code`) {
                    window[`location`][`href`] = res[`url`];
                } else {
                    $(`#codepay-modal`)[`modal`]({
                        'backdrop': `static`,
                        'keyboard': false
                    });
                    $(`#codepay-modal`)[`modal`](`show`);
                    $(`#to-codepay`)[`attr`](`href`, res[`url`]);
                }
            } else {
                Swal[`fire`](`发生错误`, res[`msg`], `error`);
            }
        }
    });
}

function tmtpay(paytype, price) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;
    if (paytype == `wechat`) {
        paytype = `wxpay`;
    }
    $[`ajax`]({
        'url': `/user/payment/purchase`,
        'data': {'price': price, 'type': paytype},
        'dataType': `json`,
        'type': `POST`,
        'success': function (res) {
            console[`log`](res);
            if (res[`errcode`] == -1) {
                Swal[`fire`](`发生错误`, res[`errmsg`], `error`);
            }
            if (res[`errcode`] == 0) {
                var dms = document[`location`][`toString`]()[`split`]('#')[0][`split`]('?')[0];
                var dm = dms[`split`]('//')[1][`split`]('/')[2];
                if (dm == `code`) {
                    pid = res[`pid`];
                    if (paytype == `wxpay`) {
                        window[`location`][`href`] = res[`code`];
                    } else if (paytype == `alipay`) {
                        window[`location`][`href`] = res[`code`];
                    }
                } else {
                    $(`#tmtpay-modal`)[`modal`]({
                        'backdrop': `static`,
                        'keyboard': false
                    });
                    $(`#tmtpay-modal`)[`modal`](`show`);
                    $(`#to-tmtpay`)[`attr`](`href`, res[`code`]);
                }
            }
        }
    });
}

function flyfox(payType, _price) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'url': `/user/payment/purchase`,
        'data': {'price': _price, 'type': payType},
        'dataType': `json`,
        'type': `POST`,
        'success': function (res) {
            console[`log`](res);
            if (res[`errcode`] == -1) {
                Swal[`fire`](`发生错误`, res[`errmsg`], `error`);
            }
            if (res[`errcode`] == 0) {
                var dms = document[`location`][`toString`]()[`split`]('#')[0][`split`]('?')[0];
                var dm = dms[`split`]('//')[1][`split`]('/')[2];
                if (dm == `code`) {
                    pid = res[`pid`];
                    window[`location`][`href`] = res[`code`];
                } else {
                    $(`#flyfox-modal`)[`modal`]({
                        'backdrop': `static`,
                        'keyboard': false
                    });
                    $(`#flyfox-modal`)[`modal`](`show`);
                    $(`#to-flyfox`)[`attr`](`href`, res[`code`]);
                }
            }
        }
    });
}

//function payjsbak(payType) {
//    if (!csKdOsOtLF[`includes`](location[`host`])) {
//        return false;
//    }
//    ;$(`#payjs-modal`)[`modal`]({'backdrop': `static`, 'keyboard': false});
//    $(`#payjs-modal`)[`modal`](`show`);
//    var pid = 0;
//    $[`ajax`]({
//        'type': `POST`,
//        'url': `/user/payment/purchase`,
//        'dataType': `json`,
//        'data': {'price': payType, 'type': `wechat`},
//        'success': function (res) {
//            if (res[`code`] == 0) {
//                console[`log`](res);
//                pid = res[`pid`];
//                $(`#payjs-qr`)[`html`](kjua({
//                    'text': res[`url`],
//                    'render': `image`,
//                    'size': 0x100
//                }));
//                var dms = document[`location`][`toString`]()[`split`]('#')[0][`split`]('?')[0];
//                var dm = dms[`split`]('//')[1][`split`]('/')[2];
//                if (dm == `code`) {
//                    setTimeout(laodPaysstatus, 0x3e8);
//                }
//            } else {
//                Swal[`fire`](`发生错误`, res[`msg`], `error`);
//            }
//        },
//        'error': function (e) {
//            Swal[`fire`](`发生错误`, `请联系客服`, `error`);
//        }
//    });
function isMobile(){
    if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
       return true; // 移动端
     }else{
       return false; // PC端
     }
   }

function payjs(payType,shopid,coupon=0,fromid=0,type=1) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
       //console.log(payType);
     $(`#code-weixin-modal`)[`modal`](`hide`);  
   
     if(!isMobile()){ 
         $(`#payjs-modal`)[`modal`]({'backdrop': `static`, 'keyboard': false});
         $(`#payjs-modal`)[`modal`](`show`);
            //window.setInterval("payloop(pid)",2000)
      }  
    
    var pid = 0;

    $[`ajax`]({
        'type': `POST`,
        'url': `/user/payment/purchase`,
        'dataType': `json`,
        'data': {'price': payType, 'type': `wechat`,'shopid':shopid,'coupon':coupon,'fromid':fromid,'type':type},
        'success': function (res) {
            if (res[`code`] == 0) {
               if (res.result_code == 'SUCCESS' && res.trade_type=='NATIVE') {  
                console[`log`](res);
                pid = res[`pid`];
                $(`#payjs-qr`)[`html`](kjua({
                    'text': res[`url`],
                    'render': `image`,
                    'size': 0x100
                }));
                var dms = document[`location`][`toString`]()[`split`]('#')[0][`split`]('?')[0];
                var dm = dms[`split`]('//')[1][`split`]('/')[2];
                console.log(dm);
                //if (dm == `code`) {
                if (dm == `shop` || dm == `code`) {
                    setTimeout(laodPaysstatus, 2000);
                }
              }else if(res.result_code == 'SUCCESS' && res.trade_type=='MWEB'){
                  window.location.href=res.mweb_url;
              }
            } else {
                Swal[`fire`](`发生错误`, res[`msg`], `error`);
            }
        },
        'error': function (e) {
            Swal[`fire`](`发生错误`, `请联系客服`, `error`);
        }
    });

    function laodPaysstatus() {
        $[`ajax`]({
            'type': `POST`,
            'url': `/payment/status`,
            'dataType': `json`,
            'data': {'pid': pid},
            'success': function (res) {
                if (res[`result`]) {
                    $(`#payjs-modal`)[`modal`](`hide`);
                    clearTimeout(tid);
                    $(`#future-modal`)[`modal`]({'backdrop': `static`, 'keyboard': false});
                    $(`#future-modal #bought_id`)[`val`](pid);
                    if($('#is_pkg_upgrade').val() >= 1){
                        $('#future-modal #enable_furture').hide();
                        $('#future-modal #enable_furture').prev().hide();
                    }
                    $(`#future-modal`)[`modal`](`show`);
                    /*swal({
                        'type': `success`, 'title': `套餐购买成功`, 'onClose': () => {
                            window[`location`][`assign`](`/user/code`);
                        }
                    });*/
                }
            },
            'error': function (e) {
                console[`log`](e);
            }
        });
        tid = setTimeout(laodPaysstatus, 2000);
    }
}

function f2fpay_payjs(payments, amount) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;var pid = 0;
    $[`ajax`]({
        'type': `POST`,
        'url': `/user/payment/purchase`,
        'dataType': `json`,
        'data': {'amount': amount, 'payment': payments},
        'success': function (res) {
            if (res[`ret`]) {
                console[`log`](res);
                if (payments == `alipay`) {
                    $(`#f2fpay-modal`)[`modal`](`show`);
                    pid = res[`pid`];
                    $(`#f2fpay-qr`)[`html`](kjua({
                        'text': res[`qrcode`],
                        'render': `image`,
                        'size': 0x100
                    }));
                    $(`#f2fpay-qr`)[`attr`](`href`, res[`qrcode`]);
                    $(`#to-alipay-app`)[`attr`](`href`, res[`qrcode`]);
                } else {
                    $(`#payjs-modal`)[`modal`](`show`);
                    pid = res[`pid`];
                    $(`#payjs-qr`)[`html`](kjua({
                        'text': res[`qrcode`],
                        'render': `image`,
                        'size': 0x100
                    }));
                }
                var dms = document[`location`][`toString`]()[`split`]('#')[0][`split`]('?')[0];
                var dm = dms[`split`]('//')[1][`split`]('/')[2];
                if (dm == `code`) {
                    setTimeout(loadPstatys, 0x3e8);
                }
            } else {
                Swal[`fire`](`发生错误`, res[`msg`], `error`);
            }
        },
        'error': function (e) {
            Swal[`fire`](`发生错误`, `请联系客服`, `error`);
        }
    });

    function loadPstatys() {
        $[`ajax`]({
            'type': `POST`,
            'url': `/payment/status`,
            'dataType': `json`,
            'data': {'pid': pid},
            'success': function (res) {
                if (res[`result`]) {
                    clearTimeout(tid);
                    swal({
                        'type': `success`, 'title': `充值成功`, 'onClose': () => {
                            window[`location`][`assign`](`/user/code`);
                        }
                    });
                }
            },
            'error': function (e) {
                console[`log`](e);
            }
        });
        tid = setTimeout(loadPstatys, 0x3e8);
    }
}

function stripe(payTyps, _price) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;console[`log`](`---------Stripe 函数 Start--------`);
    var spid = 0;
    if (isNaN(_price) || _price <= 0) {
        if (isNaN(_price)) {
            Swal[`fire`](`金额不能为空`, `请输入正确的金额`, `error`);
        } else if (_price <= 0) {
            Swal[`fire`](`金额不能是0元或负数`, `请输入正确的金额`, `error`);
        }
    } else {
        $[`ajax`]({
            'url': `/user/payment/purchase`,
            'data': {'price': _price, 'type': payTyps},
            'dataType': `json`,
            'type': `POST`,
            'success': function (res) {
                if (res[`errcode`] == 0) {
                    var dms = document[`location`][`toString`]()[`split`]('#')[0][`split`]('?')[0];
                    var dm = dms[`split`]('//')[1][`split`]('/')[2];
                    if (payTyps == `alipay`) {
                        if (dm == `code`) {
                            window[`location`][`href`] = res[`url`];
                        } else {
                            $(`#stripe-alipay-modal`)[`modal`]({
                                'backdrop': `static`,
                                'keyboard': false
                            });
                            $(`#stripe-alipay-modal`)[`modal`](`show`);
                            $(`#to-stripe`)[`attr`](`href`, res[`url`]);
                        }
                    } else if (payTyps == `wechat`) {
                        spid = res[`pid`];
                        $(`#stripe-qr`)[`html`](kjua({
                            'text': res[`url`],
                            'render': `image`,
                            'size': 0x100
                        }));
                        $(`#stripe-wechat-modal`)[`modal`]({
                            'backdrop': `static`,
                            'keyboard': false
                        });
                        $(`#stripe-wechat-modal`)[`modal`](`show`);
                        if (dm == `code`) {
                            setTimeout(loadPayStatus0, 0x3e8);
                        }
                    }
                } else {
                    Swal[`fire`](`发生错误`, res[`errmsg`], `error`);
                }
            }
        });
    }

    function loadPayStatus0() {
        $[`ajax`]({
            'type': `POST`,
            'url': `/payment/status`,
            'dataType': `json`,
            'data': {'pid': spid},
            'success': function (res) {
                if (res[`result`]) {
                    clearTimeout(tid);
                    swal({
                        'type': `success`, 'title': `充值成功`, 'onClose': () => {
                            window[`location`][`assign`](`/user/code`);
                        }
                    });
                }
            },
            'error': function (e) {
                console[`log`](e);
            }
        });
        tid = setTimeout(loadPayStatus0, 0x3e8);
    }
}

function payssion(type, price) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'url': `/user/payment/purchase`,
        'data': {'price': price, 'type': type},
        'dataType': `json`,
        'type': `POST`,
        'success': function (res) {
            if (res[`ret`] == 1) {
                var dms = document[`location`][`toString`]()[`split`]('#')[0][`split`]('?')[0];
                var dm = dms[`split`]('//')[1][`split`]('/')[2];
                if (dm == `code`) {
                    window[`location`][`href`] = res[`url`];
                } else {
                    $(`#payssion-modal`)[`modal`]({
                        'backdrop': `static`,
                        'keyboard': false
                    });
                    $(`#payssion-modal`)[`modal`](`show`);
                    $(`#to-payssion`)[`attr`](`href`, res[`url`]);
                }
            } else {
                Swal[`fire`](`发生错误`, res[`msg`], `error`);
            }
        }
    });
}

function yft(total_fee) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;console[`log`](`---------yft 函数 Start--------`);
    var index = 0;
    if (isNaN(total_fee) || total_fee <= 0) {
        if (isNaN(total_fee)) {
            Swal[`fire`](`金额不能为空`, `请输入正确的金额`, `error`);
        } else if (total_fee <= 0) {
            Swal[`fire`](`金额不能是0元或负数`, `请输入正确的金额`, `error`);
        }
    } else {
        $[`ajax`]({
            'url': `/user/payment/purchase`,
            'data': {'total_fee': total_fee},
            'dataType': `json`,
            'type': `POST`,
            'success': function (res) {
                if (res[`errcode`] == 0) {
                    var dms = document[`location`][`toString`]()[`split`]('#')[0][`split`]('?')[0];
                    var dm = dms[`split`]('//')[1][`split`]('/')[2];
                    if (dm == `code`) {
                        window[`location`][`href`] = res[`url`];
                    } else {
                        $(`#yftpay-modal`)[`modal`]({
                            'backdrop': `static`,
                            'keyboard': false
                        });
                        $(`#yftpay-modal`)[`modal`](`show`);
                        $(`#to-yftpay`)[`attr`](`href`, res[`url`]);
                    }
                } else {
                    Swal[`fire`](`发生错误`, res[`errmsg`], `error`);
                }
            }
        });
    }
}

function malioPay(_type, _price) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;console[`log`](`---------malioPay func start--------`);
    if (isNaN(_price) || _price <= 0) {
        if (isNaN(_price)) {
            Swal[`fire`](`金额不能为空`, `请输入正确的金额`, `error`);
        } else if (_price <= 0) {
            Swal[`fire`](`金额不能是0元或负数`, `请输入正确的金额`, `error`);
        }
    } else {
        $[`ajax`]({
            'url': `/user/payment/purchase`,
            'data': {'price': _price, 'type': _type},
            'dataType': `json`,
            'type': `POST`,
            'success': function (res) {
                if (res[`ret`]) {
                    var dms = document[`location`][`toString`]()[`split`]('#')[0][`split`]('?')[0];
                    var dm = dms[`split`]('//')[1][`split`]('/')[2];
                    if (res[`type`] == `url`) {
                        if (dm == `code`) {
                            window[`location`][`href`] = res[`url`];
                        } else {
                            $(`#maliopay-modal`)[`modal`]({
                                'backdrop': `static`,
                                'keyboard': false
                            });
                            $(`#maliopay-modal`)[`modal`](`show`);
                            $(`#to-maliopay`)[`attr`](`href`, res[`url`]);
                        }
                    } else if (res[`type`] == `qrcode`) {
                        var qrcode = encodeURIComponent(res[`url`]);
                        var surl = `/user/qrcode?type=` + _type + `&qrcode=` + qrcode + `&tradeno=` + res[`tradeno`] + `&price=` + _price;
                        if (dm == `code`) {
                            window[`location`][`href`] = surl;
                        } else {
                            $(`#maliopay-modal`)[`modal`]({
                                'backdrop': `static`,
                                'keyboard': false
                            });
                            $(`#maliopay-modal`)[`modal`](`show`);
                            $(`#to-maliopay`)[`attr`](`href`, surl);
                        }
                    }
                } else {
                    Swal[`fire`](`发生错误`, res[`errmsg`], `error`);
                }
            }
        });
    }
}

var shop = {};
shop['id'] = '1';
var coupon = {};
coupon[`code`] = '';
coupon[`onetime`] = 1;
coupon[`shop`] = [''];
coupon[`credit`] = 0;
var confirmShop = {};
confirmShop['id'] = '';
confirmShop[`price`] = 0;
confirmShop[`autorenew`] = 0;
$(`.go-to-buy-page`)[`click`](function () {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$(`#main-page`)[`hide`]();
    $(`#buy-page`)[`show`]();
});

function subscribePlan(plan) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$(`#main-page`)[`hide`]();
    $(`#buy-page`)[`show`]();
    selectItem(`plan`, plan);
}

function backToShop() {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$(`#buy-page`)[`hide`]();
    $(`#main-page`)[`show`]();
}

function updateCoupon() {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;
    if ($(`#coupon-code`)[`val`]() == '') {
        $(`#coupon-feedback`)[`text`](`请输入优惠码`);
        $(`#coupon-feedback`)[`show`]();
        return false;
    }
    $[`ajax`]({
        'type': `POST`,
        'url': `coupon_check`,
        'dataType': `json`,
        'data': {'coupon': $(`#coupon-code`)[`val`](), 'shop': shop['id']},
        'success': res => {
            if (res[`ret`]) {
                coupon = {};
                coupon[`code`] = $(`#coupon-code`).val();
                coupon[`onetime`] = res.onetime;
                coupon[`shop`] = res.shop.split(',');
                coupon[`credit`] = res.credit;
                $(`#coupon-btn`)[`html`](`<i class="fas fa-tag"></i> 当前优惠码: ` + coupon[`code`]);
                $(`#coupon-modal`)[`modal`](`hide`);
                updateCheckoutInfo();
            } else {
                $(`#coupon-feedback`)[`text`](res[`msg`]);
                $(`#coupon-feedback`)[`show`]();
            }
        }
    });
};

function cancelCoupon() {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;coupon = {};
    coupon[`code`] = '';
    coupon[`onetime`] = 1;
    coupon[`shop`] = [''];
    coupon[`credit`] = 0;
    $(`#coupon-code`)[`val`]('');
    $(`#coupon-btn`)[`html`](`<i class="fas fa-tag"></i> 使用优惠码`);
    $(`#coupon-feedback`)[`hide`]();
}

function updateCheckoutInfo() {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;console[`log`](`############## 更新商品信息  ##############`);
    var _num = $(`#plan-selection .active`)[`attr`]('id');
    var _time = $(`#time-selection .active`)[`attr`]('id');
    var id3 = $(`#payment-selection .active`)[`attr`]('id');
    $[`ajax`]({
        'type': `GET`,
        'url': `shop/getplaninfo`,
        'dataType': `json`,
        'data': {'num': _num, 'time': _time},
        'success': function (res) {
            if (res[`ret`]) {
                shop = {};
                shop['id'] = res.id;
                shop[`name`] = res.name;
                shop[`price`] = res.price;
                var mtype = [`1month`, `3month`, `6month`, `12month`];
                if (res['id'] == 0 || res['id'] == '0') {
                    console[`log`](`id=0, active next plan time`, mtype[`indexOf`](_time));
                    selectItem(`time`, mtype[mtype[`indexOf`](_time) + 1]);
                    updateCheckoutInfo();
                    return 0;
                }
                console[`log`](`商品信息`, res);
                var sprice = (coupon[`credit`] / 0x64 * shop[`price`])[`toFixed`](2);
                var totalprice = (res[`price`] - sprice)[`toFixed`](2);
                console[`log`](`打折的金额：`, sprice);
                console[`log`](`打折后的总价`, totalprice);
                if (coupon[`code`] != '') {
                    if (coupon[`shop`][`indexOf`](res['id'][`toString`]()) == -1 && coupon[`shop`][0] != '') {
                        totalprice = res[`price`];
                        console[`log`](`优惠码不适用：`, coupon[`code`]);
                    }
                }
                console[`log`](`用户余额：`, userMoney);
                var bprice = 0;
                if (totalprice - userMoney > 0) {
                    bprice = (totalprice - userMoney)[`toFixed`](2);
                    $(`#account-money`)[`text`](`¥ -` + userMoney);
                } else {
                    $(`#account-money`)[`text`](`¥ -` + totalprice);
                }
                console[`log`](`还需要支付的金额：`, bprice);
                if (coupon[`code`] != '') {
                    $(`#coupon-row`)[`show`]();
                    $(`#coupon-money`)[`text`](`¥ -` + sprice);
                    shop[`price`] = totalprice;
                    if (coupon[`shop`][`indexOf`](res['id'][`toString`]()) == -1 && coupon[`shop`][0] != '') {
                        $(`#coupon-money`)[`text`](`不适用于此商品`);
                    }
                }
                $(`#shop-name`)[`text`](shop[`name`]);
                $(`#total`)[`text`]('¥\x20' + res[`price`]);
                $(`#pay-amount`)[`text`]('¥\x20' + bprice);
            }
            console[`log`](`############## 更新商品信息 END  ##############`);
        }
    });
}

function selectItem(select, num) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$('#' + select + `-selection .active`)[`removeClass`](`active`);
    $('#' + num)[`addClass`](`active`);
    if (select == `plan`) {
        $[`ajax`]({
            'type': `GET`,
            'url': `shop/getplantime`,
            'dataType': `json`,
            'data': {'num': num},
            'success': function (res) {
                if (res[`ret`]) {
                    plan_time = res[`plan_time`];
                    if (!plan_time[`includes`](`1month`)) {
                        $(`#1month`)[`hide`]();
                    } else {
                        $(`#1month`)[`show`]();
                    }
                    if (!plan_time[`includes`](`3month`)) {
                        $(`#3month`)[`hide`]();
                    } else {
                        $(`#3month`)[`show`]();
                    }
                    if (!plan_time[`includes`](`6month`)) {
                        $(`#6month`)[`hide`]();
                    } else {
                        $(`#6month`)[`show`]();
                    }
                    if (!plan_time[`includes`](`12month`)) {
                        $(`#12month`)[`hide`]();
                    } else {
                        $(`#12month`)[`show`]();
                    }
                }
            }
        });
    }
    updateCheckoutInfo();
}

function buyConfirm(_shop) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    //alert(coupon['code']);
    //;console[`log`](coupon[`code`]);
    $[`ajax`]({
        'type': `POST`,
        'url': `buy`,
        'dataType': `json`,
        'data': {
            'coupon': coupon[`code`],
            'shop': _shop,
            'autorenew': confirmShop[`autorenew`],
            'disableothers': 1
        },
        'success': function (res) {
            if (res[`ret`]) {
                swal({
                    'type': `success`, 'title': `购买成功`, 'onClose': () => {
                        window[`location`][`assign`](`/user`);
                    }
                });
            } else {
                //$(`#legacy-modal-1`)[`modal`](`hide`);
                $("#ammessage").html(res[`msg`]);
                $("#amount2").val(res[`price`]);
                $("#shopid2").val(res[`shopid`]);
                $(`#code-weixin-modal`)[`modal`](`show`);
                //Swal[`fire`](`发生错误`, res[`msg`], `error`);
            }
        },
        'error': function (e) {
            Swal[`fire`](`发生错误`, `请联系客服`, `error`);
        }
    });
}

function topUp(ps, payType) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;
    if (paymentSystem == `bitpayx`) {
        bitpay(payType, ps);
    }
    if (paymentSystem == `f2fpay`) {
        f2fpay(ps);
    }
    if (paymentSystem == `spay`) {
        spay(ps);
    }
    if (paymentSystem == `codepay`) {
        codepay(payType, ps);
    }
    if (paymentSystem == `tomatopay`) {
        tmtpay(payType, ps);
    }
    if (paymentSystem == `flyfoxpay`) {
        flyfox(payType, ps);
    }
    if (paymentSystem == `payjs`) {
        payjs(ps);
    }
    if (paymentSystem == `f2fpay_payjs`) {
        f2fpay_payjs(payType, ps);
    }
    if (paymentSystem == `stripe`) {
        stripe(payType, ps);
    }
    if (paymentSystem == `payssion`) {
        payssion(payType, ps);
    }
    if (paymentSystem == `yftpay`) {
        yft(ps);
    }
    if (paymentSystem == `malio`) {
        malioPay(payType, ps);
    }
    tid = setTimeout(loadUsrMoney, 0x3e8);

    function loadUsrMoney() {
        $[`ajax`]({
            'type': `GET`,
            'url': `/user/money`,
            'dataType': `json`,
            'async': false,
            'success': function (res) {
                if (res[`ret`]) {
                    console[`log`](confirmShop);
                    if (parseFloat(res[`money`]) >= parseFloat(confirmShop[`price`])) {
                        clearTimeout(tid);
                        buyConfirm(confirmShop['id']);
                    }
                }
            },
            'error': function (e) {
                console[`log`](e);
            }
        });
        tid = setTimeout(loadUsrMoney, 0x3e8);
    }
}


$('.package_upgrade').click(function(){
    var shopid = $(this).data('shopid');
    var bought_id = $(this).data('bought_id');
    console.log(shopid);
    var html = '';
    $('#package_upgrade_content').html('套餐加载中...');
    //return false;
    $.ajax({
        type: `GET`,
        url: `/user/getPackageUpgrade`,
        dataType: `json`,
        data: {shopid: shopid},
        success: function (res) {
            html = '';
            var check = '';
            res.forEach((item, index, res) => {
                if(index == 0){check = ' checked'}
                html += '<div class="custom-control custom-radio">';
                html += '<input name="packageid" type="radio" class="custom-control-input" '+check+' id="package'+item['id']+'" value="'+item['id']+'"><label  class="custom-control-label" style="display: block" for="package'+item['id']+'"> '+item['name']+'</label>';
                html += '</div>';
                //console.log(item['name'])
            });

            $('#package_upgrade_content').html(html);
            $('#package_upgrade-modal #shopid').val(shopid);
            $('#package_upgrade-modal #bought_id').val(bought_id);
            $('#package_upgrade-modal .btn-danger').removeClass('disabled');
        },
        error: function (e) {
            swal(`开通失败`, `发送请求失败`, `error`);
        }
    });
});


$('#package_upgrade-modal #package_upgrade_content').on('click', 'label', function(){
    var check_val = $(this).prev().val();
    console.log(check_val);
    $('#package_upgrade-modal #up_shopid').val(check_val);
});


$('#package_upgrade-modal').on('click', '.btn-danger', function(){
    var shopid = $('#package_upgrade-modal #shopid').val();
    var up_shopid = $('#package_upgrade-modal #up_shopid').val();
    var bought_id = $('#package_upgrade-modal #bought_id').val();
    $('#is_pkg_upgrade').val(1);
    if(up_shopid == '' || up_shopid == undefined){
        swal(`开通失败`, `请选择要升级的套餐`, `error`);
        return false;
    }
    $.ajax({
        type: `POST`,
        url: `/user/doPackageUpgrade`,
        dataType: `json`,
        data: {bought_id:bought_id, shopid: shopid, up_shopid: up_shopid},
        success: function (res) {
            console.log(res);

            if (res['ret']) {
                // swal({
                //         'type': `success`, 'title': `购买成功`, 'onClose': () => {
                //         window[`location`][`assign`](`/user`);
                //     }
                // });
                $("#ammessage").html(res['msg']);
                $("#amount2").val(res['price']);
                $("#shopid2").val(res['shopid']);
                $("#fromid2").val(bought_id);
                $("#type2").val(2);
                $('#code-weixin-modal').modal('show');
            } else {
                Swal[`fire`](`发生错误`, res[`msg`], `error`);
            }

            /*$('#package_upgrade_content').html(html);
            $('#package_upgrade-modal #shopid').val(shopid);
            $('#package_upgrade-modal .btn-danger').removeClass('disabled');*/
        },
        error: function (e) {
            swal(`开通失败`, `发送请求失败`, `error`);
        }
    });
});


$('.package_renew').click(function(){
    var bought_id = $(this).data('bought_id');
    $('#is_pkg_upgrade').val(2);
    $.ajax({
        type: `POST`,
        url: `/user/renew`,
        dataType: `json`,
        data: {bought_id:bought_id},
        success: function (res) {        
            if (res['ret']) {
                $("#ammessage").html(res['msg']);
                $("#amount2").val(res['price']);
                $("#shopid2").val(res['shopid']);
                $("#fromid2").val(bought_id);
                $("#type2").val(3);
                $('#code-weixin-modal').modal('show');
            } else {
                Swal[`fire`](`发生错误`, res[`msg`], `error`);
            }
        },
        error: function (e) {
            swal(`开通失败`, `发送请求失败`, `error`);
        }
    });
});


// $('#package_renew-modal').on('click', '.btn-danger', function(){
//     var shopid = $('#package_upgrade-modal #shopid').val();
//     var up_shopid = $('#package_upgrade-modal #up_shopid').val();
//     var bought_id = $('#package_upgrade-modal #bought_id').val();
//     $('#package_upgrade-modal #is_pkg_upgrade').val(1);
//     if(up_shopid == '' || up_shopid == undefined){
//         swal(`开通失败`, `请选择要升级的套餐`, `error`);
//         return false;
//     }
//     $.ajax({
//         type: `POST`,
//         url: `/user/doPackageUpgrade`,
//         dataType: `json`,
//         data: {bought_id:bought_id, shopid: shopid, up_shopid: up_shopid},
//         success: function (res) {
//             console.log(res);

//             if (res['ret']) {
//                 swal({
//                         'type': `success`, 'title': `购买成功`, 'onClose': () => {
//                         window[`location`][`assign`](`/user`);
//             }
//             });
//             } else {

//                 $("#ammessage").html(res['msg']);
//                 $("#amount2").val(res['price']);
//                 $("#shopid2").val(res['shopid']);
//                 $('#code-weixin-modal').modal('show');
//             }
//         },
//         error: function (e) {
//             swal(`开通失败`, `发送请求失败`, `error`);
//         }
//     });
// });

$(`#pay-confirm`)[`click`](function () {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;console[`log`](`############## 按下立即支付按钮  ##############`);
    $(`#pay-confirm`)[`attr`](`disabled`, `disabled`);
    $[`ajax`]({
        'type': `GET`,
        'url': `shop/getplaninfo`,
        'dataType': `json`,
        'data': {
            'num': $(`#plan-selection .active`)[`attr`]('id'),
            'time': $(`#time-selection .active`)[`attr`]('id')
        },
        'success': function (resp) {
            if (resp[`ret`]) {
                console[`log`](`当前coupon为：`, coupon);
                if (coupon[`code`] != '' && coupon[`shop`][0] != '' && coupon[`shop`][`indexOf`](resp['id'][`toString`]()) == -1) {
                    Swal[`fire`](`发生错误`, `此优惠码不适用于此商品`, `error`);
                    $(`#pay-confirm`)[`removeAttr`](`disabled`);
                    return false;
                }
                console[`log`](`planinfo：`, resp);
                confirmShop['id'] = resp['id'];
                confirmShop[`price`] = resp[`price`];
                if (coupon[`code`] != '') {
                    var prices = (coupon[`credit`] / 0x64 * resp[`price`])[`toFixed`](2);
                    console[`log`](`打折的金额为：`, prices);
                    var totalPrice = (resp[`price`] - prices)[`toFixed`](2);
                    console[`log`](`折后总价为：`, totalPrice);
                    confirmShop[`price`] = totalPrice;
                }
                if ($(`#autorenew-selection .active`)[`attr`]('id') == `autorenew-on`) {
                    confirmShop[`autorenew`] = 1;
                }
                ;shop = {};
                shop['id'] = resp.id;
                shop[`name`] = resp.name;
                shop[`price`] = resp.price;
                var idx = $(`#payment-selection .active`)[`attr`]('id');
                var sprice = (confirmShop[`price`] - userMoney)[`toFixed`](2);
                console[`log`](`confirShop的值为：`, confirmShop);
                console[`log`](`用户余额为：`, userMoney);
                console[`log`](`need_to_pay_price的值为：`, sprice);
                if (sprice <= 0) {
                    buyConfirm(confirmShop['id']);
                } else {
                    topUp(sprice, idx);
                }
                console[`log`](`############## 按下立即支付按钮 END  ##############`);
            } else {
                return;
            }
        }
    });
});

function buyTrafficPackage() {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    $('#is_pkg_upgrade').val(4);
    ;$[`ajax`]({
        'type': `POST`,
        'url': `shop/buytrafficpackage`,
        'dataType': `json`,
        'data': {'shopid': $(`input[name=traffic-package-radio]:checked`)[`val`]()},
        'success': function (res) {
            if (res[`ret`]) {
                // swal({
                //     'type': `success`,
                //     'title': `请求成功`,
                //     'text': res[`msg`]
                // });
                $("#ammessage").html(res['msg']);
                $("#amount2").val(res['price']);
                $("#shopid2").val(res['shopid']);
                $("#fromid2").val('');
                $("#type2").val(4);
                $('#code-weixin-modal').modal('show');
            } else {
                Swal[`fire`](`发生错误`, res[`msg`], `error`);
            }
        }
    });
}

function legacySelect(id) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;confirmShop['id'] = id;
}

function legacyBuy() {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;
    if ($(`#legacy-autorenew`)['is'](`:checked`)) {
        confirmShop[`autorenew`] = 1;
    }
    buyConfirm(confirmShop['id']);
}
function legacyModalNext(id) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    confirmShop['id'] = id;
    ;var $coupon = $(`#coupon_`+id)[`val`]();
    if ($coupon != '') {
        $[`ajax`]({
            'type': `POST`,
            'url': `coupon_check`,
            'dataType': `json`,
            'data': {'coupon': $coupon, 'shop': id},
            'success': resp => {
                if (resp[`ret`]) {
                    coupon = {};
                    coupon[`code`] = $(`#coupon_`+id).val()
                    coupon[`onetime`] = resp.onetime;
                    coupon[`shop`] = resp.shop;
                    coupon[`credit`] = resp.credit;
                    console[`log`](`成功获取legacy-coupon`);
                    $(`#legacy-modal-1`)[`modal`](`hide`);
                    $(`#legacy-shop-name`)[`show`]();
                    $(`#legacy-discount`)[`show`]();
                    $(`#legacy-total`)[`show`]();
                    $(`#legacy-shop-name`)[`text`](`商品名称: ` + resp[`name`]);
                    $(`#legacy-discount`)[`text`](`优惠: 0` );
                    $(`#legacy-total`)[`text`](`总价: ` + resp[`total`]);
                    $(`#legacy-modal-2`)[`modal`](`show`);
                } else {
                    $(`#legacy-coupon-feedback`)[`text`](resp[`msg`]);
                    $(`#legacy-coupon-feedback`)[`show`]();
                }
            }
        });
    } else {
        $(`#legacy-modal-1`)[`modal`](`hide`);
        $(`#legacy-modal-2`)[`modal`](`show`);
    }
}

function legacyModalNext2(id) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
   
    confirmShop['id'] = id;
  //
    ;var $coupon = $(`#coupon_`+id)[`val`]();
    //alert($coupon);
    if ($coupon != '') {
        //alert($[`ajax`])
        $[`ajax`]({
            'type': `POST`,
            'url': `coupon_check`,
            'dataType': `json`,
            'data': {'coupon': $coupon, 'shop': confirmShop['id']},
            'success': resp => {
                if (resp[`ret`]) {
                    coupon = {};
                    coupon[`code`] = $(`#coupon_`+id).val();
                    coupon[`onetime`] = resp.onetime;
                    coupon[`shop`] = resp.shop.split(',');
                    coupon[`credit`] = resp.credit;
                    console[`log`](`成功获取legacy-coupon`);
                    $(`#legacy-modal-1`)[`modal`](`hide`);
                    $(`#legacy-shop-name`)[`show`]();
                    $(`#legacy-discount`)[`show`]();
                    $(`#legacy-total`)[`show`]();
                    $(`#legacy-shop-name`)[`text`](`商品名称: ` + resp[`name`]);
                    $(`#legacy-discount`)[`text`](`优惠额度: ` + resp[`credit`] + '%');
                    $(`#legacy-total`)[`text`](`折后总价: ` + resp[`total`]);
                    $(`#legacy-modal-2`)[`modal`](`show`);
                } else {
                    $(`#legacy-modal-1`)[`modal`](`show`);
                    $(`#legacy-coupon-feedback`)[`text`](resp[`msg`]);
                    $(`#legacy-coupon-feedback`)[`show`]();
                }
            }
        });
    } else {
        $(`#legacy-modal-1`)[`modal`](`hide`);
        $(`#legacy-modal-2`)[`modal`](`show`);
    }
}

$(`#add-relay-rule`)[`click`](function () {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'type': `POST`,
        'url': `/user/relay`,
        'dataType': `json`,
        'data': {
            'source_node': $(`#source_node`)[`val`](),
            'dist_node': $(`#dist_node`)[`val`](),
            'port': $(`#port`)[`val`](),
            'priority': $(`#priority`)[`val`]()
        },
        'success': resp => {
            if (resp[`ret`]) {
                Swal[`fire`]({
                    'title': `成功添加中转规则`,
                    'type': `success`,
                    'onClose': () => {
                        window[`location`][`assign`](`/user/relay`);
                    }
                });
            } else {
                Swal[`fire`](`发生错误`, resp[`msg`], `error`);
            }
        }
    });
});


$(`.fetch_netflix`)[`click`](function () {
    ;$[`ajax`]({
        'type': `GET`,
        'url': `/user/fetchNetflix`,
        'dataType': `json`,
        'data': {
            'type': $(this)[`data`](`type`),
            'shopid': $(this)[`data`](`shopid`)
        },
        'success': resp => {
            console[`log`](`resp`);
            if (resp[`ret`]){
                if($(this)[`data`](`type`) == 1){
                    Swal[`fire`]({
                        'title': `成功领取账号`,
                        'type': `success`,
                        'onClose': () => {
                            window[`location`][`assign`](`/user/code`);
                        }
                    });
                }else{
                    $(`#netflix-modal`)[`modal`](`show`);
                    $(`#netflix-modal #content`)[`html`](resp[`data`][`content`]);
                }

                //$(`#legacy-shop-name`)[`show`]();
                //$(`#legacy-discount`)[`show`]();
                //$(`#legacy-total`)[`show`]();
                //$(`#legacy-shop-name`)[`text`](`商品名称: ` + resp[`name`]);
                //$(`#legacy-discount`)[`text`](`优惠额度: ` + resp[`credit`] + '%');
                //$(`#legacy-total`)[`text`](`折后总价: ` + resp[`total`]);
                //$(`#legacy-modal-2`)[`modal`](`show`);

            } else {
                Swal[`fire`](`发生错误`, resp[`msg`], `error`);
            }
        }
    });
});


function updateRelayRule(path) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;$[`ajax`]({
        'type': `PUT`,
        'url': `/user/relay/` + path,
        'dataType': `json`,
        'data': {
            'source_node': $(`#source_node`)[`val`](),
            'dist_node': $(`#dist_node`)[`val`](),
            'port': $(`#port`)[`val`](),
            'priority': $(`#priority`)[`val`]()
        },
        'success': resp => {
            if (resp[`ret`]) {
                Swal[`fire`]({
                    'title': `已更新中转规则`,
                    'type': `success`,
                    'onClose': () => {
                        window[`location`][`assign`](`/user/relay`);
                    }
                });
            } else {
                Swal[`fire`](`发生错误`, resp[`msg`], `error`);
            }
        }
    });
}

function deleteRelayRule(sid) {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
        return true;
    }*/
    ;Swal[`fire`]({
        'title': `确定删除此中转规则?`,
        'type': `info`,
        'showCancelButton': true,
        'confirmButtonColor': `#3085d6`,
        'cancelButtonColor': `#d33`,
        'cancelButtonText': '取消',
        'confirmButtonText': `确定删除`
    })[`then`](item => {
        if (item[`value`]) {
            $[`ajax`]({
                'type': `DELETE`,
                'url': `/user/relay`,
                'dataType': `json`,
                'data': {'id': sid},
                'success': rsps => {
                    if (rsps[`ret`]) {
                        Swal[`fire`]({
                            'title': `已删除中转规则`,
                            'type': `success`,
                            'onClose': () => {
                                window[`location`][`assign`](`/user/relay`);
                            }
                        });
                    } else {
                        Swal[`fire`](`发生错误`, rsps[`msg`], `error`);
                    }
                }
            });
        }
    });
}


'use strict';
if (window.Chart) {
    Chart.defaults.global.defaultFontFamily = '\'Nunito\', \'Segoe UI\', \'Arial\'';
    Chart.defaults.global.defaultFontSize = 0xc;
    Chart.defaults.global.defaultFontStyle = 500;
    Chart.defaults.global.defaultFontColor = '#999';
    Chart.defaults.global.tooltips.backgroundColor = '#000';
    Chart.defaults.global.tooltips.bodyFontColor = 'rgba(255,255,255,.7)';
    Chart.defaults.global.tooltips.titleMarginBottom = 0xa;
    Chart.defaults.global.tooltips.titleFontSize = 0xe;
    Chart.defaults.global.tooltips.titleFontFamily = '\'Nunito\', \'Segoe UI\', \'Arial\'';
    Chart.defaults.global.tooltips.titleFontColor = '#fff';
    Chart.defaults.global.tooltips.xPadding = 0xf;
    Chart.defaults.global.tooltips.yPadding = 0xf;
    Chart.defaults.global.tooltips.displayColors = false;
    Chart.defaults.global.tooltips.intersect = false;
    Chart.defaults.global.tooltips.mode = 'nearest';
}
if (window.Dropzone) {
    Dropzone.autoDiscover = false;
}
$(`[data-confirm]`)[`each`](function () {
    var th = $(this), $confirm = th[`data`](`confirm`);
    $confirm = $confirm[`split`]('|');
    th[`fireModal`]({
        'title': $confirm[0],
        'body': $confirm[1],
        'footerClass': `bg-whitesmoke br`,
        'buttons': [{
            'text': th[`data`](`confirm-text-yes`) || '确定',
            'class': `btn btn-danger btn-shadow`,
            'handler': function () {
                eval(th[`data`](`confirm-yes`));
            }
        }, {
            'text': th[`data`](`confirm-text-cancel`) || '取消',
            'class': `btn btn-secondary`,
            'handler': function (ev) {
                $[`destroyModal`](ev);
                eval(th[`data`](`confirm-no`));
            }
        }]
    });
});
$(function () {
    /*if (!csKdOsOtLF[`includes`](location[`host`])) {
     alert(`主题未授权此域名`);
     setTimeout(function () {
     location[`href`] = `https://malio.fxxkmy.life`;
     }, 0xbb8);
     return false;
     }*/
    ;w4jCiGvDtw();
    var surl = document[`location`][`toString`]()[`split`]('#')[0][`split`]('?')[0];
    var mdomain = surl[`split`]('//')[1][`split`]('/');
    var res = '';
    if (mdomain[`length`] == 2) {
        res = $(`.sidebar-menu a[href$='/user']`);
    } else if (mdomain[`length`] >= 3) {
        if (mdomain[2] == `ticket`) {
            res = $(`.sidebar-menu a[href$='#ticket']`);
            res[`addClass`](`has-dropdown`);
        } else if (mdomain[2] == `detect`) {
            res = $(`.sidebar-menu a[href$='#detect']`);
            res[`addClass`](`has-dropdown`);
        } else if (mdomain[2] == `relay` || mdomain[2] == `edit`) {
            res = $(`.sidebar-menu a[href$='#node-settings']`);
            res[`addClass`](`has-dropdown`);
        } else {
            var starget = `.sidebar-menu a[href$='/user/` + mdomain[2] + '\x27]';
            res = $(starget);
        }
    }
    res[`parent`]()[`addClass`](`active`);
    let scrollData = {}, $type = null;
    scrollData.cursoropacitymin = 0;
    scrollData.cursoropacitymax = 0.8;
    scrollData.zindex = 0x37c;


    var build = function () {
        if ($('body').hasClass('layout-2')) {
            $('body.layout-2 #sidebar-wrapper').stick_in_parent({'parent': $('body')});
            $('body.layout-2 #sidebar-wrapper').stick_in_parent({'recalc_every': 1});
        }
    };
    build();
    var scroll;
    var back = function () {
        let timer = setInterval(function () {
            if (scroll != null) scroll.resize();
        }, 0xa);
        setTimeout(function () {
            clearInterval(timer);
        }, 0x258);
    };
    var scrollEl = function () {
        if ($('.main-sidebar').length) {
            $('.main-sidebar').niceScroll(scrollData);
            scroll = $('.main-sidebar').getNiceScroll();
            $('.main-sidebar .sidebar-menu li a.has-dropdown').off('click')['on']('click', function () {
                var that = $(this);
                $('.main-sidebar .sidebar-menu li.active > .dropdown-menu').slideUp(500, function () {
                    back();
                    return false;
                });
                $('.main-sidebar .sidebar-menu li.active').removeClass('active');
                if (that.parent().hasClass('active')) {
                    that.parent().removeClass('active');
                    that.parent().find('> .dropdown-menu').slideUp(500, function () {
                        back();
                        return false;
                    });
                } else {
                    that.parent().addClass('active');
                    that.parent().find('> .dropdown-menu').slideDown(500, function () {
                        back();
                        return false;
                    });
                }
                return false;
            });
            $('.main-sidebar .sidebar-menu li.active > .dropdown-menu').slideDown(500, function () {
                back();
                return false;
            });
        }
    };
    scrollEl();
    if ($('#top-5-scroll').length) {
        $('#top-5-scroll').css({'height': 315}).niceScroll();
    }
    $('.main-content').css({'minHeight': $(window).outerHeight() - 108});
    $('.nav-collapse-toggle').click(function () {
        $(this).parent().find('.navbar-nav').toggleClass('show');
        return false;
    });
    $(document)['on']('click', function (e) {
        $('.nav-collapse .navbar-nav').removeClass('show');
    });
    var sidebarPro = function (type) {
        let $body = $('body');
        if (!type) {
            $body.removeClass('sidebar-mini');
            $('.main-sidebar').css({'overflow': 'hidden'});
            setTimeout(function () {
                $('.main-sidebar').niceScroll(scrollData);
                scroll = $('.main-sidebar').getNiceScroll();
            }, 500);
            $('.main-sidebar .sidebar-menu > li > ul .dropdown-title').remove();
            $('.main-sidebar .sidebar-menu > li > a').removeAttr('data-toggle');
            $('.main-sidebar .sidebar-menu > li > a').removeAttr('data-original-title');
            $('.main-sidebar .sidebar-menu > li > a').removeAttr('title');
        } else {
            $body.addClass('sidebar-mini');
            $body.removeClass('sidebar-show');
            scroll.remove();
            scroll = null;
            $('.main-sidebar .sidebar-menu > li').each(function () {
                let that = $(this);
                if (that.find('> .dropdown-menu').length) {
                    that.find('> .dropdown-menu').hide();
                    that.find('> .dropdown-menu').prepend('<li class="dropdown-title pt-3">' + that.find('> a').text() + '</li>');
                } else {
                    that.find('> a').attr('data-toggle', 'tooltip');
                    that.find('> a').attr('data-original-title', that.find('> a').text());
                    $('[data-toggle=\'tooltip\']').tooltip({'placement': 'right'});
                }
            });
        }
    };
    $('[data-toggle=\'sidebar\']').click(function () {
        var body = $('body'), win = $(window);
        if (win.outerWidth() <= 0x400) {
            body.removeClass('search-show search-gone');
            if (body.hasClass('sidebar-gone')) {
                body.removeClass('sidebar-gone');
                body.addClass('sidebar-show');
            } else {
                body.addClass('sidebar-gone');
                body.removeClass('sidebar-show');
            }
            back();
        } else {
            body.removeClass('search-show search-gone');
            if (body.hasClass('sidebar-mini')) {
                sidebarPro(false);
            } else {
                sidebarPro(true);
            }
        }
        return false;
    });
    var resizeBack = function () {
        var win = $(window),
            clazz = $('body').attr('class') || '',
            clas = clazz.trim().length > 0 ? clazz.split('\x20') : '';
        if (clas.length > 0) {
            clas.forEach(function (item) {
                if (item.indexOf('layout-') != -1) {
                    $type = item;
                }
            });
        }
        if (win.outerWidth() <= 0x400) {
            if ($('body').hasClass('sidebar-mini')) {
                sidebarPro(false);
                $('.main-sidebar').niceScroll(scrollData);
                scroll = $('.main-sidebar').getNiceScroll();
            }
            $('body').addClass('sidebar-gone');
            $('body').removeClass('layout-2 layout-3 sidebar-mini sidebar-show');
            $('body').off('click touchend')['on']('click touchend', function (eve) {
                if ($(eve.target).hasClass('sidebar-show') || $(eve.target).hasClass('search-show')) {
                    $('body').removeClass('sidebar-show');
                    $('body').addClass('sidebar-gone');
                    $('body').removeClass('search-show');
                    back();
                }
            });
            back();
            if ($type == 'layout-3') {
                let clz = $('.navbar-secondary').attr('class'),
                    secondary = $('.navbar-secondary');
                secondary.attr('data-nav-classes', clz);
                secondary.removeAttr('class');
                secondary.addClass('main-sidebar');
                let $sidebar = $('.main-sidebar');
                $sidebar.find('.container').addClass('sidebar-wrapper').removeClass('container');
                $sidebar.find('.navbar-nav').addClass('sidebar-menu').removeClass('navbar-nav');
                $sidebar.find('.sidebar-menu .nav-item.dropdown.show a').click();
                $sidebar.find('.sidebar-brand').remove();
                $sidebar.find('.sidebar-menu').before($('<div>', {'class': 'sidebar-brand'}).append($('<a>', {'href': $('.navbar-brand').attr('href')}).html($('.navbar-brand').html())));
                setTimeout(function () {
                    scroll = $sidebar.niceScroll(scrollData);
                    scroll = $sidebar.getNiceScroll();
                }, 700);
                scrollEl();
                $('.main-wrapper').removeClass('container');
            }
        } else {
            $('body').removeClass('sidebar-gone sidebar-show');
            if ($type) $('body').addClass($type);
            let eclaz = $('.main-sidebar').attr('data-nav-classes'),
                target = $('.main-sidebar');
            if ($type == 'layout-3' && target.hasClass('main-sidebar')) {
                target.find('.sidebar-menu li a.has-dropdown').off('click');
                target.find('.sidebar-brand').remove();
                target.removeAttr('class');
                target.addClass(eclaz);
                let secb = $('.navbar-secondary');
                secb.find('.sidebar-wrapper').addClass('container').removeClass('sidebar-wrapper');
                secb.find('.sidebar-menu').addClass('navbar-nav').removeClass('sidebar-menu');
                secb.find('.dropdown-menu').hide();
                secb.removeAttr('style');
                secb.removeAttr('tabindex');
                secb.removeAttr('data-nav-classes');
                $('.main-wrapper').addClass('container');
            } else if ($type == 'layout-2') {
                $('body').addClass('layout-2');
            } else {
                back();
            }
        }
    };
    resizeBack();
    $(window).resize(resizeBack);
    $('[data-toggle=\'search\']').click(function () {
        var body = $('body');
        if (body.hasClass('search-gone')) {
            body.addClass('search-gone');
            body.removeClass('search-show');
        } else {
            body.removeClass('search-gone');
            body.addClass('search-show');
        }
    });
    $('[data-toggle=\'tooltip\']').tooltip();
    $('[data-toggle="popover"]').popover({'container': 'body'});
    if (jQuery().select2) {
        $('.select2').select2();
    }
    if (jQuery().selectric) {
        $('.selectric').selectric({'disableOnMobile': false, 'nativeOnMobile': false});
    }
    $('.notification-toggle').dropdown();
    $('.notification-toggle').parent()['on']('shown.bs.dropdown', function () {
        $('.dropdown-list-icons').niceScroll({
            'cursoropacitymin': 0.3,
            'cursoropacitymax': 0.8,
            'cursorwidth': 0x7
        });
    });
    $('.message-toggle').dropdown();
    $('.message-toggle').parent()['on']('shown.bs.dropdown', function () {
        $('.dropdown-list-message').niceScroll({
            'cursoropacitymin': 0.3,
            'cursoropacitymax': 0.8,
            'cursorwidth': 0x7
        });
    });
    if ($('.chat-content').length) {
        $('.chat-content').niceScroll({'cursoropacitymin': 0.3, 'cursoropacitymax': 0.8});
        $('.chat-content').getNiceScroll(0).doScrollTop($('.chat-content').height());
    }
    if (jQuery().summernote) {
        $('.summernote').summernote({'dialogsInBody': true, 'minHeight': 0xfa});
        $('.summernote-simple').summernote({
            'dialogsInBody': true,
            'minHeight': 0x96,
            'toolbar': [['style', ['bold', 'italic', 'underline', 'clear']], ['font', ['strikethrough']], ['para', ['paragraph']]]
        });
    }
    if (window.CodeMirror) {
        $('.codeeditor').each(function () {
            let area = CodeMirror.fromTextArea(this, {
                'lineNumbers': true,
                'theme': 'duotone-dark',
                'mode': 'javascript',
                'height': 0xc8
            });
            area.setSize('100%', 0xc8);
        });
    }
    $('.follow-btn, .following-btn').each(function () {
        var that = $(this), status = 'Follow', bsta = 'Following';
        that.click(function () {
            if (that.hasClass('following-btn')) {
                that.removeClass('btn-danger');
                that.removeClass('following-btn');
                that.addClass('btn-primary');
                that.html(status);
                eval(that.data('unfollow-action'));
            } else {
                that.removeClass('btn-primary');
                that.addClass('btn-danger');
                that.addClass('following-btn');
                that.html(bsta);
                eval(that.data('follow-action'));
            }
            return false;
        });
    });
    $('[data-dismiss]').each(function () {
        var that = $(this), dismiss = that.data('dismiss');
        that.click(function () {
            $(dismiss).fadeOut(function () {
                $(dismiss).remove();
            });
            return false;
        });
    });
    $('[data-collapse]').each(function () {
        var that = $(this), collapse = that.data('collapse');
        that.click(function () {
            $(collapse).collapse('toggle');
            $(collapse)['on']('shown.bs.collapse', function (e) {
                e.stopPropagation();
                that.html('<i class="fas fa-minus"></i>');
            });
            $(collapse)['on']('hidden.bs.collapse', function (e) {
                e.stopPropagation();
                that.html('<i class="fas fa-plus"></i>');
            });
            return false;
        });
    });
    $('.gallery .gallery-item').each(function () {
        var that = $(this);
        that.attr('href', that.data('image'));
        that.attr('title', that.data('title'));
        if (that.parent().hasClass('gallery-fw')) {
            that.css({'height': that.parent().data('item-height')});
            that.find('div').css({'lineHeight': that.parent().data('item-height') + 'px'});
        }
        that.css({'backgroundImage': 'url("' + that.data('image') + '\x22)'});
    });
    if (jQuery().Chocolat) {
        $('.gallery').Chocolat({
            'className': 'gallery',
            'imageSelector': '.gallery-item'
        });
    }
    $('[data-background]').each(function () {
        var self = $(this);
        self.css({'backgroundImage': 'url(' + self.data('background') + ')'});
    });
    $('[data-tab]').each(function () {
        var self = $(this);
        self.click(function () {
            if (!self.hasClass('active')) {
                var te = $('[data-tab-group="' + self.data('tab') + '\x22]'),
                    active = $('[data-tab-group="' + self.data('tab') + '"].active'),
                    h = $(self.attr('href')),
                    sb = $('[data-tab="' + self.data('tab') + '\x22]');
                sb.removeClass('active');
                self.addClass('active');
                h.addClass('active');
                active.removeClass('active');
            }
            return false;
        });
    });
    $('.needs-validation').submit(function () {
        var self = $(this);
        if (self[0].checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        self.addClass('was-validated');
    });
    $('.alert-dismissible').each(function () {
        var self = $(this);
        self.find('.close').click(function () {
            self.alert('close');
        });
    });
    if ($('.main-navbar').length) {
    }
    $('[data-crop-image]').each(function (e) {
        $(this).css({
            'overflow': 'hidden',
            'position': 'relative',
            'height': $(this).data('crop-image')
        });
    });
    $('[data-toggle-slide]').click(function () {
        let slide = $(this).data('toggle-slide');
        $(slide).slideToggle();
        return false;
    });
    $('[data-dismiss=modal]').click(function () {
        $(this).closest('.modal').modal('hide');
        return false;
    });
    $('[data-width]').each(function () {
        $(this).css({'width': $(this).data('width')});
    });
    $('[data-height]').each(function () {
        $(this).css({'height': $(this).data('height')});
    });
    if ($('.chocolat-parent').length && jQuery().Chocolat) {
        $('.chocolat-parent').Chocolat();
    }
    if ($('.sortable-card').length && jQuery().sortable) {
        $('.sortable-card').sortable({
            'handle': '.card-header',
            'opacity': 0.8,
            'tolerance': 'pointer'
        });
    }
    if (jQuery().daterangepicker) {
        if ($('.datepicker').length) {
            $('.datepicker').daterangepicker({
                'locale': {'format': 'YYYY-MM-DD'},
                'singleDatePicker': true
            });
        }
        if ($('.datetimepicker').length) {
            $('.datetimepicker').daterangepicker({
                'locale': {'format': 'YYYY-MM-DD hh:mm'},
                'singleDatePicker': true,
                'timePicker': true,
                'timePicker24Hour': true
            });
        }
        if ($('.daterange').length) {
            $('.daterange').daterangepicker({
                'locale': {'format': 'YYYY-MM-DD'},
                'drops': 'down',
                'opens': 'right'
            });
        }
    }
    if (jQuery().timepicker && $('.timepicker').length) {
        $('.timepicker').timepicker({
            'icons': {
                'up': 'fas fa-chevron-up',
                'down': 'fas fa-chevron-down'
            }
        });
    }
});
`use strict`;
(function ($$, self, index) {
    $$['fn'].fireModal = function (modelData) {
        var sdata = $$.extend({
            'size': 'modal-md',
            'center': false,
            'animation': true,
            'title': 'Modal Title',
            'closeButton': true,
            'header': true,
            'bodyClass': '',
            'footerClass': '',
            'body': '',
            'buttons': [],
            'autoFocus': true,
            'removeOnDismiss': false,
            'created': function () {
            },
            'appended': function () {
            },
            'onFormSubmit': function () {
            },
            'modal': {}
        }, modelData);
        this.each(function () {
            index++;
            var fire_modal = 'fire-modal-' + index, clzz = 'trigger--' + fire_modal,
                mt = $$('.' + clzz);
            $$(this).addClass(clzz);
            let sbody = sdata.body;
            if (typeof sbody == 'object') {
                if (sbody.length) {
                    let tb = sbody;
                    sbody = sbody.removeAttr('id').clone().removeClass('modal-part');
                    tb.remove();
                } else {
                    sbody = '<div class="text-danger">Modal part element not found!</div>';
                }
            }
            var html = '   <div class="modal' + (sdata.animation == true ? ' fade' : '') + '" tabindex="-1" role="dialog" id="' + fire_modal + '">  ' + '     <div class="modal-dialog ' + sdata.size + (sdata.center ? ' modal-dialog-centered' : '') + '" role="document">  ' + '       <div class="modal-content">  ' + (sdata.header == true ? '         <div class="modal-header">  ' + '           <h5 class="modal-title">' + sdata.title + '</h5>  ' + (sdata.closeButton == true ? '           <button type="button" class="close" data-dismiss="modal" aria-label="Close">  ' + '             <span aria-hidden="true">&times;</span>  ' + '           </button>  ' : '') + '         </div>  ' : '') + '         <div class="modal-body">  ' + '         </div>  ' + (sdata.buttons.length > 0 ? '         <div class="modal-footer">  ' + '         </div>  ' : '') + '       </div>  ' + '     </div>  ' + '  </div>  ';
            var obj = $$(html);
            var btn;
            sdata.buttons.forEach(function (n) {
                let id = 'id' in n ? n['id'] : '';
                btn = '<button type="' + ('submit' in n && n.submit == true ? 'submit' : 'button') + '" class="' + n.class + '" id="' + id + '\x22>' + n.text + '</button>';
                btn = $$(btn).off('click')['on']('click', function () {
                    n.handler.call(this, obj);
                });
                $$(obj).find('.modal-footer').append(btn);
            });
            $$(obj).find('.modal-body').append(sbody);
            if (sdata.bodyClass) $$(obj).find('.modal-body').addClass(sdata.bodyClass);
            if (sdata.footerClass) $$(obj).find('.modal-footer').addClass(sdata.footerClass);
            sdata.created.call(this, obj, sdata);
            let $form = $$(obj).find('.modal-body form'),
                $sumbit = obj.find('button[type=submit]');
            $$('body').append(obj);
            sdata.appended.call(this, $$('#' + fire_modal), $form, sdata);
            if ($form.length) {
                if (sdata.autoFocus) {
                    $$(obj)['on']('shown.bs.modal', function () {
                        if (typeof sdata.autoFocus == 'boolean') $form.find('input:eq(0)').focus(); else if (typeof sdata.autoFocus == 'string' && $form.find(sdata.autoFocus).length) $form.find(sdata.autoFocus).focus();
                    });
                }
                let pdata = {};
                pdata.startProgress = function () {
                    obj.addClass('modal-progress');
                };
                pdata.stopProgress = function () {
                    obj.removeClass('modal-progress');
                };
                if (!$form.find('button').length) $$($form).append('<button class="d-none" id="' + fire_modal + '-submit"></button>');
                $sumbit.click(function () {
                    $form.submit();
                });
                $form.submit(function (m) {
                    pdata.startProgress();
                    sdata.onFormSubmit.call(this, obj, m, pdata);
                });
            }
            $$(document)['on']('click', '.' + clzz, function () {
                let modal = $$('#' + fire_modal).modal(sdata.modal);
                if (sdata.removeOnDismiss) {
                    modal['on']('hidden.bs.modal', function () {
                        modal.remove();
                    });
                }
                return false;
            });
        });
    };
    $$.destroyModal = function (m) {
        m.modal('hide');
        m['on']('hidden.bs.modal', function () {
        });
    };
    $$.cardProgress = function (target, data) {
        var sdata = $$.extend({
            'dismiss': false,
            'dismissText': 'Cancel',
            'spinner': true,
            'onDismiss': function () {
            }
        }, data);
        var target = $$(target);
        target.addClass('card-progress');
        if (sdata.spinner == false) {
            target.addClass('remove-spinner');
        }
        if (sdata.dismiss == true) {
            var obj = '<a class="btn btn-danger card-progress-dismiss">' + sdata.dismissText + '</a>';
            obj = $$(obj).off('click')['on']('click', function () {
                target.removeClass('card-progress');
                target.find('.card-progress-dismiss').remove();
                sdata.onDismiss.call(this, target);
            });
            target.append(obj);
        }
        return {
            'dismiss': function (e) {
                $$.cardProgressDismiss(target, e);
            }
        };
    };
    $$.cardProgressDismiss = function (target, callback) {
        target = $$(target);
        target.removeClass('card-progress');
        target.find('.card-progress-dismiss').remove();
        if (callback) callback.call(this, target);
    };
    $$.chatCtrl = function (target, sdata) {
        var data = $$.extend({
            'position': 'chat-right',
            'text': '',
            'time': moment(new Date().toISOString()).format('hh:mm'),
            'picture': '',
            'type': 'text',
            'timeout': 0,
            'onShow': function () {
            }
        }, sdata);
        var $target = $$(target),
            div1 = '<div class="chat-item ' + data.position + '" style="display:none">' + '<img src="' + data.picture + '\x22>' + '<div class="chat-details">' + '<div class="chat-text">' + data.text + '</div>' + '<div class="chat-time">' + data.time + '</div>' + '</div>' + '</div>',
            div2 = '<div class="chat-item chat-left chat-typing" style="display:none">' + '<img src="' + data.picture + '\x22>' + '<div class="chat-details">' + '<div class="chat-text"></div>' + '</div>' + '</div>';
        var opendDiv = div1;
        if (data.type == 'typing') {
            opendDiv = div2;
        }
        if (data.timeout > 0) {
            setTimeout(function () {
                $target.find('.chat-content').append($$(opendDiv).fadeIn());
            }, data.timeout);
        } else {
            $target.find('.chat-content').append($$(opendDiv).fadeIn());
        }
        var height = 0;
        $target.find('.chat-content .chat-item').each(function () {
            height += $$(this).outerHeight();
        });
        setTimeout(function () {
            $target.find('.chat-content').scrollTop(height, -1);
        }, 0x64);
        data.onShow.call(this, opendDiv);
    };
}(jQuery, this, 0));

