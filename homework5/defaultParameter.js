// Default Parameter คือ การกำหนดค่าล่วงหน้าหรือค่า default ให้กับมัน แทนที่เราต้องระบุค่าทุกครั้งที่เรียกฟังก์ชัน
// ให้ Default Parameter คือ vat = 7
export default function payment(quantity, price, vat = 7) {
  return quantity * price * (1 + vat / 100);
}

// console.log(payment(5, 25));
// // หากต้องการเปลี่ยนไปใช้ค่าอื่น ให้ระบุค่าที่ต้องการ
// console.log(payment(2, 100, 10));
