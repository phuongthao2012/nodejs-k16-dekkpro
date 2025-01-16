/**
 * ****************************
 * nested object reference
 * ****************************
 */
let teo = {
    name: 'Teo',
    age: 18,
    bankAccount: {
        accountNumber: '123',
        balance: 1000000,
    },
    saving:{
        amount: 400,
    },
}

// dau bang nghia la quy chieu  truc tiep den doi tuong bang, luc nay phai dung< abc=[...teo] de tao ra 1 doi tuong moi, cas nay chi thay doi tren cung 1 vung nho
// let ti = teo;
/**
 * ****************************
 * // shallow copy: {} indicate a new object, chi copy 1 level object
 * ****************************
 */

let ti = { ...teo };
ti.name = 'Ti';
//  nhung shallow copy khong apply cho nested object, chi apply one level object
ti.bankAccount.accountNumber = '124';
console.log(teo);
/* {
    name: 'Teo',
    age: 18,
    bankAccount: { accountNumber: '...124', balance: 1000000 }
  } */
console.log(ti);
/* {
    name: 'Ti',
    age: 18,
    bankAccount: { accountNumber: '...124', balance: 1000000 }
  } */

/**
 * ****************************
 * // deep copy: JSON.parse(JSON.stringify(object)) -> chuyen object thanh string, sau do chuyen lai thanh object
// truong hop key co chua FUNCTION thi khong handle duoc
 * ****************************
 */

let tun = JSON.parse(JSON.stringify(teo));
tun.bankAccount.accountNumber = '125';
tun.name = 'Tun';
tun.saving.amount = 500;
console.log(teo);
/* {
    name: 'Teo',
    age: 18,
    bankAccount: { accountNumber: '124', balance: 1000000 }
  } */
console.log(tun);
/* {
    name: 'Tun',
    age: 18,
    bankAccount: { accountNumber: '125', balance: 1000000 }
  } */