// ================= 테마별 문자 템플릿 정의 =================
const THEME_TEMPLATES = {
    // 1. My Private Heaven
    'my private heaven': (name, month, day, time) => `Thank you for coming!
[My Private Heaven]

프랭크의 골동품가게 예약 확정 안내 문자입니다.
***[https://thefrank.co.kr/layout/res/home.php?go=play] <- 접속링크  꼭 일행 모두가 읽고 오셔야 합니다. 꼭 필수 ***********

성명 : ${name} 님
일시 : ${month}월 ${day}일 ${time}
테마 : My Private Heaven

1. 늦으실 경우 테마 이용시간이 차감될 수 있습니다. (테마 이용시간보다 10분 늦으실 경우,
플레이가 불가하며, 이로인한 환불은 불가합니다.)
* 매장컨셉상, 10분보다 일찍 오실 경우에, 매장 밖에서 대기하셔야 합니다 *

2. 매장 내 취식이 불가합니다. (간단한 커피, 음료 포함) 다 드시고 와주시면 
감사하겠습니다.
 
3. 인원수가 추가 될 경우, 대기실에 키오스크를 이용하여 추가결제 하시길 바랍니다. 

- 편의시설 안내 
 저희 지점은 주차가 어렵습니다. 주변 공영주차장을 이용해 주시면 감사하겠습니다.
  매장내에 식수 및 핸드폰 충전기가 제공되지 않습니다. 충분한 수분섭취후 방문 부탁드립니다. 

- 환불 규정 안내
 예약 취소 시 예약금 환불은 받으신 예약번호로 홈페이지를 통해 요청해주시면 됩니다.
(단, 예약 당일, 테마시작 24시간 이내 취소 및 예약시간 변경은 예약금 환불이 불가능합니다.)
음주상태에서 플레이가 불가능합니다. 이로인한 환불또한 불가합니다.`,

    // 2. Brooklyn My Love
    'brooklyn my love': (name, month, day, time) => `Thank you for coming!
[Brooklyn My Love]

프랭크의 골동품가게 예약 확정 안내 문자입니다.
***[https://thefrank.co.kr/layout/res/home.php?go=play] <- 접속링크  꼭 일행 모두가 읽고 오셔야 합니다. 꼭 필수 ***********

성명 : ${name} 님
일시 : ${month}월 ${day}일 ${time}
테마 : Brooklyn My Love

1. 늦으실 경우 테마 이용시간이 차감될 수 있습니다. (테마 이용시간보다 10분 늦으실 경우,
플레이가 불가하며, 이로인한 환불은 불가합니다.)
* 매장컨셉상, 10분보다 일찍 오실 경우에, 매장 밖에서 대기하셔야 합니다 *

2. 매장 내 취식이 불가합니다. (간단한 커피, 음료 포함) 다 드시고 와주시면 
감사하겠습니다.
 
3. 인원수가 추가 될 경우, 대기실에 키오스크를 이용하여 추가결제 하시길 바랍니다. 

- 편의시설 안내 
 저희 지점은 주차가 어렵습니다. 주변 공영주차장을 이용해 주시면 감사하겠습니다.
 매장내에 식수 및 핸드폰 충전기가 제공되지 않습니다. 충분한 수분섭취후 방문 부탁드립니다. 

- 환불 규정 안내
 예약 취소 시 예약금 환불은 받으신 예약번호로 홈페이지를 통해 요청해주시면 됩니다.
(단, 예약 당일, 테마시작 24시간 이내 취소 및 예약시간 변경은 예약금 환불이 불가능합니다.)
음주상태에서 플레이가 불가능합니다. 이로인한 환불또한 불가합니다.`,

    // 3. Plan to save my dear
    'plan to save my dear': (name, month, day, time) => `Thank you for coming! 
[Plan to save my dear]

프랭크의 골동품가게 예약 확정 안내 문자입니다.
[https://thefrank.co.kr/layout/res/home.php?go=play] <- 접속링크  꼭 일행 모두가 읽고 오셔야 합니다. 

성명 : ${name} 님
일시 : ${month}월 ${day}일 ${time}
테마 : plan to save my dear
[ https://youtu.be/5tDrIq9YVKY?si=2be6UW8HpzEIesqR ] <-를 보고오시면 더더욱 재밌게 즐기실 수 있어요! 

1. 늦으실 경우 테마 이용시간이 차감될 수 있습니다. (테마 이용시간보다 10분늦으실경우,
플레이가 불가하며, 이로인한 환불은 불가합니다.)
* 매장컨셉상, 10분보다 일찍 오실 경우에, 매장 밖에서 대기하셔야 합니다 *

2. 매장내 취식이 불가합니다. (간단한 커피,음료포함) 다 드시고 와주시면 
감사하겠습니다.
 
3. 인원수가 추가될경우, 게임이 끝난후 결제 도와드리고 있습니다.

- 편의시설 안내 
 저희 지점은 주차가 어렵습니다. 주변 공영주차장을 이용해 주시면 감사하겠습니다.
 매장내에 식수 및 핸드폰 충전기가 제공되지 않습니다. 충분한 수분섭취후 방문 부탁드립니다. 

- 환불 규정 안내
 예약 취소 시 예약금 환불은 받으신 예약번호로 홈페이지를 통해 요청해주시면 됩니다.
(단, 예약 당일, 테마시작 24시간 이내 취소 및 예약시간 변경은 예약금 환불이 불가능합니다.)
음주상태에서 플레이가 불가능합니다. 이로인한 환불또한 불가합니다.`
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
// 열 순서: [0]순번 [1]작성일시 [2]지점 [3]테마 [4]예약일 [5]시간 [6]인원 [7]예약자 [8]휴대폰 ...
function processReservationData(rawText) {
    if (!rawText || !rawText.trim()) {
        return { error: '⚠️ 붙여넣은 데이터가 비어 있습니다.' };
    }

    const data = rawText.trim().split(/\s{2,}|\t/);
    
    // 검증 1: 열 개수 부족 (최소 9개 열 필요)
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

    // 검증 2: 날짜 형식 (YYYY-MM-DD)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
        return { 
            error: `⚠️ [예약 날짜 오류]\n날짜 형식(YYYY-MM-DD)이 올바르지 않습니다: "${dateStr}"` 
        };
    }

    // 검증 3: 시간 형식 (HH:MM)
    if (!/^\d{1,2}:\d{2}$/.test(time)) {
        return { 
            error: `⚠️ [예약 시간 오류]\n시간 형식(HH:MM)이 올바르지 않습니다: "${time}"` 
        };
    }

    // 검증 4: 전화번호 형식 (010-XXXX-XXXX 또는 일반 휴대폰 번호)
    if (!/^01[016789]-?\d{3,4}-?\d{4}$/.test(phone)) {
        return { 
            error: `⚠️ [휴대폰 번호 오류]\n전화번호 형식이 올바르지 않습니다: "${phone}"` 
        };
    }

    // 검증 5: 성명 공백 체크
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

    const formattedReport = `${month}/${date} 프랭크의 골동품가게 정산보고
* 총 매 출 : ${formatWon(totalVal)}
└ 테마매출 : ${formatWon(themeVal)}
└ 굿즈매출 : ${formatWon(goodsVal)}

* 상세내역
 - 카드결제 : ${formatWon(cardVal)}
 - 계좌결제 : ${formatWon(accountVal)}
 - 예약금 : ${formatWon(depositVal)}`;

    return {
        formattedText: formattedReport,
        totalSales: formatWon(totalVal)
    };
}

// ================= 이벤트 리스너 =================
document.addEventListener('DOMContentLoaded', () => {
    const reservationInput = document.getElementById('reservationInput');
    const settlementInput = document.getElementById('settlementInput');
    const stepContainer = document.getElementById('stepContainer');
    const targetCustomer = document.getElementById('targetCustomer');
    const targetPhone = document.getElementById('targetPhone');
    const btnCopyMsg = document.getElementById('btnCopyMsg');

    function copyMessageBody() {
        if (!currentPreparedMessage) return;

        navigator.clipboard.writeText(currentPreparedMessage).then(() => {
            showToast('✅ 문자 본문이 복사되었습니다! (Ctrl+V로 붙여넣기)');
            stepContainer.classList.add('hidden');
            currentPreparedMessage = null;
            reservationInput.focus();
        });
    }

    // 1. 예약 데이터 붙여넣기
    if (reservationInput) {
        reservationInput.addEventListener('paste', (e) => {
            const pastedText = (e.clipboardData || window.clipboardData).getData('text');
            const result = processReservationData(pastedText);

            if (result) {
                e.preventDefault();
                reservationInput.value = '';

                // 에러 발생 시 경고창 출력 및 중단
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