/**
 * 根据时间总长度计算单位。
 * 
 * @author TangJiaHui
 * @date 2024/5/13
 */
const unit = [
  { name: "秒", count: 60 },
  { name: "分", count: 60 },
  { name: "时", count: 24 },
  { name: "天" },
];

function getTimeString(time_ms) {
  let i = 0;
  let obj;
  let str = "";
  let value = Math.floor(time_ms / 1000);

  while (value && (obj = unit[i++])) {
    if (obj.count && value >= obj.count) {
      str = `${value % obj.count}${obj.name}` + str;
      value = Math.floor(value / obj.count);
    } else {
      str = `${value}${obj.name}` + str;
      value = 0;
    }
  }

  return str;
}

const second_1 = 1000;
const seconds_60 = second_1 * 60;
const minutes_60 = seconds_60 * 60;
const hours_24 = minutes_60 * 24;
const day_24 = 24 * hours_24;
const day_1000 = 1000 * hours_24;

console.log(getTimeString(second_1)); // 1秒
console.log(getTimeString(seconds_60)); // 1分0秒
console.log(getTimeString(minutes_60)); // 1时0分0秒
console.log(getTimeString(hours_24)); // 1天0时0分0秒
console.log(getTimeString(day_24)); // 24天0时0分0秒
console.log(getTimeString(day_1000)); // 1000天0时0分0秒
