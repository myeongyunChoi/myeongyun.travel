import '../css/Date.css'

const Date = () => {

    // const today = new Date();
    // var date = new Date();
    // function prevCalendar() {
    //     today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    //     buildCalendar();
    // }

    // function nextCalendar() {
    //     today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    //     buildCalendar();
    // }
    // function buildCalendar() {
    //     var doMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    //     var lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    //     var tbCalendar = document.getElementById("calendar");
    //     var tbCalendarYM = document.getElementById("tbCalendarYM");
    //     tbCalendarYM.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월";

    //     while (tbCalendar.rows.length > 2) {
    //         tbCalendar.deleteRow(tbCalendar.rows.length - 1);
    //     }
    //     var row = null;
    //     row = tbCalendar.insertRow();
    //     var cnt = 0;
    //     for (let i = 0; i < doMonth.getDay(); i++) {
    //         let cell = row.insertCell();
    //         cnt = cnt + 1;
    //     }
    //     for (let i = 1; i <= lastDate.getDate(); i++) {
    //         let cell = row.insertCell();
    //         cell.innerHTML = i;
    //         cnt = cnt + 1;
    //         if (cnt % 7 == 1) {
    //             cell.innerHTML = "<font color=#F79DC2>" + i
    //         }
    //         if (cnt % 7 == 0) {
    //             cell.innerHTML = "<font color=skyblue>" + i
    //             // row = calendar.insertRow();
    //         }

    //         if (today.getFullYear() == date.getFullYear()
    //             && today.getMonth() == date.getMonth()
    //             && i == date.getDate()) {
    //             cell.bgColor = "#FAF58C";
    //         }
    //     }
    // }
    return (
        <div className="date_wrap">
            <h1>언제 떠나시고 싶으신가요?</h1>
            <input type="date" name="" id="" />
            <input type="date" name="" id="" />
{/* 
            <p></p>
            <h3 align="center">★test 달력★</h3>
            <table id="calendar" border="3" align="center" style="border-color:#3333FF ">
                <tr>
                    <td><label onclick="prevCalendar()"></label></td>
                    <td align="center" id="tbCalendarYM" colspan="5">
                        yyyy년 m월</td>
                    <td><label onclick="nextCalendar()">
                    </label></td>
                </tr>
                <tr>
                    <td align="center">일</td>
                    <td align="center">월</td>
                    <td align="center">화</td>
                    <td align="center">수</td>
                    <td align="center">목</td>
                    <td align="center">금</td>
                    <td align="center">토</td>
                </tr>
            </table> */}
        </div>
    )
}

export default Date;