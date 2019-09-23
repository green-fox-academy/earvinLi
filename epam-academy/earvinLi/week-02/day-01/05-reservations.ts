interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation {
  getDowBooking(): string {
    const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    return weekDays[Math.floor(Math.random() * 6)]
  }

  getCodeBooking(): string {
    // Idea from:
    // https://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
    const targetChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '';
    for (let i = 8; i > 0; i--) code += targetChars[Math.floor(Math.random() * targetChars.length)];
    return code;
  }
}

const reservationOne = new Reservation();
for (let i = 0; i < 10; i++) {
  console.log(`Booking# ${reservationOne.getCodeBooking()} for ${reservationOne.getDowBooking()}`)
}
