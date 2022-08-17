var apt = {};
apt.api = {};
apt.api.ajax = function (url, type, data, _callback) {
    var allUrl = 'a/' + url;
    $.ajax({
        url: allUrl,
        type: type,
        data: data,
        dataType: 'JSON',
        success: function (rs) {
            _callback(rs);
        }
    });
};
apt.api.a = function (
    name,
    tel,
    city,
    area,
    addr,
    bc,
    bn,
    pa1, pa2, pa3,
    _cb) {
    var url = 'add';
    var type = 'POST';
    var data = {
        name: name,
        tel: tel,
        city: city,
        area: area,
        addr: addr,
        bc: bc,
        bn: bn,
        pa1: pa1,
        pa2: pa2,
        pa3: pa3
    };

    this.ajax(url, type, data, _cb);
};


apt.api.p = function (_cb) {
    var url = 'prices';
    var type = 'GET';
    var data = { };

    this.ajax(url, type, data, _cb);
};
