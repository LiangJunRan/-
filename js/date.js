var changeDD = 1;//->一个全局变量
function YYYYMMDDstart() {
    MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //先给年下拉框赋内容
    var y = new Date().getFullYear();
    for (var i = (y - 47); i < y + 1; i++) //以今年为准，前30年
        document.birthdayData.year.options.add(new Option(" " + i + " 年", i));
    //赋月份的下拉框
    for (var i = 1; i < 13; i++)
        document.birthdayData.month.options.add(new Option(" " + i + " 月", i));
    document.birthdayData.year.value = y;
    document.birthdayData.month.value = new Date().getMonth() + 1;
    var n = MonHead[new Date().getMonth()];
    if (new Date().getMonth() == 1 && IsPinYear(YYYYvalue)) n++;
    writeDay(n); //赋日期下拉框
//			        console.log(n);
    //->赋值给日，为当天日期
//        document.birthdayData.day.value = new Date().getDate();
}
if (document.attachEvent)
    window.attachEvent("onload", YYYYMMDDstart);
else
    window.addEventListener('load', YYYYMMDDstart, false);

function YYYYDD(str) //年发生变化时日期发生变化(主要是判断闰平年)
{
    var MMvalue = document.birthdayData.month.options[document.birthdayData.month.selectedIndex].value;
	
    if (MMvalue == "") {
//            var e = document.birthdayData.day;
        optionsClear(e);
        return;
    }
    var n = MonHead[MMvalue - 1];
    if (MMvalue == 2 && IsPinYear(str)) n++;
    
}

function MMDD(str) //月发生变化时日期联动
{
	console.log(str);
    var YYYYvalue = document.birthdayData.year.options[document.birthdayData.year.selectedIndex].value;
    if (YYYYvalue == "") {
        var e = document.birthdayData.day;
        optionsClear(e);
        return;
    }
    var n = MonHead[str - 1];
    if (str == 2 && IsPinYear(YYYYvalue)) n++;
    
}

function writeDay(n) //据条件写日期的下拉框
{
    var e = document.birthdayData.day;
    optionsClear(e);
    for (var i = 1; i < (n + 1); i++)
    {
        e.options.add(new Option(" " + i + " 日", i));
        if(i == changeDD){
            e.options[i].selected = true;  //->保持选中状态
        }
    }
//			        console.log(i);
    
}

function IsPinYear(year) //判断是否闰平年
{
    return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0));
}

function optionsClear(e) {
    e.options.length = 1;
}
//->随时监听日的改变
function DDD(str){
    changeDD = str;
}