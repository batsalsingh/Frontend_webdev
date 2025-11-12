// initial states of the security system
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// check all security conditions using boolean logic
let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

// print system status
if (isSecure) {
  console.log("System Status: Secure ✅");
} else {
  console.log("System Status: Unsafe ⚠️");
}

// test other scenarios
isDoorLocked = false;
isOwnerInside = false;
isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

if (isSecure) {
  console.log("System Status: Secure ✅");
} else {
  console.log("System Status: Unsafe ⚠️");
}
