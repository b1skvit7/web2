function generate() {
    // Отримуємо значення з полів range
    var rtl = document.getElementById('rtl').value;
    var rtr = document.getElementById('rtr').value;
    var rbl = document.getElementById('rbl').value;
    var rbr = document.getElementById('rbr').value;

    // Отримуємо посилання на текстові поля для відображення значень
    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbl = document.getElementById('tbl');
    var tbr = document.getElementById('tbr');

    // Отримуємо блок, для якого будемо змінювати border-radius
    var block = document.getElementById('block');

    // Оновлюємо значення текстових полів
    ttl.value = rtl;
    ttr.value = rtr;
    tbl.value = rbl;
    tbr.value = rbr;

    // Оновлюємо border-radius для блоку
    block.style.borderRadius = `${rtl}px ${rtr}px ${rbr}px ${rbl}px`;
}
