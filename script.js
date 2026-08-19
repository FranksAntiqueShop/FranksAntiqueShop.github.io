// ================= 테마별 문자 템플릿 정의 =================
const THEME_TEMPLATES = {
    // 1. My Private Heaven
    'my private heaven': (name, month, day, time) => `Thank you for coming!\r\n[My Private Heaven]\r\n\r\n프랭크의 골동품가게 예약 확정 안내 문자입니다.\r\n***[https://thefrank.co.kr/layout/res/home.php?go=play] <- 접속링크  꼭 일행 모두가 읽고 오셔야 합니다. 꼭 필수 ***********\r\n\r\n성명 : ${name} 님\r\n일시 : ${month}월 ${day}일 ${time}\r\n테마 : My Private Heaven\r\n\r\n1. 늦으실 경우 테마 이용시간이 차감될 수 있습니다. (테마 이용시간보다 10분 늦으실 경우,\r\n플레이가 불가하며, 이로인한 환불은 불가합니다.)\r\n* 매장컨셉상, 10분보다 일찍 오실 경우에, 매장 밖에서 대기하셔야 합니다 *\r\n\r\n2. 매장 내 취식이 불가합니다. (간단한 커피, 음료 포함) 다 드시고 와주시면 \r\n감사하겠습니다.\r\n \r\n3. 인원수가 추가 될 경우, 대기실에 키오스크를 이용하여 추가결제 하시길 바랍니다. \r\n\r\n- 편의시설 안내 \r\n 저희 지점은 주차가 어렵습니다. 주변 공영주차장을 이용해 주시면 감사하겠습니다.\r\n  매장내에 식수 및 핸드폰 충전기가 제공되지 않습니다. 충분한 수분섭취후 방문 부탁드립니다. \r\n\r\n- 환불 규정 안내\r\n 예약 취소 시 예약금 환불은 받으신 예약번호로 홈페이지를 통해 요청해주시면 됩니다.\r\n(단, 예약 당일, 테마시작 24시간 이내 취소 및 예약시간 변경은 예약금 환불이 불가능합니다.)\r\n음주상태에서 플레이가 불가능합니다. 이로인한 환불또한 불가합니다.`,

    // 2. Brooklyn My Love
    'brooklyn my love': (name, month, day, time) => `Thank you for coming!\r\n[Brooklyn My Love]\r\n\r\n프랭크의 골동품가게 예약 확정 안내 문자입니다.\r\n***[https://thefrank.co.kr/layout/res/home.php?go=play] <- 접속링크  꼭 일행 모두가 읽고 오셔야 합니다. 꼭 필수 ***********\r\n\r\n성명 : ${name} 님\r\n일시 : ${month}월 ${day}일 ${time}\r\n테마 : Brooklyn My Love\r\n\r\n1. 늦으실 경우 테마 이용시간이 차감될 수 있습니다. (테마 이용시간보다 10분 늦으실 경우,\r\n플레이가 불가하며, 이로인한 환불은 불가합니다.)\r\n* 매장컨셉상, 10분보다 일찍 오실 경우에, 매장 밖에서 대기하셔야 합니다 *\r\n\r\n2. 매장 내 취식이 불가합니다. (간단한 커피, 음료 포함) 다 드시고 와주시면 \r\n감사하겠습니다.\r\n \r\n3. 인원수가 추가 될 경우, 대기실에 키오스크를 이용하여 추가결제 하시길 바랍니다. \r\n\r\n- 편의시설 안내 \r\n 저희 지점은 주차가 어렵습니다. 주변 공영주차장을 이용해 주시면 감사하겠습니다.\r\n 매장내에 식수 및 핸드폰 충전기가 제공되지 않습니다. 충분한 수분섭취후 방문 부탁드립니다. \r\n\r\n- 환불 규정 안내\r\n 예약 취소 시 예약금 환불은 받으신 예약번호로 홈페이지를 통해 요청해주시면 됩니다.\r\n(단, 예약 당일, 테마시작 24시간 이내 취소 및 예약시간 변경은 예약금 환불이 불가능합니다.)\r\n음주상태에서 플레이가 불가능합니다. 이로인한 환불또한 불가합니다.`,

    // 3. Plan to save my dear
    'plan to save my dear': (name, month, day, time) => `Thank you for coming!\r\n[Plan to save my dear]\r\n\r\n프랭크의 골동품가게 예약 확정 안내 문자입니다.\r\n[https://thefrank.co.kr/layout/res/home.php?go=play] <- 접속링크  꼭 일행 모두가 읽고 오셔야 합니다.\r\n\r\n성명 : ${name} 님\r\n일시 : ${month}월 ${day}일 ${time}\r\n테마 : plan to save my dear\r\n[ https://youtu.be/5tDrIq9YVKY?si=2be6UW8HpzEIesqR ] <-를 보고오시면 더더욱 재밌게 즐기실 수 있어요!\r\n\r\n1. 늦으실 경우 테마 이용시간이 차감될 수 있습니다. (테마 이용시간보다 10분늦으실경우,\r\n플레이가 불가하며, 이로인한 환불은 불가합니다.)\r\n* 매장컨셉상, 10분보다 일찍 오실 경우에, 매장 밖에서 대기하셔야 합니다 *\r\n\r\n2. 매장내 취식이 불가합니다. (간단한 커피,음료포함) 다 드시고 와주시면 \r\n감사하겠습니다.\r\n \r\n3. 인원수가 추가될경우, 게임이 끝난후 결제 도와드리고 있습니다.\r\n\r\n- 편의시설 안내 \r\n 저희 지점은 주차가 어렵습니다. 주변 공영주차장을 이용해 주시면 감사하겠습니다.\r\n 매장내에 식수 및 핸드폰 충전기가 제공되지 않습니다. 충분한 수분섭취후 방문 부탁드립니다.\r\n\r\n- 환불 규정 안내\r\n 예약 취소 시 예약금 환불은 받으신 예약번호로 홈페이지를 통해 요청해주시면 됩니다.\r\n(단, 예약 당일, 테마시작 24시간 이내 취소 및 예약시간 변경은 예약금 환불이 불가능합니다.)\r\n음주상태에서 플레이가 불가능합니다. 이로인한 환불또한 불가합니다.`
};

// ================= 공통 유틸 =================
function normalizeKey(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

let toastTimeout;
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.innerText = message;
    toast.classList.add('show');
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2400);
}

function parseNumber(val) {
    if (!val || val.trim() === '-' || val.trim() === '') return 0;
    const clean = val.replace(/[^0-9-]/g, '');
    return parseInt(clean, 10) || 0;
}

function formatWon(num) {
    return `${num.toLocaleString('ko-KR')}원`;
}

let currentPreparedMessage = null;

// ================= 예약 데이터 파싱 & 검증 =================
function processReservationData(rawText) {
    if (!rawText || !rawText.trim()) {
        return { error: '⚠️ 붙여넣은 데이터가 비어 있습니다.' };
    }

    const data = rawText.trim().split(/\s{2,}|\t/);
    if (data.length < 9) {
        return { 
            error: `⚠️ [예약 데이터 누락]\n데이터 항목이 부족합니다 (현재 ${data.length}개 / 최소 9개 필요).\n예약자 한 행 전체를 정상적으로 복사했는지 확인해주세요.` 
        };
    }

    const rawTheme = (data[3] || '').trim();
    const dateStr  = (data[4] || '').trim();
    const time     = (data[5] || '').trim();
    const name     = (data[7] || '').trim();
    const phone    = (data[8] || '').trim();

    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
        return { error: `⚠️ [예약 날짜 오류]\n날짜 형식(YYYY-MM-DD)이 올바르지 않습니다: "${dateStr}"` };
    }
    if (!/^\d{1,2}:\d{2}$/.test(time)) {
        return { error: `⚠️ [예약 시간 오류]\n시간 형식(HH:MM)이 올바르지 않습니다: "${time}"` };
    }
    if (!/^01[016789]-?\d{3,4}-?\d{4}$/.test(phone)) {
        return { error: `⚠️ [휴대폰 번호 오류]\n전화번호 형식이 올바르지 않습니다: "${phone}"` };
    }
    if (!name) {
        return { error: '⚠️ [예약자명 누락]\n예약자 이름 데이터가 없습니다.' };
    }

    const dateParts = dateStr.split('-');
    const month = dateParts[1].replace(/^0+/, '');
    const day = dateParts[2].replace(/^0+/, '');

    const targetKey = normalizeKey(rawTheme);
    let matchedFormatter = null;

    for (const [key, formatter] of Object.entries(THEME_TEMPLATES)) {
        if (normalizeKey(key) === targetKey) {
            matchedFormatter = formatter;
            break;
        }
    }

    if (!matchedFormatter) {
        matchedFormatter = Object.values(THEME_TEMPLATES)[0];
    }

    return {
        formattedText: matchedFormatter(name, month, day, time),
        name: name,
        phone: phone
    };
}

// ================= 정산 데이터 파싱 & 검증 =================
function processSettlementData(rawText) {
    if (!rawText || !rawText.trim()) {
        return { error: '⚠️ 붙여넣은 데이터가 비어 있습니다.' };
    }

    const data = rawText.trim().split(/\s{2,}|\t/);
    if (data.length < 7) {
        return { error: `⚠️ [정산 데이터 누락]\n데이터 열 수가 부족합니다 (현재 ${data.length}개 / 최소 7개 필요).\n정산 행 전체를 드래그했는지 확인해주세요.` };
    }

    const themeVal   = parseNumber(data[0]);
    const goodsVal   = parseNumber(data[1]);
    const totalVal   = parseNumber(data[3]);
    const cardVal    = parseNumber(data[4]);
    const accountVal = parseNumber(data[5]);
    const depositVal = parseNumber(data[6]);
    const receivedVal = data[7] ? parseNumber(data[7]) : null;

    const expectedSalesSum = themeVal + goodsVal;
    if (expectedSalesSum !== totalVal) {
        return {
            error: `⚠️ [매출 합계 오류]\n테마(${themeVal.toLocaleString()}원) + 굿즈(${goodsVal.toLocaleString()}원) = ${expectedSalesSum.toLocaleString()}원\n총 금액(${totalVal.toLocaleString()}원)과 일치하지 않습니다.`
        };
    }

    const paymentSum = cardVal + accountVal + depositVal;
    if (paymentSum !== totalVal) {
        const diff = paymentSum - totalVal;
        return {
            error: `⚠️ [결제 수단 불일치]\n결제 합계(${paymentSum.toLocaleString()}원) ≠ 총 금액(${totalVal.toLocaleString()}원)\n차액: ${diff > 0 ? '+' : ''}${diff.toLocaleString()}원`
        };
    }

    if (receivedVal !== null && paymentSum !== receivedVal) {
        return {
            error: `⚠️ [실수령액 불일치]\n결제 수단 합계(${paymentSum.toLocaleString()}원) ≠ 받은 금액(${receivedVal.toLocaleString()}원)`
        };
    }

    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    const formattedReport = `${month}/${date} 프랭크의 골동품가게 정산보고\r\n* 총 매 출 : ${formatWon(totalVal)}\r\n└ 테마매출 : ${formatWon(themeVal)}\r\n└ 굿즈매출 : ${formatWon(goodsVal)}\r\n\r\n* 상세내역\r\n - 카드결제 : ${formatWon(cardVal)}\r\n - 계좌결제 : ${formatWon(accountVal)}\r\n - 예약금 : ${formatWon(depositVal)}`;

    return {
        formattedText: formattedReport,
        totalSales: formatWon(totalVal)
    };
}

// ================= 예약목록(rev.list) 전용 100% 확정 북마크릿 =================
function generateBookmarkletScript() {
    return 'javascript:(function(){' +
        'try {' +
            'var $ = window.jQuery;' +
            'var $table = $ ? $("table.list") : null;' +
            'if (!$table || !$table.length) { alert("예약 목록 화면(home.php?go=rev.list)에서 실행해주세요."); return; }' +
            'if ($table.find("th.auto-quick-col").length === 0) {' +
                '$table.find("tr:first").append("<th class=\'auto-quick-col\' style=\'background:#2b2e38; color:#e5a93c; text-align:center; width:135px;\'>스피드 관리</th>");' +
            '}' +
            '$table.find("tr").each(function(idx){' +
                'if (idx === 0) return;' +
                'var $row = $(this);' +
                'if ($row.find(".quick-tool-wrap").length > 0) return;' +
                'var theme = $.trim($row.find("td").eq(3).text());' +
                'var dateStr = $.trim($row.find("td").eq(4).text());' +
                'var time = $.trim($row.find("td").eq(5).text());' +
                'var name = $.trim($row.find("td").eq(7).text());' +
                'var phone = $.trim($row.find("td").eq(8).text());' +
                'var $statusCell = $row.find("td").eq(9);' +
                'var rowPrice = $.trim($row.find("td").eq(10).text());' +
                'var $revPriceCell = $row.find("td").eq(11);' +
                'var $remainPriceCell = $row.find("td").eq(15);' +
                'var $memoCell = $row.find("td").eq(17);' +
                'var nameLink = $row.find("td").eq(7).find("a").attr("href") || "";' +
                'var revCode = "";' +
                'var codeParts = nameLink.split("\'");' +
                'if (codeParts.length >= 2) revCode = codeParts[1];' +
                'var $wrap = $("<div class=\'quick-tool-wrap\' style=\'display:flex; justify-content:center; gap:4px;\'></div>");' +
                'var $btnConfirm = $("<button type=\'button\' class=\'btn btn-minier btn-success\' style=\'font-weight:bold; padding:2px 6px;\'>✔ 확정</button>");' +
                '$btnConfirm.on("click", function(e){' +
                    'e.preventDefault();' +
                    'if (!revCode) { alert("예약 코드를 찾을 수 없습니다."); return; }' +
                    'var savedWorker = localStorage.getItem("frank_worker_name") || "";' +
                    'var worker = prompt("근무자 이름을 입력해주세요 (확정 메모용):", savedWorker || "동건");' +
                    'if (!worker) return;' +
                    'localStorage.setItem("frank_worker_name", worker);' +
                    'var now = new Date();' +
                    'var mm = ("0" + (now.getMonth() + 1)).slice(-2);' +
                    'var dd = ("0" + now.getDate()).slice(-2);' +
                    'var todayStr = mm + dd;' +
                    'var autoMemo = name + " " + todayStr + "\\n예약확정 " + worker;' +
                    '$btnConfirm.prop("disabled", true).text("기입중..");' +
                    'var ifr = document.createElement("iframe");' +
                    'ifr.style.position = "absolute";' +
                    'ifr.style.width = "1px";' +
                    'ifr.style.height = "1px";' +
                    'ifr.style.top = "-9999px";' +
                    'ifr.style.left = "-9999px";' +
                    'document.body.appendChild(ifr);' +
                    'var step = 0;' +
                    'ifr.onload = function(){' +
                        'try {' +
                            'step++;' +
                            'var doc = ifr.contentDocument || ifr.contentWindow.document;' +
                            'if (step === 1) {' +
                                'var themePrice = "";' +
                                'var allInps = doc.querySelectorAll("input");' +
                                'for (var i = 0; i < allInps.length; i++) {' +
                                    'var val = allInps[i].value.replace(/[^0-9]/g, "");' +
                                    'if (val.length >= 4 && (val.endsWith("000") || val === rowPrice.replace(/[^0-9]/g, ""))) {' +
                                        'themePrice = allInps[i].value.trim();' +
                                        'break;' +
                                    '}' +
                                '}' +
                                'if (!themePrice) { themePrice = rowPrice; }' +
                                'var radios = doc.querySelectorAll("input[type=\'radio\']");' +
                                'for (var r = 0; r < radios.length; r++) {' +
                                    'var rEl = radios[r];' +
                                    'var rLabel = (rEl.nextSibling ? rEl.nextSibling.textContent : "") + (rEl.parentElement ? rEl.parentElement.textContent : "");' +
                                    'if (rLabel.indexOf("예약금") !== -1 || rEl.value === "예약금" || rEl.value === "B" || rEl.value === "2") {' +
                                        'rEl.click(); rEl.checked = true;' +
                                    '}' +
                                '}' +
                                'var targetPayInput = null;' +
                                'var allTdTh = doc.querySelectorAll("td, th");' +
                                'for (var t = 0; t < allTdTh.length; t++) {' +
                                    'if (allTdTh[t].textContent.indexOf("결제(예약)금액") !== -1 || allTdTh[t].textContent.indexOf("결제금액") !== -1) {' +
                                        'var sib = allTdTh[t].nextElementSibling;' +
                                        'if (sib) { var fInp = sib.querySelector("input"); if (fInp) { targetPayInput = fInp; break; } }' +
                                    '}' +
                                '}' +
                                'if (!targetPayInput) {' +
                                    'for (var p = 0; p < allInps.length; p++) {' +
                                        'if (allInps[p].name && (allInps[p].name.indexOf("pay") !== -1 || allInps[p].name.indexOf("rev_price") !== -1)) {' +
                                            'targetPayInput = allInps[p]; break;' +
                                        '}' +
                                    '}' +
                                '}' +
                                'if (targetPayInput) {' +
                                    'targetPayInput.value = themePrice;' +
                                    'try { targetPayInput.dispatchEvent(new Event("change")); targetPayInput.dispatchEvent(new Event("keyup")); } catch(e){}' +
                                '}' +
                                'var memoEl = doc.querySelector("textarea[name*=\'memo\']") || doc.querySelector("textarea");' +
                                'if (memoEl) { memoEl.value = autoMemo; }' +
                                'var submitBtn = null;' +
                                'var allBtns = doc.querySelectorAll("button, a, input[type=\'submit\'], input[type=\'button\']");' +
                                'for (var b = 0; b < allBtns.length; b++) {' +
                                    'if (allBtns[b].textContent.indexOf("수정") !== -1 || (allBtns[b].value && allBtns[b].value.indexOf("수정") !== -1)) {' +
                                        'submitBtn = allBtns[b]; break;' +
                                    '}' +
                                '}' +
                                '$btnConfirm.text("저장중..");' +
                                'if (submitBtn) {' +
                                    'submitBtn.click();' +
                                '} else if (doc.forms && doc.forms[0]) {' +
                                    'doc.forms[0].submit();' +
                                '} else {' +
                                    'alert("수정 저장 버튼을 찾지 못했습니다.");' +
                                    '$btnConfirm.prop("disabled", false).text("✔ 확정");' +
                                    'document.body.removeChild(ifr);' +
                                '}' +
                            '} else if (step >= 2) {' +
                                '$statusCell.html("<font color=\'#009900\'>예약금</font>");' +
                                '$revPriceCell.text(rowPrice);' +
                                '$remainPriceCell.text("0");' +
                                '$memoCell.attr("title", autoMemo).text(name + " ..");' +
                                '$btnConfirm.removeClass("btn-success").addClass("btn-default").text("확정됨").prop("disabled", true);' +
                                'setTimeout(function(){ if (ifr && ifr.parentNode) document.body.removeChild(ifr); }, 800);' +
                                'alert("🎉 [" + name + "님 (" + theme + ")]\\n✔ 진행상태: 예약금\\n✔ 결제금액: " + rowPrice + "원 (잔여 0원)\\n✔ 관리자메모: " + autoMemo.replace("\\n", " ") + "\\n\\nDB에 완벽히 저장되었습니다!");' +
                            '}' +
                        '} catch(err) {' +
                            'alert("처리 중 에러 발생: " + err.message);' +
                            '$btnConfirm.prop("disabled", false).text("✔ 확정");' +
                            'if (ifr && ifr.parentNode) document.body.removeChild(ifr);' +
                        '}' +
                    '};' +
                    'ifr.src = "rev.update.php?code=" + revCode;' +
                '});' +
                'var $btnMsg = $("<button type=\'button\' class=\'btn btn-minier btn-warning\' style=\'font-weight:bold; padding:2px 6px;\'>✉ 문자</button>");' +
                '$btnMsg.on("click", function(e){' +
                    'e.preventDefault();' +
                    'var p = dateStr.split("-");' +
                    'var m = p[1] ? p[1].replace(/^0+/, "") : "";' +
                    'var d = p[2] ? p[2].replace(/^0+/, "") : "";' +
                    'var cleanTheme = theme.toLowerCase().replace(/[^a-z0-9]/g, "");' +
                    'var T = {' +
                        'plan: "Thank you for coming!\\r\\n[Plan to save my dear]\\r\\n\\r\\n프랭크의 골동품가게 예약 확정 안내 문자입니다.\\r\\n[https://thefrank.co.kr/layout/res/home.php?go=play] <- 접속링크  꼭 일행 모두가 읽고 오셔야 합니다.\\r\\n\\r\\n성명 : " + name + " 님\\r\\n일시 : " + m + "월 " + d + "일 " + time + "\\r\\n테마 : plan to save my dear\\r\\n[ https://youtu.be/5tDrIq9YVKY?si=2be6UW8HpzEIesqR ] <-를 보고오시면 더더욱 재밌게 즐기실 수 있어요!\\r\\n\\r\\n1. 늦으실 경우 테마 이용시간이 차감될 수 있습니다. (테마 이용시간보다 10분늦으실경우,\\r\\n플레이가 불가하며, 이로인한 환불은 불가합니다.)\\r\\n* 매장컨셉상, 10분보다 일찍 오실 경우에, 매장 밖에서 대기하셔야 합니다 *\\r\\n\\r\\n2. 매장내 취식이 불가합니다. (간단한 커피,음료포함) 다 드시고 와주시면 \\r\\n감사하겠습니다.\\r\\n \\r\\n3. 인원수가 추가될경우, 게임이 끝난후 결제 도와드리고 있습니다.\\r\\n\\r\\n- 편의시설 안내 \\r\\n 저희 지점은 주차가 어렵습니다. 주변 공영주차장을 이용해 주시면 감사하겠습니다.\\r\\n 매장내에 식수 및 핸드폰 충전기가 제공되지 않습니다. 충분한 수분섭취후 방문 부탁드립니다.\\r\\n\\r\\n- 환불 규정 안내\\r\\n 예약 취소 시 예약금 환불은 받으신 예약번호로 홈페이지를 통해 요청해주시면 됩니다.\\r\\n(단, 예약 당일, 테마시작 24시간 이내 취소 및 예약시간 변경은 예약금 환불이 불가능합니다.)\\r\\n음주상태에서 플레이가 불가능합니다. 이로인한 환불또한 불가합니다.",' +
                        'common: "Thank you for coming!\\r\\n[" + theme + "]\\r\\n\\r\\n프랭크의 골동품가게 예약 확정 안내 문자입니다.\\r\\n***[https://thefrank.co.kr/layout/res/home.php?go=play] <- 접속링크  꼭 일행 모두가 읽고 오셔야 합니다. 꼭 필수 ***********\\r\\n\\r\\n성명 : " + name + " 님\\r\\n일시 : " + m + "월 " + d + "일 " + time + "\\r\\n테마 : " + theme + "\\r\\n\\r\\n1. 늦으실 경우 테마 이용시간이 차감될 수 있습니다. (테마 이용시간보다 10분 늦으실 경우,\\r\\n플레이가 불가하며, 이로인한 환불은 불가합니다.)\\r\\n* 매장컨셉상, 10분보다 일찍 오실 경우에, 매장 밖에서 대기하셔야 합니다 *\\r\\n\\r\\n2. 매장 내 취식이 불가합니다. (간단한 커피, 음료 포함) 다 드시고 와주시면 \\r\\n감사하겠습니다.\\r\\n \\r\\n3. 인원수가 추가 될 경우, 대기실에 키오스크를 이용하여 추가결제 하시길 바랍니다.\\r\\n\\r\\n- 편의시설 안내 \\r\\n 저희 지점은 주차가 어렵습니다. 주변 공영주차장을 이용해 주시면 감사하겠습니다.\\r\\n 매장내에 식수 및 핸드폰 충전기가 제공되지 않습니다. 충분한 수분섭취후 방문 부탁드립니다.\\r\\n\\r\\n- 환불 규정 안내\\r\\n 예약 취소 시 예약금 환불은 받으신 예약번호로 홈페이지를 통해 요청해주시면 됩니다.\\r\\n(단, 예약 당일, 테마시작 24시간 이내 취소 및 예약시간 변경은 예약금 환불이 불가능합니다.)\\r\\n음주상태에서 플레이가 불가능합니다. 이로인한 환불또한 불가합니다."' +
                    '};' +
                    'var msg = cleanTheme.indexOf("plan") !== -1 ? T.plan : T.common;' +
                    'var ta = document.createElement("textarea");' +
                    'ta.value = msg;' +
                    'document.body.appendChild(ta);' +
                    'ta.select();' +
                    'document.execCommand("copy");' +
                    'document.body.removeChild(ta);' +
                    'alert("✅ [" + name + "님 (" + theme + ")] 문자가 복사되었습니다!\\n번호: " + phone);' +
                '});' +
                '$wrap.append($btnConfirm).append($btnMsg);' +
                '$row.append($("<td align=\'center\'></td>").append($wrap));' +
            '});' +
        '} catch(err) { alert("오류: " + err.message); }' +
    '})();';
}

// ================= 이벤트 리스너 =================
document.addEventListener('DOMContentLoaded', () => {
    const reservationInput = document.getElementById('reservationInput');
    const settlementInput = document.getElementById('settlementInput');
    const stepContainer = document.getElementById('stepContainer');
    const targetCustomer = document.getElementById('targetCustomer');
    const targetPhone = document.getElementById('targetPhone');
    const btnCopyMsg = document.getElementById('btnCopyMsg');
    const bookmarkletLink = document.getElementById('bookmarkletLink');

    // 북마크릿 링크 주입
    if (bookmarkletLink) {
        bookmarkletLink.setAttribute('href', generateBookmarkletScript());
    }

    function copyMessageBody() {
        if (!currentPreparedMessage) return;

        navigator.clipboard.writeText(currentPreparedMessage).then(() => {
            showToast('✅ 문자 본문이 복사되었습니다! (Ctrl+V로 붙여넣기)');
            stepContainer.classList.add('hidden');
            currentPreparedMessage = null;
            reservationInput.focus();
        });
    }

    // 1. 예약 데이터 붙여넣기 (수동 도구)
    if (reservationInput) {
        reservationInput.addEventListener('paste', (e) => {
            const pastedText = (e.clipboardData || window.clipboardData).getData('text');
            const result = processReservationData(pastedText);

            if (result) {
                e.preventDefault();
                reservationInput.value = '';

                if (result.error) {
                    alert(result.error);
                    stepContainer.classList.add('hidden');
                    currentPreparedMessage = null;
                    return;
                }

                currentPreparedMessage = result.formattedText;

                navigator.clipboard.writeText(result.phone).then(() => {
                    targetCustomer.innerText = `${result.name} 님`;
                    targetPhone.innerText = `${result.phone} (번호 복사됨)`;
                    stepContainer.classList.remove('hidden');

                    showToast(`📞 [${result.name}님] 전화번호가 복사되었습니다!`);
                });
            }
        });
    }

    // 2. 버튼 클릭 시 본문 복사
    if (btnCopyMsg) {
        btnCopyMsg.addEventListener('click', copyMessageBody);
    }

    // 3. Space 키 입력 시 본문 복사
    document.addEventListener('keydown', (e) => {
        if (currentPreparedMessage && e.code === 'Space') {
            if (document.activeElement !== settlementInput && document.activeElement !== reservationInput) {
                e.preventDefault();
                copyMessageBody();
            }
        }
    });

    // 4. 정산 보고 붙여넣기
    if (settlementInput) {
        settlementInput.addEventListener('paste', (e) => {
            const pastedText = (e.clipboardData || window.clipboardData).getData('text');
            const result = processSettlementData(pastedText);

            if (result) {
                e.preventDefault();
                settlementInput.value = '';

                if (result.error) {
                    alert(result.error);
                    return;
                }

                navigator.clipboard.writeText(result.formattedText).then(() => {
                    showToast(`✅ [총 매출 ${result.totalSales}] 정산보고가 복사되었습니다!`);
                });
            }
        });
    }
});